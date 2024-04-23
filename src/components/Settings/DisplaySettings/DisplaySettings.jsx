import React from "react";
import "./DisplaySettings.css";

const DisplaySettings = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center mb-4">
                  Display Settings
                </h3>
                <form>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="fontSize" className="form-label">
                        Font Size
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="fontSize"
                        placeholder="Enter font size"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="fontColor" className="form-label">
                        Font Color
                      </label>
                      <input
                        type="color"
                        className="form-control"
                        id="fontColor"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="backgroundColor" className="form-label">
                        Background Color
                      </label>
                      <input
                        type="color"
                        className="form-control"
                        id="backgroundColor"
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="boldText"
                        />
                        <label className="form-check-label" htmlFor="boldText">
                          Bold Text
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="letterSpacing" className="form-label">
                        Letter Spacing
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="letterSpacing"
                        placeholder="Enter letter spacing"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="wordSpacing" className="form-label">
                        Word Spacing
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="wordSpacing"
                        placeholder="Enter word spacing"
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="borderStyle" className="form-label">
                        Border Style
                      </label>
                      <select className="form-select" id="borderStyle">
                        <option>Select border style</option>
                        <option value="none">None</option>
                        <option value="solid">Solid</option>
                        <option value="dashed">Dashed</option>
                        <option value="dotted">Dotted</option>
                        <option value="double">Double</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="borderWidth" className="form-label">
                        Border Width
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="borderWidth"
                        placeholder="Enter border width"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="borderColor" className="form-label">
                        Border Color
                      </label>
                      <input
                        type="color"
                        className="form-control"
                        id="borderColor"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="borderRadius" className="form-label">
                        Border Radius
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="borderRadius"
                        placeholder="Enter border radius"
                      />
                    </div>
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

export default DisplaySettings;
