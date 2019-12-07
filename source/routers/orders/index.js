// Core
import express from 'express';

// Instruments
import { get, post } from './route';
import { getByHash, updateByHash, removeByHash } from './hash';
import { limiter, validator, authenticate } from '../../helpers';

// Schema
import { createOrder } from '../../schemas';

export const router = express.Router();

router.get('/', [authenticate, limiter(5, 60 * 1000)], get);
router.post('/', [validator(createOrder)], post);

router.get('/:orderHash', [authenticate], getByHash);
router.put('/:orderHash', [authenticate], updateByHash);
router.delete('/:orderHash', [authenticate], removeByHash);

export { router as orders };
