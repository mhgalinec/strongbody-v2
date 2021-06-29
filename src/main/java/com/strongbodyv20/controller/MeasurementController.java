package com.strongbodyv20.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.strongbodyv20.exception.ResourceNotFoundException;
import com.strongbodyv20.model.Measurements;
import com.strongbodyv20.model.Member;
import com.strongbodyv20.repository.MeasurementRepository;
import com.strongbodyv20.repository.MemberRepository;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/src")
public class MeasurementController {
	
	@Autowired
	private MeasurementRepository measurementRep;
	
	@Autowired
	private MemberRepository memberRep;
	
	@GetMapping("/measurements/update/{id}")
	public ResponseEntity<Measurements> getMeasurementById(@PathVariable(value="id") Long measurementsID)
			throws ResourceNotFoundException {
		Measurements measurements = measurementRep.findById(measurementsID).orElseThrow(() -> new ResourceNotFoundException("Can't get measurement object - ID not found: " + measurementsID));
		return ResponseEntity.ok().body(measurements);
		
	}
	
	@GetMapping("/measurements/{id}")
	public List<Measurements> getMeasurementsByForeignKey(@PathVariable(value="id") Long memberID){
		
		//Return a list of measurements that belong to a specific member using the member id
		//MeasurementRepository holds the sql query
		return measurementRep.getMeasurementsByForeignKey(memberID);
	}
	
	@PutMapping("/measurements/{id}")
	public ResponseEntity<Measurements> updateMeasurement(@PathVariable(value="id") Long measurementsID,@Validated @RequestBody Measurements measurementsData)
			throws ResourceNotFoundException{
		
		Measurements measurements = measurementRep.findById(measurementsID).orElseThrow(() -> new ResourceNotFoundException("Can't get measurement object for update - ID not found: " + measurementsID));
		
		measurements.setMeasurementDate(measurementsData.getMeasurementDate());
		measurements.setHeight(measurementsData.getHeight());
		measurements.setWeight(measurementsData.getWeight());
		measurements.setBodyFat(measurementsData.getBodyFat());
		measurements.setShoulders(measurementsData.getShoulders());
		measurements.setTorso(measurementsData.getTorso());
		measurements.setWaist(measurementsData.getWaist());
		measurements.setUpperArm(measurementsData.getUpperArm());
		measurements.setLowerArm(measurementsData.getLowerArm());
		measurements.setUpperLeg(measurementsData.getUpperLeg());
		measurements.setLowerLeg(measurementsData.getLowerLeg());
		measurements.setRestingHeartRate(measurementsData.getRestingHeartRate());
		
		Measurements updatedMeasurements = null;
		
		if(measurements.getMeasurementDate() != null && !measurements.getHeight().isBlank() && !measurements.getWeight().isBlank()) {
			updatedMeasurements = measurementRep.save(measurements);
		}
		
		return ResponseEntity.ok(updatedMeasurements);

	}
	
	@PostMapping("/measurements/{id}")
	public Measurements createMeasurement(@PathVariable(value="id") Long memberID,@Validated @RequestBody Measurements measurements) throws	
		ResourceNotFoundException{
		
		Optional<Member> member = memberRep.findById(memberID);
		if(member.isPresent()) {
			measurements.setMember(member.get());
		}
	
		return measurementRep.save(measurements);
	}
	
	@DeleteMapping("/measurements{id}")
	public Map<String,Boolean> deleteMeasurement(@PathVariable(value="id") Long measurementID)
		throws ResourceNotFoundException{
		
		Measurements measurements = measurementRep.findById(measurementID).orElseThrow(() -> new ResourceNotFoundException("Can't get measurement object to delete - ID not found: " + measurementID));
		measurementRep.delete(measurements);		
		
		Map<String,Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		


		return response;
	}
	

}
