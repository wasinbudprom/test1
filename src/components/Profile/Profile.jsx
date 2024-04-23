// src/components/Profile.jsx

import React from 'react';

import './Profile.css';

const Profile = () => {
  return (
    <div className="profile">
      <h2 className="profile-title">ข้อมูลส่วนตัว</h2>
      <div className="profile-info">
        <div className="profile-info-item">
          <span className="profile-info-label">ชื่อ - นามสกุล</span>
          <span className="profile-info-value">อนุวัฒน์ เผือกยอด</span>
        </div>
        <div className="profile-info-item">
          <span className="profile-info-label">ทะเบียนผู้ใช้น้ำ</span>
          <span className="profile-info-value">X-XXXX-XXXXX-XX-X</span>
        </div>
        <div className="profile-info-item">
          <span className="profile-info-label">เลขที่อยู่</span>
          <span className="profile-info-value">179/2</span>
        </div>
        <div className="profile-info-item">
          <span className="profile-info-label">ชั้นที่</span>
          <span className="profile-info-value">-</span>
        </div>
        <div className="profile-info-item">
          <span className="profile-info-label">หมู่บ้าน</span>
          <span className="profile-info-value">-</span>
        </div>
        <div className="profile-info-item">
          <span className="profile-info-label">ตรอก</span>
          <span className="profile-info-value">-</span>
        </div>
        <div className="profile-info-item">
          <span className="profile-info-label">ถนน</span>
          <span className="profile-info-value">-</span>
        </div>
        <div className="profile-info-item">
          <span className="profile-info-label">อำเภอ/เขต</span>
          <span className="profile-info-value">สามเสน</span>
        </div>
        <div className="profile-info-item">
          <span className="profile-info-label">รหัสไปรษณีย์</span>
          <span className="profile-info-value">61160</span>
        </div>
        <div className="profile-info-item">
          <span className="profile-info-label">อาคาร</span>
          <span className="profile-info-value">-</span>
        </div>
        <div className="profile-info-item">
          <span className="profile-info-label">ห้องที่</span>
          <span className="profile-info-value">-</span>
        </div>
        <div className="profile-info-item">
          <span className="profile-info-label">หมู่ที่</span>
          <span className="profile-info-value">8</span>
        </div>
        <div className="profile-info-item">
          <span className="profile-info-label">ซอย</span>
          <span className="profile-info-value">-</span>
        </div>
        <div className="profile-info-item">
          <span className="profile-info-label">ตำบล/แขวง</span>
          <span className="profile-info-value">บ้าน</span>
        </div>
        <div className="profile-info-item">
          <span className="profile-info-label">จังหวัด</span>
          <span className="profile-info-value">อุทัยธานี</span>
        </div>
      </div>
      <button className="profile-edit-btn">แก้ไขข้อมูลส่วนตัว</button>

    </div>
  );
};

export default Profile;