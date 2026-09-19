import dotenv from 'dotenv';

const environment ='qa';
dotenv.config({path:`.env.${environment}`});

export const baseUrl =process.env.BASE_URL||'';
export const environmentName=process.env.ENVIRONMENT||'';