package com.his.patient_diet.repositary;

import org.springframework.data.repository.CrudRepository;

import com.his.patient_diet.diets.Diet;

public interface DietRepo extends CrudRepository<Diet,String>{
	
	public Diet getDietBypId(String pid);
	//public Diet getAllBypId(String pid);
}
