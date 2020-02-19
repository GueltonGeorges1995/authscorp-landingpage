<template>
  <div class="bg-blue">
    <div class="square1"></div>
    <div class="square2"></div>
    <div class="square3"></div>
    <div class="square4"></div>
    <v-container class="mobile-center">
      <v-row>
        <v-col cols="12" sm="12" md="7">
          <div class="z-index-5">
            <span class="test">KYC</span>
            <h1>Verify the identity of your users</h1>
            <p>
              "Lorem ipsum dolor sit, amet consectetur
              <br />adipisicing elit. Eius, voluptatibus iusto dolores
              <br />asperiores illo qui cumque sapiente ipsam inventore.
            </p>
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="5">
          <img src="../../assets/images/image (1).png" alt />
          <!-- <v-img  src="../../assets/images/image (1).png"/> -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
@media screen and (max-width: 960px) {
 .mobile-center {
     text-align: center
 }
 .square1, .square2, .square3, .square4 {
     display: none;
 }
}



.bg-blue {
  padding: 5.5rem 0;
  background: #264eee;
  overflow: hidden;
  position: relative;
}
.z-index-5 {
  z-index: 5;
}
.square1 {
  content: " ";
  transform: rotate(-30deg);
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.06) 100%
  );
  z-index: 2;
  width: 700px;
  height: 830px;
  position: absolute;
  top: 0;
  left: 0;
  /* background-color: red; */
}
.square2 {
  content: " ";
  transform: rotate(-30deg);
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.03) 100%
  );
  /* background-color: red; */
  z-index: 3;
  width: 700px;
  height: 700px;
  position: absolute;
  top: 104px;
  left: -249px;
  
}

.square3 {
  content: " ";
  transform: rotate(-30deg);
  z-index: 3;
  width: 300px;
  height: 300px;
  position: absolute;
  top: -75px;
  right: -100px;
  transform: rotate(-30deg);
  background-image: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.06) 100%
  );
  border-radius: 212px;
  
}

.square4 {
  content: " ";
  transform: rotate(-30deg);
  z-index: 4;
  width: 300px;
  height: 300px;
  position: absolute;
  top: -110px;
  right: -150px;
  transform: rotate(-30deg);
  background-image: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.03) 100%
  );
  border-radius: 212px;
  /* background-color: red; */
}

.test {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 27px;
  color: white;
  padding: 0.5rem 2.5rem;
  font-size: 1rem;
  font-weight: bold;
  font-family: Helvetica;
  letter-spacing: 0;
  text-align: center;
}

h1 {
  margin-top: 3rem;
  font-family: Helvetica;
  font-size: 32px;
  color: #ffffff;
  line-height: 58px;
}
p {
  opacity: 0.8;
  font-family: Helvetica;
  font-size: 17px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 34px;
  font-weight: bold;
}
</style>


