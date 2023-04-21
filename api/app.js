import express from 'express'
import cors from 'cors';
import { getAllArtists } from './routes/artist.js';
let app = express();
let port = 3001;
app.use(cors())

app.use('/artists', getAllArtists);
app.use('/',(req,res)=>{
    res.send('Root route')
})

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})