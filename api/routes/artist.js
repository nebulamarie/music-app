import pool from '../pool.js';

export const getAllArtists = (req,res) => {
    pool.query("SELECT * FROM artists").then((result,err)=>{
        res.send(result.rows);
    })
}