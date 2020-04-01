<template>
    <div>
        <template v-for="item in articles" link>
            <v-list-group v-if="item.articles" :key="item.uri || item.title" :sub-group="lvl > 0">
                <template v-slot:activator>
                    <v-list-item-title>{{item.title}}</v-list-item-title>
                </template>
                <docs-nav :articles="item.articles" :lvl="lvl + 1" style="padding-left: 20px" :section="section" />
            </v-list-group>
            <v-list-item v-else :key="item.uri || item.title" :to="'/docs/' + section + '/' + item.uri">
                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </template>
    </div>
</template>

<script>

    export default {
        props: {
            section: String,
            articles: Array,
            lvl: {
                type: Number,
                default: 0,
            }
        }
    }

</script>