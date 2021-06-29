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

@Entity(name="scheduledService")
@Table(name="scheduled_services")
public class ScheduledService {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="service_type")
	private String serviceType;
	
	@Column(name="service_date")
	private Date serviceDate;
	
	@Column(name="warranty")
	private String warranty;
	
	@Column(name="price")
	private String price;
	
	@Column(name="service_company")
	private String serviceCompany;
	
	@JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="equipment_id",referencedColumnName="id")
	private Equipment equipment;
	
	public ScheduledService() {
		
	}

	public ScheduledService(Long id, String serviceType, Date serviceDate, String warranty, String price,
			String serviceCompany) {
		super();
		this.id = id;
		this.serviceType = serviceType;
		this.serviceDate = serviceDate;
		this.warranty = warranty;
		this.price = price;
		this.serviceCompany = serviceCompany;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getServiceType() {
		return serviceType;
	}

	public void setServiceType(String serviceType) {
		this.serviceType = serviceType;
	}

	public Date getServiceDate() {
		return serviceDate;
	}

	public void setServiceDate(Date serviceDate) {
		this.serviceDate = serviceDate;
	}

	public String getWarranty() {
		return warranty;
	}

	public void setWarranty(String warranty) {
		this.warranty = warranty;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getServiceCompany() {
		return serviceCompany;
	}

	public void setServiceCompany(String serviceCompany) {
		this.serviceCompany = serviceCompany;
	}

	public Equipment getEquipment() {
		return equipment;
	}

	public void setEquipment(Equipment equipment) {
		this.equipment = equipment;
	}
	
	

}
