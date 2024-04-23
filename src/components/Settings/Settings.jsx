import React, { useState } from "react";
import "./Settings.css";
import Modal from "../Modal/Modal";

const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
    alert("แก้ไขข้อมูลเสร็จสิ้น");
  }

  function closeModal() {
    setIsOpen(false);
    alert("Modal ถูกปิดแล้ว!");
  }
  return (
    <>
      <div class="container my-5">
        <div class="row gutters">
          <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div class="card h-100">
              <div class="card-body">
                <div class="account-settings">
                  <div class="user-profile">
                    <div class="user-avatar">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                        alt="Maxwell Admin"
                      />
                    </div>
                    <h5 class="user-name">Yuki Hayashi</h5>
                    <h6 class="user-email">yuki@Maxwell.com</h6>
                  </div>
                  <div class="about">
                    <h5 class="mb-2 text-primary">About</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Enim fugit possimus molestiae perferendis ad culpa ipsum
                      nesciunt, odit a unde porro temporibus omnis consectetur
                      vero quaerat eaque nihil ut aut.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div class="card h-100">
              <div class="card-body">
                <div class="row gutters">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 class="mb-3 text-primary">Personal Details</h6>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="fullName">Full Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="fullName"
                        placeholder="Enter full name"
                        defaultValue="Yuki"
                      />
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="eMail">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        id="eMail"
                        placeholder="Enter email ID"
                        defaultValue="yuki@Maxwell.com"
                      />
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="phone">Phone</label>
                      <input
                        type="text"
                        class="form-control"
                        id="phone"
                        placeholder="Enter phone number"
                        defaultValue="095-949-4508"
                      />
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="website">Other contact</label>
                      <input
                        type="url"
                        class="form-control"
                        id="website"
                        placeholder="FB , IG , LINE ID"
                        defaultValue="IG : Yuki_jung"
                      />
                    </div>
                  </div>
                </div>
                <div class="row gutters">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 class="my-3 text-primary">Address</h6>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="Street">Street</label>
                      <input
                        type="name"
                        class="form-control"
                        id="Street"
                        placeholder="Enter Street"
                      />
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="ciTy">City</label>
                      <input
                        type="name"
                        class="form-control"
                        id="ciTy"
                        placeholder="Enter City"
                      />
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="sTate">State</label>
                      <input
                        type="text"
                        class="form-control"
                        id="sTate"
                        placeholder="Enter State"
                      />
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="zIp">Zip Code</label>
                      <input
                        type="text"
                        class="form-control"
                        id="zIp"
                        placeholder="Zip Code"
                      />
                    </div>
                  </div>
                </div>
                <div className="settings-section mt-5">
                  <h3 className="settings-section-title">
                    Notification Settings
                  </h3>
                  <div className="settings-form-group">
                    <label
                      htmlFor="notification-email"
                      className="settings-label"
                    >
                      Email Notifications
                    </label>
                    <input
                      type="checkbox"
                      id="notification-email"
                      className="settings-checkbox"
                      defaultChecked
                    />
                  </div>
                  <div className="settings-form-group">
                    <label
                      htmlFor="notification-sms"
                      className="settings-label"
                    >
                      SMS Notifications
                    </label>
                    <input
                      type="checkbox"
                      id="notification-sms"
                      className="settings-checkbox"
                    />
                  </div>
                </div>
                <div class="row gutters">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="text-right d-flex justify-content-center">
                      <div>
                        <button
                          type="button"
                          id="submit"
                          name="submit"
                          class="btn btn-secondary mx-2"
                        >
                          Cancel
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          id="submit"
                          name="submit"
                          class="btn btn-primary mx-2"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onClick={openModal}
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
