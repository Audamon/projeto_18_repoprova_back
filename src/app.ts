import './setup';
import express from 'express';
import cors from 'cors';
import 'reflect-metadata';

import connectDatabase from './database';
import * as createUserController from './Controllers/createUser';
import * as loginUserController from './Controllers/loginUser';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/signup', createUserController.createUser);
app.post('/login', loginUserController.loginUser);
app.get('/test/professor');
app.get('/test/professor/type');
app.get('/test/period');
app.get('/test/period/subject');
app.get('/test/period/subject/type');

app.post('/test');
app.delete('/logout');

export async function init() {
  await connectDatabase();
}

export default app;
