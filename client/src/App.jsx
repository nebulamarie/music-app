import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ArtistCard from './components/ArtistCard.jsx'


function App() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchArtists = async () => {
      const response = await fetch('http://localhost:3001/artists');
      const data = await response.json();
      setArtists(data);
    };
    fetchArtists();
  }, []);
  /* map over our artists array, use a component called "ArtistCard.jsx" for each artist */
  return (
    <div className="App">
      {
        artists?.map((artist) => {
          console.log(artist)
          return <ArtistCard key={artist.id} {...artist} />
        })
      }
    </div>
  )
}


export default App;
