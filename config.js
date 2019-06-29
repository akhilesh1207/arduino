module.exports = {
    sqlConfig: {
        user: 'Arduino',
        password: 'Letme1n!',
        server: 'arduinocube.database.windows.net', // You can use 'localhost\\instance' to connect to named instance
        database: 'Arduino',
        pool: {
            max: 10,
            min: 0,
            idleTimeoutMillis: 30000
        },
        options: {
            encrypt: true, // Use this if you're on Windows Azure
        }
    }
};