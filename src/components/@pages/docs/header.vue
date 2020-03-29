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
                            <h1 class="white--text mb-10">We are here to help you</h1>
                            <v-text-field prepend-inner-icon="search" outlined hide-details placeholder="Ask a question">
                                <v-btn color="primary" slot="append" to="/docs/test">Search</v-btn>
                            </v-text-field>
                        </div>
                    </v-flex>
                </v-layout>
            </v-container>
        </div>
        <!--end:hero-->
    </header>
</template>

<style lang="scss">

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
            padding-top: 140px;
            padding-bottom: 105px;
        }

        .v-btn {
            margin-top: -6px;
        }

        .v-text-field {
            background-color: #fff !important;

            fieldset {
                top: -6px;
            }
        }

        h1 {
            font-size: 3rem !important;
            line-height: 3.75rem !important;
        }

        .v-input__slot {
            background: #fff !important;
        }
    }

</style>