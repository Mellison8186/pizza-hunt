const mongoose = require('mongoose');
const express = require('express');
const cors = require ('cors');

const app = express();
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://maribelduron86:U0NQNlpjb3hHRDd4NUhEcQ%3D%3D@cluster0.sceyqpu.mongodb.net/?retryWrites=true&w=majority";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors());

app.use(require('./routes'));

mongoose.connect(process.env.MONGODB_URI || {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);
app.listen(PORT, () => console.log('🌍 Connected on localhost:${PORT}'));