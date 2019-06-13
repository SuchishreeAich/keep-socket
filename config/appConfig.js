// Server configuration
const serverConfig = {
  port: 3000,
  hostname: '127.0.0.1'
}

const dbConfig = {
  mongoUrl: 'mongodb://localhost:27017/keep'
}

const authConfig = {
  jwtSecret: 'jwttokenbasedauth'
}

// Logger configuration
const loggerConfig = {
  appenders: {
    
    keepLogs: {
      type: 'file',
      filename: './server/logs/keep.log'
    }
  },
  categories: {
    default: { appenders: ['keepLogs'], level: 'trace' }
  }
};

module.exports = {
  serverConfig,
  loggerConfig,
  dbConfig,
  authConfig
}