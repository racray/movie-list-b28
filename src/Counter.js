import { useState } from 'react';
import Button from '@mui/material/Button';


export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div className="counter-likdis">
      <Button variant="contained" onClick={() => setLike(like + 1)}>👍 {like}</Button>
      <Button variant="contained" onClick={() => setDislike(dislike + 1)}>👎 {dislike}</Button>
    </div>
  );
}
