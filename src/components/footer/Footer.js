import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h5>About Us</h5>
            <p>This website is a personal project</p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: devenkapadia@gmail.com</li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <h5>Follow Us</h5>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#">Facebook</a></li>
              <li className="list-inline-item"><a href="#">Twitter</a></li>
              <li className="list-inline-item"><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <p className="text-center">&copy; {new Date().getFullYear()} The Good Cinema Guide CineWorld. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
