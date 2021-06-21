import { useLocalization } from "gatsby-theme-i18n"
import * as React from "react"
import Me from "src/components/Me"
import About from 'src/components/About'
import Skills from 'src/components/Skills'
import Projects from 'src/components/Projects'
import Footer from 'src/components/Footer'
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import Contact from "../components/Contact"

// markup
const IndexPage = () => {
  const { t } = useLocalization();
  return (
    <main>
      <Container fluid className="p-0">
        <Me />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Container>
    </main>
  );
}

export default IndexPage
