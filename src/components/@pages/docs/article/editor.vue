<template>
  <div id="editor">
    <div class="position:absolute; top:10%; right:0" v-if="this.$parent.showEditor && !this.input">
      <input type="file" @change="loadTextFile" />
    </div>
    <textarea :value="input" @input="update"></textarea>
    <div v-html="compiledMarkdown"></div>

    <v-btn @click="saveEditor()" class="edit mx-2" fab dark large color="green">
      <v-icon dark>mdi-checkbox-marked-circle</v-icon>
    </v-btn>
  </div>
</template>
<script>
import marked from "marked";
import _ from "lodash";
export default {
  props: {
    data: String
  },
  data() {
    return {
      input: this.data
    };
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.input, { sanitize: true });
    }
  },
  methods: {
    update: _.debounce(function(e) {
      this.input = e.target.value;
    }, 300),
    loadTextFile(ev) {
      const file = ev.target.files[0];
      const reader = new FileReader();
      reader.onload = e => (this.input = e.target.result);
      reader.readAsText(file);
    },
    saveEditor() {
      console.log("SAVE!");
        this.$parent.edit = this.input;

      if (!this.$parent.showEditor) {
        this.$parent.showEditor = true;
      } else {
        this.$parent.showEditor = false;
      }
    }
  }
};
</script>
<style scoped>
html,
body,
#editor {
  margin: 0;
  height: 100%;
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: #333;
}
textarea,
#editor div {
  display: inline-block;
  width: 49%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
}
textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: "Monaco", courier, monospace;
  padding: 20px;
}
code {
  color: #f66;
}
</style>