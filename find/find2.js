var posts2 = [
    { id: 1, title: "New Post"},
    { id: 2, title: "Old Post"}
];

var comment2 = {postId: 1, content: "Great Post"};

//ES5
function postForComment(posts, comment) {
    for(i=0;i<posts.length;i++) {
        if(posts[i].id === comment.postId) {
            return posts[i];
        }
    }
};
console.log(postForComment(posts2, comment2))

//ES6
// function postForComment(posts, comment) {
//     return posts.find(function(post) {
//         return post.id === comment.postId;
//     })
// };
// console.log(postForComment(posts, comment));