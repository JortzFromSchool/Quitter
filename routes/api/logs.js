const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Log = require('../../models/Log');

router.get('/', (req, res) => {
    Log.find()
        .sort({ date: -1 })
        .then(logs => res.json(logs))
        .catch(err => res.status(404).json({nologsfound: 'No logs found'}));
});

module.exports = router;