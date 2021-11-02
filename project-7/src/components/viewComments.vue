<template>
    <div class="view-comments" id="commentsModal">
        <div class="box">
            <div class="title">
                <h3> Comments: </h3>
                <img class="close-btn" src="img/close-white.png" alt="" id="closeComments">
            </div>

            <div class="items">
                <div class="item">
                    <div class="user">
                        <img src="img/user.png" alt="">
                        <p class="user-name"> Katie May : </p>
                    </div>
                    <p class="comment"> woww </p>
                </div>
        
                <div class="item">
                    <div class="user">
                        <img src="img/user.png" alt="">
                        <p class="user-name"> Jason John : </p>
                    </div>
                    <p class="comment"> bob ross is so awesome! </p>
                </div>
        
                <div class="item">
                    <div class="user">
                        <img src="img/user.png" alt="">
                        <p class="user-name"> Amy Pond : </p>
                    </div>
                    <p class="comment"> cool fact!! </p>
        
                </div>
        
                <div class="item">
                    <div class="user">
                        <img src="img/user.png" alt="">
                        <p class="user-name"> Jill Hall : </p>
                    </div>
                    <p class="comment"> my fav painter! </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

.view-comments{
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
        height: 500px;
        margin: O auto;
        border-radius: 12px;
        background-color: #091F43;
        color: white;
        overflow: scroll;
        display: block;

        .title{
            position: sticky;
            top: 0;
            display: flex;
            justify-content: space-between;
            padding: 15px; 
            background-color: #091F43;

            h3{
                font-size: 22px;
                font-weight: 300px;
            }
        }

        .items{
            overflow: scroll;
            padding: 0 15px 15px 15px;

            .item{
                display: flex;
                flex-wrap: wrap;
                height: auto;
                padding: 7px;
                margin: 15px;
                border-radius: 12px;
                background-color: #204175;

                .user{
                    display: flex;
                    flex-wrap: nowrap;
                    margin-right: 10px;

                    img{
                        height: 25px;
                        margin-right: 7px;
                    }

                    p{
                        line-height: 25px;
                        font-weight: 600;
                    }
                }

                p{
                    font-weight: 200; 
                }
            }
        }
    }
}

// Small devices (phones, 700px and down)
@media only screen and (max-width: 700px) {

    .view-comments{
        
        .box{
            width: 90%;
        }
    }
}

</style>