package com.his.patient_diet.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.his.patient_diet.diets.Diet;
import com.his.patient_diet.repositary.DietRepo;



@Service
public class DietService {
	
	@Autowired
	private DietRepo dietrepository;
	
	public Diet getDiet(String id) {
		
			return dietrepository.getDietBypId(id);
		//return dietrepository.getAllBypId(id);
		
	}
	


	public Iterable<Diet> getAllDiet() {
		
		
		return dietrepository.findAll();
	}
	

}
