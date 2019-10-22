const express = require('express');
const router = express.Router();
const trailDataModel = require('../models/trails');

/* GET home page. */
router.get('/', async (req, res, next) => {
  const trailsData = await trailDataModel.getAllTrails();
  console.log('trails is: ', trailsData);

  res.render('template', { 
    locals: {
      title: 'Trail Reviews',
      trailsData: trailsData
    },
    partials: {
      partial: 'partial-index'
    }
  });
});

router.get('/:trail_id', async (req, res, next) => {
  const { trail_id } = req.params;
  const oneTrail = await trailDataModel.getById(trail_id);
  console.log("one trail", oneTrail);

  res.render('template', { 
    locals: {
      title: 'This is one trail',
      oneTrail: oneTrail
    },
    partials: {
      partial: 'partial-one-trail'
    }
  });
});


module.exports = router;
