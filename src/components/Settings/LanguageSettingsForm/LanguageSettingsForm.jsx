import React from "react";

const LanguageSettingsForm = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center mb-4">
                  Language Settings
                </h3>
                <form>
                  <div className="mb-3">
                    <label htmlFor="language" className="form-label">
                      Select Language
                    </label>
                    <select className="form-select" id="language">
                      <option value="en">English</option>
                      <option value="es">Thai</option>
                      {/* เพิ่มตัวเลือกภาษาอื่น ๆ ตามต้องการ */}
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Save Settings
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LanguageSettingsForm;
