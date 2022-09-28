if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
export default {
  dbUri: process.env.MONGO_CREDENTIALS,
};
