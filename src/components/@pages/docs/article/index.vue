<template>
  <div class="docs-template">
    <v-toolbar color="primary" dark style="padding: 0 6rem;">
      <v-btn text>Sections</v-btn>
      <v-btn text>Getting started</v-btn>
      <v-btn text>Api's</v-btn>
      <v-btn text>Tutorials</v-btn>
      <v-btn text>Contribute</v-btn>
      <v-spacer />
      <div class="search">
        <v-text-field prepend-inner-icon="search" solo hide-details placeholder="Search" light />
      </div>
    </v-toolbar>
    <div style="padding: 30px 100px">
      <v-layout row wrap>
        <v-flex xs2>
          <v-list-item>
            <v-list-item-title class="title">{{sectionName}}</v-list-item-title>
            <v-list-item-action>
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn icon v-on="on">
                    <v-icon>add</v-icon>
                  </v-btn>
                </template>
                <span>Add an article</span>
              </v-tooltip>
            </v-list-item-action>
          </v-list-item>

          <v-list dense nav>
            <docs-nav :articles="articles" />
          </v-list>
        </v-flex>
        <v-flex xs8 offset-xs1>
          <v-breadcrumbs :items="breadcrumbs" style="padding-left: 0;">
            <template v-slot:divider>
              <v-icon>mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
          <h1 v-if="title !== null">{{title}}</h1>

          <v-btn @click="openEditor()" class="edit mx-2" fab dark large color="primary">
            <v-icon dark>mdi-pencil</v-icon>
          </v-btn>

          <v-alert type="error" :value="err !== null" v-if="err !== null">{{err}}</v-alert>
          <v-skeleton-loader type="article" v-else-if="content === null" />
          <article v-html="article" v-else-if="!showEditor" id="article-content" />
          <docs-editor v-model="content" v-else />
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>

  import marked from "marked";
  import articles from "./articles.json";

  import Vue from "vue";
  import DocsNav from "./nav";
  import Editor from "./editor2";

  Vue.component("docs-nav", DocsNav);
  Vue.component("docs-editor", Editor);

  export default {
    props: {
      section: String,
      uri:     String,
    },
    serverPrefetch() {
      return this.loadArticle()
    },
    data() {
      return {
        content:    null,
        title:      null,
        time:       null,
        err:        null,

        articles:   articles[1].articles,
        showEditor: true,
      }
    },
    computed: {
      article() {
        if(this.content === null)
          return null
        return marked(this.content)
      },
      sectionName() {
        const sectionName = this.section.split('-').join(' ').toLowerCase()
        return sectionName.substr(0,1).toUpperCase() + sectionName.substr(1)
      },
      breadcrumbs() {
        return [
          {
            text: this.sectionName,
            disabled: false,
            href: '/docs/' + this.section,
          },
          {
            text: this.title,
            disabled: true,
          }
        ]
      }
    },
    mounted() {
      this.loadArticle()
    },
    methods:{
      openEditor(){
        this.showEditor = !this.showEditor
      },
      loadArticle() {
        return this.$api.get('docs/article?section='+this.section+'&uri='+this.uri).then((res) => {
          this.content = 'test\ntest2\n\ntest3' // res.content
          this.title = res.title
          this.time = res.time

          return res
        }).catch((err) => {
          this.err = err.error || err.message || err
          console.error(err)
        })
      }
    }
  };

</script>

<style lang="scss">

  .docs-template {
    min-height: 100vh;

    .edit{
        position: fixed;
        right:5%;
        top:20%;
    }

    .search {
      width: 250px;

      > .v-text-field .v-input__control {
        min-height: 40px;
      }
    }
  }

</style>