import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import validationMiddleware from './app/middlewares/validation';
import UserController from '../../src/app/controllers/UserController';

const routes = new Router();

console.log(validationMiddleware);

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

export default routes;
