import express from 'express';
import stubAPI from './stubAPI';

const router = express.Router();

// get all ratings
router.get('/', (req, res) => {
  const ratings = stubAPI.getAll();
  res.send({ratings: ratings});
});


// Add a rating
router.post('/', (req, res) => {
    const newRating = req.body;

    if (newRating && stubAPI.add(newRating.title, newRating.link)) {
         return res.status(201).send({message: 'Rating added'});
    }
    return res.status(400).send({message: 'Unable to add rating.'});
});

/* // get a post
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const post = stubAPI.getPost(id);

       if (post) {
               return res.status(200).send(post);
              }
              return res.status(404).send({message: `Unable to find Post ${id}`});
});
 */
export default router;