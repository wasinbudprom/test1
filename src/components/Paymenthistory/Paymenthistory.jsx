// src/components/payment.jsx

import React from 'react';

import './Paymenthistory.css';

const Paymenthistory = () => {
  return (
    <div className="payment">

      <h2 className="payment-title">ประวัติการชำระค่าบริการ</h2>
      <div className="payment-info">
        <div className="payment-info-item">
          <span className="payment-info-label">วันที่แจ้งค่าน้ำ</span>
          <span className="payment-info-value">16/06/63 07:30</span>
        </div>
        <div className="payment-info-item">
          <span className="payment-info-label">วันที่อ่านครั้งนี้</span>
          <span className="payment-info-value">16/06/63</span>
        </div>
        <div className="payment-info-item">
          <span className="payment-info-label">เลขในมาตร</span>
          <span className="payment-info-value">1778</span>
        </div>
        <div className="payment-info-item">
          <span className="payment-info-label">วันที่อ่านครั้งก่อน</span>
          <span className="payment-info-value">16/07/63</span>
        </div>
        <div className="payment-info-item">
          <span className="payment-info-label">เลขในมาตร</span>
          <span className="payment-info-value">1760</span>
        </div>
        <div className="payment-info-item">
          <span className="payment-info-label">จำนวนน้ำที่ใช้</span>
          <span className="payment-info-value">18</span>
        </div>
        <div className="payment-info-item">
          <span className="payment-info-label">ค่าน้ำดิบ (ลูกบาศก์เมตรละ 0.15 บาท)</span>
          <span className="payment-info-value">2.70</span>
        </div>
        <div className="payment-info-item">
          <span className="payment-info-label">ค่าน้ำปะปา</span>
          <span className="payment-info-value">153.00</span>
        </div>
        <div className="payment-info-item">
          <span className="payment-info-label">ค่าบริการรายเดือน</span>
          <span className="payment-info-value">25.00</span>
        </div>
        <div className="payment-info-item">
          <span className="payment-info-label">ยอดเงินก่อนคิดภาษี</span>
          <span className="payment-info-value">178.00</span>
        </div>
        <div className="payment-info-item">
          <span className="payment-info-label">ภาษีมูลค่าเพิ่ม 7%</span>
          <span className="payment-info-value">12.46</span>
        </div>
        <div className="payment-info-item">
          <span className="payment-info-label">รวมเงิน</span>
          <span className="payment-info-value">190.46</span>
        </div>
        <div className="payment-info-item">
          <span className="payment-info-label">รวมเงินที่ต้องชำระทั้งสิ้น</span>
          <span className="payment-info-value">190.46</span>
        </div>
      </div>

      <h2 className="payment-title"></h2>
      <div className="payment-info">
        <div className="payment-info-item">
          <span className="payment-info-label">วันที่แจ้งค่าน้ำ</span>
          <span className="payment-info-value">16/06/63 07:30</span>
        </div>
        <div className="payment-info-item">
          <span className="payment-info-label">วันที่อ่านครั้งนี้</span>
          <span className="payment-info-value">16/06/63</span>
        </div>
        <div className="payment-info-item">
          <span className="payment-info-label">เลขในมาตร</span>
          <span className="payment-info-value">1778</span>
        </div>
        <div className="payment-info-item">
          <span className="payment-info-label">วันที่อ่านครั้งก่อน</span>
          <span className="payment-info-value">16/07/63</span>
        </div>
        <div className="payment-info-item">
          <span className="payment-info-label">เลขในมาตร</span>
          <span className="payment-info-value">1760</span>
        </div>
        <div className="payment-info-item">
          <span className="payment-info-label">จำนวนน้ำที่ใช้</span>
          <span className="payment-info-value">18</span>
        </div>
        <div className="payment-info-item">
          <span className="payment-info-label">ค่าน้ำดิบ (ลูกบาศก์เมตรละ 0.15 บาท)</span>
          <span className="payment-info-value">2.70</span>
        </div>
        <div className="payment-info-item">
          <span className="payment-info-label">ค่าน้ำปะปา</span>
          <span className="payment-info-value">153.00</span>
        </div>
        <div className="payment-info-item">
          <span className="payment-info-label">ค่าบริการรายเดือน</span>
          <span className="payment-info-value">25.00</span>
        </div>
        <div className="payment-info-item">
          <span className="payment-info-label">ยอดเงินก่อนคิดภาษี</span>
          <span className="payment-info-value">178.00</span>
        </div>
        <div className="payment-info-item">
          <span className="payment-info-label">ภาษีมูลค่าเพิ่ม 7%</span>
          <span className="payment-info-value">12.46</span>
        </div>
        <div className="payment-info-item">
          <span className="payment-info-label">รวมเงิน</span>
          <span className="payment-info-value">190.46</span>
        </div>
        <div className="payment-info-item">
          <span className="payment-info-label">รวมเงินที่ต้องชำระทั้งสิ้น</span>
          <span className="payment-info-value">190.46</span>
        </div>
      </div>
    </div>
  );
};

export default Paymenthistory;