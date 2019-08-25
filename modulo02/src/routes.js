import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);

// first option: define middleware/method
// routes.put('/users', authMiddleware, UserController.update);

// second option: define global middleware (only called by routes after .use)
routes.use(authMiddleware);
routes.put('/users', UserController.update);

export default routes;
