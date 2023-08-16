const express = require('express');
const axios = require ('axios');
const profileRouter = require('./profile');
const requestRouter = require('./request');
const messageRouter = require('./message');
const highlineRouter = require('./highline');
const cardsRouter = require('./cards');

const router = express.Router();
router.use(profileRouter);
router.use(requestRouter);
router.use(messageRouter);
router.use(highlineRouter);
router.use(cardsRouter);
router.use('/highline', highlineRouter);
router.use('/message', messageRouter);
router.use('/request', requestRouter);
router.use('/profile', profileRouter);
router.use('/cards', cardsRouter);


module.exports = router;