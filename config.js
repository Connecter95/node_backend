const config = {
    db: {
        host: process.env.DB_HOST || 'localhost',
        name: process.env.DB_NAME || 'interview_test',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || 'password',
        port: process.env.DB_PORT || '3306',
        dialect: process.env.DB_DIALECT || 'mysql'
    },
    app: {
        port: process.env.port || '3001',
        clientHost: process.env.CLIENT_HOST || 'http://localhost:3000',
    },
};

module.exports = config;