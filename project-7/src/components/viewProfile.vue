<template>
  <div class="window">
    <div class="box">
      <div class="hero">
        <h1> My account: </h1>   
        <router-link to="/home">
          <img src="../assets/close-white.png" alt="">
        </router-link>
      </div>
      
      <div class="profile">
          <img src="../assets/user.png" alt="">
          <div>
              <p class="title">Username:</p>
              <p id="userName"> blablabla</p>
          </div>
          <div>
              <p class="title">Email:</p>
              <p id="userEmail"> blablabla</p>
          </div>
          <div>
              <p class="title">Password:</p>
              <p> ******** </p>
          </div>
      </div>
          <input type="button" value="Edit my profile" id="editProfile">
          <input type="button" value="Delete account" id="deleteBtn">
    </div>
  </div>
</template>

<script>
export default {
   name: 'viewProfile', 
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
  height: 450px;
  margin: O auto;
  padding: 30px;
  border-radius: 12px;
  background-color: #091F43;
  color: white;
}
.window .box .hero {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
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
.window .box .profile {
  margin: 20px 0;
}
.window .box .profile img {
  width: 50px;
  height: auto;
  margin-bottom: 15px;
}
.window .box .profile div {
  display: flex;
  flex-wrap: wrap;
  color: white;
}
.window .box .profile div .title {
  font-weight: 500;
}
.window .box .profile div p {
  padding-right: 10px;
  font-size: 1.2rem;
  font-weight: 200;
}
.window .box input {
  padding: 7px;
  margin-right: 15px;
  border-radius: 12px;
  border: none;
  background-color: white;
  color: #091F43;
  font-size: 17px;
}

@media only screen and (max-width: 770px) {
  
  .window .box{
    width: 90%;
  } 
  .window .box input {
    margin-top: 10px;
  }
}

</style>