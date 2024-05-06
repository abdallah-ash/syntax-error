import React, { useState } from "react";
import "./index.css";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="form-container">
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
        ></div>
      </div>
      {currentStep === 1 && <Step1 />}
      {currentStep === 2 && <Step2 />}
      {currentStep === 3 && <Step3 />}

      <button onClick={prevStep} disabled={currentStep === 1}>
        Previous
      </button>
      <button onClick={nextStep} disabled={currentStep === 3}>
        Next
      </button>
    </div>
  );
};

const Step1 = () => <div>Step 1 Content</div>;
const Step2 = () => <div>Step 2 Content</div>;
const Step3 = () => <div>Step 3 Content</div>;

export default MultiStepForm;
