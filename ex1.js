// Create buttons that do each of the tasks below
// Render the results to the page in html elements.
// Hide the results from the previous actions
// 1 - Get all posts
// 2 - Get post with id of 10
// 3 - Get the comments from post with id of 12 
// note: comments are part of a different data model, you'll need to structure your endpoint to ask for all of the comments that belong to post #12
// 4 - Get all the posts from user with id of 2
// 5 - Create a new post and log the id generated for it by the server
// 6 - Replace the post with id of 12 and render the responseJSON
// 7 - Update the title of post with id of 12 and render responseJSON
// 8 - Delete the post with id of 12 and render a success message
// 9 - Display a list of posts.
// 10 - When the user clicks on a post, display all the comments from that post
// 11 - Display a link back to all posts

// 1 - Get all posts
$('.allPosts').click(function() {
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', function(posts){
        for (i=0; i<posts.length; i++) {            
            $('.posts').text(JSON.stringify(posts));
        }
    }); 
})

// 2 - Get post with id of 10
$('.idOf10').click(function() {
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts?id=10', function(posts){
         $('.posts').text(JSON.stringify(posts));
    }); 
})

// 3 - Get the comments from post with id of 12
$('.idOf12').click(function() {
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments',{id:12}, function(posts){                   
            $('.posts').text(JSON.stringify(posts));       
    }); 
});

//4 - Get all the posts from user with id of 2

$('.idOf2').click(function() {
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts?id=2', function(posts){
         $('.posts').text(JSON.stringify(posts));
    }); 
})

//5 - Create a new post and log the id generated for it by the server




// 6 - Replace the post with id of 12 and render the responseJSON



// 7 - Update the title of post with id of 12 and render responseJSON



// 8 - Delete the post with id of 12 and render a success message



// 9 - Display a list of posts.



// 10 - When the user clicks on a post, display all the comments from that post



// 11 - Display a link back to all posts





