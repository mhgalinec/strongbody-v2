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
import com.strongbodyv20.model.Equipment;
import com.strongbodyv20.model.UnplannedService;
import com.strongbodyv20.repository.EquipmentRepository;
import com.strongbodyv20.repository.UnplannedServiceRepository;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/src")
public class UnplannedServiceController {
	
	@Autowired
	private UnplannedServiceRepository serviceRep;
	
	@Autowired
	private EquipmentRepository equipmentRep;
	
	@GetMapping("/service/unplanned/update/{id}")
	public ResponseEntity<UnplannedService> getServiceById(@PathVariable(value="id") Long serviceID) throws ResourceNotFoundException{
		
		UnplannedService service = serviceRep.findById(serviceID).orElseThrow(() -> new ResourceNotFoundException("Can't get unplanned service object - ID not found: " + serviceID));;
		
		return ResponseEntity.ok().body(service);
	}
	
	@GetMapping("/service/unplanned/{id}")
	public List<UnplannedService> getServiceByForeignKey(@PathVariable(value="id") Long serviceID) throws ResourceNotFoundException{
		
		return serviceRep.getServiceByForeignKey(serviceID);
	}
	
	@PutMapping("/service/unplanned/{id}")
	public ResponseEntity<UnplannedService> updateService(@PathVariable(value="id") Long serviceID,@Validated @RequestBody UnplannedService serviceData)
		throws ResourceNotFoundException{
		
		UnplannedService service = serviceRep.findById(serviceID).orElseThrow(() -> new ResourceNotFoundException("Can't get unplanned service object for update - ID not found:  " +  serviceID));
		
		service.setDateOfFault(serviceData.getDateOfFault());
		service.setFaultType(serviceData.getFaultType());
		service.setServiceCompany(serviceData.getServiceCompany());
		service.setPrice(serviceData.getPrice());
		service.setWarranty(serviceData.getWarranty());
		
		UnplannedService updatedService = null;
		if(service.getDateOfFault() != null && !service.getFaultType().isBlank() && !service.getServiceCompany().isBlank()
				&& !service.getWarranty().isBlank() && !service.getPrice().isBlank()) {
			
			updatedService = serviceRep.save(service);
		}
		
		return ResponseEntity.ok(updatedService);
	}
	
	@PostMapping("/service/unplanned/{id}")
	public UnplannedService createService(@PathVariable(value="id") Long equipmentID, @Validated @RequestBody UnplannedService service)
		throws ResourceNotFoundException{
		
		Optional<Equipment> equipment = equipmentRep.findById(equipmentID);
		if(equipment.isPresent()) {
			service.setEquipment(equipment.get());
		}
		
		return serviceRep.save(service);
	}
	
	@DeleteMapping("/service/unplanned/{id}")
	public Map<String,Boolean> deleteService(@PathVariable(value="id") Long serviceID) throws ResourceNotFoundException{
		
		UnplannedService service = serviceRep.findById(serviceID).orElseThrow(() -> new ResourceNotFoundException("Can't get unplanned service object to delete - ID not found:  " + serviceID));
		serviceRep.delete(service);
		
		Map<String,Boolean> response  = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}

}
