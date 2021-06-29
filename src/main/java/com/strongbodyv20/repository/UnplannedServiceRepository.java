package com.strongbodyv20.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.strongbodyv20.model.UnplannedService;

@Repository
public interface UnplannedServiceRepository extends JpaRepository<UnplannedService,Long> {

	@Query(value="SELECT * FROM unplanned_services INNER JOIN equipment on unplanned_services.equipments_id = equipment.id WHERE equipment.id=?1",nativeQuery=true)
	public List<UnplannedService> getServiceByForeignKey(Long id);
}
