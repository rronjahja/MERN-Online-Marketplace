const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/mernmarketplace',
  stripe_connect_test_client_id: 'pk_test_51IhcYiFMapCBCaiu6yQz6blMGxjDLPx30DQKGtopjDKGYTKlLYp7qhaeUpfcEkHruayHPXo743ug46hXQbs2yAl0004hfMbRSa',
  stripe_test_secret_key: 'sk_test_51IhcYiFMapCBCaiugWSzshdUo73j7Ct0DtI8estWMviWrqXjk7zQBnr7t1okbvPymZuXew32uQnwfpgMCKUzc3mB008g3i8t7n',
  stripe_test_api_key: 'pk_test_51IhcYiFMapCBCaiu6yQz6blMGxjDLPx30DQKGtopjDKGYTKlLYp7qhaeUpfcEkHruayHPXo743ug46hXQbs2yAl0004hfMbRSa'
}

export default config
