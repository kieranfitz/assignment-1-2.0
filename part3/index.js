import dotenv from 'dotenv';
import express from 'express';
import gamesRouter from './api/games';
import bodyParser from 'body-parser';
import reviewsRouter from './api/reviews';
import mongoose from 'mongoose';
import {loadGames} from './gamesData';
import {loadRatings} from './RatingsData';

dotenv.config();

const app = express();

const port = process.env.PORT;

// Connect to database
mongoose.connect(process.env.mongoDB);
var contactEvent = require("../../events.js")
contactEvent.publish('create_contact_event', contact);

// Populate DB with sample data
if (process.env.seedDb) {
  loadGames();
  loadRatings();
}



//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static('public'));

app.use('/api/games', gamesRouter);
app.use('/api/reviews', reviewsRouter);

app.use(express.static('public'));

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});