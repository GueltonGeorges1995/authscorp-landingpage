<template>
  <div class="bg-blue">
    <div class="square1"></div>
    <div class="square2"></div>
    <div class="square3"></div>
    <div class="square4"></div>
    <v-container class="mobile-center">
      <v-row>
        <v-col cols="12" sm="12" md="7" xl="6" class="flex-xl">
          <div class="z-index-5">
            <span class="test">KYC</span>

            <h1>Verify the identity of your users</h1>
            <p>
              "Lorem ipsum dolor sit, amet consectetur
              <br />adipisicing elit. Eius, voluptatibus iusto dolores
              <br />asperiores illo qui cumque sapiente ipsam inventore.
            </p>
          </div>
          <div class="bg-input">
            <form action="http://localhost:3000/subscribe" method="POST">
              <input type="email" name="email" placeholder="Enter your email" class="padding-left" />
            </form>
            <a href class="input-button">
              <svg
                width="55px"
                height="44px"
                viewBox="0 0 55 44"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <!-- Generator: Sketch 63.1 (92452) - https://sketch.com -->
                <title>button</title>
                <desc>Created with Sketch.</desc>
                <defs>
                  <rect id="path-1" x="0" y="0.628837483" width="856" height="222.535849" rx="10" />
                  <filter
                    x="-2.6%"
                    y="-9.0%"
                    width="105.1%"
                    height="119.8%"
                    filterUnits="objectBoundingBox"
                    id="filter-3"
                  >
                    <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
                    <feGaussianBlur
                      stdDeviation="7"
                      in="shadowOffsetOuter1"
                      result="shadowBlurOuter1"
                    />
                    <feColorMatrix
                      values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.05 0"
                      type="matrix"
                      in="shadowBlurOuter1"
                    />
                  </filter>
                  <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-4">
                    <stop stop-color="#FFFFFF" stop-opacity="0" offset="0%" />
                    <stop stop-color="#FFFFFF" stop-opacity="0.0621995192" offset="100%" />
                  </linearGradient>
                </defs>
                <g
                  id="Landing-Page"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g id="KYC-/-AML" transform="translate(-990.000000, -5431.000000)">
                    <g id="LEARN" transform="translate(2.000000, 4108.000000)" fill="#F5F9FF">
                      <polygon id="bg" points="0 0 1401.91409 0 1401.91409 1350 0 1350" />
                    </g>
                    <g id="NEWSLETTER" transform="translate(276.000000, 5341.000000)">
                      <g
                        id="Rectangle-+-Rectangle-Copy-6-Mask"
                        transform="translate(0.000000, 0.103188)"
                      >
                        <mask id="mask-2" fill="white">
                          <use xlink:href="#path-1" />
                        </mask>
                        <g id="Mask">
                          <use
                            fill="black"
                            fill-opacity="1"
                            filter="url(#filter-3)"
                            xlink:href="#path-1"
                          />
                          <use fill="#264EEE" fill-rule="evenodd" xlink:href="#path-1" />
                        </g>
                        <polygon
                          id="Rectangle"
                          fill="url(#linearGradient-4)"
                          mask="url(#mask-2)"
                          transform="translate(615.398858, 112.731976) rotate(-45.000000) translate(-615.398858, -112.731976) "
                          points="511.927221 -184.36049 719.033661 -184.417357 718.870495 409.824442 511.764055 409.881309"
                        />
                        <polygon
                          id="Rectangle-Copy-6"
                          fill="url(#linearGradient-4)"
                          mask="url(#mask-2)"
                          transform="translate(690.756123, -7.320258) rotate(-45.000000) translate(-690.756123, 7.320258) "
                          points="587.284486 -304.412724 794.390926 -304.469591 794.22776 289.772208 587.12132 289.829075"
                        />
                      </g>
                      <g id="form" transform="translate(438.974359, 75.398659)">
                        <g id="button" transform="translate(275.822222, 14.640516)">
                          <rect
                            id="bg"
                            fill="#264EEE"
                            x="0"
                            y="0"
                            width="53.408547"
                            height="43.9215491"
                            rx="5"
                          />
                          <g
                            id="arrow-right"
                            transform="translate(20.485470, 17.568620)"
                            stroke="#FFFFFF"
                            stroke-width="2"
                          >
                            <line x1="0" y1="4.25701169" x2="13.1692308" y2="4.25701169" id="Path" />
                            <polyline
                              id="Path"
                              stroke-linecap="square"
                              points="8.56 0 13.1692308 4.25701169 8.56 8.51402337"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="5" xl="6" class="flex-xl">
          <img src="@assets/images/image (1).png" alt />
          <!-- <v-img  src="@assets/images/image (1).png"/> -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
@media screen and (max-width: 960px) {
  .mobile-center {
    text-align: center;
  }
  .square1,
  .square2,
  .square3,
  .square4 {
    display: none;
  }
  img {
    height: 80%;
  }
}
.padding-left {
  padding-left: 10px;
}
@media screen and (min-width: 1900px) {
  .flex-xl {
    padding-left: 20vh;
  }
    
}

input {
  background: #ffffff;
  border: 1px solid #e6e8f6;
  border-radius: 7px;
  font-size: 17px;
  color: #979ea5;
  letter-spacing: 0;
  z-index: 11;
  height: 3.5rem;
  width: 20rem;
}

.bg-input {
  z-index: 10;
  padding: 1rem;
  background: rgba(245, 249, 255, 0.1);
  border-radius: 5px;
  display: inline-block;
  position: relative;
}
.input-button {
  position: absolute;
  left: 275px;
  border-radius: 30px;
  top: 21px;
}

.bg-blue {
  padding: 5.5rem 0;
  background: #264eee;
  overflow: hidden;
  position: relative;
}
/* .z-index-5 {
  z-index: 5;
} */
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
  letter-spacing: 0;
  text-align: center;
}

h1 {
  margin-top: 3rem;
  font-size: 32px;
  color: #ffffff;
  line-height: 58px;
}
p {
  opacity: 0.8;
  font-size: 17px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 34px;
  font-weight: bold;
}
</style>


