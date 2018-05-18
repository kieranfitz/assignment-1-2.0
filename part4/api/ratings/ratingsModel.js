import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const RatingSchema = new Schema({
  rating: {type: String, required: true},
  });

 const PostSchema = new Schema({
   rating: {type: String, required: true},
 });
export default mongoose.model('ratings', PostSchema);