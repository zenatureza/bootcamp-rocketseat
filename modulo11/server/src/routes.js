import { Router } from 'express';

import UserControlelr from './app/controllers/UserController';

const routes = new Router();

routes.post('/users', UserControlelr.store);

export default routes;
