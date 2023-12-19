import NavBar from '../components/navbar'
import Hero from '../components/home/hero'
import PopularDestinations from '../components/home/popularDestinations'
import PopularTours from '../components/home/popularTours'
import Footer from '../components/footer'

function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <Hero></Hero>
      <PopularDestinations></PopularDestinations>
      <PopularTours></PopularTours>
      <Footer></Footer>
    </div>
  )
}

export default Home