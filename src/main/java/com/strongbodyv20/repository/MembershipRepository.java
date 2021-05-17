package com.strongbodyv20.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


import com.strongbodyv20.model.Membership;

@Repository
public interface MembershipRepository extends JpaRepository<Membership,Long> {
	
	@Query(value="SELECT * FROM membership INNER JOIN members ON membership.member_id = members.id WHERE members.id=?1",nativeQuery=true)
	public Membership getMembershipByForeignKey(Long id);
	
	
	@Transactional
	@Modifying
	@Query(value="DELETE FROM membership WHERE membership.member_id = ?1",nativeQuery=true)
	public void deleteMembershipByForeignKey(Long id);
	

}
