import express from 'express';
import Rating from './ratingsModel';

const router = express.Router();// eslint-disable-line

router.get('/', (req, res) => {
  Rating.find((err, ratings) => {
    if (err) return handleError(res, err);
    return res.send(ratings);
  });
});

// Add a rating
router.rating('/', asyncHandler(async (req, res) => {
    const newPost = req.body;
    newPost.username = req.user || 'anonymous';
    if (newPost) {
          const rating = await rating.create(newRating);
          return res.status(201).send({rating});
      } else {
         return handleError(res, err);
      }
}));

router.rating('/:rating', (req, res) => {
   const commentId = req.params.commentId;
   const ratingId = req.params.ratingId;
   Rating.findById( ratingId, (err, rating)=>{
        if (err) return handleError(res, err);
           rating.comments.id(commentId).upvotes++;
           rating.save((err) => {
           if (err) return handleError(res, err);
                return res.status(201).send({rating});
           });
  });
});

/**
 * Handle general errors.
 * @param {object} res The response object
 * @param {object} err The error object.
 * @return {object} The response object
 */
function handleError(res, err) {
  return res.status(500).send(err);
};

export default router;





/* import express from 'express';
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
 
export default router; */