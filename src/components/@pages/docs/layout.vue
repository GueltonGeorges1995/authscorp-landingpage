<template>
    <div style="min-height: 100vh">
        <v-toolbar dense>
            <v-btn text>Sections</v-btn>
            <v-btn text>Getting started</v-btn>
            <v-btn text>Api's</v-btn>
            <v-btn text>Tutorials</v-btn>
            <v-btn text>Contribute</v-btn>
        </v-toolbar>
        <div style="padding: 50px 100px">
            <v-layout row wrap>
                <v-flex xs2>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="title">
                                Getting started
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list dense nav>
                        <v-list-item v-for="item in items" :key="item.title" link>
                            <v-list-item-content>
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-flex>
                <v-flex xs8 offset-xs1>
                    <v-breadcrumbs :items="breadcrumbs" style="padding-left: 0;">
                        <template v-slot:divider>
                            <v-icon>mdi-chevron-right</v-icon>
                        </template>
                    </v-breadcrumbs>
                    <h1>Getting started</h1>
                    <div v-html="article" />
                </v-flex>
            </v-layout>
        </div>
    </div>
</template>

<script>

    import marked from 'marked'
    import test from './test.md'

    export default {
        data() {
            return {
                article: marked(test),
                breadcrumbs: [
                    {
                        text: 'Dashboard',
                        disabled: false,
                        href: 'breadcrumbs_dashboard',
                    },
                    {
                        text: 'Link 1',
                        disabled: false,
                        href: 'breadcrumbs_link_1',
                    },
                    {
                        text: 'Link 2',
                        disabled: true,
                        href: 'breadcrumbs_link_2',
                    },
                ],
                items: [
                    { title: 'Dashboard', icon: 'mdi-view-dashboard' },
                    { title: 'Photos', icon: 'mdi-image' },
                    { title: 'About', icon: 'mdi-help-box' },
                ]
            }
        }
    }

</script>