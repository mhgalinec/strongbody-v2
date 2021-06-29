package com.strongbodyv20.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.strongbodyv20.model.Equipment;

@Repository
public interface EquipmentRepository extends JpaRepository<Equipment,Long> {

}
