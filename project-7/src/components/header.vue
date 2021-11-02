<template>
    <header class="main-header" id="scroll-top">
        <div class="container">
            <div class="col-lg-10 col-md-9">
                <a href="index.html">
                    <img class="logo" src="Groupomania_Logos/icon-left-font-monochrome-white.svg" alt="">
                </a>
                <h1> Welcome, Katie!</h1>
            </div>

            <div class="header-btns col-lg-2 col-md-3">  
                <img src="img/post.png" alt="" id="showPost">
                <img src="img/user.png" alt="" id="showUser"> 
            </div>
        </div>
    </header>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

.main-header{
   background-color: #091F43; 
   padding: 20px 0;

   .container{
       display: flex;
       justify-content: space-between;
       width: 100%;

       div{
           display: block;
           
           .logo{
               height: 36px;
               width: auto;
            }
            
            h1{
               margin-left: 50px;
               font-size: 22px;
               color: rgb(255, 255, 255);
               line-height: 36px;
           }
       }

        .header-btns{
            display: flex;
            flex-wrap: nowrap;
            
            img{
                height: 36px;
                width: auto;
                margin: 18px 10px 0;
                cursor: pointer;  
            }   
        }
    }
}

// Small devices (phones, 700px and down)
@media only screen and (max-width: 700px) {
     
    .main-header{

        .container{

            div{
                .logo{
                    height: 32px;
                    width: auto;
                }

                h1{
                    margin-left: 50px;
                    font-size: 20px;
                }
            }

            .header-btns{

                img{
                   height: 30px;
                   margin-left: 7px; 
                }
            }
        }
    }
}

</style>