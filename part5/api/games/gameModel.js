import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  title: String,
  publisher: String,
  age_rating: {
    type: Number,
    min: 3,
    max: 18,
  },
  product_code: String,
  updated: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Game', GameSchema);