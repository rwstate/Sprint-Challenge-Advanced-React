import React, { useEffect } from 'react';
import Player from "./Player";
import {useLocalStorage} from "../hooks/useLocalStorage";

const Display = props => { 
  const [playerData, setPlayerData] = useLocalStorage('players', []);

  useEffect(() => {
    const filteredArray = []

    const allowed = ['name', 'searches'];

    const filtered = props.data.forEach(el => filteredArray.push(Object.keys(el)
      .filter(key => allowed.includes(key))
      .reduce((obj, key) => {
        return {
          ...obj,
          [key]: el[key]
        };
      }, {})))

    setPlayerData(filteredArray)
  }, [props.data])

  if (props.data === []) {
    return(
      <p>Loading</p>
    )
  }

  return (
    <div>
      <Player data={playerData} />
    </div>
  )
}
export default Display;