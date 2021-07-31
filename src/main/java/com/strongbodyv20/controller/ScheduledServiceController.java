package com.strongbodyv20.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

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
import com.strongbodyv20.model.ScheduledService;
import com.strongbodyv20.repository.EquipmentRepository;
import com.strongbodyv20.repository.ScheduledServiceRepository;


@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/src")
public class ScheduledServiceController {
	
	@Autowired
	private ScheduledServiceRepository serviceRep;
	
	@Autowired
	private EquipmentRepository equipmentRep;
	
	@GetMapping("/service/scheduled/update/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<ScheduledService> getServiceById(@PathVariable(value="id") Long scheduledServiceID)
		throws ResourceNotFoundException{
		ScheduledService service = serviceRep.findById(scheduledServiceID).orElseThrow(() -> new ResourceNotFoundException("Can't get scheduled service object - ID not found:  " + scheduledServiceID));
		
		return ResponseEntity.ok().body(service);
	}
	
	@GetMapping("/service/scheduled/{id}")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public List<ScheduledService> getServiceByForeignKey(@PathVariable(value="id") Long equipmentID)
		throws ResourceNotFoundException{
		
		return serviceRep.getScheduledServicesByForeignKey(equipmentID);
	}
	
	@PutMapping("/service/scheduled/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<ScheduledService> updateService(@PathVariable(value="id") Long serviceID,@Validated @RequestBody ScheduledService serviceData)
		throws ResourceNotFoundException{
		ScheduledService service = serviceRep.findById(serviceID).orElseThrow(() -> new ResourceNotFoundException("Can't get scheduled service object for update - ID not found:  " + serviceID));
		
		service.setServiceDate(serviceData.getServiceDate());
		service.setServiceType(serviceData.getServiceType());
		service.setServiceCompany(serviceData.getServiceCompany());
		service.setPrice(serviceData.getPrice());
		service.setWarranty(serviceData.getWarranty());
		
		ScheduledService updatedService = null;
		
		if(service.getServiceDate() != null && !service.getServiceType().isBlank() && !service.getServiceCompany().isBlank() && !service.getPrice().isBlank() && !service.getWarranty().isBlank()) {
			updatedService = serviceRep.save(service);
		}
		
		return ResponseEntity.ok(updatedService);
	}
	
	@PostMapping("/service/scheduled/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public ScheduledService createService(@PathVariable(value="id") Long equipmentID,@Validated @RequestBody ScheduledService service)
		throws ResourceNotFoundException{
		
		Optional<Equipment> equipment = equipmentRep.findById(equipmentID);
		if(equipment.isPresent()) {
			service.setEquipment(equipment.get());
		}
		
		return serviceRep.save(service);
	}
	
	@DeleteMapping("/service/scheduled/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public Map<String,Boolean> deleteService(@PathVariable(value="id") Long serviceID)
		throws ResourceNotFoundException{
		
		ScheduledService service = serviceRep.findById(serviceID).orElseThrow(() -> new ResourceNotFoundException("Can't get scheduled service object to delete - ID not found:  " + serviceID));
		
		serviceRep.delete(service);
		
		Map<String,Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		
		return response;
	}
	
}
