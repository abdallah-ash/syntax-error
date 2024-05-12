import React, { useState, useEffect } from 'react';
import "./index.css";
import deliveryInfo from "./db";

function Delivery() {
    const [countdown, setCountdown] = useState(20); // Initial countdown value in seconds

    useEffect(() => {
        let interval; // Declare the interval variable outside of the conditional block

        if (countdown === 0) {
            // Clear the interval when countdown reaches 0
            clearInterval(interval);
        } else {
            // Start the interval to decrease countdown by 1 every second
            interval = setInterval(() => {
                setCountdown(prevCountdown => prevCountdown - 1);
            }, 1000); // Run every 1000ms (1 second)

            // Clean up the interval when the component unmounts or countdown reaches 0
            return () => clearInterval(interval);
        }
    }, [countdown]); // Re-run effect whenever countdown changes

    return (
        <div className="container2">
            <div className="info-box2">
                <h2>Transporation Method: Car</h2>
                <h2>Time Slot: Morning</h2>
                <h2>Driver's ETA: {countdown === 0 ? "Arrived" : countdown}</h2>
            </div>
            <div className="form-container2">
                <form className="form2">
                    <h2>The driver has arrived!</h2>
                    {/* Add your form fields here */}
                </form>
            </div>
        </div>
    );
}

export default Delivery;