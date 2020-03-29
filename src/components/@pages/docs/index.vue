<template>
    <div class="company-faq">
        <docs-header />

        <section id="category" class="category">
            <v-container>
                <v-layout row>
                    <v-flex xs12>
                        <div class="heading text-center mb-52">
                            <h2 class="text-opensans font-semibold text-gray mb-0">Or choose a category to quickly find the help you need</h2>
                        </div>
                    </v-flex>
                </v-layout>
                <v-content>
                    <v-layout row>
                        <v-flex xs12 lg4>
                            <v-card class="py-8 px-10 mx-3 text-center">
                                <div class="ic mb-2">
                                    <img src="./images/icons/opened-file.svg" alt="">
                                </div>
                                <h3 class="text-hkgrotesk font-bold text-black mb-3">Getting started</h3>
                                <p class="text-gray mb-0">All you need from A to Z to getting started are available.</p>
                            </v-card>
                        </v-flex>
                        <v-flex xs12 lg4>
                            <v-card class="py-8 px-10 mx-3 text-center">
                                <div class="ic mb-2">
                                    <img src="./images/icons/money-donation.svg" alt="">
                                </div>
                                <h3 class="text-hkgrotesk font-bold text-black mb-3">Pricing plan</h3>
                                <p class="text-gray mb-0">All you need from A to Z to getting started are available.</p>
                            </v-card>
                        </v-flex>
                        <v-flex xs12 lg4>
                            <v-card class="py-8 px-10 mx-3 text-center">
                                <div class="ic mb-2">
                                    <img src="./images/icons/like.svg" alt="">
                                </div>
                                <h3 class="text-hkgrotesk font-bold text-black mb-3">Sales questions</h3>
                                <p class="text-gray mb-0">All you need from A to Z to getting started are available.</p>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-content>
            </v-container>
        </section>

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

.clip-eb {
    clip-path: ellipse(150% 120% at 50% -30%);
    padding-bottom: 175px !important;
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