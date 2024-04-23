import React, { useState } from "react";
import "./Sidebar.css"; // ไฟล์ CSS สำหรับสไตล์ Sidebar
import "../../HomePage/Navbar/Navbar";
import Settings from "../Settings";
import ChangePassword from "../ChangePassword/ChangePassword";
import DisplaySettings from "../DisplaySettings/DisplaySettings";
import LanguageSettingsForm from "../LanguageSettingsForm/LanguageSettingsForm";
import ResetSetting from "../ResetSetting/ResetSetting";

const Sidebar = () => {
  const [showChangePassword, setChangePassword] = useState(true); // สถานะสำหรับแสดง/ซ่อน Sidebar
  const [showDisplaySettings, setDisplaySettings] = useState(false);
  const [showLanguageSettingsForm, setLanguageSettingsForm] = useState(false);
  const [showResetSetting, setResetSetting] = useState(false);

  const handleChangePassword = () => {
    setChangePassword(true);
    setDisplaySettings(false);
    setLanguageSettingsForm(false);
    setResetSetting(false);
  };

  const handleDisplaySettings = () => {
    setChangePassword(false);
    setDisplaySettings(true);
    setLanguageSettingsForm(false);
    setResetSetting(false);
  };

  const handleLanguageSettingsForm = () => {
    setChangePassword(false);
    setDisplaySettings(false);
    setLanguageSettingsForm(true);
    setResetSetting(false);
  };

  const handleResetSetting = () => {
    setChangePassword(false);
    setDisplaySettings(false);
    setLanguageSettingsForm(false);
    setResetSetting(true);
  };
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
        integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
        crossorigin="anonymous"
      />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossorigin="anonymous"
      ></script>
      <div class="sidebar">
        <ul class="nav-list d-flex flex-column align-items-start">
          <li>
            <a href="#" onClick={handleChangePassword}>
              <i class="bx bxs-wrench"></i>
              <span class="links_name">รหัสผ่าน</span>
            </a>
          </li>
          <li>
            <a href="#" onClick={handleDisplaySettings}>
              <i class="bx bxs-bar-chart-alt-2"></i>
              <span class="links_name">ลักษณะที่ปรากฎ</span>
            </a>
          </li>
          <li>
            <a href="#" onClick={handleLanguageSettingsForm}>
              <i class="bx bxs-film"></i>
              <span class="links_name">ภาษา</span>
            </a>
          </li>
          <li>
            <a href="#" onClick={handleResetSetting}>
              <i class="bx bx-reset"></i>
              <span class="links_name">Reset การตั้งค่า</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.pwa.co.th/contents/about/history"
              target="_blank"
            >
              <i class="bx bx-water"></i>
              <span class="links_name">เกี่ยวกับ การประปา</span>
            </a>
          </li>
        </ul>
      </div>
      {showChangePassword && <ChangePassword />}
      {showDisplaySettings && <DisplaySettings />}
      {showLanguageSettingsForm && <LanguageSettingsForm />}
      {showResetSetting && <ResetSetting />}
    </>
  );
};

export default Sidebar;
