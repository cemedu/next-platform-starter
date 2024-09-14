import React from 'react';
import Container2 from '../container/Container2';

const Footer1 = () => {
  return (
    <Container2>
      <footer className="bg-[var(--bg1)] text-white py-6">
        <div className="mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Links */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-white hover:text-gray-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" className="text-white hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" className="text-white hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" className="text-white hover:text-gray-400">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* About Us Section */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">About Us</h2>
            <p className="text-sm">
              We are committed to providing high-quality services and products. Our team is dedicated to ensuring customer satisfaction and delivering exceptional value.
            </p>
          </div>

          {/* Website URLs */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Website Links</h2>
            <ul className="list-none space-y-1 text-sm">
              <li>
                <a href="/" className="text-white hover:text-gray-400">Home</a>
              </li>
              <li>
                <a href="/about" className="text-white hover:text-gray-400">About</a>
              </li>
              <li>
                <a href="/services" className="text-white hover:text-gray-400">Services</a>
              </li>
              <li>
                <a href="/contact" className="text-white hover:text-gray-400">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm">&copy; {new Date().getFullYear()} interviewquestions.solutions. All rights reserved.</p>
        </div>
      </footer>
    </Container2>
  );
};

export default React.memo(Footer1);
