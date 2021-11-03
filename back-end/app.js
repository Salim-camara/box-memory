// importation de prérequis
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const path = require('path');

// importation des routes
const usersRoutes = require('./routes/users');
const memoryRoutes = require('./routes/memory');

// autorisation de toutes du CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// Ajout du bodyParser
app.use(bodyParser.json());

// connection à la base de donnée
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://salim:Aa12345Aa@cluster0.cjmcv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// création de l'URL vers les différentes routes
app.use('', usersRoutes);
app.use('', memoryRoutes);

// configuration vers le dossier image
// app.use('/images', express.static(path.join(__dirname, 'images')));












// expotation du fichier
module.exports = app;