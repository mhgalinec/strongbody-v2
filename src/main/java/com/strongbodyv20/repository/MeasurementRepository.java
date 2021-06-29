package com.strongbodyv20.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.strongbodyv20.model.Measurements;

@Repository
public interface MeasurementRepository extends JpaRepository<Measurements,Long> {
	
	@Query(value="SELECT * FROM measurements INNER JOIN members ON measurements.member_id = members.id WHERE members.id=?1",nativeQuery=true)
	public List<Measurements> getMeasurementsByForeignKey(Long id);
	

}
