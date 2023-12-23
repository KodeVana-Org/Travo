import { Img } from 'react-image';

import '../../styles/rotateImage.css'

import Sphere from '../../assets/images/shape-3.png'

export default function RotatingSphere() {
  return (
    <div className='h-fit w-fit'>
      <Img
        className='rotatingImage'
        src={Sphere}
        alt='Sphere graphic'
      />
    </div>
  )
}
