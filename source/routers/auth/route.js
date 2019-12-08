import dg from 'debug';

const debug = dg('router:auth');

export const login = (req, res) => {
  debug(`${req.method} - ${req.originalUrl}`);

  try {
    req.session.isAuthenticated = true;
    debug(req.session.isAuthenticated);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
