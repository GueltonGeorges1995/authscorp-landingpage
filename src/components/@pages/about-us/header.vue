<template>
    <header class="clip-eb">
        <div class="round-before" />
        <div class="round-after" />
        <!--start:hero-->
        <div class="hero">
            <v-container>
                <v-layout row>
                    <v-flex xs12 lg8 offset-lg-2>
                        <div class="text-center">
                            <p class="white--text mb-10">From year to year we strive to invent the most innovative technology that is used by both small enterprises and space enterprises.</p>
                            <v-btn color="white" rounded large light>Subscribe now</v-btn>                       
                        </div>
                    </v-flex>
                </v-layout>
            </v-container>
        </div>
        <!--end:hero-->
    </header>
</template>

<style lang="scss" scoped>

    .company-faq header {
        background-color: #264EEE;
        position: relative;        

        .round-before, .round-after {
            opacity: 0.15;
            position: absolute;
            box-sizing: content-box;
            border-radius: 600px;
            width: 900px;
            height: 900px;

            &:after {
                content: '';
                position: absolute;
                background: #264EEE;
                border-radius: 600px;
                width: 750px;
                height: 750px;
            }
        }

        .round-before {
            background-image: linear-gradient(270deg, rgba(255,255,255,0.00) 0%, #FFFFFF 100%);
            top: -500px;
            left: -450px;
        }

        .round-after {
            background-image: linear-gradient(270deg, #FFFFFF 0%, rgba(255,255,255,0.00) 100%);
            bottom: -500px;
            right: -450px;

            &:after {
                right: 0;
                bottom: 0;
            }
        }

        .hero {
            padding-top: 300px;
            padding-bottom: 105px;
            height: 600px;

            p{
                
                font-style: normal;
                font-weight: normal;
                font-size: 24px;
                line-height: 40px;
                
            }
        }

        
    }

</style>