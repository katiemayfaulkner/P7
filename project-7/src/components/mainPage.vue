<template>
    <section class="main-page">
        <div class="container">             
            <article class="posts col-lg-9 col-md-8">
                <h2>Discover our posts</h2>

                <div class="box">
                    <div class="post col-lg-6">
                        <div class="content">
                            <div class="top-bar">
                                <div class="user-info">
                                    <img src="../assets/user-black.png" alt="">
                                    <p class="name-container"> Katie May </p>
                                </div>

                                <div>
                                  <router-link to="/comments">
                                    <img src="../assets/comments.png" alt="" id="commentsBtn">
                                  </router-link>
                                    <img src="../assets/bin-black.png" alt="">
                                </div>
                            </div>

                            <div class="img-container">
                                <img src="../assets/bob.jpg" alt="">
                            </div>

                            <div class="caption-container">
                                <p> However iconic and well-known his image, Ross is still a man of surprises. One glaring fact, that even the most faithful
                                television watchers do not often notice, is that Ross was missing a finger. It was cut off on a saw while woodworking
                                with his father in his youth. If you look carefully, you will see that Ross hid his missing digit by holding his palette
                                with the hand missing the finger.</p>
                            </div>

                            <div class="post-actions">
                                <div class="likes">
                                    <img class="like" src="../assets/like.png" alt="">
                                    <img class="like-active" src="../assets/like-active.png" alt="">
                                </div>
                                <div class="dislikes">
                                    <img class="dislike" src="../assets/dislike.png" alt="">
                                    <img class="dislike-active" src="../assets/dislike-active.png" alt="">
                                </div>

                                <form class="comments">
                                    <input class="input" type="text" name="comments" placeholder="Write a comment...">
                                    <input class="btn" type="submit" value="Submit">
                                </form>
                            </div>
                        </div>
                    </div>

                    <div class="post col-lg-6">
                        <div class="content">
                            <div class="top-bar">
                                <div class="user-info">
                                    <img src="../assets/user-black.png" alt="">
                                    <p class="name-container"> Janice John </p>
                                </div>
                                <div>
                                    <img src="../assets/comments.png" alt="">
                                    <img src="../assets/bin-black.png" alt="">
                                </div>
                            </div>

                            <div class="img-container">
                                <img src="../assets/anotherTest.jpeg" alt="">
                            </div>

                            <div class="caption-container">
                                <p> The sky was so pretty last night.</p>
                            </div>

                            <div class="post-actions">
                                <img src="../assets/like.png" alt="">
                                <img src="../assets/dislike.png" alt="">  
                            </div>
                        </div>
                    </div>

                    <div class="post col-lg-6">
                        <div class="content">
                            <img src="" alt="">
                            <p> </p>
                        </div>
                    </div>

                    <div class="post col-lg-6">
                        <div class="content">
                            <img src="" alt="">
                            <p> </p>
                        </div>
                    </div>
                </div>
            </article>
                
            <div class="col-lg-3 col-md-4">
                <div class="sticky-items">
                    <div class="footer">
                        <p> About </p>
                        <p> User Agreement </p>
                        <p> Content Policy </p>
                        <p> Privacy Policy </p>
                        <p> Moderator Guidelines</p>
                        <p> Help </p>
                        <span> © 2021 Club Groupomania, Inc. All rights reserved.</span>
                    </div>

                    <a href="#scroll-top">
                        <button class="scroll-btn"> Back to top </button>
                    </a>    
                </div>  
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'MainPage'
}

</script>

<style scoped>

.main-page .container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
}
.main-page .container .posts {
  margin: 20px 0;
}
.main-page .container .posts h2 {
  font-size: 25px;
  padding-left: 15px;
}
.main-page .container .posts .box {
  display: flex;
  flex-wrap: wrap;
}
.main-page .container .posts .box .post {
  padding: 15px;
}
.main-page .container .posts .box .post .content {
  position: relative;
  padding: 15px;
  width: 100%;
  height: 460px;
  background-color: #f2f2f2;
  border-radius: 12px;
  box-shadow: rgba(35, 35, 65, 0.25) 0px 6px 12px -2px, rgba(3, 3, 3, 0.418) 0px 3px 7px -3px;
}
.main-page .container .posts .box .post .content .top-bar {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.main-page .container .posts .box .post .content .top-bar img {
  margin-right: 10px;
  height: 30px;
  cursor: pointer;
}
.main-page .container .posts .box .post .content .top-bar .user-info {
  display: flex;
}
.main-page .container .posts .box .post .content .top-bar .user-info p {
  line-height: 30px;
}

.main-page .container .posts .box .post .content .img-container {
  position: relative;
  text-align: center;
  overflow: hidden;
}
.main-page .container .posts .box .post .content .img-container img {
  height: 220px;
  width: auto;
  border: 1px solid rgba(167, 164, 164, 0.459);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}
.main-page .container .posts .box .post .content .caption-container {
  margin: 15px 0;
  height: auto;
  max-height: 100px;
  overflow-y: scroll;
  border-radius: 12px;
}
.main-page .container .posts .box .post .content .post-actions {
  position: absolute;
  bottom: 15px;
  display: flex;
}
.main-page .container .posts .box .post .content .post-actions img {
  margin-right: 15px;
  height: 25px;
  cursor: pointer;
}
.main-page .container .posts .box .post .content .post-actions .likes {
  position: relative;
}
.main-page .container .posts .box .post .content .post-actions .likes .like {
  position: absolute;
  bottom: 0;
  left: 0;
}
.main-page .container .posts .box .post .content .post-actions .likes .like-active {
  position: absolute;
  bottom: 0;
  left: 0;
  transform: scale(0.2);
  transition: transform 400ms;
}
.main-page .container .posts .box .post .content .post-actions .likes .like-active:hover {
  transform: scale(0.99);
}
.main-page .container .posts .box .post .content .post-actions .comments {
  display: flex;
  flex-wrap: nowrap;
}
.main-page .container .posts .box .post .content .post-actions .comments .input {
  border-radius: 12px;
  border: 1px solid #091F43;
}
.main-page .container .posts .box .post .content .post-actions .comments .btn {
  margin-left: 5px;
  padding: 5px;
  border-radius: 12px;
  width: 70px;
  border: 2px solid black;
  background-color: #091F43;
  color: white;
  font-size: 15px;
}
.main-page .container div .sticky-items {
  position: -webkit-sticky;
  position: sticky;
  top: 30px;
}
.main-page .container div .sticky-items .footer {
  margin: 20px 0;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}
.main-page .container div .sticky-items .footer p {
  line-height: 5px;
  font-size: 13px;
}
.main-page .container div .sticky-items .footer span {
  font-size: 14px;
  margin: 5px 0;
}
.main-page .container div .sticky-items a {
  width: 100%;
  text-decoration: none;
}
.main-page .container div .sticky-items a button {
  padding: 7px;
  margin: 0 5px;
  border-radius: 12px;
  width: 150px;
  border: 2px solid black;
  background-color: #091F43;
  color: white;
}

@media only screen and (max-width: 770px) {
  
 .main-page .container .posts .box .post .content .post-actions div img {
    margin-right: 10px;
    height: 20px;
  }
  .main-page .container .posts .box .post .content .post-actions .comments .input {
    width: 115px;
  } 
}

</style>