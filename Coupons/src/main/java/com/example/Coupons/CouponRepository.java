package com.example.Coupons;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface  CouponRepository extends MongoRepository<Coupon, String> {


}
