import _ from 'lodash';

  const reviews = [
         {
    'title': 'GTA V',
    'publisher': 'Rockstar',
    'age_rating': '18',
    'product_code': '123',
	'rating': '4.8',
  },
  {
    'title': 'FIFA 18',
    'publisher': 'EA',
    'age_rating': '3',
    'product_code': '456',
	'rating': '4.2',
  },
  {
    'title': 'Skyrim',
    'publisher': 'Bethesda',
    'age_rating': '15',
    'product_code': '789',
	'rating': '4.9',
  },
  {
    'title': 'Far Cry 5',
    'publisher': 'Ubisoft',
    'age_rating': '18',
    'product_code': '963',
	'rating': '3.8',
  },
      ];


     const stubAPI = {
         getAll: () => {
            return reviews;
          },
         add: (t, l) => {
              if (!(t && l)) return false;
              let id = 1;
              const last = _.last(reviews);
              if (last) {
                 id = last.id + 1;
              }
              let len = reviews.length;
              let newLen = reviews.push({
                  'id': id,
                 'title': t, 'link': l, 'username': '', 'comments': [], 'upvotes': 0});
               return newLen > len?id:-1;
              }/* ,
         upvote: (id) => {
             const index = _.findIndex(reviews,
                   (post) => {
                    return post.id == id;
                  } );
             if (index !== -1) {
                  reviews[index].upvotes += 1;
                  return true;
                }
              return false;
           },
         getPost: (id) => {
            let result = null;
            const index = _.findIndex(reviews,
                   (post) => {
                    return post.id == id;
                  } );
             if (index !== -1) {
                result = reviews[index];
                    }
            return result;
            },
         addComment: (postId, c, n) => {
            let result = false;
            const post = stubAPI.getPost(postId);
            let id = 1;
            if (post) {
            const last = _.last(post.comments);
            if (last) {
               id = last.id + 1;
            }
            post.comments.push({'id': id,
                     'comment': c, 'author': n, 'upvotes': 0} );
            result = true;
            }
          return result;
            },
         upvoteComment: (postId, commentId) => {
            let result = false;
            const post = stubAPI.getPost(postId);
            if (post) {
            const index = _.findIndex(post.comments, (c) => {
                      return c.id == commentId;
                    });
             if (index !== -1) {
                 post.comments[index].upvotes += 1;
                 result = true;
                }
              }
            return result;
          }, */
      //};
    export default stubAPI;