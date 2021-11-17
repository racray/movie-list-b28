// import { Input } from '@mui/material';
import './App.css';

import { useState,useEffect } from 'react';
import { MiniDrawer} from './Box'
import React from "react";

export default function App(){
  
 

  const [movies,setMovies] = useState([]);
 
  useEffect(()=>{
    fetch("https://6166c4d713aa1d00170a66f5.mockapi.io/movies")
    .then((data)=>data.json())
    .then((mvs)=>setMovies(mvs))
  },[]);

  return(
    <div className="App">
        <MiniDrawer movies={movies} setMovies={setMovies}/>
    </div>
  )
}




