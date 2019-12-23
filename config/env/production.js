/**
 * Expose
 */

module.exports = {
  db: process.env.MONGODB_URL || 'mongodb://localhost/my_app_production',
  dbName: process.env.MONGODB_NAME || 'my_app_development'
};
