package com.strongbodyv20.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
import com.strongbodyv20.repository.MemberRepository;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/src")
public class MemberController {
	
	@Autowired
	private MemberRepository rep;
	
	@GetMapping("/members")
	public List<Member> getMembers(){
		return rep.findAll();
	}
	
	@GetMapping("/members/{id}")
	public ResponseEntity<Member> getMemberById(@PathVariable(value="id") Long memberID)
		throws ResourceNotFoundException{
		
		Member member = rep.findById(memberID).orElseThrow(() -> new ResourceNotFoundException("Member not found for ID:" + memberID));
		
		return ResponseEntity.ok().body(member);
		
	}
	
	@PostMapping("/members")
	public Member createMember(@Validated @RequestBody Member member) {
	
		return rep.save(member);
	
	}
	
	@PutMapping("/members/{id}")
	public ResponseEntity<Member> updateMember(@PathVariable(value="id") Long memberID,@Validated @RequestBody Member memberDetails)
		throws ResourceNotFoundException{
		Member member = rep.findById(memberID).orElseThrow(() -> new ResourceNotFoundException("Member not found with ID:" + memberID));
		
		member.setFullName(memberDetails.getFullName());
		member.setDateOfBirth(memberDetails.getDateOfBirth());
		member.setSex(memberDetails.getSex());
		member.setContactNumber(memberDetails.getContactNumber());
		member.setEmail(memberDetails.getEmail());
		member.setDiet(memberDetails.getDiet());
	
		Member updatedMember = null;
		
		if(!member.getFullName().isBlank() && member.getDateOfBirth() != null && !member.getSex().isBlank() && !member.getContactNumber().isBlank() && !member.getEmail().isBlank() 
				&& !member.getDiet().isBlank()) {
			updatedMember = rep.save(member);
		}

		return ResponseEntity.ok(updatedMember);
		
	}
	
	@DeleteMapping("/members/{id}")
	public Map<String,Boolean> deleteMember(@PathVariable(value="id") Long memberID) 
		throws ResourceNotFoundException{
		Member member = rep.findById(memberID).orElseThrow(() -> new ResourceNotFoundException("Member not found with ID:" + memberID));
		rep.delete(member);
		
		Map<String,Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}

}
