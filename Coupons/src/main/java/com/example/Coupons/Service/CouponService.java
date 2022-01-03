package com.example.Coupons.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Coupons.Model.Coupon;
import com.example.Coupons.Repository.CouponRepository;

import java.util.List;

@Service
public class CouponService {

    @Autowired
    private CouponRepository couponRepository;


    public List<Coupon> getAllCoupons() {
        return couponRepository.findAll();
    }


    public String addCoupon( Coupon coupon) {
        couponRepository.save(coupon);
        return "New coupon Added";
    }


    public String deleteCoupon( String couponID) {
        couponRepository.deleteById(couponID);
        return "coupon with id = "+ couponID +" deleted successfully";
    }

    public Coupon updateCoupon( Coupon coupon,String couponID) {
        return couponRepository.save(coupon);
    }
    
    public List<Coupon> findByprovider(String provider)
   	{
   		return couponRepository.findByprovider(provider);
   	}


//	public Coupon findByName(String provider) {
//		couponRepository.findByName(provider);
//		return ;
//	}

}
