const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
const post=document.getElementById("post_container")
post.innerHTML=""
var containers=''
for (i=0;i<posts.length;i++){
    var template=`<section class="posts container">
                <div class="post_head">
                    <img src="${posts[i].avatar}" class="avatar">
                    <div>
                        <h4>${posts[i].name}</h4>
                        <p>${posts[i].location}</p>
                    </div>
                </div>
                <img src="${posts[i].post}" class="main-img">
                <div class="post_footer">
                    <div class="imgsbelow">
                        <img src="images/icon-heart.png" class="small-img">
                        <img src="images/icon-comment.png" class="small-img">
                        <img src="images/icon-dm.png" class="small-img">
                    </div>
                    <h4>${posts[i].likes} likes</h4>
                    <h4>${posts[i].username} <span class="comment-text">${posts[i].comment}</span></h4>
                </div>
            </section>`
        containers+=template
        }
post.innerHTML=containers

