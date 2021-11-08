<template>
    <div class="window">
        <div class="box">
            <div class="hero">
                <h1> Comments: </h1>
                <router-link to="/">
                    <img src="../assets/close-white.png" alt="">
                </router-link>
            </div>

            <div class="items">
                <div class="item">
                    <div class="user">
                        <img src="img/user.png" alt="">
                        <p class="user-name"> Katie May : </p>
                    </div>
                    <p class="comment"> woww </p>
                </div>
        
                <div class="item">
                    <div class="user">
                        <img src="img/user.png" alt="">
                        <p class="user-name"> Jason John : </p>
                    </div>
                    <p class="comment"> bob ross is so awesome! </p>
                </div>
        
                <div class="item">
                    <div class="user">
                        <img src="img/user.png" alt="">
                        <p class="user-name"> Amy Pond : </p>
                    </div>
                    <p class="comment"> cool fact!! </p>
        
                </div>
        
                <div class="item">
                    <div class="user">
                        <img src="img/user.png" alt="">
                        <p class="user-name"> Jill Hall : </p>
                    </div>
                    <p class="comment"> my fav painter! </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'viewComments',
    data() {
			return {
				comments: [],
			};
		},
}
</script>

<style scoped>

.window {
  position: fixed;
  z-index: 1;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(117, 114, 114, 0.5);
}
.window .box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 500px;
  margin: O auto;
  border-radius: 12px;
  background-color: #091F43;
  color: white;
  overflow: scroll;
  display: block;
}
.window .box .hero {
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 20px;
    margin: 0 30px;
    background-color: #091F43;
}
.window .box .hero a{
    display: flex;
    line-height: 25px;
    margin-bottom: 10px;
    text-decoration: none;
}
.window .box .hero h1 {
    font-size: 22px;
    font-weight: 300px;
}
.window .box .hero a img { 
  margin-right: 5px;
  height: 25px;  
}
.window .box .items {
  overflow: scroll;
  padding: 15px;
}
.window .box .items .item {
  display: flex;
  flex-wrap: wrap;
  height: auto;
  padding: 7px;
  margin: 15px;
  border-radius: 12px;
  background-color: #204175;
}
.window .box .items .item .user {
  display: flex;
  flex-wrap: nowrap;
  margin-right: 10px;
}
.window .box .items .item .user img {
  height: 25px;
  margin-right: 7px;
}
.window .box .items .item .user p {
  line-height: 25px;
  font-weight: 600;
}
.window .box .items .item p {
  font-weight: 200;
}

@media only screen and (max-width: 770px) {
  
  .window .box{
    width: 90%;
  } 
}

</style>