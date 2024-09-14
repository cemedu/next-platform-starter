import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Container2 from '../container/Container2';
import Link from 'next/link';
import NavLink from '@/library/urls';
import Icons from '@/library/icons';

const Footer2 = () => {
  return (
    <footer className="bg-[var(--bg1)] text-[var(--text1)] py-6">
      <Container2>
        <div className="mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Links */}
          <div className="mb-4 md:mb-0 text-center">
            <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
            <div className="flex space-x-4">
              <Link href="https://facebook.com">
                <FaFacebookF size={24} />
              </Link>
              <Link href="https://twitter.com">
                <FaTwitter size={24} />
              </Link>
              <Link href="https://instagram.com">
                <FaInstagram size={24} />
              </Link>
              <Link href="https://linkedin.com">
                <FaLinkedinIn size={24} />
              </Link>
            </div>
          </div>

          {/* About Us Section */}
          <div className="mb-4 md:mb-0 text-center">
            <h2 className="text-lg font-semibold mb-2">About Us</h2>
            <p className="text-sm">
              We are dedicated to delivering high-quality services and products. Our goal is to ensure customer satisfaction and offer exceptional value.
            </p>
          </div>

          {/* Website URLs */}
          <div className=''>
            <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
            <ul className="list-none space-y-1 text-sm">
              <li>
                <Link href="/" className="text-[var(--text1)] hover:text-[var(--icon)]">
                  <span className='flex items-center gap-2'>{Icons.Home} Home</span>
                </Link>
              </li>
              <li>
                <Link href={NavLink.about} className="text-[var(--text1)] hover:text-[var(--icon)]">
                  <span className='flex items-center gap-2'>{Icons.Info} About</span>
                </Link>
              </li>
              <li>
                <Link href={NavLink.courses} className="text-[var(--text1)] hover:text-[var(--icon)]">
                  <span className='flex items-center gap-2'>{Icons.Courses} Courses</span>
                </Link>
              </li>
              <li>
                <Link href={NavLink.questions} className="text-[var(--text1)] hover:text-[var(--icon)]">
                  <span className='flex items-center gap-2'>{Icons.Faq} Questions</span>
                </Link>
              </li>
              <li>
                <Link href={NavLink.projects} className="text-[var(--text1)] hover:text-[var(--icon)]">
                  <span className='flex items-center gap-2'>{Icons.Project} Projects</span>
                </Link>
              </li>
              <li>
                <Link href={NavLink.pricing} className="text-[var(--text1)] hover:text-[var(--icon)]">
                  <span className='flex items-center gap-2'>{Icons.Rupees} Pricing</span>
                </Link>
              </li>
              <li>
                <Link href={NavLink.contact} className="text-[var(--text1)] hover:text-[var(--icon)]">
                  <span className='flex items-center gap-2'>{Icons.Message} Contact us</span>
                </Link>
              </li>
              <li>
                <Link href={NavLink.privacy_policy} className="text-[var(--text1)] hover:text-[var(--icon)]">
                  <span className='flex items-center gap-2'>{Icons.Security} Privacy & policy</span>
                </Link>
              </li>

              <li>
                <Link href={NavLink.terms_conditions} className="text-[var(--text1)] hover:text-[var(--icon)]">
                  <span className='flex items-center gap-2'>{Icons.Alert} Terms & conditions</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm text-[var(--text1)]">&copy; {new Date().getFullYear()} interviewquestions.solutions. All rights reserved.</p>
        </div>
      </Container2>
    </footer>
  );
};

export default React.memo(Footer2);
