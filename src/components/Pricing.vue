<template>
  <section>
      <v-container>
          <v-row>
              <v-col md="12">
                  <div id="bg">
                    <v-chip color="#ffffff" id="pill">
                        Pricing
                    </v-chip>
                  </div>
                  <h2 id="title">Choose the most suitable service for your needs with reasonable price.</h2>
              </v-col>
          </v-row>
          <v-row justify="center">
              <v-col md="3" style="margin-right: 0">
                  <v-card height="353px" color="#264EEE">
                      <div style="width: 116.75px;">
                          <v-chip color="rgba(255,255,255,0.11)" class="cardtitle">
                              Cloud
                          </v-chip>
                      </div>
                      <v-img 
                        width="90px"
                        height="88px"
                        src="../assets/icons/image (9).png"
                      ></v-img>
                      <div>
                          <p class="a">$0.15</p>
                          <p class="a2">Per Verification</p>
                      </div>
                  </v-card>
              </v-col>
              <v-col md="3" style="margin-left: 0;">
                  <v-card height="353px" color="#1ed660">
                      <div style="width: 116.75px;">
                          <v-chip color="rgba(255,255,255,0.11)" class="cardtitle">
                              Manual
                          </v-chip>
                      </div>
                      <v-img 
                        width="99px"
                        height="88px"
                        src="../assets/icons/image (10).png"
                      ></v-img>
                      <div>
                          <p class="a">$0.01</p>
                          <p class="a2">Per Verification</p>
                      </div>
                  </v-card>
              </v-col>
          </v-row>
          <v-row>
              <v-col md="12">
                  <div>
                    <p id="terms" style="margin: 0 auto">*Terms are subject to change</p>
                  </div>
                  <div style="width: 236px;">
                    <button>Join the Beta Program</button>
                  </div>
              </v-col>
          </v-row>
      </v-container>
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
    }

    #pill {
        height: 42px;
        color: #5e82f1;
        font-family: Lato;
        font-size: 17px;
        font-weight: 700;
        line-height: 20px;
        text-align: center;
    }

    .cardtitle {
        height: 29px;
        color: #ffffff;
        font-family: Lato;
        font-size: 24px;
        font-weight: 700;
        line-height: 29px;
        text-align: center;
    }

    #bg {
        margin-top: 30px;
        width: 109.45px;
        height: 41.65px;
    }

    #title {
        margin-top: 30px;
        height: 120px;
        color: #313236;
        font-family: Lato;
        font-size: 32px;
        font-weight: 700;
        line-height: 61px;
        text-align: center;
    }

    .a {
        height: 58px;
        color: #ffffff;
        font-family: Lato;
        font-size: 48px;
        font-weight: 700;
        line-height: 58px;
        text-align: center;
    }

    .a2 {
        height: 22px;
        color: #ffffff;
        font-family: Lato;
        font-size: 18px;
        font-weight: 700;
        line-height: 22px;
        text-align: center;
    }

    #terms {
        width: 232px;
        height: 19px;
        color: #7c7d8d;
        font-family: Lato;
        font-size: 16px;
        font-weight: 700;
        line-height: 19px;
        text-align: center;
    }

    button {
        margin: 0 auto;
        height: 22px;
        color: #264eee;
        font-family: Lato;
        font-size: 18px;
        font-weight: 700;
        line-height: 22px;
        text-align: center;
    }

</style>