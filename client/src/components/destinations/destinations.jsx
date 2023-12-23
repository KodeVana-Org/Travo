import { Link } from "react-router-dom"

import '../../styles/destination_card.css'

import DestinationData from '../../assets/js/data_destinations.js'

export default function Destinations() {
  const Destination1 = DestinationData[0];
  const Destination2 = DestinationData[1];
  const Destination3 = DestinationData[2];
  const Destination4 = DestinationData[3];
  const Destination5 = DestinationData[4];
  const Destination6 = DestinationData[5];
  const Destination7 = DestinationData[6];
  const Destination8 = DestinationData[7];
  const Destination9 = DestinationData[8];
  const Destination10 = DestinationData[9];
  const Destination11 = DestinationData[10];
  const Destination12 = DestinationData[11];
  const Destination13 = DestinationData[12];
  const Destination14 = DestinationData[13];
  const Destination15 = DestinationData[14];
  const Destination16 = DestinationData[15];
  const Destination17 = DestinationData[16];
  const Destination18 = DestinationData[17];
  const Destination19 = DestinationData[18];
  const Destination20 = DestinationData[19];
  const Destination21 = DestinationData[20];
  const Destination22 = DestinationData[21];
  const Destination23 = DestinationData[22];
  const Destination24 = DestinationData[23];
  
  return (
    <div className="my-16 grid grid-cols-3 gap-6">
      <div className="grid grid-rows-5 gap-6 overflow-hidden rounded-md">
        <Link to={'/destinations'} className="row-span-3 relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">{Destination1.place}</h3>
            <p className="text-xl text-[#FCC603] font-bold">{Destination1.country}</p>
          </span>
          <img className="h-fit w-full rounded-md destination-card-image" src={Destination1.image} alt="Destination Image" />
        </Link>
        <Link to={'/destinations'} className="row-span-2 relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">{Destination2.place}</h3>
            <p className="text-xl text-[#FCC603] font-bold">{Destination2.country}</p>
          </span>
          <img className="h-full rounded-md destination-card-image" src={Destination2.image} alt="Destination Image" />
        </Link>
      </div>
      <div className="overflow-hidden rounded-md">
        <Link to={'/destinations'} className="relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">{Destination3.place}</h3>
            <p className="text-xl text-[#FCC603] font-bold">{Destination3.country}</p>
          </span>
          <img className="h-full w-full rounded-md destination-card-image" src={Destination3.image} alt="Destination Image" />
        </Link>
      </div>
      <div className="overflow-hidden rounded-md grid grid-rows-2 gap-6">
        <Link to={'/destinations'} className="relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">{Destination4.place}</h3>
            <p className="text-xl text-[#FCC603] font-bold">{Destination4.country}</p>
          </span>
          <img className="h-full w-full rounded-md destination-card-image" src={Destination4.image} alt="Destination Image" />
        </Link>
        <Link to={'/destinations'} className="relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">{Destination5.place}</h3>
            <p className="text-xl text-[#FCC603] font-bold">{Destination5.country}</p>
          </span>
          <img className="h-full w-full rounded-md destination-card-image" src={Destination5.image} alt="Destination Image" />
        </Link>
      </div>
      <div className="overflow-hidden rounded-md">
        <Link to={'/destinations'} className="relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">{Destination6.place}</h3>
            <p className="text-xl text-[#FCC603] font-bold">{Destination6.country}</p>
          </span>
          <img className="h-full w-full rounded-md destination-card-image" src={Destination6.image} alt="Destination Image" />
        </Link>
      </div>
      <div className="grid grid-rows-2 gap-6 overflow-hidden rounded-md">
        <Link to={'/destinations'} className="relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">{Destination7.place}</h3>
            <p className="text-xl text-[#FCC603] font-bold">{Destination7.country}</p>
          </span>
          <img className="h-full w-full rounded-md destination-card-image" src={Destination7.image} alt="Destination Image" />
        </Link>
        <Link to={'/destinations'} className="relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">{Destination7.place}</h3>
            <p className="text-xl text-[#FCC603] font-bold">{Destination7.country}</p>
          </span>
          <img className="h-full rounded-md destination-card-image" src={Destination7.image} alt="Destination Image" />
        </Link>
      </div>
      <div className="grid grid-rows-3 gap-6 overflow-hidden rounded-md">
        <Link to={'/destinations'} className="row-span-1 relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">{Destination8.place}</h3>
            <p className="text-xl text-[#FCC603] font-bold">{Destination8.country}</p>
          </span>
          <img className="h-full w-full rounded-md destination-card-image" src={Destination8.image} alt="Destination Image" />
        </Link>
        <Link to={'/destinations'} className="row-span-2 relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">{Destination9.place}</h3>
            <p className="text-xl text-[#FCC603] font-bold">{Destination9.country}</p>
          </span>
          <img className="h-full rounded-md destination-card-image" src={Destination9.image} alt="Destination Image" />
        </Link>
      </div>
      <div className="grid grid-rows-5 gap-6 overflow-hidden rounded-md">
        <Link to={'/destinations'} className="row-span-3 relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">{Destination10.place}</h3>
            <p className="text-xl text-[#FCC603] font-bold">{Destination10.country}</p>
          </span>
          <img className="h-full w-full rounded-md destination-card-image" src={Destination10.image} alt="Destination Image" />
        </Link>
        <Link to={'/destinations'} className="row-span-2 relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">{Destination11.place}</h3>
            <p className="text-xl text-[#FCC603] font-bold">{Destination11.country}</p>
          </span>
          <img className="h-full rounded-md destination-card-image" src={Destination11.image} alt="Destination Image" />
        </Link>
      </div>
      <div className="overflow-hidden rounded-md">
        <Link to={'/destinations'} className="relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">{Destination12.place}</h3>
            <p className="text-xl text-[#FCC603] font-bold">{Destination12.country}</p>
          </span>
          <img className="h-fit w-full rounded-md destination-card-image" src={Destination12.image} alt="Destination Image" />
        </Link>
      </div>
      <div className="grid grid-rows-5 gap-6 overflow-hidden rounded-md">
        <Link to={'/destinations'} className="row-span-3 relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">{Destination13.place}</h3>
            <p className="text-xl text-[#FCC603] font-bold">{Destination13.country}</p>
          </span>
          <img className="h-full w-full rounded-md destination-card-image" src={Destination13.image} alt="Destination Image" />
        </Link>
        <Link to={'/destinations'} className="row-span-2 relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">{Destination14.place}</h3>
            <p className="text-xl text-[#FCC603] font-bold">{Destination14.country}</p>
          </span>
          <img className="h-full rounded-md destination-card-image" src={Destination14.image} alt="Destination Image" />
        </Link>
      </div>
      <div className="grid grid-rows-2 gap-6 overflow-hidden rounded-md">
        <Link to={'/destinations'} className="relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">{Destination15.place}</h3>
            <p className="text-xl text-[#FCC603] font-bold">{Destination15.country}</p>
          </span>
          <img className="h-full w-full rounded-md destination-card-image" src={Destination15.image} alt="Destination Image" />
        </Link>
        <Link to={'/destinations'} className="relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">{Destination16.place}</h3>
            <p className="text-xl text-[#FCC603] font-bold">{Destination16.country}</p>
          </span>
          <img className="h-full rounded-md destination-card-image" src={Destination16.image} alt="Destination Image" />
        </Link>
      </div>
      <div className="overflow-hidden rounded-md">
        <Link to={'/destinations'} className="relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">{Destination17.place}</h3>
            <p className="text-xl text-[#FCC603] font-bold">{Destination17.country}</p>
          </span>
          <img className="h-full w-full rounded-md destination-card-image" src={Destination17.image} alt="Destination Image" />
        </Link>
      </div>
      <div className="overflow-hidden rounded-md">
        <Link to={'/destinations'} className="relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">{Destination18.place}</h3>
            <p className="text-xl text-[#FCC603] font-bold">{Destination18.country}</p>
          </span>
          <img className="h-full w-full rounded-md destination-card-image" src={Destination18.image} alt="Destination Image" />
        </Link>
      </div>
      <div className="grid grid-rows-2 gap-6 overflow-hidden rounded-md">
        <Link to={'/destinations'} className="relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">{Destination19.place}</h3>
            <p className="text-xl text-[#FCC603] font-bold">{Destination19.country}</p>
          </span>
          <img className="h-full w-full rounded-md destination-card-image" src={Destination19.image} alt="Destination Image" />
        </Link>
        <Link to={'/destinations'} className="relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">{Destination20.place}</h3>
            <p className="text-xl text-[#FCC603] font-bold">{Destination20.country}</p>
          </span>
          <img className="h-full w-full rounded-md destination-card-image" src={Destination20.image} alt="Destination Image" />
        </Link>
      </div>
      <div className="overflow-hidden rounded-md">
        <Link to={'/destinations'} className="relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">{Destination21.place}</h3>
            <p className="text-xl text-[#FCC603] font-bold">{Destination21.country}</p>
          </span>
          <img className="h-full w-full rounded-md destination-card-image" src={Destination21.image} alt="Destination Image" />
        </Link>
      </div>
      <div className="grid grid-rows-2 gap-6 overflow-hidden rounded-md">
        <Link to={'/destinations'} className="relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">{Destination22.place}</h3>
            <p className="text-xl text-[#FCC603] font-bold">{Destination22.country}</p>
          </span>
          <img className="h-full w-full rounded-md destination-card-image" src={Destination22.image} alt="Destination Image" />
        </Link>
        <Link to={'/destinations'} className="relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">{Destination23.place}</h3>
            <p className="text-xl text-[#FCC603] font-bold">{Destination23.country}</p>
          </span>
          <img className="h-full w-full rounded-md destination-card-image" src={Destination23.image} alt="Destination Image" />
        </Link>
      </div>
      <div className="grid grid-rows-1 gap-6 overflow-hidden rounded-md">
        <Link to={'/destinations'} className="relative destination-card overflow-hidden rounded-md">
          <span className="absolute bottom-3 left-3 z-10">
            <h3 className="text-lg text-[#FCC603] font-semibold">{Destination24.place}</h3>
            <p className="text-xl text-[#FCC603] font-bold">{Destination24.country}</p>
          </span>
          <img className="h-full w-full rounded-md destination-card-image" src={Destination24.image} alt="Destination Image" />
        </Link>
      </div>
    </div>
  )
}
