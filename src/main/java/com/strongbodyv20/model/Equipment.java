package com.strongbodyv20.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity(name="equimpent")
@Table(name="equipment")
public class Equipment {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="name")
	private String name;
	
	@Column(name="serial_no")
	private String serialNumber;
	
	@Column(name="category")
	private String category;
	
	@Column(name="manufacturer")
	private String manufacturer;
	
	@Column(name="width")
	private String width;
	
	@Column(name="length")
	private String length;
	
	@Column(name="height")
	private String height;
	
	@Column(name="weight")
	private String weight;
	
	@JsonIgnore
	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy="equipment")
	private List<ScheduledService> scheduledServices;
	
	@JsonIgnore
	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy="equipment")
	private List<UnplannedService> unplannedServices;
	
	public Equipment() {
		
	}

	public Equipment(Long id, String name, String serialNumber, String category, String manufacturer, String width,
			String length, String height, String weight) {
		super();
		this.id = id;
		this.name = name;
		this.serialNumber = serialNumber;
		this.category = category;
		this.manufacturer = manufacturer;
		this.width = width;
		this.length = length;
		this.height = height;
		this.weight = weight;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSerialNumber() {
		return serialNumber;
	}

	public void setSerialNumber(String serialNumber) {
		this.serialNumber = serialNumber;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getManufacturer() {
		return manufacturer;
	}

	public void setManufacturer(String manufacturer) {
		this.manufacturer = manufacturer;
	}

	public String getWidth() {
		return width;
	}

	public void setWidth(String width) {
		this.width = width;
	}

	public String getLength() {
		return length;
	}

	public void setLength(String length) {
		this.length = length;
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

	public List<ScheduledService> getScheduledServices() {
		return scheduledServices;
	}

	public void setScheduledServices(List<ScheduledService> scheduledServices) {
		this.scheduledServices = scheduledServices;
	}

	public List<UnplannedService> getUnplannedServices() {
		return unplannedServices;
	}

	public void setUnplannedServices(List<UnplannedService> unplannedServices) {
		this.unplannedServices = unplannedServices;
	}

	

}
