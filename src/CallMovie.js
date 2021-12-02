import { Counter } from './Counter';
import { useState,useEffect } from 'react';
import Button from '@mui/material/Button';
import InfoButton from '@mui/material/IconButton';
import { useHistory } from 'react-router-dom';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import InfoIcon from '@mui/icons-material/Info';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export function CallMovie({mv}) {
    const [show, setShow] = useState(true)
    const history = useHistory();
    const styles = {
        color: mv.rating < 8 ? "crimson" : "green", fontWeight: "bold"
    };
    const summarystyles = {
        display: show ? "block" : "none"
    };
    const API_URL = "https://b28-wd-movies2.herokuapp.com"
    const [movies,setMovies] = useState([]);
    console.log(movies);
    const getMovies = () => {
        fetch(`${API_URL}/movies`)
        .then((data)=>data.json())
        .then((mvs)=>setMovies(mvs))
    };

    useEffect(getMovies,[]);

    const deleteMovie = (_id) => {
        console.log(_id)
        fetch(`${API_URL}/movies/${_id}`,{
            method:"DELETE",
        }).then(()=>getMovies());
    };

    return (
        
        <Card sx={{ maxWidth: 400, minWidth: 400 }}>
            <CardHeader
                title={mv._id}
                
            />
            <CardMedia
                component="img"
                height="194"
                image={mv.picture}
                alt={mv.title}
            />
            <InfoButton
                color="secondary"
                onClick={() => {
                    history.push("/Mvs/" + mv._id)
                }}>
                <InfoIcon />
            </InfoButton>
            <h3 className="movie-rating" style={styles}> 🌟: {mv.rating} </h3>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    <Button onClick={() => setShow(!show)} variant="outlined">{show ? "Hide" : "Show"} Description</Button>
                    <p style={summarystyles}> {mv.summary} </p>
                </Typography>
                <InfoButton

                    onClick={() => {
                        console.log(mv._id)
                        history.push("/Edit/" + mv._id)
                    }}>
                    <EditSharpIcon />
                </InfoButton>
                <InfoButton
                    onClick={() => deleteMovie(mv._id)}>
                    <DeleteSharpIcon />
                </InfoButton>
                <Counter />
            </CardContent>
        </Card>
    );
}