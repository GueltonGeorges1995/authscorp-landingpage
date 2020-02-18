<template>
  <div class="bg-blue">
    <div class="square1"></div>
    <div class="square2"></div>
    <div class="square3"></div>
    <div class="square4"></div>
    <v-container>
      <v-row>
        <v-col cols="7">
          <div class="z-index-5">
            <!-- <v-btn class="test">Test</v-btn> -->

            <span class="test">KYC</span>
            <h1 class="white">Verify the identity of your users</h1>
            <p>
              "Lorem ipsum dolor sit, amet consectetur
              <br />adipisicing elit. Eius, voluptatibus iusto dolores
              <br />asperiores illo qui cumque sapiente ipsam inventore.
            </p>
          </div>
        </v-col>
        <v-col cols="5">
          <img src="../../assets/images/image (1).png" alt />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.bg-blue {
  padding: 5.5rem 0;
  background: #264eee;
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
  /* background-color: red; */
  z-index: 2;
  width: 700px;
  height: 700px;
  position: absolute;
  top: 950px;
  left: 0;
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
  top: 950px;
  left: -500px;
}

.square3 {
  content: " ";
  transform: rotate(-30deg);
  z-index: 3;
  width: 300px;
  height: 300px;
  position: absolute;
  top: 700px;
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
  top: 600px;
  right: -150px;
  transform: rotate(-30deg);
  background-image: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.03) 100%
  );
  border-radius: 212px;
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


