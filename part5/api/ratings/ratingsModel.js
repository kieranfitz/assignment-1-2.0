import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const RatingSchema = new Schema({
  rating: {type: String, required: true},
  });

 const PostSchema = new Schema({
   title: {type: String, required: true},
   link: {type: String, optional: true},
   username: {type: String, required: true},
   rating: {type: Number, min: 0, max: 5, default: 0},
   updated: {
    type: Date,
    default: Date.now,
  },
 });
export default mongoose.model('ratings', PostSchema);