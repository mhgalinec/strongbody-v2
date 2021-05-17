package com.strongbodyv20.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity(name="measurements")
@Table(name="measurements")
public class Measurements {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="measurement_date")
	private Date measurementDate;
	
	@Column(name="height")
	private String height;
	
	@Column(name="weight")
	private String weight;
	
	@Column(name="body_fat")
	private String bodyFat;
	
	@Column(name="shoulders")
	private String shoulders;
	
	@Column(name="torso")
	private String torso;
	
	@Column(name="waist")
	private String waist;
	
	@Column(name="upper_arm")
	private String upperArm;
	
	@Column(name="lower_arm")
	private String lowerArm;
	
	@Column(name="upper_leg")
	private String upperLeg;
	
	@Column(name="lower_leg")
	private String lowerLeg;
	
	@Column(name="resting_heart_rate")
	private String restingHeartRate;
	
	@JsonIgnore
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="member_id",referencedColumnName = "id")
	private Member member;
	
	public Measurements() {
		
	}

	public Measurements(Long id, Date measurementDate, String height, String weight, String bodyFat,
			String shoulders, String torso, String waist, String upperArm, String lowerArm, String upperLeg,
			String lowerLeg, String restingHeartRate) {
		super();
		this.id = id;
		this.measurementDate = measurementDate;
		this.height = height;
		this.weight = weight;
		this.bodyFat = bodyFat;
		this.shoulders = shoulders;
		this.torso = torso;
		this.waist = waist;
		this.upperArm = upperArm;
		this.lowerArm = lowerArm;
		this.upperLeg = upperLeg;
		this.lowerLeg = lowerLeg;
		this.restingHeartRate = restingHeartRate;
		
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getMeasurementDate() {
		return measurementDate;
	}

	public void setMeasurementDate(Date measurementDate) {
		this.measurementDate = measurementDate;
	}

	public String getHeight() {
		return height;
	}

	public void setHeight(String height) {
		this.height = height;
	}

	public String getWeight() {
		return weight;
	}

	public void setWeight(String weight) {
		this.weight = weight;
	}

	public String getBodyFat() {
		return bodyFat;
	}

	public void setBodyFat(String bodyFat) {
		this.bodyFat = bodyFat;
	}

	public String getShoulders() {
		return shoulders;
	}

	public void setShoulders(String shoulders) {
		this.shoulders = shoulders;
	}

	public String getTorso() {
		return torso;
	}

	public void setTorso(String torso) {
		this.torso = torso;
	}

	public String getWaist() {
		return waist;
	}

	public void setWaist(String waist) {
		this.waist = waist;
	}

	public String getUpperArm() {
		return upperArm;
	}

	public void setUpperArm(String upperArm) {
		this.upperArm = upperArm;
	}

	public String getLowerArm() {
		return lowerArm;
	}

	public void setLowerArm(String lowerArm) {
		this.lowerArm = lowerArm;
	}

	public String getUpperLeg() {
		return upperLeg;
	}

	public void setUpperLeg(String upperLeg) {
		this.upperLeg = upperLeg;
	}

	public String getLowerLeg() {
		return lowerLeg;
	}

	public void setLowerLeg(String lowerLeg) {
		this.lowerLeg = lowerLeg;
	}

	public String getRestingHeartRate() {
		return restingHeartRate;
	}

	public void setRestingHeartRate(String restingHeartRate) {
		this.restingHeartRate = restingHeartRate;
	}

	public Member getMember() {
		return member;
	}

	public void setMember(Member member) {
		this.member = member;
	}
	
	
	
	
	

}
