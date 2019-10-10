const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res, next) => {
    res.end('Will send all the leaders to you!');
  })
  .post((req, res, next) => {
    res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
  })
  .delete((req, res, next) => {
    res.end('Deleting all leaders');
  });

leaderRouter.route('/:promoId')
  .get((req, res, next) => {
    var promoId = req.params.promoId;
    res.end('Will send all the leaders to you with Id!' + promoId);
  })
  .post((req, res, next) => {
    var promoId = req.params.promoId;
    res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description + promoId);
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
  })
  .delete((req, res, next) => {
    res.end('Deleting all leaders');
  });

module.exports = leaderRouter;