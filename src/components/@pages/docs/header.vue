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
                            <v-combobox
                                no-filter
                                prepend-inner-icon="search"
                                placeholder="Ask a question"
                                outlined
                                hide-details
                                class="white"
                                v-model="model"
                                :items="entries"
                                :loading="isLoading"
                                :search-input.sync="search"
                                hide-no-data
                                item-text="title"
                            >
                                <v-btn color="primary" slot="append" to="/docs/getting-started/how-it-works">Search</v-btn>
                            </v-combobox>

                            <br>
                            <p style="color:#D8D8D8">*We are collect your searching keywords to improve our FAQ</p>
                        </div>
                    </v-flex>
                </v-layout>
            </v-container>
        </div>
        <!--end:hero-->
    </header>
</template>

<script>
    import authscorp from '../../../authscorp-lib/forms'

    export default {
        data: () => ({
            entries: [],
            isLoading: false,
            model: null,
            search: null,
        }),
        watch: {
            search() {
                if(this.$timeout)
                    clearTimeout(this.$timeout)

                // Set timeout to lower search requests (do not performs every time a key is pressed)
                this.$timeout = setTimeout(() => {
                    if(!this.search || this.search.length < 3) {
                        if(!this.search)
                            this.entries = []

                        return
                    }

                    this.isLoading = true
                    authscorp.request('POST', '/api/docs/search', {
                        query: this.search,
                    }).then((res) => {
                        this.entries = res.data
                    }).catch((err) => {
                        console.error(err)
                    }).finally(() => (this.isLoading = false))
                }, 200);
            },
            model(val) {
                if(typeof(val) === 'object' && val.uri)
                    location.href = val.uri
            }
        },
    }

</script>

<style lang="scss">

    .v-text-field.white {
        background-color: #fff !important;

        fieldset {
            top: -6px;
        }
    }

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

        h1 {
            font-size: 3rem !important;
            line-height: 3.75rem !important;
        }

        .v-input__slot {
            background: #fff !important;
        }
    }

</style>