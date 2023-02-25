import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_DB = process.env.MONGO_DB;


export const config = {
    server: {
        port: PORT,
        mongo_username: MONGO_USERNAME,
        mongo_password: MONGO_PASSWORD,
        mongo_db: MONGO_DB
    }
};
