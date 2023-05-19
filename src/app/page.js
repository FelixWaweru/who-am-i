import Image from 'next/image'
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Main from './components/Main';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Divider from './components/Divider';
import Blog from './components/Blog';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
        <div className="px-24 pb-24 md:px-0 md:mx-5">
          <Main />
            <Divider/>
          <About />
            <Divider/>
          <Skills />
            <Divider/>
          <Blog/>
            <Divider/>
          <Projects />
            <Divider/>
          <Contact />
        </div>
      <Footer />
    </main>
  )
}
