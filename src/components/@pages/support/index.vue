<template>
    <v-container>
        <v-row>
            <v-col cols="5">
                <h1>Read out our documentation</h1>
                <p>From year to year we strive to invent the most innovative technology that is used by both small enterprises and space enterprises.</p>
                <v-button>Documentation</v-button>
            </v-col>
            <v-col cols="7">

            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="9">
                <h2 id="title">Let’s find an answer to all of your questions</h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-list>
                    <v-list-item v-for="item in items" :key="item">
                        <v-list-item-content>
                            <v-list-item-title>{{item.title}}</v-list-item-title>
                            <span>{{item.location}}</span>
                        </v-list-item-content>
                        <v-list-item-action>
                            <p>test</p>
                        </v-list-item-action>
                    </v-list-item>
                </v-list>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    title: "Question 1 ?",
                    location: "New York, USA"
                },
                {
                    title: "Question 2 ?",
                    location: "Los Angeles, USA"
                },
                {
                    title: "Question 3 ?",
                    location: "New York, USA"
                },
                {
                    title: "Question 4 ?",
                    location: "San Fransisco, CA, USA"
                },
                {
                    title: "Question 5 ?",
                    location: "San Fransisco, CA, USA"
                },
                {
                    title: "Question 6 ?",
                    location: "New York, USA"
                }
            ]
        }
    }
}
</script>

<style scoped>
    #title {
        font-size: 40px;
        font-weight: 700;
        line-height: 52px;
        letter-spacing: 0.2px;
    }
</style>
