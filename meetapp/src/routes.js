import { Router } from 'express';

import validationMiddleware from './app/middlewares/validation';
import authMiddleware from './app/middlewares/auth';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post(
  '/sessions',
  validationMiddleware.validateUserSession,
  SessionController.store
);

routes.post(
  '/users',
  validationMiddleware.validateUserLogin,
  UserController.store
);

// only logged users
routes.use(authMiddleware);
routes.put('/users', UserController.update);

export default routes;
