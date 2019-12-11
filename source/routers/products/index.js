// Core
import express from 'express';

// Instruments
import { get, post } from './route';
import { getByHash, updateByHash, removeByHash } from './hash';
import { limiter, validator, authenticate } from '../../helpers';

// Schema
import { createProduct } from '../../schemas';

export const router = express.Router();

router.get('/', [limiter(5, 60 * 1000)], get);
router.post('/', [authenticate, validator(createProduct)], post);

router.get('/:productHash', getByHash);
router.put('/:productHash', [authenticate], updateByHash);
router.delete('/:productHash', [authenticate], removeByHash);

export { router as products };
