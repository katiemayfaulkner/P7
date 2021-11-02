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

<style lang="scss" scoped>

.window{
    visibility: hidden;
    position: fixed;
    z-index: 1;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    background-color: rgba(117, 114, 114, 0.5);

    .box{
        position: absolute;
        top: 50%; 
        left: 50%;
        transform: translate(-50%,-50%);
        width: 70%;
        height: 450px;
        margin: O auto;
        padding: 30px;
        border-radius: 12px;
        background-color: #091F43;
        color: white;

        .title{
            display: flex;
            justify-content: space-between;

            h3{
                font-size: 23px;
                font-weight: 300px;
            }

            .close-btn{
                height: 30px;
                width: auto;
                margin: 0;
            }
        }

        .create-post{
            margin-top: 30px;

            .img-input {
                margin-bottom: 25px;
            }
                
            .text-input{
                margin: 5px 0;

                label{
                    width: 100%;
                    font-size: 21px;
                }

                input{
                    width: 100%;
                    height: 100px;
                    overflow: scroll;
                    border: 2px solid black;
                }
            }

            .submit-btn{
                padding: 7px;
                border-radius: 12px;
                width: 100px;
                border: 2px solid black;
                background-color: white;
                color: #091F43;
                font-size: 17px;
            }
        }
    }
}

// Small devices (phones, 700px and down)
@media only screen and (max-width: 700px) {

    .window{
        .box{
            width: 90%;
        } 
    }
}

</style>