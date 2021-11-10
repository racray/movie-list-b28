import { Counter } from './Counter';
import { useState } from 'react';
import Button from '@mui/material/Button';

export function Mvs({ title, picture, rating, summary }) {
  const [show,setShow] = useState(true)

  const styles = {
    color: rating < 8 ? "crimson" : "green",fontWeight:"bold"
  };
  const summarystyles = {
    display: show ? "block" : "none"
  };


  return (
    <div className="movie-div">
      <h1 className="movie-title"> {title} </h1>
      <img className="movie-picture" src={picture} alt={title} />
      <h3 className="movie-rating" style={styles}> 🌟: {rating} </h3>
      <Button onClick={()=>setShow(!show)} variant="outlined">{show ? "Hide" : "Show"} Description</Button>
      <p style={summarystyles}> {summary} </p>
      <Counter/>

    </div>
  );
}
