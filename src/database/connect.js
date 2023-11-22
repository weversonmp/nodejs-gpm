const mongoose = require('mongoose');

//Utilizando asyn await
// const connectToDatabase = async () => {
//   try {
//     await mongoose.connect(
//       `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cursonodejsdicasparadev.uwnc61i.mongodb.net/?retryWrites=true&w=majority`
//     );
//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.log('Error connecting to MongoDB', error);
//   }
// };

// Utilizando Promises
const connectToDatabase = () => {
  mongoose
    .connect(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cursonodejsdicasparadev.uwnc61i.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.error('Erro na conexão:', err.message);
    });
};

module.exports = connectToDatabase;
