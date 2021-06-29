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

@Entity(name="unplannedService")
@Table(name="unplanned_services")
public class UnplannedService {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="fault_type")
	private String faultType;
	
	@Column(name="date_of_fault")
	private Date dateOfFault;
	
	@Column(name="warranty")
	private String warranty;
	
	@Column(name="price")
	private String price;
	
	@Column(name="service_company")
	private String serviceCompany;
	
	@JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="equipments_id",referencedColumnName="id")
	private Equipment equipment;

	public UnplannedService() {
		
	}
	public UnplannedService(Long id, String faultType, Date dateOfFault, String warranty, String price,
			String serviceCompany) {
		super();
		this.id = id;
		this.faultType = faultType;
		this.dateOfFault = dateOfFault;
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

	public String getFaultType() {
		return faultType;
	}

	public void setFaultType(String faultType) {
		this.faultType = faultType;
	}

	public Date getDateOfFault() {
		return dateOfFault;
	}

	public void setDateOfFault(Date dateOfFault) {
		this.dateOfFault = dateOfFault;
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
