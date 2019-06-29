var express = require('express');
var router = express.Router();
var location = require('../../db/location');

sendResponse = function (err, req, res, data) {
    if (err) {
        if (err.status == 1)
            res.status(500);
        else if (err.status == 2)
            res.status(400);
        res.send(err);
    }
    else {
        res.send(data);
        res.end();
    }
};

router.get('/getLocationReadings/:id', function (req, res, next) {
    location.getLocationReadings(req.params.id)
        .then(result => {
            res.send(result);
            res.end();
        })
        .catch(err => {
            res.send(err);
            res.end();
        });
});


module.exports = function (app) {
    app.use("/api/Location", router);
};