import React from 'react'

const Footer = () => {
  return (
    <>
    
    <footer>
        <div className="main">
            <div className="logo_corner">
                <div className="logo">
                    <img src="images/flogo.png"/>
                    <p>Welcome to Swarajya Paramedical Institute

                    </p>

                </div>
                <div className="paymodes">
                    <h2>Payment Modes</h2>
                    <div className="payicon">
                        <a href="#"> <img src="images/UPI.png"/></a>
                        <a href="#"> <img src="images/visa.png"/></a>
                        <a href="#"> <img src="images/Mastercard-2.png"/></a>
                        <a href="#"> <img src="images/gpay-1.png"/></a>
                        <a href="#"> <img src="images/phonepe.png"/></a>

                    </div>
                </div>
            </div>
            <div className="info_main">
                <div className="quick">

                    <h2>Quick Links</h2>
                    <a href="courses.html">Courses</a>
                    <a href="#">Institute Affiliation</a>
                    <a href="#">Franchise</a>
                    <a href="aboutUs.html">About Us</a>
                    <a href="#">Student Certificate</a>
                    <a href="mission and vision.html">Our Mission</a>
                    <a href="#">Payment Mode</a>
                    <a href="#">Our Prospectus</a>

                </div>

                <div className="policy">
                    <h2>Policy</h2>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Conditions</a>
                </div>
                <div className="info">
                    <h2>Info</h2>
                    <a href="#">Swarajya Paramedical Institute</a>
                    <a href="#">Address</a>
                    <a href="#">Email</a>
                    <a href="#">Contact No.</a>
                </div>
            </div>
        </div>

        <div className="social">
            <div className="cr">
                <p>Copyright © 2022 Swarajya Paramedical Institute. All India Council For Vocational & Paramedical Science. </p><br/>
                <p>All Rights Reserved</p>
            </div>
            <div className="socio-links">
                <a href="#"> <i className="bi bi-facebook fb"></i></a>
                <a href="#"> <i className="bi bi-twitter tr"></i></a>
                <a href="#"><i className="bi bi-instagram ig"></i></a>
                <a href="#"> <i className="bi bi-youtube yt"></i></a>

            </div>
        </div>

    </footer>
    </>
  )
}

export default Footer