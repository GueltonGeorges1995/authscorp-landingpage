<template>
    <section>
        <v-container style="margin-bottom: 30px;">
            <v-row id="head">
                <v-col cols="5">
                    <h1 id="title">Read out our documentation</h1>
                    <p id="description">From year to year we strive to invent the most innovative technology that is used by both small enterprises and space enterprises.</p>
                    <v-btn color="primary">
                        Documentation
                        <v-icon>keyboard_arrow_right</v-icon>
                    </v-btn>
                </v-col>
                <v-col cols="7">

                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="9">
                    <h2 id="answer">Let’s find an answer to all of your questions</h2>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-list>
                        <v-list-item>
                            <v-list-item-content>
                                <v-text-field solo required placeholder="Ask a question" v-model="search" />
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-btn color="primary">Search</v-btn>
                            </v-list-item-action>
                        </v-list-item>
                    </v-list>
                    <v-list>
                        <v-list-item v-for="item in items" :key="item.id" class="question">
                            <v-list-item-content>
                                <v-list-item-title class="list-title">{{item.title}}</v-list-item-title>
                                <span class="list-location">{{item.location}}</span>
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-icon>keyboard_arrow_right</v-icon>
                            </v-list-item-action>
                        </v-list-item>
                    </v-list>
                </v-col>
            </v-row>
        </v-container>
        <v-row justify="center" id="bg">
            <v-col cols="6">
                <h2 id="sales">Contact our sales team</h2>
                <p id="help">If you need our help, have questions about how to use the platform or are experiencing technical difficulties, please do not hesitate to contact us.</p>
            </v-col>
            <v-container class="form">
                <v-form>
                    <v-row>
                        <v-col cols="6">
                            <h3>Your name *</h3>
                            <v-text-field outlined required placeholder="John Doe" v-model="name" :rules="[rules.required]"/>
                        </v-col>
                        <v-col cols="6">
                            <h3>Contact email *</h3>
                            <v-text-field outlined required placeholder="you@example.com" v-model="email" :rules="[rules.required]"/>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            <h3>Company Name *</h3>
                            <v-text-field outlined required placeholder="Company name" v-model="company_name" :rules="[rules.required]"/>
                        </v-col>
                        <v-col cols="6">
                            <h3>Country *</h3>
                            <v-select outlined required placeholder="Country" :items="countries" v-model="countries[0]" :rules="[rules.required]"/>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <h3>Your message *</h3>
                            <v-textarea outlined required placeholder="Type your message..." v-model="message" :rules="[rules.required]"/>
                            <p>By submitting this form you agree to our terms and conditions and our Privacy Policy which explains how we may collect, use and disclose your personal information including to third parties.</p>
                        </v-col>
                    </v-row>
                    <v-btn color="primary">Contact sales</v-btn>
                </v-form>
            </v-container>
        </v-row>
    </section>
</template>

<script>
export default {
    data() {
        return {
            search: "",
            name: "",
            email: "",
            company_name: "",
            countries: ["Indonesia", "France", "Belgium"],
            message: "",
            rules: {
                required: v => !!v || "required",
            },
            items: [
                {
                    id: 1,
                    title: "Question 1 ?",
                    location: "New York, USA"
                },
                {
                    id: 2,
                    title: "Question 2 ?",
                    location: "Los Angeles, USA"
                },
                {
                    id: 3,
                    title: "Question 3 ?",
                    location: "New York, USA"
                },
                {
                    id: 4,
                    title: "Question 4 ?",
                    location: "San Fransisco, CA, USA"
                },
                {
                    id: 5,
                    title: "Question 5 ?",
                    location: "San Fransisco, CA, USA"
                },
                {
                    id: 6,
                    title: "Question 6 ?",
                    location: "New York, USA"
                }
            ]
        }
    }
}
</script>

<style scoped>
    #head {
        margin-top: 100px;
        margin-bottom: 100px;
    }

    #title {
        font-size: 56px;
        font-weight: 400;
        line-height: 68px;
        letter-spacing: 0.2px;
    }

    #description {
        margin: 25px 0;
    }

    #answer {
        font-size: 40px;
        font-weight: 700;
        line-height: 52px;
        letter-spacing: 0.2px;
    }

    .question {
        margin: 10px 0;
        height: 94px;
        border: solid 1px #e5eaf4;
        box-shadow: 0px 6px 10px rgba(0,0,0,0.03);
    }

    .list-title {
        color: #1565d8;
        font-size: 20px;
        font-weight: 700;
        line-height: 28px;
    }

    .list-location {
        color: #5a7184;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
    }

    #bg {
        background-color: #264EEE;
    }

    #sales {
        padding-top: 100px;
        font-size: 56px;
        color: #ffffff;
        font-weight: 400;
        line-height: 68px;
        text-align: center;
        letter-spacing: 0.2px;
    }

    #help {
        padding-top: 30px;
        padding-bottom: 30px;
        color: #ffffff;
        font-size: 20px;
        font-weight: 400;
        line-height: 36px;
        text-align: center;
    }

    h3 {
        color: #5a7184;
    }

    .form {
        padding: 70px;
        margin-bottom: 100px;
        background-color: #fff;
        box-shadow: 0px 10px 35px rgba(0,0,0,0.03);
        border-radius: 10px;
    }
</style>