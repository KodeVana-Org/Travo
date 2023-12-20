import NavBar from "../components/navbar"
import Footer from "../components/footer"
import Contact from "../components/contact/contact"

function Contact_us() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="mx-96">
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Contact_us