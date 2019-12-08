// Instruments
import { NotFoundError } from './';

export const authenticate = (req, res, next) => {
  if (!req.session.isAuthenticated) {
    return next(new NotFoundError('cookie not found', 401));
  }

  const { isAuthenticated } = req.session;
  console.log(('isAuthenticated: ', isAuthenticated));
  if (isAuthenticated) {
    next();
  } else {
    res.status(401).json({ message: 'authentication credentials are not valid' });
  }
};
