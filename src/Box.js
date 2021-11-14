import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Mvs } from './Mvs';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import SvgIcon from '@mui/material/SvgIcon';
import { MovieInput } from './MovieInput';
import { AddColor } from './AddColor';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from './Home';
import { MovieDetails } from './MovieDetails';
import { MovieEdit } from './MovieEdit'
import { Drawer } from './Drawer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { createContext, useContext } from 'react'
import Button from '@mui/material/Button';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import HdIcon from '@mui/icons-material/Hd';
import MovieIcon from '@mui/icons-material/Movie';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';

const context = createContext({ modec: "black" });

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export const drawerWidth = 240;

export const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

export const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export function MiniDrawer({ movies, setMovies }) {

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [modec, setCmode] = useState("light")

  const theme = createTheme({
    palette: {
      mode: modec,
    },
  });




  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={3} style={{ width: "100vw", minHeight: "100vh" }}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar position="fixed" open={open}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: '36px',
                  ...(open && { display: 'none' }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                Navigation Bar
              </Typography>
              <context.Provider value={{ modec, setCmode }}>
                <Typography variant="h6" noWrap component="div" style={{ marginLeft: "auto" }}>
                  <ToggleColorMode />
                </Typography>
              </context.Provider>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open} className="drawer">
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              <ListItem button key="Home">
                <ListItemIcon>
                  <HomeIcon color="primary" />
                </ListItemIcon>
                <Link to="/Home">Home</Link>
              </ListItem>
              <ListItem button key="Movie List">
                <ListItemIcon>
                  <MovieIcon color="primary" />

                </ListItemIcon>
                <Link to="/">Movie List</Link>
              </ListItem>
              <ListItem button key="Adding Movie">
                <ListItemIcon>
                  <HdIcon color="primary"/>
                </ListItemIcon>
                <Link to="/MovieInput">Adding Movie</Link>
              </ListItem>
              <ListItem button key="Color Picker">
                <ListItemIcon>
                  <ColorLensIcon color="primary"/>
                </ListItemIcon>
                <Link to="/AddColor">Color Picker</Link>
              </ListItem>
              <ListItem button key="TicTacToe">
                <ListItemIcon>
                  <VideogameAssetIcon color="primary"/>
                </ListItemIcon>
                <Link to="/TicTacToe">Tic-Tac-Toe</Link>
              </ListItem>


            </List>

            <Divider />

          </Drawer>
          <Switch>
            <Route exact path="/">
              <Mvs movies={movies} setMovies={setMovies} />
            </Route>
            <Route path="/Mvs/:id">
              <MovieDetails movies={movies} />
            </Route>
            <Route path="/Edit/:id">
              <MovieEdit movies={movies} setMovies={setMovies} />
            </Route>
            <Route path="/MovieInput">
              <MovieInput movies={movies} setMovies={setMovies} />
            </Route>
            <Route path="/AddColor">
              <AddColor />
            </Route>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/TicTacToe">
              <TicTacToe />
            </Route>
            <Route path="**">
              Error Not Found
            </Route>
          </Switch>
        </Box>
      </Paper>
    </ThemeProvider>
  );
}






function ToggleColorMode() {
  const { modec, setCmode } = useContext(context);
  const moded = modec === "dark" ? "light" : "dark";
  return (
    <div className="ToggleColor" style={
      {
        backgroundColor: modec === "dark" ? "brown" : "skyblue"
      }
    } >
      <Button onClick={() => {
        setCmode(modec === "dark" ? "light" : "dark")
      }}>
        {moded} mode : {modec === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      </Button></div>
  );
}

function TicTacToe() {
  const nullv = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ];
  const { width, height } = useWindowSize();
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ])
  const [isXTurn, setIsXTurn] = useState(true);

  const decideWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const winner = decideWinner(board);

  const handleClick = (index) => {
    //winner == null becoz stop after wining
    // !board[index] fix a value on a box

    if (winner === null && !board[index]) {
      const boardCopy = [...board];
      boardCopy[index] = isXTurn ? "X" : "O";
      setBoard(boardCopy);
      setIsXTurn(!isXTurn);
    }


  };

  const change = () => {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        if (board[j] === "X" || board[j] === "O") {
          return "none";
        }
      }
      return "block";
    }
  }

  const changeturn = {
    display: change(),
    textAlign: "center",
    margin: "auto"
  }

  const turn = {
    textAlign: "center",
    display: winner ? "none" : "block"
  }

  return (
    <div className="full-game">
      <Paper elevation={3} style={{ marginLeft: "30rem", marginTop: "7rem" }}>
        {isXTurn ? <div><h4 style={turn}>Its X's turn </h4></div> : <div><h4 style={turn}>Its O's turn </h4></div>}

        {winner ? <Confetti width={width} height={height} gravity={0.03} /> : ""}
        <div className="board">
          {/* val takes value from board and board value changes by setboard */}
          {board.map((val, index) => (
            <GameBox val={val} onPlayerClick={() => handleClick(index)} />
          ))}
        </div>

        {isXTurn ? <Button onClick={() => { setIsXTurn(!isXTurn); }} style={changeturn}>Change to O's turn</Button> : <Button onClick={() => { setIsXTurn(!isXTurn); }} style={changeturn}>Change to X's turn</Button>}

        {winner ? <h1 style={{ textAlign: "center",color:"crimson",fontSize:"3rem" }}>Winner is : {winner} </h1> : ""}
        <Button onClick={() => {
          setBoard(nullv)
        }} variant="outlined" style={{ marginLeft: "10rem", marginTop: "3rem" }}>Reset</Button>
      </Paper>
    </div>
  );
}

function GameBox({ onPlayerClick, val }) {
  const styles = { color: val === "X" ? "red" : "blue" };
  return (
    <div style={styles} onClick={onPlayerClick} className="game-box">
      {val}
    </div>
  );

}