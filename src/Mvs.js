import { Counter } from './Counter';
import { useState, useEffect } from 'react';
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

export function Mvs() {
  const history = useHistory();
  const [movies, setMovies] = useState([]);
  // console.log(movies);
  const getMovies = () => {
    fetch("https://6166c4d713aa1d00170a66f5.mockapi.io/movies")
      .then((data) => data.json())
      .then((mvs) => setMovies(mvs))
  };

  useEffect(getMovies, []);

  const deleteMovie = (id) => {
    // console.log(id)
    fetch(`https://6166c4d713aa1d00170a66f5.mockapi.io/movies/${id}`, {
      method: "DELETE",
    }).then(() => getMovies());
  };

  return (
    <section className="container">
      {movies.map((mv) =>
        <Card sx={{ maxWidth: 400, minWidth: 400, height:"min-content" }}>
          <CardHeader
            title={mv.title}
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
              history.push("/Mvs/" + mv.id)
            }}>
            <InfoIcon />
          </InfoButton>
          <h3 className="movie-rating"> 🌟: {mv.rating} </h3>
          <CardContent>
            <ShowSummary  summary={mv.summary}/>

            <InfoButton

              onClick={() => {
                history.push("/Edit/" + mv.id)
              }}>
              <EditSharpIcon />
            </InfoButton>
            <InfoButton
              onClick={() => deleteMovie(mv.id)}>
              <DeleteSharpIcon />
            </InfoButton>
            <Counter />
          </CardContent>
        </Card>
      )}
    </section>
  );
}

function ShowSummary({summary}) {
  const [show, setShow] = useState(true)

  const summarystyles = {
    display: show ? "block" : "none"
  };

  return (
    <Typography variant="body2" color="text.secondary">
      <Button onClick={() => setShow(!show)} variant="outlined">{show ? "Hide" : "Show"} Description</Button>
      <p style={summarystyles}> {summary} </p>
    </Typography>

  )
}