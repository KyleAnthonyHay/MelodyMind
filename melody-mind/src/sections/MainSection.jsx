import React from 'react'
import './styles/MainSection.css'
import { Meteors } from "../components/ui/meteors"; 
import MainCard from '../components/MainCard';

const MainSection = () => {
  return (
    <>
        <MainCard />
        <Meteors number={10} />
    </>
  )
}

export default MainSection