import React from 'react'
import './styles/MainSection.css'
import { Meteors } from "../components/ui/meteors"; 

const MainSection = () => {
  return (
    <>
        <div className='main-section'>
            <Meteors number={10} />
        </div>
        
    </>
  )
}

export default MainSection