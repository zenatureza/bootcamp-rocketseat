import { Router } from 'express';
import multer from 'multer';

import validationMiddleware from './app/middlewares/validation';
import authMiddleware from './app/middlewares/auth';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import FileController from './app/controllers/FileController';
import MeetupController from './app/controllers/MeetupController';
import SubscriptionController from './app/controllers/SubscriptionController';
import OrganizingController from './app/controllers/OrganizingController';

import multerConfig from './config/multer';

const routes = new Router();
const upload = multer(multerConfig);

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

routes.put(
  '/users',
  validationMiddleware.validateUserUpdate,
  UserController.update
);

routes.get('/meetups/:id?', MeetupController.index);
routes.post(
  '/meetups',
  validationMiddleware.validateMeetup,
  MeetupController.store
);
routes.put(
  '/meetups/:id',
  validationMiddleware.validateMeetup,
  MeetupController.update
);
routes.delete('/meetups/:id', MeetupController.delete);

routes.get('/organizing', OrganizingController.index);

routes.get('/subscriptions', SubscriptionController.index);
routes.post('/meetups/:meetupId/subscriptions', SubscriptionController.store);
routes.delete(
  '/meetups/:subscriptionId/subscriptions',
  SubscriptionController.delete
);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
