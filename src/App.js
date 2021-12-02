// import { Input } from '@mui/material';
import './App.css';

import { useState,useEffect } from 'react';
import { MiniDrawer} from './Box'
import React from "react";

export default function App(){
  
 

  const [movies,setMovies] = useState([]);

  // const API_URL = "https://6166c4d713aa1d00170a66f5.mockapi.io"
  const API_URL = "https://b28-wd-movies2.herokuapp.com"
 
  useEffect(()=>{
    fetch(`${API_URL}/movies`)
    .then((data)=>data.json())
    .then((mvs)=>setMovies(mvs))
  },[]);

  return(
    <div className="App">
        <MiniDrawer movies={movies} setMovies={setMovies}/>
    </div>
  )
}




