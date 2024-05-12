import "./index.css";
import React, { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { Navigate, useNavigate } from "react-router-dom";
import initialFormData from "./db";

function RegistrationForm() {
  const [clinicAddress, setClinicAddress] = useState("");
  const [area, setArea] = useState("");
  const [governorate, setGovernorate] = useState("");
  const [googleMarker, setGoogleMarker] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [proBonoCases, setProBonoCases] = useState("");

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);
  const [file, setFile] = useState(null); // State to hold the file
  const [preview, setPreview] = useState("");
  const Navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    Navigate("/dash", { state: { type: formData.type } });
  };

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview("");
    }
  }, [file]);
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get the first file
    if (file) {
      setFile(file);
    }
  };
  const nextStep = (event) => {
    event.preventDefault();
    setCurrentStep(currentStep + 1);
  };

  const prevStep = (event) => {
    event.preventDefault();
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const renderFormFields = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <input
              type="text"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              placeholder="First name"
              required
            />

            <input
              type="text"
              name="lname"
              value={formData.lname}
              onChange={handleChange}
              placeholder="Last name"
              required
            />

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="gender-select"
              required
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              required
            />

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />

            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              required
            />

            <input
              type="text"
              name="area"
              value={formData.area}
              onChange={handleChange}
              placeholder="Area"
              required
            />

            <input
              type="text"
              name="governorate"
              value={formData.governorate}
              onChange={handleChange}
              placeholder="Governorate"
              required
            />
          </>
        );
      case 2:
        return (
          <>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="donor-type-select"
              required
            >
              <option value="donor">donor</option>
              <option value="doctor">doctor</option>
              <option value="teacher">teacher</option>
            </select>
            {formData.type === "donor" && (
              <>
                <button type="submit">Submit</button>
              </>
            )}
            {formData.type === "doctor" && (
              <>
                <div>
                  <input
                    type="file"
                    name="file"
                    onChange={handleFileChange}
                    accept="image/*, .pdf" // Accept only images and PDF files
                  />
                  {file && file.type.startsWith("image/") && (
                    <img
                      src={preview}
                      alt="Preview"
                      style={{ width: "100px", height: "auto" }}
                    />
                  )}
                </div>
              </>
            )}
            {formData.type === "teacher" && (
              <>
                <div>
                  <input
                    type="file"
                    name="file"
                    onChange={handleFileChange}
                    accept="image/*, .pdf" // Accept only images and PDF files
                  />
                  {file && file.type.startsWith("image/") && (
                    <img
                      src={preview}
                      alt="Preview"
                      style={{ width: "100px", height: "auto" }}
                    />
                  )}
                </div>
              </>
            )}
          </>
        );
      case 3:
        return (
          <>
            {formData.type === "doctor" && (
              <>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    value={clinicAddress}
                    onChange={(e) => setClinicAddress(e.target.value)}
                    placeholder="Enter clinic address"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    placeholder="Enter the area"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    value={governorate}
                    onChange={(e) => setGovernorate(e.target.value)}
                    placeholder="Enter governorate"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    value={googleMarker}
                    onChange={(e) => setGoogleMarker(e.target.value)}
                    placeholder="Enter Google Maps marker or coordinates"
                  />
                </div>
                <div className="form-group">
                  <select
                    className="form-control"
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                  >
                    <option value="">Select your specialty</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="dermatology">Dermatology</option>
                    <option value="neurology">Neurology</option>
                    <option value="pediatrics">Pediatrics</option>
                    <option value="orthopedics">Orthopedics</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Pro-Bono Cases:</label>
                  <input
                    type="number"
                    className="form-control"
                    value={proBonoCases}
                    onChange={(e) => setProBonoCases(e.target.value)}
                    placeholder="Number of pro-bono cases you can take"
                    min="0"
                  />
                </div>
              </>
            )}
            {formData.type === "teacher" && (
              <>
                <div>
                  <div className="form-group">
                    <label>Subjects you can teach:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="subjects"
                      value={formData.subjects}
                      onChange={handleChange}
                      placeholder="e.g., Mathematics, Science"
                    />
                  </div>
                  <div className="form-group">
                    <label>Number of pro-bono classes you can offer:</label>
                    <input
                      type="number"
                      className="form-control"
                      name="proBonoClasses"
                      value={formData.proBonoClasses}
                      onChange={handleChange}
                      min="0"
                      placeholder="Number of classes"
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Number of pro-bono students you can tutor privately:
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name="proBonoStudents"
                      value={formData.proBonoStudents}
                      onChange={handleChange}
                      min="0"
                      placeholder="Number of students"
                    />
                  </div>
                </div>
              </>
            )}
          </>
        );
      default:
        return <div>Invalid step</div>;
    }
  };

  return (
    <div className="registration-background">
      <form className="registration-form" onSubmit={handleSubmit}>
        <ProgressBar completed={((currentStep - 1) / 2) * 100} />
        {renderFormFields()}

        <button onClick={prevStep} disabled={currentStep === 1}>
          Previous
        </button>
        {currentStep !== 3 && (
          <button onClick={nextStep} disabled={currentStep === 3}>
            Next
          </button>
        )}
        {currentStep === 3 && <button type="submit">Submit</button>}
      </form>
    </div>
  );
}

export default RegistrationForm;
