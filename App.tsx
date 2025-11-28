import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import ChatWidget from './components/ChatWidget';
import Contact from './components/Contacts';

function App() {
  return (
    <Layout>
      <Hero />
      <Experience />
      <Skills />
      <Contact />
      {/* <ChatWidget /> */}
    </Layout>
  );
}

export default App;