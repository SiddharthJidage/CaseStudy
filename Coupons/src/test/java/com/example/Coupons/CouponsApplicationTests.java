package com.example.Coupons;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.Coupons.Controller.CouponController;
import com.example.Coupons.Model.Coupon;
import com.example.Coupons.Repository.CouponRepository;



@SpringBootTest
class CouponApplicationTests {

    @Mock
    CouponRepository couponRepository;

    @Autowired
    CouponController couponController;


    @Test
    public void getAllCouponsTest() {
        when(couponRepository.findAll()).thenReturn(
                Stream.of(
                                new Coupon("01", "amazon", "amaz12", "10% offer","12Jan2021"))
                        .collect(Collectors.toList()));
        assertEquals(1, couponController.getAllCoupons().size());

    }




	@Test
    public void addCouponTest() {
        Coupon coupon = new Coupon("01", "amazon", "amaz12", "10% offer","12Jan2021");
        when(couponRepository.save(coupon)).thenReturn(coupon);
        assertEquals(coupon, couponController.addCoupon(coupon));
    }

    @Test
    public void deleteDealTest() {

        String couponId = "1";

        Coupon coupon = new Coupon("01", "amazon", "amaz12", "10% offer","12Jan2021");
        couponRepository.deleteById(couponId);
        verify(couponRepository).deleteById(couponId);


    }
}
