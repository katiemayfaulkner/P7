<template>
  <div class="window">
    <div class="box">
      <div class="hero">
        <h1>Welcome to Club Groupomania!</h1>
        <p>The open forum for Groupomania employees.</p>
      </div>

      <div class="auth">
      <p>Create a new account or login to your existing account. </p>
      <button class="authBtn"> <router-link to="/signup"> Sign Up </router-link> </button>
      <button class="authBtn"> <router-link to="/login"> Log In </router-link> </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
}
</script>

<style scoped>
.window {
  visibility: visible;
  position: fixed;
  z-index: 1;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  /* background-color: rgba(117, 114, 114, 0.705); */
  background: linear-gradient(-45deg, #8d42ee, #194fa5, #3a87fa, #1fafe4);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.window .box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 500px;
  margin: O auto;
  padding: 70px;
  border-radius: 12px;
  background-color: #091f43;
  color: white;
  overflow: scroll;
}
.window .box .hero {
  text-align: center;
}
.window .box .hero h1 {
  font-size: 27px;
}
.window .box .hero p {
  font-size: 20px;
}
.window .box .auth {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 80px;
}
.window .box .auth p {
  width: 100%;
}
.window .box .auth .authBtn {
  padding: 7px;
  margin: 5px;
  border-radius: 12px;
  width: 100px;
  border: 2px solid black;
  background-color: white;
  color: #091f43;
  font-size: 17px;
  text-decoration: none;
  color: black;
}
.window .box .auth .authBtn a {
  text-decoration: none;
  color: black;
}

@media only screen and (max-width: 770px) {
  
 .window .box {
   padding: 50px 15px;
   width: 83%;
 } 
}

</style>
