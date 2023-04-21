import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
function ArtistCard ({age, img, name, id}){
   

 
    return (
        <Link to={`artist/${id}`}>
        <div className="ArtistCard">
        <div className='ArtistNameContainer'>{name}</div>
        <div className='ArtistAgeContainer'>{age}</div>
        <img src={img}/>
        </div>
        </Link>
    )
    }
            
//         const selectedArtist  = artist.find(artist =>artist.name ===artistName);
//             console.log(selectedArtist)
//         },

//         }
//     }
// }

export default ArtistCard