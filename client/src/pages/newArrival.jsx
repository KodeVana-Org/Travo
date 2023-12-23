import Footer from "../components/footer"
import GetPlace from '../components/newArrival/getPlaceWtihDelete'
import AddPlace from '../components/newArrival/addPlaces'

function NewArrival() {
  return (
    <div>
      <GetPlace />
      <AddPlace />
      <Footer></Footer>
    </div>
  )
}

export default NewArrival