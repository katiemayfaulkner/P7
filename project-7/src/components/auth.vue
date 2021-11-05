<template>
    <div class="window auth-modal" id="authModal">
        <div class="box">
            <img class="close" src="../assets/close-white.png" id="hideAuth">
            <div class="hero">
                <h1> Welcome to Club Groupomania! </h1>
                <p> The open forum for Groupomania employees. </p>
            </div>
                
            <div class="auth">
            
                <div class="section">
                    <input type="text" name="first-name" placeholder="First name" class="authInput" required="true">
                    <input type="text" name="last-name" placeholder="Last name" class="authInput" required="true">
                    <input type="text" name="email" placeholder="Email" class="authInput" required="true">
                    <input type="text" name="password" placeholder="Password" class="authInput" required="true">
                    <a href="">
                        <button id="login" class="authBtn"> Log In </button>
                    </a>
                </div>
            
                <div class="section">
                    <input type="text" name="first-name" placeholder="First name" class="authInput" required="true">
                    <input type="text" name="last-name" placeholder="Last name" class="authInput" required="true">
                    <input type="text" name="email" placeholder="Email" class="authInput" required="true">
                    <input type="text" name="password" placeholder="Password" class="authInput" required="true">
                    <input type="text" name="retype-password" placeholder="Retype password" class="authInput" required="true">
                    <a href="">
                        <button id="signup" class="authBtn"> Sign Up </button>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Auth'
}
</script>>

<style scoped>

.auth-modal {
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
.auth-modal .box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 500px;
  margin: O auto;
  padding: 30px;
  border-radius: 12px;
  background-color: #091F43;
  color: white;
  overflow: scroll;
}
.auth-modal .box .close {
  height: 30px;
  width: auto;
  cursor: pointer;
}
.auth-modal .box .hero {
  text-align: center;
}
.auth-modal .box .hero h1 {
  font-size: 28px;
}
.auth-modal .box .hero p {
  font-size: 20px;
}
.auth-modal .box .auth {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.auth-modal .box .auth .section {
  width: 220px;
  margin: 25px;
}
.auth-modal .box .auth .section .authInput {
  padding: 7px;
  margin: 5px;
  border-radius: 12px;
  border: 2px solid black;
  font-size: 17px;
}
.auth-modal .box .auth .section a .authBtn {
  padding: 7px;
  margin: 5px;
  border-radius: 12px;
  width: 100px;
  border: 2px solid black;
  background-color: white;
  color: #091F43;
  font-size: 17px;
}

</style>