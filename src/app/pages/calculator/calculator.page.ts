import { Component, OnInit } from '@angular/core';
import { strings } from '../../config/strings';
import { Platform, LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {


  public strings = strings;
  height: number;
  weight: number;
  age: number;
  sex: any = '';
  meta: any = '';
  resultNumber = '00.0';
  resultText = strings.ST131;
  icon = './assets/images/normal.png';
  color = 'var(--ion-color-primary)';
  goals = [{
        title:"A"
        ,calories: 0
        ,protein: 0
        ,fats: 0
        ,carbs:0
    },{
        title:"B"
        ,calories: 0
        ,protein: 0
        ,fats: 0
        ,carbs:0
    },{
        title:"C"
        ,calories: 0
        ,protein: 0
        ,fats: 0
        ,carbs:0
    }];
  activityLevel: any = '';
  bmr:any;
  constructor(public loadingController: LoadingController,) { }

  ngOnInit() {
  }

  updateNutrition(){
    this.meta = this.getMetaRate();
    console.log('updateNutrition')
    if((this.sex === "male" || this.sex === "female") && this.weight>0 && this.height>0 && this.age>0 && this.activityLevel>0){
      this.goals[0].calories = Number(this.bmr) * Number(this.activityLevel) || 0;
      this.goals[1].calories = this.goals[0].calories * 0.85 || 0;
      this.goals[2].calories = this.goals[0].calories * 1.15 || 0;

      this.goals[0].protein = this.weight*2.204 || 0;
      this.goals[1].protein = this.weight*2.204 || 0;
      this.goals[2].protein = this.weight*2.204*1.5 || 0;

      this.goals[0].carbs = (this.goals[0].calories*0.3)/4 || 0; 
      this.goals[1].carbs = (this.goals[1].calories*0.15)/4 || 0;
      this.goals[2].carbs = (this.goals[2].calories*0.3)/4 || 0;

      //=(calories-(protein*4)-(carbs*4))/9
      this.goals[0].fats = (this.goals[0].calories -(this.goals[0].protein*4)-(this.goals[0].carbs*4))/9 || 0;
      this.goals[1].fats = (this.goals[1].calories -(this.goals[1].protein*4)-(this.goals[1].carbs*4))/9 || 0;
      this.goals[2].fats = (this.goals[2].calories -(this.goals[2].protein*4)-(this.goals[2].carbs*4))/9 || 0;
    }
  };


  getMetaRate(){
    //=88.362+(13.397*weight)+(5.799*height)-(5.677*age)
    var meta; 
    if(this.sex === "male"){
      meta = (88.362 + (13.397 * Number(  this.weight) )
            +(5.799 * Number(  this.height) )
            -(5.677 * Number(  this.age) ) || 0 ); //3071.487 
    }else if(this.sex === "female"){
        meta = (447.593 + (9.247 * Number(  this.weight) )
            +(3.098 * Number(  this.height) )
            -(4.33 * Number(  this.age) ) || 0 );
    }
    else meta = null;
                //=447.593+(9.247*C4)+(3.098*C5)-(4.33*C6)
    this.bmr = meta;

    console.log((!isNaN(meta) && (meta!=null)) ? parseFloat(meta).toFixed(2) : "-")
    return (!isNaN(meta) && (meta!=null)) ? parseFloat(meta).toFixed(2) : "-";
  };


  MetricCalculate() {
    const age = this.age;
    const height = this.height;
    const weight = this.weight;

    if (Number(height) > 0 && Number(weight) > 0 && Number(age) > 0 && this.activityLevel != '' && this.sex != '') {

      // const imc = ((weight / height / height) * 10000);

      // this.resultNumber = imc.toFixed(2);

      // if (imc < 18.5) {
      //   this.resultText = strings.ST132;
      //   this.color = '#22a6b3';
      //   this.icon = './assets/images/underweight.png';
      // } else if (imc > 18.5 && imc < 25) {
      //   this.resultText = strings.ST133;
      //   this.color = '#6ab04c';
      //   this.icon = './assets/images/normal.png';
      // } else if (imc >= 25 && imc < 30) {
      //   this.resultText = strings.ST134;
      //   this.color = '#f0932b';
      //   this.icon = './assets/images/overweight.png';
      // } else {
      //   this.resultText = strings.ST135;
      //   this.color = '#eb4d4b';
      //   this.icon = './assets/images/obesity.png';
      // }

      this.updateNutrition();

    }else if( (Number(height) < 0 || Number(weight)< 0 || Number(age) < 0) && this.activityLevel != '' && this.sex != ''){
      this.presentAlert('Please enter valid details.');

    }else{
      this.presentAlert('Please enter your all details.');
    }
 
  }
 
  async presentAlert(value) {
      const loading = await this.loadingController.create({
        spinner: null,
        duration: 2000,
        message: value,
        mode: 'ios'
      });
      await loading.present();
    }


}
