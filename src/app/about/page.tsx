import React from 'react';
import Hero from './components/hero';
import Story from './components/story';
import Values from './components/values';
import Team from './components/team';
import ContactSection from './components/contact/Contact';

const AboutPage = () => {
  return (
    <main>
      <Hero />
      <Story />
      <Values />
      <Team />
      <ContactSection />
    </main>
  );
};

export default AboutPage;