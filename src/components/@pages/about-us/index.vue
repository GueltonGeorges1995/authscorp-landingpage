<template>
    <div class="section">
        <div class="company-faq">
          <docs-header />
        </div>
        <v-row class="about">
          <v-col offset="1" cols="5">
            <h2 class="titre">About us</h2>
          </v-col> 
          <v-col class="about-text" cols="5">
            <p >We supply enterprises, organizations and institutes of <br> high-tech industries with modern components. We build long-term trusting relationships with our customers and partnes for further fruitful cooperations.</p>
            <p class="bot-text">From year to year we strive to invent the most innovative technology that is used by both small enterprises and space enterprises.</p>
          </v-col>
        </v-row>
        <v-row class="gallery">
          <v-col cols="5">
            <v-row>
              <v-col offset="4">
                <v-img
                class="gallery1"
                src="./images/773c8a152478bb6b7f5db1f1910287310ce7058a.png"
                width="440px"
                height="520px"
                fluid
                >
                </v-img>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="7">
                <v-img
                class="gallery1"
                src="./images/d960d85e048bf725c54d2b15bbd8bf8b2a2b47f0.png"  
                height="400px"              
                >
                </v-img>
              </v-col>
              <v-col cols="5">
                <v-img
                class="gallery1"
                src="./images/c36effee15a7e3f6e549f83ac1b2b8a0afd18acf.png" 
                height="300px"               
                >
                </v-img>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="7">
            <v-row class="right-top d-flex align-end">
              <v-col>
                <v-img
                class="gallery1"
                src="./images/aad829cb817613d5f3ae609054a67b5646b05386.png"
                height="250px"
                >

                </v-img>
              </v-col>               
              <v-col>
                <v-img
                class="gallery1"
                src="./images/674c0a8b035d1277ba6c548f343397510f060b1d.png"
                height="350px"
                >

                </v-img>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="9">
                <v-img
                class="gallery1"
                src="./images/99d01fcf49f4a770f7fb859c19b3feda020cd295.png"
                >
                </v-img>
              </v-col>
              <v-col>
                <img src="./images/icons/pattern.svg" alt="">
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-container class="values">
          <h2 class="text-center">Our values</h2>
          <h3 class="text-center subtitle">We strive to redefine the standard of excellence.</h3>
          <v-row>
            <v-col cols="6 d-flex flex-column align-center">
              <img class="logo" src="./images/icons/transition.svg" alt />
              <p class="value text-center">Collaboration is the process of two or more people or organizations working together to complete a task or achieve a goal.</p>
              <img class="logo" src="./images/icons/like.svg" alt />
              <p class="value text-center">Trust will help us foster a positive and productive environment that delivers value to our users and customers.</p>
            </v-col>
            <v-col cols="6 d-flex flex-column align-center">
              <img class="logo" src="./images/icons/state-art-js.svg" alt />
              <p class="value text-center">Transparency, as used in science is operating in such a way that it is easy for others to see what actions are performed.</p>
              <img class="logo" src="./images/icons/flexible-library.svg" alt />
              <p class="value text-center">Integrity is the practice of showing a consistent and uncompromising adherence to strong moral and ethical principles.</p>
            </v-col>
          </v-row>
        </v-container>
        <v-row class="team">
          <v-col offset="1" cols="4">
            <h2 class="titre">our team</h2>
            <p class="team-text">The right tools wielded by the right people to make anything possible. From year to year we strive to invent the most innovative technology produced by our creative people</p>
            <v-btn class="but" text color="primary"> Meet our team <v-icon dark right>arrow_forward_ios</v-icon></v-btn>
          </v-col>
          <v-col class="photos" offset="2" cols="5">
            <img class="dots" src="./images/icons/dots.svg" alt="">
            <v-img 
            class="photo1" 
            src="./images/087993198189dcd62239d693db7e5061d9b7894a.png"
            width="160"
            height="160"             
            >
            </v-img>
            <v-img 
            class="photo2" 
            src="./images/3977559ad9656be8491e442c30c49aa136e29958.png"
            width="80"
            height="80"             
            >
            </v-img>
            <v-img 
            class="photo3" 
            src="./images/515ddb88c9f3f4edc8229c4b8da49f3ce44d3cd3.png"
            width="120"
            height="120"             
            >
            </v-img>
            <v-img 
            class="photo4" 
            src="./images/0432ebe42463be07dfe2e32a7fefb384999fe047.png"
            width="180"
            height="200"             
            >
            </v-img>
             <v-img 
            class="photo5" 
            src="./images/3c229e2f8df28e640c202e8a2ebc5ae2890eb2da.png"
            width="120"
            height="120"             
            >
            </v-img>
            <img class="oval" src="./images/icons/oval.svg" alt="">
            
          </v-col>
        </v-row>
        <div class="circle">

        </div>
        <v-row class="logos">          
          <v-col offset="1" class="d-flex">
            <img class="brand" src="./images/icons/netflix.svg" alt="">
            <img class="brand" src="./images/icons/airbnb.svg" alt="">
            <img class="brand" src="./images/icons/fitbit.svg" alt="">
            <img class="brand" src="./images/icons/google.svg" alt="">
            <img class="brand" src="./images/icons/uber.svg" alt="">
            <v-btn class="white" rounded large color="primary">Get a free quote <v-icon dark right>arrow_forward_ios</v-icon></v-btn>
          </v-col>
        </v-row>
    </div>
</template>

<script>

    import DocsHeader from './header'
   

    export default {
        components: {
            DocsHeader            
        }
    }

</script>

<style lang="scss">
.section{
  font-family: 'Exo 2', sans-serif;
}

.clip-eb {
    clip-path: ellipse(150% 120% at 50% -30%);
    padding-bottom: 175px !important;
}
.about{
    padding-top: 60px;
    .titre{
         
        font-style: normal;
        font-weight: normal;
        
        font-size: 20px;
        line-height: 19px;
        letter-spacing: 2px;
        text-transform: uppercase;

        color: #1565D8;
    }
    .about-text{
      padding: 55px 50px 35px 35px;      
      p{
        
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 36px;
        color: #183B56;
        margin-bottom: 40px;
      }
      .bot-text{
        margin-bottom: 100px;
      }
    }
}
.gallery{
  margin-bottom: 150px;;
  .gallery1{
    border-radius: 12px;
  }
  .right-top{
    height: 450px;
  }
}
.values{
  margin-bottom: 200px;
  h2{    
    font-weight: normal;
    font-size: 40px;
    line-height: 50px;
    letter-spacing: 0.3px;
    color: #183B56;
  }
  .subtitle{
    font-weight: normal;
    font-size: 20px;
    line-height: 35px;
    color: #5A7184;
    padding-top: 35px;
    padding-bottom: 120px ;

  }
  .logo{
    height: 46px;
    margin-bottom: 80px;
  }
  .value{
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;
    color: #5A7184;
    padding-bottom: 40px;
    width: 80%;

  }  
}
.team{
  padding-top: 60px;  
  padding-bottom: 150px;
  .titre{
        
      font-style: normal;
      font-weight: normal;
      
      font-size: 20px;
      line-height: 19px;
      letter-spacing: 2px;
      text-transform: uppercase;

      color: #36B37E;
  }
  .team-text{
    font-weight: normal;
    font-size: 20px;
    line-height: 35px;
    color: #5A7184;
    padding-top: 200px;
    padding-bottom: 40px;
  }
  .but{
    font-weight: bold;
  }
  .photos{
    height: 55vh;
    position: relative;    
    .dots{
      bottom: 15%;
      left: 25%;
      position: absolute;
      z-index: 10;
    } 
    .photo1{
      position: absolute;
      z-index: 15;
      bottom: 0;
      left:7%;
      border-radius: 15px;
    } 
    .photo2{
      position: absolute;
      z-index: 15;
      left: 25%;
      top:40%;
      border-radius: 12px;
    } 
    .photo3{
      position: absolute;
      z-index: 15;
      left: -10%;
      top:22%;
      border-radius: 14px;
    } 
    .photo4{
      position: absolute;
      z-index: 15;
      left: 42%;
      top:-10%;
      border-radius: 18px;
    } 
    .photo5{
      position: absolute;
      z-index: 15;
      left: 48%;
      top:48%;
      border-radius: 14px;
    } 
    .oval{
      position: absolute;
      z-index: 0;
      left: -90%;
      top: -60%;
    }
      
  }
  .photos::after{
      content:"";
      position: absolute;
      z-index: 10;
      width: 28px;
      height: 28px;
      background-color:#F1F4F5;
      border-radius: 50%;
      left: -12.5%;
      top:43%;
  }
  .photos::before{
      content:"";
      position: absolute;
      z-index: 10;
      width: 36px;
      height: 36px;
      background-color:#1565D8;
      border-radius: 50%;
      left: 65%;
      top:25%;
  }

}
.logos{
  padding-top:450px;
  padding-bottom: 200px;
  background-color: #F5F9FF;  
  .brand{
    margin-right: 80px;
  }
  .white{
    color: white;
  }
 
}
.circle{
  background-image: url("./images/icons/bg.svg");
  background-size: 100%;
  height: 150px;
}

// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
  .company-faq {
    // header
    header {
      .hero {
        padding-top: 40px;
        padding-bottom: 64px;
      }
    }
  }
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) and (max-width: 767.98px) {
  .company-faq {
    // header
    header {
      .hero {
        padding-top: 40px;
        padding-bottom: 64px;
      }
    }
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) and (max-width: 991.98px) {
  .company-faq {
    // header
    header {
      &.clip-eb {
        clip-path: ellipse(200% 120% at 50% -30%);
      }

      .hero {
        padding-top: 40px;
        padding-bottom: 64px;
      }
    }
  }
}

</style>
