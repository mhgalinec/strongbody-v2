package com.strongbodyv20.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.strongbodyv20.model.ScheduledService;

@Repository
public interface ScheduledServiceRepository extends JpaRepository<ScheduledService,Long> {

	@Query(value="SELECT * FROM scheduled_services INNER JOIN equipment on scheduled_services.equipment_id = equipment.id WHERE equipment.id=?1",nativeQuery=true)
	public List<ScheduledService> getScheduledServicesByForeignKey(Long id);
}
