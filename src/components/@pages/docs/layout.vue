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
            <v-list-item-title class="title">{{title}}</v-list-item-title>
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
          <h1>Getting started</h1>

          <v-btn @click="openEditor()" class="edit mx-2" fab dark large color="primary">
            <v-icon dark>mdi-pencil</v-icon>
          </v-btn>

          <div v-html="article" v-if="showEditor" />
          <docs-editor/>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
import marked from "marked";
import test from "./test.md";
import articles from "./articles.json";

import Vue from "vue";
import DocsNav from "./nav";
import Editor from "./editor";

Vue.component("docs-nav", DocsNav);
Vue.component("docs-editor", Editor);

    export default {
        data() {
            return {
                article: marked(test),
                title: articles[2].title,
                articles: articles[1].articles,
                breadcrumbs: [
                    {
                        text: 'Getting started',
                        disabled: false,
                        href: 'breadcrumbs_dashboard',
                    },
                    {
                        text: 'Introduction',
                        disabled: false,
                        href: 'breadcrumbs_link_1',
                    },
                    {
                        text: 'What is authscorp',
                        disabled: true,
                        href: 'breadcrumbs_link_2',
                    },
                ],
            }
        },
    
  methods:{
      openEditor(){
          if(!this.showEditor){
              this.showEditor = true
          }else{
              this.showEditor=false
          }
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