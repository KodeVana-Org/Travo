import { useState } from "react"
import { Img } from "react-image"
import { Link } from "react-router-dom"

import Facebook from '../assets/icons/Facebook-Logo.png'
import Instagram from '../assets/icons/Instagram-Logo.png'
import Twitter from '../assets/icons/Twitter-Logo.png'
import Linkedin from '../assets/icons/LinkedIn-Logo.png'
import Telegram from '../assets/icons/Telegram-Logo.png'

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setSubscribed(true);
      return;
    }
    setEmail('');
  }

  return (
    <footer className="px-96 py-20 footer text-white bg-slate-800">
      <div>
        <div className="mb-7 flex justify-between footer-top">
          <ul>
            <li>
              <h2 className="mb-7 text-2xl font-semibold">Top destination</h2>
            </li>
            <li className="mb-1">
              <Link to={'/'}>Indonesia, Jakarta</Link>
            </li>
            <li className="mb-1">
              <Link to={'/'}>Maldives, Malé</Link>
            </li>
            <li className="mb-1">
              <Link to={'/'}>Australia, Canberra</Link>
            </li>
            <li className="mb-1">
              <Link to={'/'}>Thailand, Bangkok</Link>
            </li>
            <li className="mb-1">
              <Link to={'/'}>Morocco, Rabat</Link>
            </li>
          </ul>
          <ul>
            <li>
              <h2 className="mb-7 text-2xl font-semibold">Categories</h2>
            </li>
            <li className="mb-1">
              <Link to={'/destinations'}>Destinations</Link>
            </li>
            <li className="mb-1">
              <Link to={'/'}>E-visa</Link>
            </li>
            <li className="mb-1">
              <Link to={'/'}>Hotels</Link>
            </li>
            <li className="mb-1">
              <Link to={'/'}>Flights</Link>
            </li>
            <li className="mb-1">
              <Link to={'/'}>Food & Drink</Link>
            </li>
          </ul>
          <ul>
            <li>
              <h2 className="mb-7 text-2xl font-semibold">Quick links</h2>
            </li>
            <li className="mb-1">
              <Link to={'/about'}>About</Link>
            </li>
            <li className="mb-1">
              <Link to={'/contact'}>Contact</Link>
            </li>
            <li className="mb-1">
              <Link to={'/tours'}>Tour</Link>
            </li>
            <li className="mb-1">
              <Link to={'/me'}>Bookings</Link>
            </li>
            <li className="mb-1">
              <Link to={'/tnc'}>Terms & Conditions</Link>
            </li>
          </ul>
          <div>
            <h2 className="mb-7 text-2xl font-semibold">Get a newsletter</h2>
            <p className="mb-2">
              For the latest deals and tips, travel no further than your inbox
            </p>
            <form action="" className="w-fit rounded-md">
              <input
                className="w-96 px-6 py-4 text-black rounded-l-md z-10"
                name='email'
                value={email}
                type="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="" onClick={handleSubscribe} className="px-6 py-4 bg-[#029D9D] rounded-r-md">Subscribe</button>
              <p className={`mt-3 text-lg text-green-400 ${subscribed ? 'opacity-100' : 'opacity-0'}`}>Subscribed successfully!</p>
            </form>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Link to={'/'} className="text-4xl font-extrabold">Travo</Link>
          <p>
            &copy; 2023 <Link to={'https://kodevana.com'}>KodeVana</Link>. All Rights Reserved
          </p>
          <ul className="flex gap-2">
            <li>
              <Link to={''}>
                <Img className="h-10" src={Facebook} />
              </Link>
            </li>
            <li>
              <Link to={''}>
                <Img className="h-10" src={Twitter} />
              </Link>
            </li>
            <li>
              <Link to={''}>
                <Img className="h-10" src={Instagram} />
              </Link>
            </li>
            <li>
              <Link to={''}>
                <Img className="h-10" src={Linkedin} />
              </Link>

            </li>
            <li>
              <Link to={''}>
                <Img className="h-10" src={Telegram} />
              </Link>

            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
