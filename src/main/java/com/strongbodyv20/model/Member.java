package com.strongbodyv20.model;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity(name="members")
@Table(name="members")
public class Member {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="full_name")
	private String fullName;
	
	@Column(name="date_of_birth")
	private Date dateOfBirth;
	
	@Column(name="sex")
	private String sex;
	
	@Column(name="contact_number")
	private String contactNumber;
	
	@Column(name="email")
	private String email;
	
	@Column(name="diet")
	private String diet;
	
	/*  
	* mappedBy annotations refers to attribute names, not column names. Also since attributes are private, 
	* hibernate access them through their getter/setter, thus you need it to follow convention (get,Camel Case, etc)
	*/
	@JsonIgnore
	@OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL,mappedBy="member")
	private Membership membership;
	
	@JsonIgnore
	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL,mappedBy="member")
	private List<Measurements> measurements = new ArrayList<Measurements>();
	
	
	
	public Member() {
		
	}
	
	public Member(Long id, String fullName, Date dateOfBirth, String sex, String contactNumber, String email,
			String diet) {
		this.id = id;
		this.fullName = fullName;
		this.dateOfBirth = dateOfBirth;
		this.sex = sex;
		this.contactNumber = contactNumber;
		this.email = email;
		this.diet = diet;

	}
	

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	
	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	
	public Date getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	
	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}
	
	public String getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getDiet() {
		return diet;
	}

	public void setDiet(String diet) {
		this.diet = diet;
	}


	public Membership getMembership() {
		return membership;
	}

	public void setMembership(Membership membership) {
		this.membership = membership;
	}


	public List<Measurements> getMeasurements() {
		return measurements;
	}

	public void setMeasurements(List<Measurements> measurements) {
		this.measurements = measurements;
	}

	


}
