<template>
  <section style="position: relative; overflow: hidden; padding-bottom: 20vh">
      <v-container>
          <v-row justify="center">
              <v-col cols="9">
                  <div id="bg">
                    <v-chip color="#FFFFFF" id="pill">
                        Pricing
                    </v-chip>
                  </div>
                  <div>
                    <h2 id="title">Choose the most suitable service for your needs with reasonable price.</h2>
                  </div>
              </v-col>
          </v-row>
          <v-row justify="center">
              <v-col md="3" sm="5" style="margin-right: 0">
                  <v-card height="353px" color="#264EEE" class="dessus">
                      <div style="width: 116.75px; padding-top: 40px;">
                          <v-chip color="rgba(255,255,255,0.11)" class="cardtitle">
                              Cloud
                          </v-chip>
                      </div>
                      <v-img 
                        style="margin: 40px auto 50px auto;"
                        width="90px"
                        height="88px"
                        src="../../assets/icons/cloud.png"
                      ></v-img>
                      <div>
                          <p class="a">$0.15</p>
                          <p class="a2">Per Verification</p>
                      </div>
                  </v-card>
              </v-col>
              <v-col md="3" sm="5" style="margin-left: 0;">
                  <v-card height="353px" color="#1ed660" class="dessus">
                      <div style="width: 116.75px; padding-top: 40px;">
                          <v-chip color="rgba(255,255,255,0.11)" class="cardtitle">
                              Manual
                          </v-chip>
                      </div>
                      <v-img 
                        style="margin: 40px auto 50px auto;"
                        width="99px"
                        height="88px"
                        src="../../assets/icons/manual.png"
                      ></v-img>
                      <div>
                          <p class="a">$0.01</p>
                          <p class="a2">Per Verification</p>
                      </div>
                  </v-card>
              </v-col>
          </v-row>
          <v-row>
              <v-col cols="12" class="dessus">
                  <div style="margin: 20px auto;">
                    <p id="terms" style="margin: 0 auto">*Terms are subject to change</p>
                  </div>
                  <div style="width: 236px;">
                    <button>Join the Beta Program</button>
                  </div>
              </v-col>
          </v-row>
      </v-container>
      <div id="parallelogram"></div>
  </section>
</template>

<script>
export default {
    name: 'Pricing'
}
</script>

<style scoped>
    @import url('https://fonts.google.com/specimen/Lato?selection.family=Lato');

    div {
        margin: 0 auto;
        text-align: center;
    }

    section {
        background: #f5f9ff;
    }

    #pill {
        height: 42px;
        color: #5e82f1;
        font-family: Lato;
        font-size: 17px;
        font-weight: 700;
        line-height: 20px;
    }

    .cardtitle {
        height: 40px;
        color: #ffffff;
        font-family: Lato;
        font-size: 24px;
        font-weight: 700;
        line-height: 29px;
    }

    #bg {
        margin-top: 30px;
        width: 109.45px;
        height: 41.65px;
    }

    .dessus {
        z-index: 1;
    }

    #title {
        margin-top: 30px;
        height: 120px;
        color: #313236;
        font-family: Lato;
        font-size: 32px;
        font-weight: 700;
        line-height: 61px;
    }

    .a {
        margin: 0;
        height: 58px;
        color: #ffffff;
        font-family: Lato;
        font-size: 48px;
        font-weight: 700;
        line-height: 58px;
    }

    .a2 {
        height: 22px;
        color: #ffffff;
        font-family: Lato;
        font-size: 18px;
        font-weight: 700;
        line-height: 22px;
    }

    #terms {
        width: 232px;
        height: 19px;
        color: #7c7d8d;
        font-family: Lato;
        font-size: 16px;
        font-weight: 700;
        line-height: 19px;
    }

    button {
        margin: 0 auto;
        height: 50px;
        width: 237px;
        color: #264eee;
        border-radius: 30px;
        background-color: rgba(245,249,255);
        font-family: Lato;
        font-size: 18px;
        font-weight: 700;
        line-height: 22px;
    }

    #parallelogram {
        width: 100%;
        height: 30vh;
        background: #FFFFFF;
        position: absolute;
        top: 55%;
        transform: rotate(-5deg) skew(-5deg);
        overflow: hidden;
    }


    /**Mediaqueries */

    @media screen and (min-width: 240px) and (max-width: 580px) {
        #title {
            font-size: initial;
            margin-top: 10px;
            height: initial;
        }
    }

    @media screen and (min-width: 580px) and (max-width: 800px) {
        #title {
            font-size: 25px;
            margin-top: 20px;
        }
    }

    @media screen and (min-width: 600px) and (max-width: 700px) {
        #parallelogram {
            height: 67vh;
        }
    }

    @media screen and (max-width: 450px) {
        #parallelogram {
           display: none;
        }
    }

</style>