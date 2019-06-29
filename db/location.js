const { sql, poolPromise } = require('./db')

var location = {};

location.getLocationReadings = function (id) {
    return new Promise(function (resolve, reject) {
        poolPromise.then(pool => {
            pool.request()
                .input('LocationId', sql.Int, id)
                .input('Operation', sql.Int, 14)
                .output('PO_LocationId', sql.Int, 9999)
                .execute('Arduino_Location')
                .then(result => {
                    resolve(result.recordset);
                }).catch(err => {
                    reject(err);
                });
        })
    });
}

module.exports = location;