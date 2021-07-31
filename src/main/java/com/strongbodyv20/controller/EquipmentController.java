package com.strongbodyv20.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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
import com.strongbodyv20.model.Equipment;
import com.strongbodyv20.repository.EquipmentRepository;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/src")
public class EquipmentController {
	
	@Autowired
	private EquipmentRepository equipmentRep;

	@GetMapping("/equipment/list")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public List<Equipment> getEquipmentList(){
		return equipmentRep.findAll();
	}
	
	@GetMapping("/equipment/{id}")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public ResponseEntity<Equipment> getEquipmentById(@PathVariable(value="id") Long equipmentID)
		throws ResourceNotFoundException{
		Equipment equipment = equipmentRep.findById(equipmentID).orElseThrow(() -> new ResourceNotFoundException("Can't get equipment object - ID not found: " + equipmentID));
		
		return ResponseEntity.ok().body(equipment);
	}
	
	@PostMapping("/equipment")
	@PreAuthorize("hasRole('ADMIN')")
	public Equipment createEquipment(@Validated @RequestBody Equipment equipment) {
		return equipmentRep.save(equipment);
	}
	
	@PutMapping("/equipment/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<Equipment> updateEquipment(@PathVariable(value="id") Long equipmentID, @Validated @RequestBody Equipment equipmentDetails)
		throws ResourceNotFoundException{
		
		Equipment equipment = equipmentRep.findById(equipmentID).orElseThrow(() -> new ResourceNotFoundException("Can't get equipment object for update - ID not found  " + equipmentID));
		
		equipment.setName(equipmentDetails.getName());
		equipment.setSerialNumber(equipmentDetails.getSerialNumber());
		equipment.setCategory(equipmentDetails.getCategory());
		equipment.setManufacturer(equipmentDetails.getManufacturer());
		equipment.setWidth(equipmentDetails.getWidth());
		equipment.setLength(equipmentDetails.getLength());
		equipment.setHeight(equipmentDetails.getHeight());
		equipment.setWeight(equipmentDetails.getWeight());
		
		Equipment updatedEquipment = null;
		
		if(!equipment.getName().isBlank() && !equipment.getSerialNumber().isBlank() && !equipment.getCategory().isBlank() 
				&& !equipment.getManufacturer().isBlank() && !equipment.getWidth().isBlank() && !equipment.getLength().isBlank()
				&& !equipment.getHeight().isBlank() && !equipment.getWeight().isBlank()) {
			updatedEquipment = equipmentRep.save(equipment);
		}
		
		return ResponseEntity.ok(updatedEquipment);
	}
	
	@DeleteMapping("/equipment/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public Map<String,Boolean> deleteEquipment(@PathVariable(value="id") Long equipmentID)
		throws ResourceNotFoundException{
		
		Equipment equipment = equipmentRep.findById(equipmentID).orElseThrow(() -> new ResourceNotFoundException("Can't get equipment object to delete  - ID not found " + equipmentID));
		
		equipmentRep.delete(equipment);
		
		Map<String,Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
		
	}
	
	
}
