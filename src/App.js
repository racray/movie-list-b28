// import { Input } from '@mui/material';
import './App.css';
import { MiniDrawer } from './Box'

export default function App(){
  return(
    <div className="App">
        <MiniDrawer/>
        {/* <CallMovie/> */}
        {/* <AddColor/> */}

    </div>
  )
}


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