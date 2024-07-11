import { MyPlaylist } from "./Components/MyPlaylist"
/**
* Nuestro componente App sera el principal y el que sera renderizado en index.js
*/
export const App = () => <MyPlaylist/>
import { useRef } from "react";

const urlRef = useRef();
const favoriteRef = useRef();

playlist = [{ url: '33qkK1brpt6t8unIpeM2Oy', favorite: true },
    { url: '0H6TddUF2M63ZSHGvhk5yy', favorite: true },
    { url: '3fn4HfVz5dhmE0PG24rh6h', favorite: true },
    { url: '0DQyTVcDhK9wm0f6RaErWO', favorite: true }];

<div>
{
playlist.map(song => <SpotifyPlayer url={song.url} favorite={song.favorite} />)
}
</div>

/**
* Funcion flecha para agregar nueva cancion
*/
const addSong = () => {
    /**
    * Aca capturamos los datos de los inputs previamente enganchados con el hook useRef
    */
    const url = urlRef.current.value;
    const favorite = favoriteRef.current.checked;
    /**
    * Creamos un nuevo objeto con las propiedades url y favorite.
    */
    const newSong = {
    url: url,
    favorite: favorite
    }
    /**
    * Añadimos el nuevo objeto a la lista playlist, mas adelante cambiaremos la forma de
    * agregar elementos a la lista
    */
    playlist.push(newSong);
    /**
    * Comprobamos con un clg que el nuevo objeto se agrego a la lista
    */

    console.log(playlist);
    
}
