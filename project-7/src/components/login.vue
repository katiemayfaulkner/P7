<template>
  <div class="window">
    <div class="box">
        <div class="hero">
        <h1>Welcome back to your account!</h1>
        <p> or <router-link to="/signup"> signup </router-link> and create an account.</p>
        </div>

        <form class="auth" @submit.prevent="sendForm">
            <input
                type="text"
                name="first-name"
                placeholder="First name"
                class="authInput loginInput"
                required="true"
                v-model="form.firstName"
            />
            <input
                type="text"
                name="last-name"
                placeholder="Last name"
                class="authInput loginInput"
                required="true"
                v-model="form.lastName"
            />
            <input
                type="text"
                name="email"
                placeholder="Email"
                class="authInput loginInput"
                required="true"
                v-model="form.email"
            />
            <div>
                <input
                type="text"
                name="password"
                placeholder="Password"
                class="authInput loginInput"
                required="true"
                id="loginPassword"
                v-model="form.password"
                />
                <img
                @click="showLogin"
                src="../assets/hidden.png"
                alt=""
                id="hideLogin"
                />
                <img
                @click="showLogin"
                src="../assets/visible.png"
                alt=""
                id="showLogin"
                style="visibility: hidden"
                />
            </div>
          
            <button id="login" class="authBtn"> Log In </button>
        </form>
    </div>
  </div>
</template>

<script>
// import the promise-based library used with Node.js + your browser to make asynchronous Js HTTP requests
import axios from 'axios'; 

export default {
  name: 'Login',
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
      hidden: 1,
    };
  },
  methods: {
    // Password visibility toggle
    showLogin: function () {
      let loginPassword = document.getElementById("loginPassword");
      let hideLogin = document.getElementById("hideLogin");
      let showLogin = document.getElementById("showLogin");

      if (loginPassword.type === "password") {
        loginPassword.type = "text";
        showLogin.style.visibility = "visible"
        hideLogin.style.visibility = "hidden"

      } else {
        loginPassword.type = "password";
        showLogin.style.visibility = "hidden"
        hideLogin.style.visibility = "visible"
      }
    },

    sendForm() {
      let self = this;
      axios.post("http://localhost:3000/api/user/login", this.form)
      .then(response => {
          console.log("Response", response.data);
          localStorage.setItem('token', response.data.token);
					localStorage.setItem('user', JSON.stringify(response.data.user));
          self.$router.push({ name: "/" });
      })
      .catch(error => {
          console.error(error);
      })
    },
  }
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
}
.window .box .hero {
  text-align: center;
}
.window .box .hero h1 {
    font-size: 26px;
}
.window .box .hero p {
    font-weight: 200;
}
.window .box .hero p a {
    font-weight: 800;
    text-decoration: none;
    color: white;
}
.window .box .auth {
  align-items: center;
  width: 220px;
  margin: 25px auto;
}
.window .box .auth .authInput {
  height: 40px;
  padding: 7px;
  margin: 5px;
  border-radius: 12px;
  border: 2px solid black;
  font-size: 17px;
}
.window .box .auth div {
  display: flex;
  position: relative;
}
.window .box .auth img {
  height: 20px;
  margin: 15px 0;
  position: absolute;
  top: 0;
  right: 0;
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
}
.window .box .auth .authBtn:disabled{
  background: linear-gradient(160deg, #6b6b6b 0%, #b6b5b5 100%);
  border: none;
  color: white;
}

@media only screen and (max-width: 770px) {
  
 .window .box {
   padding: 50px 0;
   width: 83%;
 } 
}

</style>