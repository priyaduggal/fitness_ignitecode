import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../config/config';
// tslint:disable-next-line: max-line-length
import { StringsObject, QuotesObject,PlansObject, DietsObject, CategoriesObject, PostsObject, GoalsObject, LevelsObject, TagsObject, EquipmentsObject, BodypartsObject, WorkoutsObject, MuscleObject, EquipmentObject, ExercisesObject } from '../interfaces/interfaces';

const Url = config.Url;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  page = 0;

  constructor( private http: HttpClient ) { }

  private ejectQuery<T>( query: string ) {
    query = Url + query;
    return this.http.get<T>( query );
  }

  getDataPackages(){
    return this.ejectQuery<StringsObject>('/json/data_sub_plans.php?status=1');
  }

  getDataStrings() {
    return this.ejectQuery<StringsObject>('/json/data_strings.php');
  }

  getDataMotivation() {
    return this.ejectQuery<QuotesObject[]>('/json/data_quotes.php');
  }

  getDataFeaturedDiets() {
    return this.ejectQuery<DietsObject[]>('/json/data_diets.php?featured=1');
  }

  getCount() {
    return this.ejectQuery<CategoriesObject[]>('/json/data_counts.php');
  }

  getDataCategories() {
    return this.ejectQuery<CategoriesObject[]>('/json/data_categories.php');
  }

  getDataGoals() {
    return this.ejectQuery<GoalsObject[]>('/json/data_goals.php');
  }

  getDataLevels() {
    return this.ejectQuery<LevelsObject[]>('/json/data_levels.php');
  }

  getDataTags() {
    return this.ejectQuery<TagsObject[]>('/json/data_tags.php');
  }

  getDataEquipments() {
    return this.ejectQuery<EquipmentsObject[]>('/json/data_equipments.php');
  }

  getDataBodyparts() {
    return this.ejectQuery<BodypartsObject[]>('/json/data_bodyparts.php');
  }

  getDataFeaturedPosts() {
    return this.ejectQuery<PostsObject[]>('/json/data_posts.php?featured=1');
  }
  
   deletecard(id: number) {
	      
	  return this.ejectQuery(`/json/deletecard.php?id=${id}`); 
   }
   postcarddetails(card: string,email:string) {
	   
	  return this.ejectQuery(`/json/addcard.php?card=${card}&email=${email}`); 
	   
   }
   getusersubscriptions(email: string) {
	 return this.ejectQuery(`/json/getusersubscriptions.php?email=${email}`);  
   }
   getUsercards(email: string) {
    return this.ejectQuery(`/json/getusercards.php?email=${email}`);
  }

  getDataRecentPosts(limit: number) {
    return this.ejectQuery<PostsObject[]>(`/json/data_posts.php?limit=${limit}`);
  }
  
 
  getDataWorkoutsByGoal(id: number) {
    return this.ejectQuery<WorkoutsObject[]>(`/json/data_workouts.php?goal=${id}`);
  }

  getDataWorkoutsByLevel(id: number) {
    return this.ejectQuery<WorkoutsObject[]>(`/json/data_workouts.php?level=${id}`);
  }

  getDataExercisesByBodypart(id: number) {
    return this.ejectQuery<MuscleObject[]>(`/json/data_bodypart.php?id=${id}`);
  }

  getcarddetails(id: number) {
	return this.ejectQuery<EquipmentObject[]>(`/json/get_card_details.php?id=${id}`);  
	  
  }
  getDataExercisesByEquipment(id: number) {
    return this.ejectQuery<EquipmentObject[]>(`/json/data_equipment.php?id=${id}`);
  }

  getDataDietsByCategory(id: number) {
    return this.ejectQuery<DietsObject[]>(`/json/data_diets.php?category=${id}`);
  }

  getDataPostsByTag(id: number) {
    return this.ejectQuery<PostsObject[]>(`/json/data_posts.php?tag=${id}`);
  }

  getuserdetails(email: string) {
	 return this.ejectQuery(`/json/getusersubscription.php?email=${email}`); 
  }
  getDataExerciseById(id: number) {
    return this.ejectQuery(`/json/data_exercises.php?id=${id}&limit=1`);
  }

  getDataWorkoutById(id: number) {
    return this.ejectQuery(`/json/data_workouts.php?id=${id}&limit=1`);
  }

  getDataDietById(id: number) {
    return this.ejectQuery(`/json/data_diets.php?id=${id}&limit=1`);
  }

  getDataPostById(id: number) {
    return this.ejectQuery(`/json/data_posts.php?id=${id}&limit=1`);
  }

  getDataWorkoutExercisesByDay(id: number, day: number) {
    return this.ejectQuery<ExercisesObject[]>(`/json/data_days.php?id=${id}&day=${day}`);
  }

 editcarddetails(card:string,id: number)
  {
	   
	 return this.ejectQuery<PlansObject[]>(`/json/edit_card.php?card=${card}&id=${id}`);  
  }
 poststripedetails(card:string,token:string,id: number,email:string,name:string)
  {
	   
	 return this.ejectQuery<PlansObject[]>(`/json/user_add_plan.php?card=${card}&token=${token}&id=${id}&email=${email}&name=${name}`);  
  }

}
