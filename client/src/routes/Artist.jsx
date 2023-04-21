import { useParams } from "react-router-dom";
import { useEffect } from "react";


export default function Artist() {
    let {artistId} = useParams();
    const [artist, setArtist] = useState(null);
    const [songs, setSongs] = useState([]);

useEffect(()=>{
    const fetchArtist = async () => {
    const response = await fetch(`http://localhost:3001/artist/${artistId}`)
    //.then((res,rej)=>{return res})
    //.then(data=>console.log(data))
    //.catch(err=>console.log(err,'err'))
    const data = await response.json();
    setArtist(data);
},
fetchArtist();
}, [id]);

useEffect(() =>{
    const fetchSongs = async () => {
        const response = await fetch(`http://localhost:3001/artist/${artistId}/songs`)
    }
}

)
return (
    <div>
        ?????
        {artistId}
    </div>
)
}