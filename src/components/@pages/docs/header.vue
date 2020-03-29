<template>
    <header class="clip-eb">

        <!--start:hero-->
        <div id="hero" class="hero">
            <v-container>
                <v-layout row>
                    <v-flex xs12 lg8 offset-lg-2>
                        <div class="text-center">
                            <h1 class="white--text mb-10">We are here to help you</h1>
                            <v-text-field prepend-inner-icon="search" outlined hide-details placeholder="Ask a question">
                                <v-btn color="primary" slot="append">Search</v-btn>
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