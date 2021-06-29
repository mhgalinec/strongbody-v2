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
	
	@GetMapping("/member/list")
	public List<Member> getMembers(){

		return rep.findAll();
	}
	
	@GetMapping("/member/{id}")
	public ResponseEntity<Member> getMemberById(@PathVariable(value="id") Long memberID)
		throws ResourceNotFoundException{
		
		Member member = rep.findById(memberID).orElseThrow(() -> new ResourceNotFoundException("Can't get member object - ID not found: " + memberID));
		return ResponseEntity.ok().body(member);
		
		
	}
	
	@PostMapping("/member")
	public Member createMember(@Validated @RequestBody Member member) {
	
		return rep.save(member);
	
	}
	
	@PutMapping("/member/{id}")
	public ResponseEntity<Member> updateMember(@PathVariable(value="id") Long memberID,@Validated @RequestBody Member memberData)
		throws ResourceNotFoundException{
		
		
		Member member = rep.findById(memberID).orElseThrow(() -> new ResourceNotFoundException("Can't get member object for update - ID not found: " + memberID));
			
		member.setFullName(memberData.getFullName());
		member.setDateOfBirth(memberData.getDateOfBirth());
		member.setSex(memberData.getSex());
		member.setContactNumber(memberData.getContactNumber());
		member.setEmail(memberData.getEmail());
		member.setDiet(memberData.getDiet());
	
		Member updatedMember = null;
		
		if(!member.getFullName().isBlank() && member.getDateOfBirth() != null && !member.getSex().isBlank() && !member.getContactNumber().isBlank() && !member.getEmail().isBlank() 
				&& !member.getDiet().isBlank()) {
			updatedMember = rep.save(member);
		}

		return ResponseEntity.ok(updatedMember);
		
	}
	
	@DeleteMapping("/member/{id}")
	public Map<String,Boolean> deleteMember(@PathVariable(value="id") Long memberID) 
		throws ResourceNotFoundException{
		Member member = rep.findById(memberID).orElseThrow(() -> new ResourceNotFoundException("Can't get member object to delete - ID not found: " + memberID));
		rep.delete(member);
		
		Map<String,Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}

}
