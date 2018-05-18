import ratingsModel from './api/posts/ratingsModelModel';

const ratings = [
         {
    'title': 'GTA V',
    'publisher': 'Rockstar',
    'age_rating': '18',
    'product_code': '123',
  },
  {
    'title': 'FIFA 18',
    'publisher': 'EA',
    'age_rating': '3',
    'product_code': '456',
  },
  {
    'title': 'Skyrim',
    'publisher': 'Bethesda',
    'age_rating': '15',
    'product_code': '789',
  },
  {
    'title': 'Far Cry 5',
    'publisher': 'Ubisoft',
    'age_rating': '18',
    'product_code': '963',
  },
      ];
export const loadratings = () => {
ratingsModel.find({}).remove(function() {
    ratingsModel.collection.insert(ratings, (err, docs)=>{
    if (err) {
      console.log(`failed to Load Rating Data`);
    } else {
      console.info(`${ratings.length} ratings were successfully stored.`);
    }
  });
});
};