import NavBar from "../components/navbar"
import Footer from "../components/footer"
import Blog from "../components/blogs/blogs"

function Blogs() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="mx-96">
        <Blog></Blog>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Blogs