import { Router } from 'express';
import multer from 'multer';

import validationMiddleware from './app/middlewares/validation';
import authMiddleware from './app/middlewares/auth';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import FileController from './app/controllers/FileController';
import MeetupController from './app/controllers/MeetupController';
// import ProviderController from './app/controllers/ProviderController';
// import AppointmentController from './app/controllers/AppointmentController';
// import ScheduleController from './app/controllers/ScheduleController';
// import NotificationController from './app/controllers/NotificationController';
// import AvailableController from './app/controllers/AvailableController';

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

routes.put('/users', UserController.update);

routes.get('/meetups', MeetupController.index);
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

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
