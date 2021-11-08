<template>
  <div class="window">
    <div class="box">
      <div class="hero">
        <h1> Enter your new details: </h1>   
      </div>
      
      <div class="profile">
        <img src="../assets/user.png" alt="">
        <div>
          <p class="title">First name:</p>
          <input type="text">
        </div>
        <div>
          <p class="title">Last name:</p>
          <input type="text">
        </div>
        <div>
          <p class="title">Email:</p>
          <input type="text">
        </div>
        <div>
          <p class="title">Password:</p>
          <input type="password">
        </div>
      </div>
      <div class="profile-btns">
        <input type="submit" value="Submit" id="submitChanges">
        <router-link to="/profile">
          <input type="button" value="Cancel">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// import the promise-based library used with Node.js + your browser to make asynchronous Js HTTP requests
import axios from 'axios'; 

export default {
  name: 'editProfile',
  methods: {

  }
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
    margin-bottom: 30px;
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
.window .box .profile div input {
    height: 30px;
    width: 170px;
    border: none;
    border-radius: 10px;
}
.window .box .profile-btns input {
  padding: 10px;
  margin-right: 15px;
  border-radius: 12px;
  border: none;
  background-color: white;
  color: #091F43;
  font-weight: 800;
  font-size: 17px;
}

@media only screen and (max-width: 770px) {
  
  .window .box{
    width: 90%;
  } 
  .window .box .profile-btns input {
    margin-top: 10px;
  }
}

</style>