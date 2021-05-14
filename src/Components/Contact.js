import React from "react";
import '../App.css';

const Contact = () => {

  return (
    <div className="about-section" style={{ display: "grid", gridTemplateColumns: "auto auto auto auto", gridGap: 150 }}>
        <p>LinkedIn: <a href='https://www.linkedin.com/in/joseph-dodge/' target='_blank' rel='noreferrer' style={{ textDecoration: 'underline'}}>Joseph Dodge</a></p>
        <p>GitHub: <a href='https://github.com/josephdodge8141' target='_blank' rel='noreferrer' style={{ textDecoration: 'underline'}}>josephdodge8141</a></p>
        <p>Phone: <a href="tel:18016419821" style={{ textDecoration: 'underline'}}>(801)641-9821</a></p>
        <p>Email: <a href = "mailto: josephdodge8141@gmail.com" style={{ textDecoration: 'underline'}}>josephdodge8141@gmail.com</a></p>
    </div>
  );
}
export default Contact;