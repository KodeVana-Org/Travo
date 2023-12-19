import NavBar from "../components/navbar"
import Footer from "../components/footer"
import DestinationsCard from "../components/destinations/destinations"

export default function Destinations() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="mx-96">
        <h1 className="mt-7 text-3xl font-extrabold">World is waiting for you!</h1>
        <p className="text-lg font-medium">Choose a destination and hit the road leaving all the worries to <span className="border-b-2 border-[#FCC603]">Travo</span></p>
        <DestinationsCard></DestinationsCard>
      </div>
      <Footer></Footer>
    </div>
  )
}
