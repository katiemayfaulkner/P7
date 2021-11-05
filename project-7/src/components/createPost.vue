<template>
    <div class="window" id="postModal">
        <div class="box">
            <div class="title">
                <h3> Create New Post: </h3>
                <img class="close-btn" src="img/close-white.png" alt="" id="closePost">
            </div>

            <div class="create-post">
                <div class="img-input">
                    <input type="file">
                </div>
                <div class="text-input">
                    <label for="text"> Insert your caption here: </label>
                    <input type="text" maxlength="150">
                </div>
                <input type="submit" value="Submit" class="submit-btn">
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
.main-header .container .header-btns .window .box .create-post {
  margin-top: 30px;
}
.main-header .container .header-btns .window .box .create-post .img-input {
  margin-bottom: 25px;
}
.main-header .container .header-btns .window .box .create-post .text-input {
  margin: 5px 0;
}
.main-header .container .header-btns .window .box .create-post .text-input label {
  width: 100%;
  font-size: 21px;
}
.main-header .container .header-btns .window .box .create-post .text-input input {
  width: 100%;
  height: 100px;
  overflow: scroll;
  border: 2px solid black;
}
.main-header .container .header-btns .window .box .create-post .submit-btn {
  padding: 7px;
  border-radius: 12px;
  width: 100px;
  border: 2px solid black;
  background-color: white;
  color: #091F43;
  font-size: 17px;
}

</style>