package com.strongbodyv20.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity(name="membership")
@Table(name="membership")
public class Membership {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="registration_date")
	private Date registrationDate;
	
	@Column(name="valid_from")
	private Date validFrom;
	
	@Column(name="valid_through")
	private Date validThrough;
	
	@Column(name="service_level")
	private String serviceLevel;
	
	@Column(name="membership_type")
	private String membershipType;
	
	@Column(name="payment_status")
	private String paymentStatus;

	/* 
	 * Model with the foreign key has the @JoinColumn annotation
	 */
	@JsonIgnore
	@OneToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="member_id",referencedColumnName = "id")
	private Member member;
	
	
	public Membership() {
		
	}

	public Membership(Long id, Date registrationDate, Date validFrom, Date validThrough, String serviceLevel,
			String membershipType, String paymentStatus) {
		this.id = id;
		this.registrationDate = registrationDate;
		this.validFrom = validFrom;
		this.validThrough = validThrough;
		this.serviceLevel = serviceLevel;
		this.membershipType = membershipType;
		this.paymentStatus = paymentStatus;
	
	}


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	
	public Date getRegistrationDate() {
		return registrationDate;
	}

	public void setRegistrationDate(Date registrationDate) {
		this.registrationDate = registrationDate;
	}

	
	public Date getValidFrom() {
		return validFrom;
	}

	public void setValidFrom(Date validFrom) {
		this.validFrom = validFrom;
	}

	
	public Date getValidThrough() {
		return validThrough;
	}

	public void setValidThrough(Date validThrough) {
		this.validThrough = validThrough;
	}

	
	public String getServiceLevel() {
		return serviceLevel;
	}

	public void setServiceLevel(String serviceLevel) {
		this.serviceLevel = serviceLevel;
	}

	
	public String getMembershipType() {
		return membershipType;
	}

	public void setMembershipType(String membershipType) {
		this.membershipType = membershipType;
	}

	
	public String getPaymentStatus() {
		return paymentStatus;
	}

	public void setPaymentStatus(String paymentStatus) {
		this.paymentStatus = paymentStatus;
	}
	
	
	public Member getMember() {
		return member;
	}

	public void setMember(Member member) {
		this.member = member;
	}

}
