<template>
  <div class="company-faq">
    <docs-header />

    <section style="margin-top:-230px;margin-bottom:50px ">
      <v-container>
        <v-content>
          <v-layout row class="mb-5">
            <v-flex xs5 offset-lg-1>
              <v-card class="py-8 px-5 mx-3 d-flex">
                <div class="logo">
                  <img src="./images/icons/rocket.svg" alt />
                </div>
                <div class="ml-3">
                  <h3 class="text-hkgrotesk font-bold text-black mb-3">Getting started</h3>
                  <p
                    class="text-gray mb-0"
                  >Setup your first project. Setup native apps, web apps and machine to machine.</p>
                </div>
              </v-card>
            </v-flex>
            <v-flex xs5>
              <v-card class="py-8 px-5 mx-3 d-flex">
                <div class="logo">
                  <img src="./images/icons/transition.svg" alt />
                </div>
                <div class="ml-3">
                  <h3 class="text-hkgrotesk font-bold text-black mb-3">Libraries</h3>
                  <p
                    class="text-gray mb-0"
                  >Discover our incredible libraries for your favorite language</p>
                </div>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs5 offset-lg-1>
              <v-card class="py-8 px-5 mx-3 d-flex">
                <div class="log">
                  <img src="./images/icons/opened-file.svg" alt />
                </div>
                <div class="ml-3 mt-2">
                  <h3 class="text-hkgrotesk font-bold text-black mb-3">Develop Plugins</h3>
                  <p
                    class="text-gray mb-0"
                  >Customize every action and add your own plugisn on top of authscorp</p>
                </div>
              </v-card>
            </v-flex>
            <v-flex xs5>
              <v-card class="py-8 px-5 mx-3 d-flex">
                <div class="log">
                  <img src="./images/icons/like.svg" alt />
                </div>
                <div class="ml-3 mt-2">
                  <h3 class="text-hkgrotesk font-bold text-black mb-3">Api authorization</h3>
                  <p
                    class="text-gray mb-0"
                  >Secure your API’s by using authscorp authorization middleware</p>
                </div>
              </v-card>
            </v-flex>
          </v-layout>
        </v-content>
        <center class="mt-10">
          <!-- <v-btn color="primary" class="white--text" to="/">
            Explore all features
            <v-icon dark right>arrow_forward_ios</v-icon>
          </v-btn>-->

          <v-btn class="ma-2" outlined color="primary">
            Explore all features
            <v-icon dark right>arrow_forward_ios</v-icon>
          </v-btn>
        </center>
      </v-container>
    </section>

    <section style="margin-bottom:50px;">
      <v-container>
        <v-layout row>
          <v-flex xs12 lg8 offset-lg-2>
            <div class="text-center">
              <p class="titleGreen">quickstart</p>
              <h1 class="titleAwesome">Awesome isn't it? Let's dive in!</h1>
              <p
                class="description mt-5"
              >Install packages with npm or other methods. Package will be installed to components/ directory and ready to use for your project.</p>

              <div class="install-blok">
                <div class="panel mt-10">
                  <v-flex v-for="item in install" :key="item.name" class="d-inline p-2">
                    <v-btn class="my-2 mx-1" @click="selectedOne(item.name)">{{item.name}}</v-btn>
                  </v-flex>
                  <p
                    style="text-align:left; margin-left:25px;margin-top:20px; color:white"
                  >$ {{selected}}</p>
                </div>
                <div class="mt-5 d-flex justify-content-start">
                  <div class="d-flex mr-10">
                    <img src="./images/icons/correct.svg" alt />
                    <span class="requireInstall ml-4">Requires node, npm and git</span>
                  </div>
                  <div class="d-flex">
                    <img src="./images/icons/correct.svg" alt />
                    <span class="requireInstall ml-4">Latest release v1.8.9</span>
                  </div>
                </div>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <section id="category" class="clip-eb">
      <v-container>
        <v-layout row>
          <v-flex xs12>
            <div class="heading text-center mb-52">
              <h2 class="titleCategory">Or choose a category to quickly find the help you need</h2>
            </div>
          </v-flex>
        </v-layout>
        <v-content>
          <v-layout row>
            <v-flex xs12 lg4>
              <v-card class="py-8 px-10 mx-3 text-center">
                <div class="ic mb-2">
                  <img src="./images/icons/opened-file.svg" alt />
                </div>
                <h3 class="text-hkgrotesk font-bold text-black mb-3">Getting started</h3>
                <p class="text-gray mb-0">All you need from A to Z to getting started are available.</p>
              </v-card>
            </v-flex>
            <v-flex xs12 lg4>
              <v-card class="py-8 px-10 mx-3 text-center">
                <div class="ic mb-2">
                  <img src="./images/icons/money-donation.svg" alt />
                </div>
                <h3 class="text-hkgrotesk font-bold text-black mb-3">Pricing plan</h3>
                <p class="text-gray mb-0">All you need from A to Z to getting started are available.</p>
              </v-card>
            </v-flex>
            <v-flex xs12 lg4>
              <v-card class="py-8 px-10 mx-3 text-center">
                <div class="ic mb-2">
                  <img src="./images/icons/like.svg" alt />
                </div>
                <h3 class="text-hkgrotesk font-bold text-black mb-3">Sales questions</h3>
                <p class="text-gray mb-0">All you need from A to Z to getting started are available.</p>
              </v-card>
            </v-flex>
          </v-layout>
        </v-content>
      </v-container>
    </section>

    <section id="Javascript" style="background-color:#F5F9FF; margin-top:-100px">
      <v-container style="padding-top:100px">
        <v-layout row class="pt-10">
          <v-flex xs12 lg8 offset-lg-2>
            <div class="text-center">
              <h1 class="titleAwesome">Powerfull javascript library ever</h1>
              <p
                class="description mt-5"
              >An awesome & powefull JavaScript library for building user interfaces. Independent of any third-party libraries or frameworks.</p>
            </div>
          </v-flex>
        </v-layout>
        <v-layout row class="mt-10">
          <v-flex xs12>
            <div class="stats text-center" style="border-top:2px solid blue; background:white">
              <v-flex xs3 style="border-right:2px solid #F5F9FF" class="py-8 px-10 mx-3">
                <div class="ic mb-2">
                  <img src="./images/icons/opened-file.svg" alt />
                </div>
                <h3 class="text-hkgrotesk font-bold text-black mb-3">4.98/5</h3>
                <p class="text-gray mb-0">Average ratings</p>
              </v-flex>
              <v-flex xs3 style="border-right:2px solid #F5F9FF" class="py-8 px-10 mx-3">
                <div class="ic mb-2">
                  <img src="./images/icons/opened-file.svg" alt />
                </div>
                <h3 class="text-hkgrotesk font-bold text-black mb-3">360k+</h3>
                <p class="text-gray mb-0">Monthly installs</p>
              </v-flex>
              <v-flex xs3 style="border-right:2px solid #F5F9FF" class="py-8 px-10 mx-3">
                <div class="ic mb-2">
                  <img src="./images/icons/opened-file.svg" alt />
                </div>
                <h3 class="text-hkgrotesk font-bold text-black mb-3">70k+</h3>
                <p class="text-gray mb-0">Weekly downloads</p>
              </v-flex>
              <v-flex xs3 class="py-8 px-10 mx-3">
                <div class="ic mb-2">
                  <img src="./images/icons/opened-file.svg" alt />
                </div>
                <h3 class="text-hkgrotesk font-bold text-black mb-3">6.4M</h3>
                <p class="text-gray mb-0">Total Downloads</p>
              </v-flex>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <section style="background-color:#F5F9FF; padding-top:100px; ">
      <v-container>
        <v-layout row>
          <v-flex xs12 lg8 offset-lg-2>
            <div class="text-center">
              <p class="titleGreen">features</p>
              <h1 class="titleAwesome">Explore about our awesome features</h1>
              <p
                class="description mt-5"
              >An awesome & powefull JavaScript library for building user interfaces. Independent of any third-party libraries or frameworks.</p>
            </div>
          </v-flex>
        </v-layout>
        <v-content>
          <v-layout row>
            <v-flex xs12 lg4 mb-3>
              <v-card class="py-8 px-10 mx-3" style="min-height:280px">
                <div class="ic mb-2">
                  <img src="./images/icons/like.svg" alt />
                </div>
                <h3 class="featureTitle mb-3">Simple usage</h3>
                <p
                  class="featureText mb-0"
                >Our library makes things simple like never before, by preferring code over configuration.</p>
                <v-card-actions style="margin-left:-15px">
                  <v-btn text color="primary">
                    Learn More
                    <v-icon dark right>arrow_forward_ios</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
            <v-flex xs12 lg4 mb-3>
              <v-card class="py-8 px-10 mx-3" style="min-height:280px">
                <div class="ic mb-2">
                  <img src="./images/icons/efficient-build.svg" alt />
                </div>
                <h3 class="featureTitle mb-3">Efficient builds</h3>
                <p
                  class="featureText mb-0"
                >Using the power of node streams, first gives you fast builds that don't write intermediary.</p>
                <v-card-actions style="margin-left:-15px">
                  <v-btn text color="primary">
                    Learn More
                    <v-icon dark right>arrow_forward_ios</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
            <v-flex xs12 lg4 mb-3>
              <v-card class="py-8 px-10 mx-3" style="min-height:280px">
                <div class="ic mb-2">
                  <img src="./images/icons/flexible-library.svg" alt />
                </div>
                <h3 class="featureTitle mb-3">Flexible library</h3>
                <p
                  class="featureText mb-0"
                >Our library is designed to be agnostic about your setup and style of coding.</p>
                <v-card-actions style="margin-left:-15px">
                  <v-btn text color="primary">
                    Learn More
                    <v-icon dark right>arrow_forward_ios</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
            <v-flex xs12 lg4 mb-3>
              <v-card class="py-8 px-10 mx-3" style="min-height:280px">
                <div class="ic mb-2">
                  <img src="./images/icons/syntax.svg" alt />
                </div>
                <h3 class="featureTitle mb-3">Friendly Syntax</h3>
                <p
                  class="featureText mb-0"
                >Our library starts from the same syntax that millions of JavaScript developers know today</p>
                <v-card-actions style="margin-left:-15px">
                  <v-btn text color="primary">
                    Learn More
                    <v-icon dark right>arrow_forward_ios</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
            <v-flex xs12 lg4 mb-3>
              <v-card class="py-8 px-10 mx-3" style="min-height:280px">
                <div class="ic mb-2">
                  <img src="./images/icons/transition.svg" alt />
                </div>
                <h3 class="featureTitle mb-3">Suit for large apps</h3>
                <p
                  class="featureText mb-0"
                >Using the power of node streams, first gives you fast builds that don't write intermediary.</p>
                <v-card-actions style="margin-left:-15px">
                  <v-btn text color="primary">
                    Learn More
                    <v-icon dark right>arrow_forward_ios</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
            <v-flex xs12 lg4 mb-3>
              <v-card class="py-8 px-10 mx-3" style="min-height:280px">
                <div class="ic mb-2">
                  <img src="./images/icons/state-art-js.svg" alt />
                </div>
                <h3 class="featureTitle mb-3">State of the art JavaScript</h3>
                <p
                  class="featureText mb-0"
                >Our library offers support for the latest and evolving JavaScript features.</p>
                <v-card-actions style="margin-left:-15px">
                  <v-btn text color="primary">
                    Learn More
                    <v-icon dark right>arrow_forward_ios</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-content>
      </v-container>
    </section>

    <section
      class="clip-eb"
      style="background-color:#F5F9FF; padding-top:100px; margin-bottom:-150px "
    >
      <v-container>
        <v-layout row>
          <v-flex xs12 lg8 offset-lg-2>
            <div class="text-center">
              <h1 class="titleAwesome">Still have a questions?</h1>
              <p
                class="description mt-5"
              >If you cannot find answer to your question in our FAQ, you can always contact us. We wil answer to you shortly!</p>
            </div>
          </v-flex>
        </v-layout>
        <v-content>
          <v-layout row mb-5>
            <v-flex xs12 lg6>
              <v-card class="py-8 px-10 mx-3 text-center">
                <div class="ic mb-2">
                  <img src="./images/icons/money-donation.svg" alt />
                </div>
                <h3 class="featureTitle mb-3">+1 (646) 786-5060</h3>
                <p
                  class="featureText mb-0"
                >All you need from A to Z to getting started are available.</p>
              </v-card>
            </v-flex>
            <v-flex xs12 lg6>
              <v-card class="py-8 px-10 mx-3 text-center">
                <div class="ic mb-2">
                  <img src="./images/icons/like.svg" alt />
                </div>
                <h3 class="featureTitle mb-3">Sales questions</h3>
                <p
                  class="featureText mb-0"
                >All you need from A to Z to getting started are available.</p>
              </v-card>
            </v-flex>
          </v-layout>
        </v-content>
      </v-container>
    </section>
  </div>
</template>

<script>
import DocsHeader from "./header";

export default {
  components: {
    DocsHeader
  },
  data() {
    return {
      selected: "npm install -g ehya.js",
      install: [
        {
          name: "npm",
          methode: "npm install -g ehya.js"
        },
        {
          name: "bower",
          methode: "bower install -g ehya.js"
        },
        {
          name: "yarn",
          methode: "yarn install -g ehya.js"
        },
        {
          name: "NuGet",
          methode: "NuGet install -g ehya.js"
        },
        {
          name: "spm",
          methode: "spm install -g ehya.js"
        },
        {
          name: "meteor",
          methode: "meteor install -g ehya.js"
        }
      ]
    };
  },
  methods: {
    selectedOne(item) {
      var elem = this.install.find(obj => obj.name === item);
      this.selected = elem.methode;
    }
  }
};
</script>

<style lang="scss">
  .install-blok {
    display: block;
    margin: auto;
    width: 40vw;
  }

  .panel {
    height: 20vh;
    background: #0f1f2b;
    border-radius: 16px;
  }

  .requireInstall {
    font-size: 16px;
    color: #183b56;
    letter-spacing: 0;
  }

  .titleGreen {
    color: #36b37e;
    font-size: 0.8em;
    text-transform: uppercase;
  }

  .titleAwesome {
    font-size: 36px;
    color: #183b56;
    letter-spacing: 0.2px;
    text-align: center;
    line-height: 48px;
    font-weight: normal;
  }

  .description {
    font-size: 18px;
    color: #5a7184;
    letter-spacing: 0;
    text-align: center;
    line-height: 32px;
    font-weight: normal;
  }

  .titleCategory {
    font-size: 20px;
    color: #5a7184;
    letter-spacing: 0;
    text-align: center;
    line-height: 28px;
    font-weight: normal;
  }

  .stats {
    display: flex;
    flex-direction: row;
  }
  .clip-eb {
    clip-path: ellipse(150% 120% at 50% -30%);
    padding-bottom: 175px !important;
    background-color: white;
  }

  .featureTitle {
    font-size: 22px;
    color: #183b56;
    letter-spacing: 0.2px;
    line-height: 32px;
    font-weight: normal;
  }

  .featureText {
    font-size: 18px;
    color: #5a7184;
    letter-spacing: 0;
    line-height: 32px;
    font-weight: normal;
  }

  // Extra small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) {
    .stats {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: none;
    }
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
    .stats {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
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