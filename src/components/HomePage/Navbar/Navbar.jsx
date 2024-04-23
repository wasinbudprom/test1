import React, { useState } from "react";
import "./Navbar.css";
import PayBill from "../../PayBill/PayBill"; // นำเข้า PayBill component
import Profile from "../../Profile/Profile";
import TrackingInfo from "../../TrackStatus/TrackingInfo/TrackingInfo";
import Settings from "../../Settings/Settings";
import Employee from "../../Employee/Employee";
import Sidebar from "../../Settings/Sidebar/Sidebar";
import ChangePassword from "../../Settings/ChangePassword/ChangePassword";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPayBill, setShowPayBill] = useState(false); // สถานะสำหรับแสดง/ซ่อน PayBill
  const [showContent, setShowContent] = useState(false); // สถานะสำหรับแสดง/ซ่อนเนื้อหา
  const [showProfile, setShowProfile] = useState(false); // สถานะสำหรับแสดง/ซ่อน Profile
  const [showTrackingInfo, setShowTrackingInfo] = useState(false); // สถานะสำหรับแสดง/ซ่อน TrackingInfo
  const [showSettings, setShowSettings] = useState(false); // สถานะสำหรับแสดง/ซ่อน Settings
  const [showEmployee, setShowEmployee] = useState(false); // สถานะสำหรับแสดง/ซ่อน Employee
  const [showSidebar, setShowSidebar] = useState(false); // สถานะสำหรับแสดง/ซ่อน Sidebar
  const [showChangePassword, setChangePassword] = useState(false); // สถานะสำหรับแสดง/ซ่อน Sidebar

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleHomeClick = () => {
    setShowPayBill(false); // ซ่อน PayBill เมื่อกดปุ่ม "หน้าหลัก"
    setShowContent(false); // ซ่อน Content เมื่อกดปุ่ม "หน้าหลัก"
    setShowProfile(false); // ซ่อน Profile เมื่อกดปุ่ม "หน้าหลัก"
    setShowTrackingInfo(false); // ซ่อน TrackingInfo เมื่อกดปุ่ม "หน้าหลัก"
    setShowSettings(false); // ซ่อน Settings เมื่อกดปุ่ม "หน้าหลัก"
    setShowEmployee(false); // ซ่อน Employee เมื่อกดปุ่ม "หน้าหลัก"
    setShowSidebar(false);
  };

  const handlePayBillClick = () => {
    setShowPayBill(true); // แสดง PayBill
    setShowContent(false); // ซ่อน Content เมื่อกดปุ่ม "ชำระค่าบริการ
    setShowProfile(false); // ซ่อน Profile เมื่อกดปุ่ม "ชำระค่าบริการ"
    setShowTrackingInfo(false); // ซ่อน TrackingInfo เมื่อกดปุ่ม "ชำระค่าบริการ"
    setShowSettings(false); // ซ่อน Settings เมื่อกดปุ่ม "ชำระค่าบริการ"
    setShowEmployee(false); // ซ่อน Employee เมื่อกดปุ่ม "ชำระค่าบริการ"
    setShowSidebar(false);
  };

  const handleTrackingInfoClick = () => {
    setShowPayBill(false); // ซ่อน PayBill เมื่อกดปุ่ม "TrackingInfo"
    setShowContent(false); // ซ่อนเนื้อหาอื่น เมื่อกดปุ่ม "TrackingInfo"
    setShowProfile(false); // ซ่อน Profile เมื่อกดปุ่ม "TrackingInfo"
    setShowTrackingInfo(true); // แสดง TrackingInfo
    setShowSettings(false); // ซ่อน Settings เมื่อกดปุ่ม "TrackingInfo"
    setShowEmployee(false); // ซ่อน Employee เมื่อกดปุ่ม "TrackingInfo"
    setShowSidebar(false);
  };

  const handleProfileClick = () => {
    setShowPayBill(false); // ซ่อน PayBill เมื่อกดปุ่ม "Profile"
    setShowContent(false); // ซ่อน Content เมื่อกดปุ่ม "Profile"
    setShowProfile(true); // แสดง Profile เมื่อกดปุ่ม "Profile"
    setShowTrackingInfo(false); // ซ่อน TrackingInfo เมื่อกดปุ่ม "Profile"
    setShowSettings(false); // ซ่อน Settings เมื่อกดปุ่ม เมื่อกดปุ่ม "Profile"
    setShowEmployee(false); // ซ่อน Employee เมื่อกดปุ่ม เมื่อกดปุ่ม "Profile"
    setShowSidebar(false);
  };

  const handleSettingsClick = () => {
    setShowPayBill(false); // ซ่อน PayBill เมื่อกดปุ่ม "Settings"
    setShowContent(false); // ซ่อน Content เมื่อกดปุ่ม "Settings"
    setShowProfile(false); // ซ่อน Profile เมื่อกดปุ่ม "Settings"
    setShowTrackingInfo(false); // ซ่อน TrackingInfo เมื่อกดปุ่ม "Settings"
    setShowSettings(true); // แสดง Settings
    setShowEmployee(false); // ซ่อน Employee เมื่อกดปุ่ม "Settings"
    setShowSidebar(true);
  };

  const handleEmployeeClick = () => {
    setShowPayBill(false); // ซ่อน PayBill เมื่อกดปุ่ม "Employee"
    setShowContent(false); // ซ่อน Content เมื่อกดปุ่ม "Employee"
    setShowProfile(false); // ซ่อน Profile เมื่อกดปุ่ม "Employee"
    setShowTrackingInfo(false); // ซ่อน TrackingInfo เมื่อกดปุ่ม "Employee"
    setShowSettings(false); // ซ่อน Settings เมื่อกดปุ่ม "Employee"
    setShowEmployee(true); // แสดง Employee
    setShowSidebar(false);
  };

  const handleNewsClick = () => {
    window.open("https://www.pwa.co.th/news/", "_blank", "noopener,noreferrer"); // เปิดเว็บใหม่ไปที่ URL https://www.pwa.co.th/news/
  };

  return (
    <header className="">
      <div className="fixed-top">
        <nav className="navbar ">
          <div className="navbar-logo">
            <a href="#" onClick={handleHomeClick}>
              <img
                src="https://cdn-1.pwa.co.th/assets/v2020/images/pwasite-logo-header-570x136.png"
                alt="Logo"
              />
            </a>
          </div>
          <div className="navbar-left">
            <ul className="navbar-menu">
              <li>
                <a href="#" onClick={handleHomeClick}>
                  <i className="fas fa-home"></i>หน้าหลัก
                </a>
              </li>
              <li>
                <a href="#" onClick={handleNewsClick}>
                  {" "}
                  {/* เรียกใช้ handleNewsClick เมื่อกดปุ่ม "ข่าวสาร" */}
                  <i className="fas fa-file"></i>ข่าวสาร
                </a>
              </li>
              <li>
                <a href="#" onClick={handlePayBillClick}>
                  {" "}
                  {/* เปลี่ยนการเรียกใช้ handlePayBillClick เมื่อกดปุ่ม */}
                  <i className="fab fa-cc-paypal"></i>ชำระค่าบริการ
                </a>
              </li>
              <li>
                <a href="#" onClick={handleTrackingInfoClick}>
                  <i className="fab fa-cc-paypal"></i>ติดตามสถานะการจัดส่ง
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-solid fa-laptop"></i>พนักงาน
                </a>
              </li>
              <li className="navbar-profile" onClick={toggleDropdown}>
                <img src="https://via.placeholder.com/40x40" alt="Profile" />
                {isOpen && (
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#" onClick={handleProfileClick}>
                        <i className="fas fa-user"></i> Profile
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={handleSettingsClick}>
                        {" "}
                        {/* เรียกใช้ handleSettingsClick เมื่อกดปุ่ม "Settings" */}
                        <i className="fas fa-cog"></i> Settings
                      </a>
                    </li>
                    <li>
                      <a href="/logout">
                        <i className="fas fa-sign-out-alt"></i> Logout
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </nav>
        {showPayBill && <PayBill />}{" "}
        {/* แสดง PayBill เมื่อ showPayBill เป็น true */}
        {showContent && <div>เนื้อหาอื่นๆ</div>}
        {showProfile && <Profile />}{" "}
        {/* แสดง Profile เมื่อ showProfile เป็น true */}
        {showTrackingInfo && <TrackingInfo />}{" "}
        {/* แสดง TrackingInfo เมื่อ showTrackingInfo เป็น true */}
        {showSettings && (
          <>
            <Sidebar />
          </>
        )}{" "}
        {/* แสดง Settings เมื่อ showSettings เป็น true */}
        {showEmployee && <Employee />}{" "}
        {/* แสดง Employee เมื่อ showEmployee เป็น true */}
      </div>
    </header>
  );
};

export default Navbar;
