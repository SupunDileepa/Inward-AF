package com.his.patient_diet.diets;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="Diets")
public class Diet {
	

	
	private String pId;
	private String bht;
	private String foodgroup;
	private String servingsize;
	private String calories;
	private String energy;
	
	
	public Diet() {
		
		super();
		
	}
	
	
	public Diet(String pId, String bht, String foodgroup, String servingsize, String calories, String energy) {
		super();
		this.pId = pId;
		this.bht = bht;
		this.foodgroup = foodgroup;
		this.servingsize = servingsize;
		this.calories = calories;
		this.energy = energy;
	}
	
	
	public String getpId() {
		return pId;
	}
	public void setpId(String pId) {
		this.pId = pId;
	}
	public String getBht() {
		return bht;
	}
	public void setBht(String bht) {
		this.bht = bht;
	}
	
	public String getFoodgroup() {
		return foodgroup;
	}
	public void setFoodgroup(String foodgroup) {
		this.foodgroup = foodgroup;
	}
	public String getServingsize() {
		return servingsize;
	}
	public void setServingsize(String servingsize) {
		this.servingsize = servingsize;
	}
	public String getCalories() {
		return calories;
	}
	public void setCalories(String calories) {
		this.calories = calories;
	}
	public String getEnergy() {
		return energy;
	}
	public void setEnergy(String energy) {
		this.energy = energy;
	}

	
	
}
