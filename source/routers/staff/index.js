// Core
import express from 'express';

// Instruments
import { get, post } from './route';
import { limiter, validator, authenticate } from '../../helpers';

// Schema
import { createEmployee } from '../../schemas';

export const router = express.Router();

router.get('/', [authenticate, limiter(5, 60 * 1000)], get);
router.post('/', [validator(createEmployee)], post);

export { router as staff };
