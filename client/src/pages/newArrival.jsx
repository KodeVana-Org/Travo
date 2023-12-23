import Footer from "../components/footer"
import GetPlace from '../components/newArrival/getPlaces'
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