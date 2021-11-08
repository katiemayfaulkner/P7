<template>
  <div class="window">
    <div class="box">
        <div class="hero">
            <h1>Welcome to your new account!</h1>
            <p> or <router-link to="/login"> login </router-link> to your existing account.</p>
            </div>

            <form class="auth" @submit.prevent="sendForm">
                <input
                name="first-name"
                type="text"
                placeholder="First name"
                class="authInput signupInput"
                required="true"
                v-model="form.firstName"
                />
                <input
                name="last-name"
                type="text"
                placeholder="Last name"
                class="authInput signupInput"
                required="true"
                v-model="form.lastName"
                />
                <input
                name="email"
                type="text"
                placeholder="Email"
                class="authInput signupInput"
                required="true"
                v-model="form.email"
                />
                <div>
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        class="authInput signupInput firstPswd"
                        required="true"
                        id="signupPassword"
                        v-model="form.password"
                    />
                    <img
                        @click="showFirstPassword"
                        src="../assets/hidden.png"
                        alt=""
                        id="hideFirstPswd"
                    />
                    <img
                        @click="showFirstPassword"
                        src="../assets/visible.png"
                        alt=""
                        id="showFirstPswd"
                        style="visibility: hidden"
                    />
                </div>

                <div>
                    <input
                        name="retype-password"
                        type="password"
                        placeholder="Retype password"
                        class="authInput signupInput secondPswd"
                        required="true"
                        id="retypePassword"
                    />
                    <img
                        @click="showSecondPassword"
                        src="../assets/hidden.png"
                        alt=""
                        id="hideSecondPswd"
                    />
                    <img
                        @click="showSecondPassword"
                        src="../assets/visible.png"
                        alt=""
                        id="showSecondPswd"
                        style="visibility: hidden"
                    />
                </div>

                <button id="signup" class="authBtn" >Sign Up</button>
            </form>
        </div>
    </div>
</template>

<script>
    // import the promise-based library used with Node.js + your browser to make asynchronous Js HTTP requests
    import axios from 'axios'; 

    export default {
        name: 'Signup',
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
            showFirstPassword: function () {
            let signupInput = document.getElementById("signupPassword");
            let showFirst = document.getElementById("showFirstPswd");
            let hideFirst = document.getElementById("hideFirstPswd");

            if (signupInput.type === "password") {
                signupInput.type = "text";
                showFirst.style.visibility = "visible"
                hideFirst.style.visibility = "hidden"
            } else {
                signupInput.type = "password";
                showFirst.style.visibility = "hidden"
                hideFirst.style.visibility = "visible"
            }
            },
            showSecondPassword: function () {
            let retypePassword = document.getElementById("retypePassword");
            let showSecond = document.getElementById("showSecondPswd");
            let hideSecond = document.getElementById("hideSecondPswd");

            if (retypePassword.type === "password") {
                retypePassword.type = "text";
                showSecond.style.visibility = "visible"
                hideSecond.style.visibility = "hidden"

            } else {
                retypePassword.type = "password";
                showSecond.style.visibility = "hidden"
                hideSecond.style.visibility = "visible"
            }
            },

            // Check both passwords are the same
            // comparePasswords: function (){
            //     let firstPswd = document.getElementById('firstPswd');
            //     console.log(firstPswd)
            //     let secondPswd = document.getElementById('secondPswd')
            //     let submitBtn = document.getElementById('signup');

            //     let cansubmit = true;

            //     if(firstPswd.value !== secondPswd.value){
            //         console.log('Passwords must match!');
            //         cansubmit = false
            //     } else {
            //         console.log('Matching passwords!')
            //         cansubmit = true
            //     }
            // },

            // FOR HTML ->  disabled="disabled"  +  v-on:keyup="comparePasswords()"

            sendForm() {
                let self = this;
                axios.post("http://localhost:3000/api/user/signup", this.form)
                .then(response => {
                    console.log("Response", response.data);
                    self.$router.push({ name: "main" });
                })
                .catch(error => {
                    console.error(error);
                })
            },
        },
    };
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
