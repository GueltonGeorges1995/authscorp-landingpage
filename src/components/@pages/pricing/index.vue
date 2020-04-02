<template>
  <div id="Page-Pricing">
    <section id="pricing-info" style="background-color:#F8FBFE;" class="clip-eb">
      <v-container>
        <v-layout row class="pt-10">
          <v-flex xs12 lg8 offset-lg-2>
            <div class="text-center">
              <h1 class="titleAwesome">Our pricing plan made simple</h1>
              <p
                class="description mt-5 mx-7"
              >All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
            </div>
          </v-flex>
        </v-layout>
        <v-layout row class="mt-10">
          <v-flex class="d-flex justify-center">
            <div class="bill-option d-flex justify-space-around" style="width:25vw;">
              <p>Bill Monthly</p>
              <v-switch color="green" style="margin-top:0 !important" inset></v-switch>
              <p>
                Bill Annually
                <br />
                <span style="color:green;">Save 15%</span>
              </p>
            </div>
          </v-flex>
        </v-layout>
        <v-layout mt-5 class="layoutMobile">
          <v-flex class="mb-5">
            <v-card class="py-8 px-5 mx-3 d-flex flex-column" style="border-top:2px solid #0A1A5A">
              <div class="ml-3 mb-3">
                <h1 class="mb-2" style="color: #0A1A5A; font-size:2em;">Free</h1>
                <h2 class="mb-5" style="font-size:1.5em; color:#183B56; font-weight:normal">Standard</h2>
                <p>All the basics for businesses that are just getting started.</p>
              </div>
              <div class="mx-3 mb-3" style="border:1px solid #F8FBFE"></div>
              <div class="ml-3 mt-5">
                <div class="mb-5 d-flex align-center">
                  <img src="../docs/images/icons/correct.svg" alt />
                  <span class="requireInstall ml-4">Unlimited project use</span>
                </div>
                <div class="mb-5 d-flex align-center">
                  <img src="../docs/images/icons/correct.svg" alt />
                  <span class="requireInstall ml-4">Advanced dashboard</span>
                </div>
                <div class="mb-5 d-flex align-center">
                  <img src="../docs/images/icons/correct.svg" alt />
                  <span class="requireInstall ml-4">All components included</span>
                </div>
                <div class="mb-5 d-flex align-center">
                  <img src="../docs/images/icons/correct.svg" alt />
                  <span class="requireInstall ml-4">Advanced insight</span>
                </div>
              </div>
              <div class="mt-5 d-flex justify-center">
                <v-btn rounded outlined color="primary">
                  Get Started
                  <v-icon dark right>arrow_forward_ios</v-icon>
                </v-btn>
              </div>
            </v-card>
          </v-flex>
          <v-flex class="mb-5">
            <v-card class="py-8 px-5 mx-3 d-flex flex-column" style="border-top:2px solid green">
              <div class="ml-3 mb-3">
                <h1 class="mb-2 d-flex align-center" style="color: green; font-size:2em;">
                  $99
                  <span class="txtMonth">/month</span>
                </h1>
                <h2
                  class="mb-5"
                  style="font-size:1.5em; color:#183B56; font-weight:normal"
                >Essentials</h2>
                <p>Better for growing businesses that want more customers.</p>
              </div>
              <div class="mx-3 mb-3" style="border:1px solid #F8FBFE"></div>
              <div class="ml-3 mt-5">
                <div class="mb-5 d-flex align-center">
                  <img src="../docs/images/icons/correct.svg" alt />
                  <span class="requireInstall ml-4">Unlimited project use</span>
                </div>
                <div class="mb-5 d-flex align-center">
                  <img src="../docs/images/icons/correct.svg" alt />
                  <span class="requireInstall ml-4">Advanced dashboard</span>
                </div>
                <div class="mb-5 d-flex align-center">
                  <img src="../docs/images/icons/correct.svg" alt />
                  <span class="requireInstall ml-4">All components included</span>
                </div>
                <div class="mb-5 d-flex align-center">
                  <img src="../docs/images/icons/correct.svg" alt />
                  <span class="requireInstall ml-4">Advanced insight</span>
                </div>
              </div>
              <div class="mt-5 d-flex justify-center">
                <v-btn rounded outlined color="primary">
                  Get Started
                  <v-icon dark right>arrow_forward_ios</v-icon>
                </v-btn>
              </div>
            </v-card>
          </v-flex>
          <v-flex class="mb-5">
            <v-card class="py-8 px-5 mx-3 d-flex flex-column" style="border-top:2px solid #1565D8">
              <div class="ml-3 mb-3">
                <h1 class="mb-2 d-flex align-center" style="color: #1565D8; font-size:2em;">
                  $339
                  <span class="txtMonth">/month</span>
                </h1>
                <h2 class="mb-5" style="font-size:1.5em; color:#183B56; font-weight:normal">Premium</h2>
                <p>Advanced features for pros who need more customization.</p>
              </div>
              <div class="mx-3 mb-3" style="border:1px solid #F8FBFE"></div>
              <div class="ml-3 mt-5">
                <div class="mb-5 d-flex align-center">
                  <img src="../docs/images/icons/correct.svg" alt />
                  <span class="requireInstall ml-4">Unlimited project use</span>
                </div>
                <div class="mb-5 d-flex align-center">
                  <img src="../docs/images/icons/correct.svg" alt />
                  <span class="requireInstall ml-4">Advanced dashboard</span>
                </div>
                <div class="mb-5 d-flex align-center">
                  <img src="../docs/images/icons/correct.svg" alt />
                  <span class="requireInstall ml-4">All components included</span>
                </div>
                <div class="mb-5 d-flex align-center">
                  <img src="../docs/images/icons/correct.svg" alt />
                  <span class="requireInstall ml-4">Advanced insight</span>
                </div>
              </div>
              <div class="mt-5 d-flex justify-center">
                <v-btn rounded color="primary">
                  Get Started
                  <v-icon dark right>arrow_forward_ios</v-icon>
                </v-btn>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    <section id="subscriptions-plan">
      <v-container>
        <v-layout row>
          <v-flex xs12 lg8 offset-lg-2>
            <div class="text-center">
              <p class="titleGreen">Premium</p>
              <h1 class="titleAwesome">
                All subscriptions plan include
                <br />these features
              </h1>
            </div>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-content>
            <v-layout row>
              <v-flex lg6>
                <v-card outlined style="border:none !important" class="py-8 px-5 mx-3 d-flex">
                  <div class="d-flex align-center" style="margin-top:-30px">
                    <img class="logoRound px-2 py-2" src="../docs/images/icons/transition.svg" alt />
                  </div>
                  <div class="ml-3 mt-2">
                    <h3 class="text-hkgrotesk font-bold text-black mb-3">Marketing tools</h3>
                    <p
                      class="text-gray mb-0"
                    >Materials, education and campaigns to help you share with current and future clients.</p>
                  </div>
                </v-card>
              </v-flex>
              <v-flex lg6>
                <v-card outlined style="border:none !important" class="py-8 px-5 mx-3 d-flex">
                  <div class="d-flex align-center" style="margin-top:-20px">
                    <img class="logoRound px-2 py-2" src="../docs/images/icons/like.svg" alt />
                  </div>
                  <div class="ml-3 mt-2">
                    <h3 class="text-hkgrotesk font-bold text-black mb-3">Benefits</h3>
                    <p
                      class="text-gray mb-0"
                    >Digital employee records, quoting, enrollment, and reporting in English and Indonesian.</p>
                  </div>
                </v-card>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex lg6>
                <v-card outlined style="border:none !important" class="py-8 px-5 mx-3 d-flex">
                  <div class="d-flex align-center" style="margin-top:-30px">
                    <img
                      class="logoRound px-2 py-2"
                      src="../docs/images/icons/custome-service.svg"
                      alt
                    />
                  </div>
                  <div class="ml-3 mt-2">
                    <h3 class="text-hkgrotesk font-bold text-black mb-3">Customer services</h3>
                    <p
                      class="text-gray mb-0"
                    >Access to our team of industry experts, personal training, support line and help desk.</p>
                  </div>
                </v-card>
              </v-flex>
              <v-flex lg6>
                <v-card outlined style="border:none !important" class="py-8 px-5 mx-3 d-flex">
                  <div class="d-flex align-center" style="margin-top:-20px">
                    <img class="logoRound px-2 py-2" src="../docs/images/icons/partner.svg" alt />
                  </div>
                  <div class="ml-3 mt-2">
                    <h3 class="text-hkgrotesk font-bold text-black mb-3">Become partners</h3>
                    <p
                      class="text-gray mb-0"
                    >We can help you set up and manager your groups if you are become our partner.</p>
                  </div>
                </v-card>
              </v-flex>
            </v-layout>
          </v-content>
        </v-layout>
      </v-container>
    </section>
    <section id="FAQ" style="padding-top:100px; padding-bottom:100px;">
      <v-container>
        <v-layout row>
          <v-flex xs12 lg8 offset-lg-2>
            <div class="text-center">
              <h1 class="titleAwesome">Frequently asked questions</h1>
            </div>
          </v-flex>
        </v-layout>
        <v-content>
          <v-expansion-panels v-model="select">
            <v-expansion-panel v-for="(item,i) in items" :key="i">
              <v-expansion-panel-header :style="[items[select?select:0].question==item.question && select !=null? {'color':'blue'}:{'color':'black'}]">{{item.question}}</v-expansion-panel-header>
              <v-expansion-panel-content>{{item.answer}}</v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-content>
      </v-container>
    </section>
    <section id="Questions" class="clip-eb" style="background-color:#F8FBFE; padding-top:100px; ">
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
                  <img src="../docs/images/icons/money-donation.svg" alt />
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
                  <img src="../docs/images/icons/like.svg" alt />
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
export default {
  data(){
    return {
        select:null,
        items:
        [{
          question:"How do I pay for the Essentials or Premium plan?",
          answer:"You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle."
        },
        {
          question:"Can I cancel my Essentials or Premium plan subscription at any time?",
          answer:"You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle."
        },{
          question:"We need to add new users to our team. How will that be billed?",
          answer:"You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle."
        }
        ,{
          question:"My team wants to cancel its subscription. How do we do that? Can we get a refund?",
          answer:"You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle."
        }
        ,{
          question:"Do you offer discounts for non-profit organizations or educational institutions?",
          answer:"You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle."
        }
        
        ]
    }
  }
}
</script>
<style lang="scss" scoped>
.logoRound {
  background-color: #f8fbfe;
  border-radius: 10px;
}
.txtMonth {
  color: #b0b0b0;
  font-weight: normal;
  font-size: 0.5em !important;
  margin-left: 5px;
}


.clip-eb {
  clip-path: ellipse(150% 120% at 50% -30%);
  padding-bottom: 175px !important;
  background-color: white;
}

@media (max-width: 575.98px) {
  .layoutMobile {
    display: flex;
    flex-direction: column;
  }
  .bill-option {
    width: 100% !important;
  }
  .clip-eb {
    clip-path: ellipse(150% 120% at 0%);
    padding-bottom: 50px !important;
    background-color: white;
  }
}
</style>