import './setup';
import express from 'express';
import cors from 'cors';
import 'reflect-metadata';

import connect from './database';
import * as createUserController from './Controllers/createUser';

const app = express();
app.use(cors());
app.use(express.json());
console.log(0);
app.post('/signup', createUserController.createUser);
// app.post('/login');
// app.get('/test/professor');
// app.get('/test/professor/type');
// app.get('/test/period');
// app.get('/test/period/subject');
// app.get('/test/period/subject/type');

// app.post('/test');
// app.delete('/logout');

export async function init() {
  await connect();
}

export default app;
