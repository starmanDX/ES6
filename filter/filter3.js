var post = {id: 4, title: 'New Post'};
var comments = [
    {postId: 4, content: 'awesome post'},
    {postId: 3, content: 'it was ok'},
    {postId: 4, content: 'neat'}
];

//ES5
// var postComments = [];
// function commentsForPost() {
//     for(i=0;i<comments.length;i++) {
//         if(comments[i].postId === post.id) {
//             postComments.push(comments[i]);
//         }
//     } return postComments;    
// };
// console.log(commentsForPost());

//ES6
function commentsForPost(post, comments) {
    return comments.filter(function(comment) {
        return comment.postId === post.id;
    })
};
console.log(commentsForPost(post, comments));