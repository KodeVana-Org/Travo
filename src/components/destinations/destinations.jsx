import { Link } from "react-router-dom"

import Destination_1 from '../../assets/beach_destination-1.jpg'
import Destination_2 from '../../assets/waterfall_destination-6.jpg'
import Destination_3 from '../../assets/iceberg_destination-3.jpg'
import Destination_4 from '../../assets/waterfall_destination-5.jpg'
import Destination_5 from '../../assets/waterfall_destination-1.jpg'
import Destination_6 from '../../assets/mountain_destination-2.jpg'
import Destination_7 from '../../assets/beach_destination-4.jpg'
import Destination_8 from '../../assets/iceberg_destination-5.jpg'
import Destination_9 from '../../assets/beach_destination-6.jpg'
import Destination_10 from '../../assets/beach_destination-2.jpg'
import Destination_11 from '../../assets/mountain_destination-1.jpg'
import Destination_12 from '../../assets/mountain_destination-3.jpg'
import Destination_13 from '../../assets/mountain_destination-6.jpg'
import Destination_14 from '../../assets/waterfall_destination-4.jpg'
import Destination_15 from '../../assets/beach_destination-5.jpg'
import Destination_16 from '../../assets/waterfall_destination-2.jpg'
import Destination_17 from '../../assets/mountain_destination-5.jpg'
import Destination_18 from '../../assets/mountain_destination-4.jpg'
import Destination_19 from '../../assets/iceberg_destination-1.jpg'
import Destination_20 from '../../assets/iceberg_destination-2.jpg'
import Destination_21 from '../../assets/beach_destination-3.jpg'
import Destination_22 from '../../assets/waterfall_destination-3.jpg'
import Destination_23 from '../../assets/iceberg_destination-4.jpg'
import Destination_24 from '../../assets/beach_destination-7.jpg'
import Destination_25 from '../../assets/iceberg_destination-6.jpg'

import '../../styles/destination_card.css'

export default function Destinations() {
  return (
    <div className="my-16 grid grid-cols-3 gap-6">
      <div className="grid grid-rows-5 gap-6 overflow-hidden rounded-md">
        <Link to={'/destinations'} className="row-span-3 relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">Place name</h3>
            <p className="text-xl text-[#FCC603] font-bold">Country</p>
          </span>
          <img className="h-fit w-full rounded-md destination-card-image" src={Destination_1} alt="Destination Image" />
        </Link>
        <Link to={'/destinations'} className="row-span-2 relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">Place name</h3>
            <p className="text-xl text-[#FCC603] font-bold">Country</p>
          </span>
          <img className="h-full rounded-md destination-card-image" src={Destination_4} alt="Destination Image" />
        </Link>
      </div>
      <div className="overflow-hidden rounded-md">
        <Link to={'/destinations'} className="relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">Place name</h3>
            <p className="text-xl text-[#FCC603] font-bold">Country</p>
          </span>
          <img className="h-full w-full rounded-md destination-card-image" src={Destination_3} alt="Destination Image" />
        </Link>
      </div>
      <div className="overflow-hidden rounded-md grid grid-rows-2 gap-6">
        <Link to={'/destinations'} className="relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">Place name</h3>
            <p className="text-xl text-[#FCC603] font-bold">Country</p>
          </span>
          <img className="h-full w-full rounded-md destination-card-image" src={Destination_2} alt="Destination Image" />
        </Link>
        <Link to={'/destinations'} className="relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">Place name</h3>
            <p className="text-xl text-[#FCC603] font-bold">Country</p>
          </span>
          <img className="h-full w-full rounded-md destination-card-image" src={Destination_25} alt="Destination Image" />
        </Link>
      </div>
      <div className="overflow-hidden rounded-md">
        <Link to={'/destinations'} className="relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">Place name</h3>
            <p className="text-xl text-[#FCC603] font-bold">Country</p>
          </span>
          <img className="h-full w-full rounded-md destination-card-image" src={Destination_5} alt="Destination Image" />
        </Link>
      </div>
      <div className="grid grid-rows-2 gap-6 overflow-hidden rounded-md">
        <Link to={'/destinations'} className="relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">Place name</h3>
            <p className="text-xl text-[#FCC603] font-bold">Country</p>
          </span>
          <img className="h-full w-full rounded-md destination-card-image" src={Destination_6} alt="Destination Image" />
        </Link>
        <Link to={'/destinations'} className="relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">Place name</h3>
            <p className="text-xl text-[#FCC603] font-bold">Country</p>
          </span>
          <img className="h-full rounded-md destination-card-image" src={Destination_8} alt="Destination Image" />
        </Link>
      </div>
      <div className="grid grid-rows-3 gap-6 overflow-hidden rounded-md">
        <Link to={'/destinations'} className="row-span-1 relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">Place name</h3>
            <p className="text-xl text-[#FCC603] font-bold">Country</p>
          </span>
          <img className="h-full w-full rounded-md destination-card-image" src={Destination_7} alt="Destination Image" />
        </Link>
        <Link to={'/destinations'} className="row-span-2 relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">Place name</h3>
            <p className="text-xl text-[#FCC603] font-bold">Country</p>
          </span>
          <img className="h-full rounded-md destination-card-image" src={Destination_10} alt="Destination Image" />
        </Link>
      </div>
      <div className="grid grid-rows-5 gap-6 overflow-hidden rounded-md">
        <Link to={'/destinations'} className="row-span-3 relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">Place name</h3>
            <p className="text-xl text-[#FCC603] font-bold">Country</p>
          </span>
          <img className="h-full w-full rounded-md destination-card-image" src={Destination_14} alt="Destination Image" />
        </Link>
        <Link to={'/destinations'} className="row-span-2 relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">Place name</h3>
            <p className="text-xl text-[#FCC603] font-bold">Country</p>
          </span>
          <img className="h-full rounded-md destination-card-image" src={Destination_21} alt="Destination Image" />
        </Link>
      </div>
      <div className="overflow-hidden rounded-md">
        <Link to={'/destinations'} className="relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">Place name</h3>
            <p className="text-xl text-[#FCC603] font-bold">Country</p>
          </span>
          <img className="h-fit w-full rounded-md destination-card-image" src={Destination_11} alt="Destination Image" />
        </Link>
      </div>
      <div className="grid grid-rows-5 gap-6 overflow-hidden rounded-md">
        <Link to={'/destinations'} className="row-span-3 relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">Place name</h3>
            <p className="text-xl text-[#FCC603] font-bold">Country</p>
          </span>
          <img className="h-full w-full rounded-md destination-card-image" src={Destination_9} alt="Destination Image" />
        </Link>
        <Link to={'/destinations'} className="row-span-2 relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">Place name</h3>
            <p className="text-xl text-[#FCC603] font-bold">Country</p>
          </span>
          <img className="h-full rounded-md destination-card-image" src={Destination_15} alt="Destination Image" />
        </Link>
      </div>
      <div className="grid grid-rows-2 gap-6 overflow-hidden rounded-md">
        <Link to={'/destinations'} className="relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">Place name</h3>
            <p className="text-xl text-[#FCC603] font-bold">Country</p>
          </span>
          <img className="h-full w-full rounded-md destination-card-image" src={Destination_12} alt="Destination Image" />
        </Link>
        <Link to={'/destinations'} className="relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">Place name</h3>
            <p className="text-xl text-[#FCC603] font-bold">Country</p>
          </span>
          <img className="h-full rounded-md destination-card-image" src={Destination_24} alt="Destination Image" />
        </Link>
      </div>
      <div className="overflow-hidden rounded-md">
        <Link to={'/destinations'} className="relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">Place name</h3>
            <p className="text-xl text-[#FCC603] font-bold">Country</p>
          </span>
          <img className="h-full w-full rounded-md destination-card-image" src={Destination_13} alt="Destination Image" />
        </Link>
      </div>
      <div className="overflow-hidden rounded-md">
        <Link to={'/destinations'} className="relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">Place name</h3>
            <p className="text-xl text-[#FCC603] font-bold">Country</p>
          </span>
          <img className="h-full w-full rounded-md destination-card-image" src={Destination_16} alt="Destination Image" />
        </Link>
      </div>
      <div className="grid grid-rows-2 gap-6 overflow-hidden rounded-md">
        <Link to={'/destinations'} className="relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">Place name</h3>
            <p className="text-xl text-[#FCC603] font-bold">Country</p>
          </span>
          <img className="h-full w-full rounded-md destination-card-image" src={Destination_19} alt="Destination Image" />
        </Link>
        <Link to={'/destinations'} className="relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">Place name</h3>
            <p className="text-xl text-[#FCC603] font-bold">Country</p>
          </span>
          <img className="h-full w-full rounded-md destination-card-image" src={Destination_20} alt="Destination Image" />
        </Link>
      </div>
      <div className="overflow-hidden rounded-md">
        <Link to={'/destinations'} className="relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">Place name</h3>
            <p className="text-xl text-[#FCC603] font-bold">Country</p>
          </span>
          <img className="h-full w-full rounded-md destination-card-image" src={Destination_23} alt="Destination Image" />
        </Link>
      </div>
      <div className="grid grid-rows-2 gap-6 overflow-hidden rounded-md">
        <Link to={'/destinations'} className="relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">Place name</h3>
            <p className="text-xl text-[#FCC603] font-bold">Country</p>
          </span>
          <img className="h-full w-full rounded-md destination-card-image" src={Destination_22} alt="Destination Image" />
        </Link>
        <Link to={'/destinations'} className="relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">Place name</h3>
            <p className="text-xl text-[#FCC603] font-bold">Country</p>
          </span>
          <img className="h-full w-full rounded-md destination-card-image" src={Destination_18} alt="Destination Image" />
        </Link>
      </div>
      <div className="grid grid-rows-1 gap-6 overflow-hidden rounded-md">
        <Link to={'/destinations'} className="relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">Place name</h3>
            <p className="text-xl text-[#FCC603] font-bold">Country</p>
          </span>
          <img className="h-full w-full rounded-md destination-card-image" src={Destination_17} alt="Destination Image" />
        </Link>
      </div>
    </div>
  )
}
