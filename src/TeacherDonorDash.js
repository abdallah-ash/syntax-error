import "./index.css";
import { teacherDonationReq } from "./db";
import { useState } from "react";

function TeacherDonorDash() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleDonation = () => {
        setMenuOpen(!isMenuOpen);
    }
    return(
        <>
        <div className="item-container">
            <button className="item" onClick={toggleDonation}> <label>Teaching post</label> </button>
        </div>
        {isMenuOpen && (
            <div className="pop-menu-items">
                <h1 className="item-descrip-title"> Teaching Post: </h1>
               <ul className="item-descrip">
                    {teacherDonationReq.subject !== '' && <li>Subject: {teacherDonationReq.subject}</li>}
                    {teacherDonationReq.area !== '' && <li>Area: {teacherDonationReq.area}</li>}
                    {teacherDonationReq.governorate !== '' && <li>Governorate: {teacherDonationReq.governorate}</li>}
                    <li>Number of Students: {teacherDonationReq.noOfStudents}</li>
                    <li>Address: {teacherDonationReq.address}</li>
                </ul>
               <button className="item-close" onClick={toggleDonation}>Close</button>
               <button className="item-donate">accept</button>
            </div>
        )}
        </>
)
}

export default TeacherDonorDash;