import { useState } from 'react';
import { Mvs } from './Mvs';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


// function AddColor(){
//   const [color,setColor] = useState("red");
//   const styles = {backgroundColor:color};
//   // const colors = ["teal","orange","lavender"];
//   const [colors,setColors] = useState(["teal","orange","lavender"]);
//   return(<div>
//     <input value={color}
//     onChange={(event)=>setColor(event.target.value)}
//     style={styles}
//     placeholder="Enter Color"/>
//     <button onClick={()=>setColors([...colors,color])}>Add Color</button>
//     <Button variant="outlined">Outlined</Button>
//       {colors.map((clr) =>  <ColorBox color={clr}/>)}
//   </div>)
// }
// function ColorBox({color}) {
//   const styles = {
//     backgroundColor: color,
//     height:"25px",
//     width:"250px",
//     marginTop: "10px"
//   };
//   return <div style={styles}></div>
// }
export function CallMovie() {
  const mov = [{ title: "Fight Club", picture: "http://cdn.shopify.com/s/files/1/0151/0741/products/PGX0013_1024x1024.jpg?v=1578633303", rating: 8.8, summary: "A depressed man (Edward Norton) suffering from insomnia meets a strange soap salesman named Tyler Durden (Brad Pitt) and soon finds himself living in his squalid house after his perfect apartment is destroyed. The two bored men form an underground club with strict rules and fight other men who are fed up with their mundane lives. Their perfect partnership frays when Marla (Helena Bonham Carter), a fellow support group crasher, attracts Tyler's attention." },
  { title: "The Dark Knight", picture: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg", rating: 9, summary: "With the help of allies Lt. Jim Gordon (Gary Oldman) and DA Harvey Dent (Aaron Eckhart), Batman (Christian Bale) has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker (Heath Ledger) suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism." },
  { title: "The Prestige", picture: "https://alternativemovieposters.com/wp-content/uploads/2021/02/FaronFlood_ThePrestige.jpg", rating: 8.5, summary: "Period thriller set in Edwardian London where two rival magicians, partners until the tragic death of an assistant during a show, feud bitterly after one of them performs the ultimate magic trick - teleportation. His rival tries desperately to uncover the secret of his routine, experimenting with dangerous new science as his quest takes him to the brink of insanity and jeopardises the lives of everyone around the pair." },
  { title: "Interstellar", picture: "https://i.pinimg.com/originals/26/ee/c3/26eec32582fabc16d00cb64f37f2a393.jpg", rating: 8.6, summary: "In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home." },
  { title: "Avatar", picture: "https://movieposters2.com/images/670908-b.jpg", rating: 7.8, summary: "On the lush alien world of Pandora live the Na'vi, beings who appear primitive but are highly evolved. Because the planet's environment is poisonous, human/Na'vi hybrids, called Avatars, must link to human minds to allow for free movement on Pandora. Jake Sully (Sam Worthington), a paralyzed former Marine, becomes mobile again through one such Avatar and falls in love with a Na'vi woman (Zoe Saldana). As a bond with her grows, he is drawn into a battle for the survival of her world." },
  { title: "Inception", picture: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg", rating: 8.8, summary: "Dom Cobb (Leonardo DiCaprio) is a thief with the rare ability to enter people's dreams and steal their secrets from their subconscious. His skill has made him a hot commodity in the world of corporate espionage but has also cost him everything he loves. Cobb gets a chance at redemption when he is offered a seemingly impossible task: Plant an idea in someone's mind. If he succeeds, it will be the perfect crime, but a dangerous enemy anticipates Cobb's every move." }];

  const [title, setTitle] = useState(mov[0].title);
  const [picture, setPicture] = useState(mov[0].picture);
  const [rating, setRating] = useState(mov[0].rating);
  const [summary, setSummary] = useState(mov[0].summary);

  const [movies, setMovies] = useState(mov);

  return (
    <div>
      <div className="movie-input">
        <TextField placeholder="Enter Movie Title"
          onChange={(event) => setTitle(event.target.value)} variant="standard" />
        <TextField placeholder="Enter Movie image address"
          onChange={(event) => setPicture(event.target.value)} variant="standard"/>
        <TextField placeholder="Enter Movie Rating"
          onChange={(event) => setRating(event.target.value)} variant="standard" />
        <TextField placeholder="Enter Movie Summary"
          onChange={(event) => setSummary(event.target.value)} variant="standard" />
        <Button onClick={() => {
          setMovies([...movies, { title, picture, rating, summary }]);
        }} variant="contained" className="add-button">Add Movie</Button>
      </div>
      <section className="container">

        {movies.map((mv) => <Mvs title={mv.title} picture={mv.picture} rating={mv.rating} summary={mv.summary} />)}
      </section>
    </div>);
}
