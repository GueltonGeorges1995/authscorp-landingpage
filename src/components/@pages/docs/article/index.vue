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
        <v-flex xs2>
          <v-list-item>
            <v-list-item-title class="title">{{sectionName}}</v-list-item-title>
            <v-list-item-action v-if="section !== 'legal'">
              <docs-addArticle title="Add article" />
            </v-list-item-action>
          </v-list-item>

          <v-list dense nav>
            <docs-nav :articles="articles" :section="section" />
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
  import Editor from "./editor";
  import addArticle from "./formAddArticle";

  Vue.component("docs-nav", DocsNav);
  Vue.component("docs-editor", Editor);
  Vue.component("docs-addArticle", addArticle);

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
        id:         null,
        showEditor: false,
      }
    },
    computed: {
      articles() {
        var section = articles.find((o) => o.section == this.section)
        if(!section)
          return null
        return section.articles
      },
      article() {
        if(this.content === null)
          return null
        return marked(this.content)
      },
      sectionName() {
        var sectionName = this.section.split('-').join(' ').toLowerCase()
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
    watch: {
      content(val, oldval) {
        if(this.showEditor && oldval !== null && val !== oldval && val !== null) {
          if(this.saveTimeout)
            clearTimeout(this.saveTimeout)

          this.saveTimeout = setTimeout(this.save, 500);
        }
      },
      uri(val, oldval) {
        if(val == oldval)
          return
        this.content = null
        this.title = null
        this.time = null
        this.err = null
        this.id = null
        this.showEditor = false
        this.$nextTick(this.loadArticle)
      }
    },
    mounted() {
      this.loadArticle()
      // this.create_all(this.section, this.articles)
    },
    methods:{
      create_all(section, articles) {
        for(var article of articles) {
          if(article.articles)
            this.create_all(article.section || section, article.articles)
          else
            this.create(article.section || section, article.uri, article.title)
        }
      },
      create(section, uri, title, content = '/') {
        console.log('create', section, uri, title, content)
        return this.$api.get('docs/article?section='+section+'&uri='+uri).catch(() => {
          return this.$api.put('docs/article', { title, content, section }).then((res) => {
            // Temporary direct approval
            return this.$api.post('docs/proposal', {
              id: res.id,
              uri,
            })
          })
        }).catch((err) => {
          console.error(err)
        })
      },

      openEditor(){
        this.showEditor = !this.showEditor
      },
      loadArticle() {
        return this.$api.get('docs/article?section='+this.section+'&uri='+this.uri).then((res) => {
          this.content = res.content
          this.title   = res.title
          this.time    = res.time
          this.id      = res.id

          return res
        }).catch((err) => {
          this.err = err.error || err.message || err
          console.error(err)
        })
      },
      save() {
          this.$api.put('docs/article', { id: this.id, title: this.title, content: this.content, section: this.section }).then((res) => {
            // Temporary direct approval
            return this.$api.post('docs/proposal', {
              id: res.id
            })
          }).catch((err) => {
            this.err = err.error || err.message || err
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

    ul, ol {
      margin-bottom: 16px;
    }

    blockquote {
      border-left: 3px solid #979ea5;
      margin-bottom: 15px;
      margin-top: 15px;
      padding-left: 16px;
      padding-top: 2px;
      padding-bottom: 2px;

      p:last-child {
        margin-bottom: 0;
      }
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