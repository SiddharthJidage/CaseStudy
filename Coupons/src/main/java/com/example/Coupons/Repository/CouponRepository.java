package com.example.Coupons.Repository;



import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.Coupons.Model.Coupon;


public interface  CouponRepository extends MongoRepository<Coupon, String> {


	List<Coupon> findByprovider(String provider);

//	void findByName(String provider);


}
