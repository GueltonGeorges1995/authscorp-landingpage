<template>
    <div>
        <template v-for="item in articles" link>
            <v-list-group v-if="typeof(item) == 'object'" :key="item.title" :sub-group="lvl > 0">
                <template v-slot:activator>
                    <v-list-item-title>{{item.title}}</v-list-item-title>
                </template>
                <docs-nav :articles="item.articles" :lvl="lvl + 1" />
            </v-list-group>
            <v-list-item v-else :key="item" :to="'/docs/' + item.link">
                <v-list-item-content>
                    <v-list-item-title>{{ item }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </template>
    </div>
</template>

<script>

    export default {
        props: {
            articles: Array,
            lvl: {
                type: Number,
                default: 0,
            }
        }
    }

</script>