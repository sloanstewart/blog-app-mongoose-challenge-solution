exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                      'mongodb://sloan:test123@ds155192.mlab.com:55192/blog-app-travis';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL ||
                       global.TEST_DATABASE_URL ||
                      'mongodb://localhost/blog-app-test';
exports.PORT = process.env.PORT || 8080;
