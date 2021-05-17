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
import com.strongbodyv20.model.Member;
import com.strongbodyv20.model.Membership;
import com.strongbodyv20.repository.MemberRepository;
import com.strongbodyv20.repository.MembershipRepository;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/src")
public class MembershipController {

	@Autowired
	private MembershipRepository membershipRep;
	
	@Autowired
	private MemberRepository memberRep;
	
	
	@GetMapping("/membership")
	public List<Membership> getMembership(){
		return membershipRep.findAll();
	}
	
	
	@GetMapping("/membershipUpdate/{id}")
	public ResponseEntity<Membership> getMembershipById(@PathVariable(value="id") Long membershipId)
		throws ResourceNotFoundException{
		
		Membership membership = membershipRep.findById(membershipId).orElseThrow(() -> new ResourceNotFoundException("Membership not found for ID:" + membershipId));
		
		return ResponseEntity.ok().body(membership);
		
	}
	
	@GetMapping("/membership/{id}")
	public Membership getMembershipByForeignKey(@PathVariable(value="id") Long memberId)
		throws ResourceNotFoundException{
		
		return membershipRep.getMembershipByForeignKey(memberId);
	}
	
	
	
	@PutMapping("/membership/{id}")
	public ResponseEntity<Membership> updateMembership(@PathVariable(value="id") Long membershipId,@Validated @RequestBody Membership membershipData)
		throws ResourceNotFoundException{
		
		//The angular form will be populated with this membership
		Membership membership = membershipRep.findById(membershipId).orElseThrow(() -> new ResourceNotFoundException("Membership not found with ID:" + membershipId));
		
		//The membershipData is the new data entered for the existing membership
		membership.setRegistrationDate(membershipData.getRegistrationDate());
		membership.setValidFrom(membershipData.getValidFrom());
		membership.setValidThrough(membershipData.getValidThrough());
		membership.setServiceLevel(membershipData.getServiceLevel());
		membership.setMembershipType(membershipData.getMembershipType());	
		
		Membership updatedMembership = null;
		
		if(membership.getRegistrationDate() != null &&  membership.getValidFrom() != null && membership.getValidThrough() != null && !membership.getServiceLevel().isBlank()
				&& !membership.getMembershipType().isBlank()) {
			updatedMembership = membershipRep.save(membership);
		}
			
		
		return ResponseEntity.ok(updatedMembership);
	}
	
	@PostMapping("/membership/{id}")
	public Membership createMembership(@PathVariable(value="id") Long memberID ,@Validated @RequestBody Membership membership) throws ResourceNotFoundException {
		
		//Find the member we are creating the membership for
		Optional<Member> member = memberRep.findById(memberID);
		if(member.isPresent()) {
			//Link the found member with membership -> this lets hibernate update the foreing key with the correct value
			membership.setMember(member.get());
		}
		
		return membershipRep.save(membership);
		
	}
	
	
	@DeleteMapping("/membership/{id}")
	public Map<String,Boolean> deleteMembership(@PathVariable(value="id") Long memberID)
		throws ResourceNotFoundException{
		
		//Deleting through foreign key because the PathVariable has the member_id in the url
		membershipRep.deleteMembershipByForeignKey(memberID);
	
		//Set to true when the membership is deleted
		Map<String,Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);

		return response;
	}
}
