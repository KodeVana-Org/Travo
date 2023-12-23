import { Img } from 'react-image';

import '../../styles/rotateImage.css'

import Reactangle from '../../assets/images/shape-1.png'

export default function RotatingReactangle() {
  return (
    <div className='h-fit w-fit'>
      <Img
        className='rotatingImage'
        src={Reactangle}
        alt='Reactangle graphic'
      />
    </div>
  )
}
