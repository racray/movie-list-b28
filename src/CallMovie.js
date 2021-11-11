import { Counter } from './Counter';
import { useState } from 'react';
import Button from '@mui/material/Button';
import InfoButton from '@mui/material/IconButton';
import { useHistory } from 'react-router-dom';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import InfoIcon from '@mui/icons-material/Info';

export function CallMovie({mv,id,movies,setMovies}){
    const [show,setShow] = useState(true)
    const history = useHistory();
    const styles = {
      color: movies.rating < 8 ? "crimson" : "green",fontWeight:"bold"
    };
    const summarystyles = {
      display: show ? "block" : "none"
    };
    return(
        <div className="movie-div">
        <h1 className="movie-title"> {mv.title} </h1>
        <img className="movie-picture" src={mv.picture} alt={mv.title} />
        <InfoButton
        color="secondary"
        onClick={()=>{
          console.log(id)
        history.push("/Mvs/"+ id)}}>
          <InfoIcon/>
        </InfoButton>
        <h3 className="movie-rating" style={styles}> 🌟: {mv.rating} </h3>
  
        <Button onClick={()=>setShow(!show)} variant="outlined">{show ? "Hide" : "Show"} Description</Button>
        <p style={summarystyles}> {mv.summary} </p>
        <InfoButton
        
        onClick={()=>{
            console.log(id)
            history.push("/Edit/"+ id)}}>
        <EditSharpIcon/>
        </InfoButton>
        <InfoButton
        onClick={()=>{
          const rem = movies.filter((mvx,idx)=>idx!==id);  
          setMovies(rem);
  
        }}>
          <DeleteSharpIcon/>
        </InfoButton>
        <Counter/>
  
      </div>
    )
}