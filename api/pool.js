import pkg from 'pg';
const {Pool} = pkg;

const pool = new Pool({
    host:"localhost",
    user:"postgres",
    password:"Ptfd9x623#5",
    database: "music"
});
export default pool;