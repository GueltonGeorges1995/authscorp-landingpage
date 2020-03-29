<template>
  <v-container class="pb-0 margin-top">
    <v-row>
      <v-col class="col-1-header pb-0 first-col" cols="12" sm="12" md="5">
        <h1 class="title1">KYC / AML</h1>
        <h1 class="title1 color-blue">Integration</h1>
        <p class="text-header">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto illum neque illo iste quae. Quidem assumenda dolorem deserunt eum.</p>
        <v-btn x-large class="button-header">
          <a href>Let's Go !</a>
        </v-btn>
      </v-col>
      <v-col cols="2" sm='2' md="1" class="pb-0"></v-col>
      <v-col cols="12" sm='12' md='6' class="pb-0">
        <!-- <img src="@assets/images/2933349a1546cbb67369596f469ecd19eb7178f3.png" /> -->
        <v-img src="@assets/images/2933349a1546cbb67369596f469ecd19eb7178f3.png"  class="img"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

@media screen and (max-width: 960px) {
 .first-col {
     text-align: center;
 }
}


.margin-top {
  margin-top: 12rem;
}
.col-1-header {
  margin-top: 7rem;
}
.title1 {
  font-family: Helvetica;
  font-size: 48px;
  color: #313236;
  line-height: 64px;
}
.color-blue {
  color: #264eee;
}
.text-header {
  opacity: 0.8;
  font-family: Helvetica;
  font-size: 20px;
  color: #7c7d8d;
  letter-spacing: 0;
  line-height: 36px;
  font-weight: bold;
}
.button-header {
  background-image: linear-gradient(90deg, #ffa466 0%, #ff5360 100%);
  border-radius: 4px;
  font-family: Helvetica;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
  margin-right: 3rem;
}

a {
  color: white !important;
  text-decoration: none;
}
.pb-0 {
  padding-bottom: 0;
}
.img {
  height: 100%;
  /* z-index: 100; */
}
</style>

