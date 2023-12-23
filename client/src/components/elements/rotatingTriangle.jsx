import { Img } from 'react-image';

import '../../styles/rotateImage.css'

import Triagle from '../../assets/images/shape-2.png'

export default function rotatingTriangle() {
  return (
    <div className='h-fit w-fit'>
      <Img
        className='rotatingImage'
        src={Triagle}
        alt='Triagle graphic'
      />
    </div>
  )
}
