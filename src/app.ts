import './setup';
import express from 'express';
import cors from 'cors';
import 'reflect-metadata';

import connectDatabase from './database';
import * as userAuthorizationMiddleware from './Middleware/userAuthorization';
import * as createUserController from './Controllers/createUser';
import * as loginUserController from './Controllers/loginUser';
import * as logoutUserController from './Controllers/logoutUser';
import * as postTestController from './Controllers/postTest';
import * as getProfessorsController from './Controllers/getProfessors';
import * as getTestSByProfessorController from './Controllers/getTestsByProfessor';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/signup', createUserController.createUser);
app.post('/login', loginUserController.loginUser);
app.get('/test/professor', userAuthorizationMiddleware.userAuthorization, getProfessorsController.getProfessors);
app.get('/test/professor/type/:id', userAuthorizationMiddleware.userAuthorization, getTestSByProfessorController.getTestsByProfessor);

app.get('/test/period', userAuthorizationMiddleware.userAuthorization);
app.get('/test/period/subject', userAuthorizationMiddleware.userAuthorization);
app.get('/test/period/subject/type', userAuthorizationMiddleware.userAuthorization);

app.post('/test', userAuthorizationMiddleware.userAuthorization, postTestController.postTest);
app.delete('/logout', logoutUserController.logoutUser);

export async function init() {
  await connectDatabase();
}

export default app;
