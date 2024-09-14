import React from 'react'
import AboutUs from './AboutCard'
import Container1 from '@/components/container/Container1';

export const metadata = {
  title: 'About Us | Interview Questions and Solutions',
  keywords: 'interviews, questions, nodejs, reactjs, programming',
  description: 'Prepare for your interview with our top-notch resources and guides',
  author: 'Srisir',
};

const page = () => {
  return (
    <>
      <Container1>
        <AboutUs />
      </Container1>
    </>
  )
}

export default page