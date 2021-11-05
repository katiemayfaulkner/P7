<template>
    <div class="window" id="userModal">
        <div class="box">
            <div class="title">
                <h3> My account: </h3>
                <img class="close-btn" src="img/close-white.png" alt="" id="closeUser">
            </div>    
            
            <div class="profile">
                <img src="img/user.png" alt="">
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
                <input type="button" value="Delete account" id="deleteBtn">
                <input type="button" value="Edit my profile" id="editProfile">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

.main-header .container .header-btns .window {
  visibility: hidden;
  position: fixed;
  z-index: 1;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(117, 114, 114, 0.5);
}
.main-header .container .header-btns .window .box {
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
.main-header .container .header-btns .window .box .title {
  display: flex;
  justify-content: space-between;
}
.main-header .container .header-btns .window .box .title h3 {
  font-size: 23px;
  font-weight: 300px;
}
.main-header .container .header-btns .window .box .title .close-btn {
  height: 30px;
  width: auto;
  margin: 0;
}
.main-header .container .header-btns .window .box .profile {
  margin-top: 30px;
}
.main-header .container .header-btns .window .box .profile img {
  width: 50px;
  height: auto;
  margin-bottom: 20px;
}
.main-header .container .header-btns .window .box .profile div {
  display: flex;
  flex-wrap: wrap;
  color: white;
}
.main-header .container .header-btns .window .box .profile div .title {
  font-weight: 500;
}
.main-header .container .header-btns .window .box .profile div p {
  padding: 10px 5px;
  font-size: 1.2rem;
  font-weight: 300;
}
.main-header .container .header-btns .window .box .profile input {
  padding: 7px;
  border-radius: 12px;
  border: none;
  background-color: white;
  color: #091F43;
  font-size: 17px;
}

</style>