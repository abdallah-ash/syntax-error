import "./index.css";
import React, { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { type } from "@testing-library/user-event/dist/type";
const initialFormData = {
  fname: "",
  lname: "",
  email: "",
  phone: "",
  password: "",
  address: "",
  area: "",
  governorate: "",
  type: "",
};
function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);

  const [file, setFile] = useState(null); // State to hold the file
  const [preview, setPreview] = useState("");

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
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Age"
            />
            <input
              type="text"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              placeholder="Occupation"
            />
          </>
        );
      default:
        return <div>Invalid step</div>;
    }
  };

  return (
    <div className="registration-background">
      <form className="registration-form">
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
