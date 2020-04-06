<template>
  <div class="docs-template">
  <v-toolbar color="primary" dark style="padding: 0 6rem;">
      <v-btn text to="/docs/getting-started/test">Getting started</v-btn>
      <v-btn text to="/docs/tutorials/test">Tutorials</v-btn>
      <v-btn text to="/docs/libraries/test">Libraries</v-btn>
      <v-btn text to="/docs/openid/test">Openid</v-btn>
      <v-btn text to="/docs/plugins/test">Plugins</v-btn>
      <v-spacer />
      <div class="search">
        <v-text-field prepend-inner-icon="search" solo hide-details placeholder="Search" light />
      </div>
    </v-toolbar>
    <div style="padding: 30px 100px">
      <v-layout row wrap>
        <v-flex xs2 class="d-flex justify-center flex-column">
          <p>Title:</p>
           <v-text-field
            label="Title"
            single-line
            solo
            v-model="title"
            :disabled="!showEditor"
          ></v-text-field>
          <p>Section:</p>
            <v-text-field
            label="Section"
            single-line
            solo
            v-model="section"
            :disabled="!showEditor"

          ></v-text-field>
          <p>Sub-categorie:</p>
            <v-text-field
            label="Sub-categorie"
            single-line
            solo
            v-model="subCategorie"
            :disabled="!showEditor"

          ></v-text-field>
        </v-flex>
        <v-flex xs8 offset-xs1>
          <v-btn @click="openEditor()" class="edit mx-2" fab dark large color="primary" v-if="!showEditor">
            <v-icon dark>mdi-pencil</v-icon>
          </v-btn>   
          <v-btn @click="openEditor()" class="edit mx-2" fab dark large color="green" v-else>
            <v-icon dark>mdi-check</v-icon>
          </v-btn>
          <v-skeleton-loader type="article" v-if="content === null" />
          <article v-html="article" v-else-if="!showEditor" id="article-content" />
          <docs-editor v-model="content" v-else />
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>

  import marked from "marked";

  import Vue from "vue";
  import DocsNav from "../nav";
  import Editor from "../editor";
  import addArticle from "../formAddArticle";

  Vue.component("docs-nav", DocsNav);
  Vue.component("docs-editor", Editor);
  Vue.component("docs-addArticle", addArticle);

  export default {
    data() {
      return {
        content:    "Write your article here",
        title:      null,
        section:    null,
        subCategorie: null,
        err:        null,
        showEditor: false,
      }
    },
    computed: {
      article() {
        if(this.content === null)
          return null
        return marked(this.content)
      }
    },
    // watch: {
    //   content(val, oldval) {
    //     if(this.showEditor && oldval !== null && val !== oldval && val !== null) {
    //       if(this.saveTimeout)
    //         clearTimeout(this.saveTimeout)

    //       this.saveTimeout = setTimeout(this.save, 500);
    //     }
    //   }
    // },
    
    mounted() {
      this.section = this.$route.params.section
      this.title   = this.$route.params.title
      this.subCategorie = this.$route.params.sub
      this.loadArticle()
    },
    methods:{
      openEditor(){
        this.showEditor = !this.showEditor
        if(!this.showEditor){
          this.save();
        }
      },
      save() {
          this.$api.post('docs/article', { title: this.title, content: this.content, section: this.section }).then((res) => {
           console.log(res)
          }).catch((err) => {
            console.log(err)
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
      .save{
        position: fixed;
        right:5%;
        top:30%;
    }

    .search {
      width: 250px;

      > .v-text-field .v-input__control {
        min-height: 40px;
      }
    }
  }

  article {
    h1 {
      margin-top: 35px;
      margin-bottom: 10px;
      font-size: 2em;
    }
  
    h2 {
      margin-top: 10px;
      margin-bottom: 5px;
      font-size: 1.6em;
    }
  
    h3 {
      margin-top: 5px;
      margin-bottom: 3px;
      font-size: 1.4em;
    }
  
    h4 {
      margin-top: 3px;
      font-size: 1.2em;
    }
  
    h5 {
      margin-top: 3px;
      font-size: 1.1em;
    }

    blockquote {
      border-left: 4px solid #979ea5;
      margin-bottom: 15px;
      margin-top: 15px;
      padding-left: 16px;
    }

    pre.ql-syntax, code {
      background: #0f1f2b !important;
      color: #fff !important;
      width: 100%;
      padding: 10px;
      display: block;
      border-radius: 3px;
    }
  
  }

</style>