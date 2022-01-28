'use strict';

const express = require('express');
// const unauthenticatedGraphqlRouter = require('./routes/unauthenticated.graphql.routes.js');
// const photoUploadRouter = require('./routes/photo.upload.routes.js');

// const authenticateUser = require('./middleware/authenticate');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('API! welcome to `/api`');
});

// router.use('/v1', unauthenticatedGraphqlRouter);

// authentication with token
// router.use(authenticateUser);

// router.use('/cities/:cityId/photos/upload', photoUploadRouter);

// router.use('/v2', authenticatedGraphqlRouter);

module.exports = router;

/**
 * addCity
 *
 * city: City!
 * photos: [Photo!]!
 * GetPhoto
 *
 * AddPhotoForCity
 * Values
 * Value
 * deletePhoto
 *
 */
