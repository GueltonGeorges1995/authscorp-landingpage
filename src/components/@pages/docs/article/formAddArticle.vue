<template>
  <v-bottom-sheet inset v-model="add">

    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on">
        <v-icon>add</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-toolbar color="primary white--text mb-5" flat>
        <v-toolbar-title>{{title}}</v-toolbar-title>
        <v-spacer />
        <v-btn icon @click="add = false">
          <v-icon color="white">close</v-icon>
        </v-btn>
      </v-toolbar>
      <form ref="form">
        <v-card-text>
          <table class="settings-table">
            <tbody>
              <tr>
                <th>Section</th>
                <td>
                  <v-select
                    :items="sections"
                    label="Section"
                    name="section"
                    v-model="sections"
                    :rules="[rules.required]"
                    outlined
                  ></v-select>
                </td>
              </tr>
              <tr>
                <th>Sub Categorie</th>
                <td>
                  <v-select
                    :items="subCategorie"
                    label="Sub Categorie"
                    name="sub-categorie"
                    v-model="subCategorie"
                    :rules="[rules.required]"
                    outlined
                  />
                </td>
              </tr>
              <tr>
                <th>Title</th>
                <td>
                  <v-text-field
                    outlined
                    label="Name"
                    name="Name"
                    v-model="titleArticle"
                    :rules="[rules.title]"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </v-card-text>
        <v-card-actions class="pb-5 mx-4">
          <v-btn color="primary white--text" :disabled="!valid" type="submit" to='/docs/addArticle'>Continue</v-btn>
        </v-card-actions>
      </form>
    </v-card>
  </v-bottom-sheet>
</template> 


<script>
export default {
  props: {
    title: String
  },
  data() {
    return {
      showNotify: false,
      valid: true,
      add: false,
      titleArticle: "",
      rules: {
        required: v => !!v || "required",
        title: v => !!v || "Name is required"
      },
      sections: ["Getting started", "API'S","Tutorials","Contribute"],
      selectedSection: null,
      subCategorie: ["Mobile App", "Web App","Machine to machine","CMS"],
      selectedSubCategorie: null
    };
  },
  watch: {
    titleArticle(val) {
      if (val) {
        this.valid = true;
      } else {
        this.valid = false;
      }
    }
  },
  methods: {
    save() {
      alert("ok");
      this.add = false;
      this.$refs.form.reset();
    }
  },
  mounted() {
    this.valid = false;
  }
};
</script>


<style scoped lang="scss">
table {
  width: 100%;

  .caption {
    margin-bottom: 15px;
  }
}

.settings-table {
  tr td,
  tr th {
    padding-bottom: 15px;
  }

  th {
    color: #212121;
    text-align: left;
    width: 150px;
    padding-bottom: 30px !important;
  }
}
</style>