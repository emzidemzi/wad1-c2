'use strict';

import express from 'express';
import logger from "./utils/logger.js";

const router = express.Router();



// importing routes

import start from './controllers/start.js';
import dashboard from './controllers/dashboard.js';
import mangaController from './controllers/manga.js';
import authorsController from './controllers/authors.js';
import aboutController from './controllers/about.js';




// getting routes

router.get('/', start.createView);
router.get('/dashboard', dashboard.createView);
router.get('/manga', mangaController.createView);
router.get('/authors', authorsController.createView);
router.get('/about', aboutController.createView);

export default router;

router.post('/manga/add', mangaController.addManga);