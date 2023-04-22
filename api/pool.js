import pkg from 'pg';
const {Pool} = pkg;

const pool = new Pool({
    host:"containers-us-west-21.railway.app",
    user:"postgres",
    password:"HvvwNKKv2spdzGZAFHPm",
    database: "music",
    port: 6392
});
export default pool;