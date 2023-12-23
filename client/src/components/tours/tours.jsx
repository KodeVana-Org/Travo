import { Link } from "react-router-dom"
import ToursData from "../../assets/js/data_tours.js"

export default function Tours() {
  return (
    <div className="mx-96 my-16">
      <h1 className="text-3xl font-bold mb-5">Variour tours planned for you</h1>
      <div className="w-full flex flex-wrap">
        {ToursData.map((tour, index) => (
          <div key={index} className="w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-inner overflow-hidden">
              <img src={tour.image} alt={tour.name} className="w-full h-80 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{tour.name}</h2>
                <p className="mb-5 text-sm text-gray-600">{tour.daysToGo} days to go</p>
                <Link to={`/tour/${index + 1}`} className="mb-3 text-white bg-[#029D9D] hover:text-[#029D9D] hover:bg-white font-semibold rounded-md border-2 border-[#029D9D] text-base px-5 py-2.5">Book Now</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}