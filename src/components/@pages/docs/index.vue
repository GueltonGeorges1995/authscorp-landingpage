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

.company-faq {

  // header
  header {
    background-image: url("./images/cover-4@2x.png");
    background-position: top center;
    background-size: cover;

    .hero {
      padding-top: 140px;
      padding-bottom: 105px;
    }
  }

  // categories
  .categories {
    padding-top: 46px;

    .heading {
      margin-bottom: 50px;
    }

    .content {

    }
  }

  // faq
  .faq {
    padding-top: 147px;
    background-image: linear-gradient(to bottom, rgba(250, 251, 251, 0), #f8fbff);

    &.clip-eb {
      clip-path: ellipse(180% 125% at 50% -30%);
    }

    .heading {
      margin-bottom: 64px;
    }

    &-question {
      margin-top: 144px;
      padding-bottom: 48px;
    }
  }
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

    // categories
    .categories {
      .heading {
        h3 {
          font-size: 18px !important;
          line-height: normal !important;
        }
      }

      .content {
        .card-f {
          margin-bottom: 16px;
        }
      }
    }

    // faq
    .faq {
      padding-top: 48px;
    }

    .faq-question {
      margin-top: 72px;

      .card-f {
        margin-bottom: 1rem;
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

    // categories
    .categories {
      .heading {
        h3 {
          font-size: 18px !important;
          line-height: normal !important;
        }
      }

      .content {
        .card-f {
          margin-bottom: 16px;
        }
      }
    }

    // faq
    .faq {
      padding-top: 48px;
    }

    .faq-question {
      margin-top: 72px;

      .card-f {
        margin-bottom: 1rem;
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

    // categories
    .categories {
      .heading {
        h3 {
          font-size: 18px !important;
          line-height: normal !important;
        }
      }

      .content {
        .card-f {
          margin-bottom: 16px;
        }
      }
    }

    // faq
    .faq {
      padding-top: 48px;

      &.clip-eb {
        clip-path: ellipse(300% 120% at 50% -30%);
      }
    }

    .faq-question {
      margin-top: 72px;

      .card-f {
        margin-bottom: 1rem;
      }
    }
  }
}

</style>