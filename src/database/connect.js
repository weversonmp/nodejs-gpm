const mongoose = require('mongoose');

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cursonodejsdicasparadev.uwnc61i.mongodb.net/?retryWrites=true&w=majority`,
    (error) => {
      if (error) throw 'Error connecting to MongoDB =>' + error.message;

      console.log('Connected to MongoDB');
    }
  );
};
