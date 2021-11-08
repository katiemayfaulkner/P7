<template>
    <header class="main-header" id="scroll-top">
        <div class="container">
            <div class="col-lg-10 col-md-9">
                <a href="index.html">
                    <img class="logo" src="../assets/icon-left-font-monochrome-white.svg" alt="">
                </a>
                <h1> Welcome, "users first name" !</h1>
            </div>

            <div class="header-btns col-lg-2 col-md-3">  
              <router-link  to="/createPost">
                <img src="../assets/post.png" alt="" id="showPost" to="/main">
              </router-link> 
              <router-link to="/profile">
                <img src="../assets/user.png" alt="" id="showUser" >   
               </router-link>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      user: {},
    };
	},
  props: ['username'],
  
}
</script>

<style scoped>

.main-header {
  background-color: #091F43;
  padding: 20px 0;
}
.main-header .container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.main-header .container div {
  display: block;
}
.main-header .container div .logo {
  height: 36px;
  width: auto;
}
.main-header .container div h1 {
  margin-left: 50px;
  font-size: 22px;
  color: white;
  line-height: 36px;
}
.main-header .container .header-btns {
  display: flex;
  flex-wrap: nowrap;
}
.main-header .container .header-btns img {
  height: 36px;
  width: auto;
  margin: 18px 10px 0;
  cursor: pointer;
}

@media only screen and (max-width: 770px) {
  
 .main-header .container div .logo {
    height: 32px;
    width: auto;
  }
  .main-header .container div h1 {
    margin-left: 50px;
    font-size: 20px;
  }
  .main-header .container .header-btns img {
    height: 30px;
    margin-left: 7px;
  }
  .main-header .container .header-btns .window .box {
    width: 90%;
  } 
}

</style>