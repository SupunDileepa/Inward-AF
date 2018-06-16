package com.his.patient_diet.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.his.patient_diet.diets.Diet;
import com.his.patient_diet.service.DietService;

@RestController
@CrossOrigin(origins = "http://localhost:8080")
public class DietController {
	
	@Autowired
	private DietService dietservice;
	
	//get diets given the patient id
	
	@RequestMapping("/api/diets/{id}")
	
	public Diet getDiet(@PathVariable String id) {
		
		return dietservice.getDiet(id);
		
		
	}

	
	
	@RequestMapping("/api/diets")
	public Iterable<Diet> getAllDiet() {
		
		return dietservice.getAllDiet();
		
		
	}
}
