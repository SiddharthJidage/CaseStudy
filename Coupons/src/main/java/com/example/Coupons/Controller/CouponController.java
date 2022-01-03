package com.example.Coupons.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.Coupons.Model.Coupon;
import com.example.Coupons.Service.CouponService;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/coupons")
public class CouponController {
	
	  private final CouponService couponService;

	    @Autowired
	    public CouponController(CouponService couponService) {
	        this.couponService = couponService;
	    }

    @GetMapping(value = "/list")
    public List<Coupon> getAllCoupons(){
        return couponService.getAllCoupons(); 
    }

    @PostMapping(value = "/add")
    public String addCoupon(@RequestBody Coupon coupon){
    	couponService.addCoupon(coupon);
        return "Coupon Added Successfully";
    }

    @DeleteMapping(value = "/delete/{couponID}")
    public String deleteProduct(@PathVariable String couponID) {
    	couponService.deleteCoupon(couponID);
        return "Coupon Deleted Successfully";
    }

    @PutMapping(value = "/update/{couponID}")
    public Coupon updateCoupon(@RequestBody Coupon coupon, @PathVariable String couponID){
        return couponService.updateCoupon(coupon, couponID);

    }
    
    @GetMapping("/findcoupon/{provider}")
	public List<Coupon> findByprovider(@PathVariable("provider") String provider)
	{
	  return couponService.findByprovider(provider);
	}
//	@GetMapping(value = "/provider/{provider}")
//	public Coupon getAdmin(@PathVariable("provider") String provider) {
//		return couponService.findByName(provider);
//	}
}
