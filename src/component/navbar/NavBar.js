import React from 'react'

const NavBar = () => {
  return (
    <>
     <header className="header_main">
        <div className="head1">
            <h3>Affiliation Code : AI-4794
            </h3>
            <p>मानव संसाधन आणि विकास मंत्रालय, उच्च शिक्षण विभाग व <br/> कौशल्य विकास आणि उद्योजकता मंत्रालय भारत सरकार-नवी दिल्ल्ली मान्यता प्राप्त <br/> ऑल इंडिया कौन्सिल फॉर व्होकेशनल अँड पॅरामेडिकल सायन्स नवी दिल्ली संलग्नित <br/> ओजस बहू उद्देशीय सेवा
                भावी संस्था संचालित </p>

        </div>
        <div className="head2">
            <img src={require("../../images/logohead.png")} className="logohead1"/>
            <div className="head3">
                <h1>स्वराज्य पॅरामेडिकल इन्स्टिट्युट
                </h1>
                <h2>कॉरस्पॉन्डन्स (डिस्टन्स एज्युकेशन) स्टडी सेंटर, महाराष्ट्र
                </h2>
            </div>
            <img  src={require("../../images/logohead.png")} className="logohead2"/>
        </div>

    </header>

    <nav id="navbar" style={{zIndex: "10", opacity:"1"}}>

        <ul>
            <li className="active"><a href="index.html"><i className="bi bi-house-door"></i>Home</a></li>

            <li className="dropdown">
                <a href="courses.html" className="dropbtn">Courses</a>
                <div className="dropdown-content">
                    <div className="fl">
                        <a href="#">  DMLT (DIPLOMA IN MEDICAL LABORATORY TECHNICIAN)</a>
                        <a href="#">DIPLOMA IN X-RAY TECHNICIAN</a>
                        <a href="#">DIPLOMA IN RADIOLOGY TECHNICIAN</a>
                        <a href="#"> IN ECG TECHNICIAN</a>
                        <a href="#">DIPLOMA IN HEALTH AND SANITARY INSPECTOR</a>
                        <a href="#">DIPLOMA IN SANITARY INSPECTOR</a>
                        <a href="#">DIPLOMA IN MRI TECHNICIAN </a>
                        <a href="#">DIPLOMA IN CT SCAN TECHNICIAN</a>
                        <a href="#">DIPLOMA IN ICU ASSISTANT</a>
                        <a href="#">DIPLOMA IN OPERATION THEATRE ASSISTANT</a>
                        <a href="#">DIPLOMA IN DIETITICIAN</a>
                        <a href="#">DIPLOMA IN PHYSIOTHERAPY</a>
                    </div>
                    <div className="fl">
                        <a href="#">DIPLOMA IN YOGA IN NATUROPATHY </a>
                        <a href="#">DIPLOMA IN CHIROPRACTOR AND PHYSIOTHERAPY</a>
                        <a href="#">DIPLOMA IN COMMUNITY HEALTH WORKER</a>
                        <a href="#">DIPLOMA IN AROGYA SEWAK</a>
                        <a href="#">DIPLOMA IN MULTIPURPOSE HEALTH ASSISTANT</a>
                        <a href="#">DIPLOMA IN HOSPITAL MANAGEMENT </a>
                        <a href="#">DIPLOMA IN CMS & ED</a>
                        <a href="#">DIPLOMA IN DCH</a>
                        <a href="#">DIPLOMA IN DGO</a>
                        <a href="#">DIPLOMA IN OPTHALMOLOGIEST </a>
                        <a href="#">DIPLOMA IN NURSING ASSISTANT </a>
                        <a href="#">DIPLOMA IN GYNECOLOGY ASSISTANT</a>

                    </div>
                </div>

            </li>
            <li className="dropdown">
                <a href="javascript:void(0)" className="dropbtn">Council</a>
                <div className="dropdown-content">

                    <a href="#">COUNCIL AUTHENTICATION</a>
                    <a href="#">CMS & ED PRACTICE GOVERNMENT JUDGMENTS</a>
                    <a href="#">SWARAJYA AFFILIATION </a>
                    <a href="#">AICVPS</a>
                    <a href="#">AICVPS VERIFICATION</a>
                </div>
            </li>
            <li className="dropdown">
                <a href="#" className="dropbtn">Students</a>
                <div className="dropdown-content">

                    <a href="#">STUDENT LOGIN</a>
                    <a href="#">APPEAR FOR ONLINE EXAM</a>
                    <a href="#">ONLINE ENROLLMENT</a>
                    <a href="#">OFFLINE ENROLLMENT FORM</a>
                    <a href="#">OFFLINE SELF AFFIDAVIT FORM</a>
                    <a href="">INTERNSHIP REFERENCE LETTER</a>
                    <a href="#">SYLLABUS</a>
                    <a href="prospectus.html">PROSPECTUS</a>
                    <a href="#">OFFLINE ADMISSION FORM </a>
                    <a href="#">INTERNSHIP REFERENCE LETTER </a>
                </div>
            </li>
            <li className="dropdown">
                <a href="aboutUs.html" className="dropbtn">About Us</a>

                <div className="dropdown-content">

                    <a href="#">ABOUT DISTANCE EDUCATION </a>
                    <a href="#">BENEFITS OF CORRESPONDANCE EDUCATION </a>
                    <a href="#">OPPORTUNITIES IN NHM/NRHM</a>

                </div>
            </li>
            <li><a href="#home">Principal Desk</a></li>
            <li><a href="#home">Contact Us</a></li>
            <li><a href="#home">Help</a></li>
       </ul>

    </nav>


    </>
  )
}

export default NavBar