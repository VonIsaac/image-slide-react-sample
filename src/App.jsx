
import mySalad from './assets/caesar-salad.jpg'
import myChickend from './assets/chicken-curry.jpg'
import myChocolate from './assets/chocolate-brownie.jpg'
import myEggplant from './assets/eggplant-parmesan.jpg'
import myFalafel from './assets/falafel-wrap.jpg'
import { useState } from 'react'

import './App.css'

function App() {

  const slides = [
    {
      url: mySalad,
    },

    {
      url: myChickend,
    },

    {
      url: myChocolate,
    },

    {
      url: myEggplant,
    },

    {
      url: myFalafel,
    }
    
  ]
  
  const [isPicture, setIsPicture] = useState(0)

  function handleSlidePictures(){
    const pictureSlide = isPicture === 0;

    const slidesPic = pictureSlide ? slides.length - 1: isPicture  -1 

    setIsPicture(slidesPic)
  }

  function handlePictures(){
    const slidess = isPicture === slides.length -1;
    const slidesPic  = slidess ?  0 : isPicture +1

    setIsPicture(slidesPic)
  }

  function handleimageClick(slides){
    setIsPicture(slides)
  }
  

  return (
    <>
        <div className=' flex justify-center item-center py-5'>
          
          <img src= {slides[isPicture].url} alt="image" className=' w-[350px]' />

          <div  >
            <button className=' bg-white' onClick={handleSlidePictures}>CLiCK</button>
          </div>

          <div>
            <button onClick={handlePictures}>CLICK</button>
          </div>

         
        </div>
        <ul className=' flex justify-center item-center gap-3 '>
            {slides.map((slide, slidesId) => ( 
               <div  key={slidesId}>

                <button onClick={() => handleimageClick(slidesId)}>
                  <img src={slide.url} alt="image" className='w-[25px]' />
                </button>
                </div>
            ))}
          </ul>


    </>
  )
}

export default App
