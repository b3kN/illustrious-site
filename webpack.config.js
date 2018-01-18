<<<<<<< HEAD
/**
 * @author: @AngularClass
 */

/**
 * Look in ./config folder for webpack.dev.js
 */
=======
>>>>>>> d8b7c194a7a89090e4de7db1421f10b4f229b825
switch (process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    module.exports = require('./config/webpack.prod')({env: 'production'});
    break;
  case 'test':
  case 'testing':
    module.exports = require('./config/webpack.test')({env: 'test'});
    break;
  case 'dev':
  case 'development':
  default:
    module.exports = require('./config/webpack.dev')({env: 'development'});
}
