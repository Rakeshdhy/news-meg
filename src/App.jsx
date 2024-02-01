import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import NewsBoard from './Components/NewsBoard';
import Country from './Components/Country';
import Footer from './Components/Footer';

const App = () => {
const [category, setCategory] = useState("general");
const [country, setCountry] = useState("us");


  return (
    <>
      
      <Navbar setCategory={setCategory}/>
      <Country setCountry={setCountry}/>
      <NewsBoard category={category} country={country}  />
      <Footer/>
    </>
  )
}

export default App
