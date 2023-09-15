import dotenv from 'dotenv'

dotenv.config();

export const PORT = process.env.PORT_SERVER || 5000;
export const DB_URL = process.env.DB_URL;
