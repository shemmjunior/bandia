<template>
  <div>
    <button @click="runCode()">RUN</button>
    <div class="cards">
      <div class="card">
        <editor
          ref="editor1"
          @init="editorInit"
          lang="javascript"
          theme="monokai"
          width="100%"
          height="600"
        ></editor>
        <br />
      </div>
      <div class="card">
        <editor
          ref="editor2"
          v-model="results"
          @init="editorInit"
          lang="javascript"
          theme="monokai"
          width="100%"
          height="600"
        ></editor>
      </div>
    </div>
  </div>
</template>

<script>
import editor from "vue2-ace-editor";
import * as bandia from "../../../src/index";
export default {
  name: "Playground",
  data() {
      return {
          results: null
      }
  },
  components: {
    editor,
  },
  methods: {
    editorInit: function () {
      require("brace/ext/language_tools"); //language extension prerequsite...
      require("brace/mode/javascript"); //language
      require("brace/mode/less");
      require("brace/theme/monokai");
      require("brace/snippets/javascript"); //snippet
    },
    runCode() {
      const editor1 = this.$refs.editor1.editor.getValue();
      const compiled = eval(editor1);

      console.log(compiled);

      if (compiled === undefined) {
      } else {
        let obj = {};
        var temp = [];
        let firstName = "";
        let lastName = "";
        let fullName = "";

        for (let i = 0; i < compiled.length; i++) {
          const size = compiled[compiled.length - 1];

          if (compiled[i] == "firstName") {
            for (let j = 0; j < size; j++) {
              firstName = bandia.person.firstName();
            }
          } else if (compiled[i] == "lastName") {
            for (let j = 0; j < size; j++) {
              lastName = bandia.person.lastName();
              var obj_temp = {}
              obj_temp.lastName = lastName;
              temp.push(obj_temp);
              
            }
          } else if (compiled[i] == "fullName") {
            for (let j = 0; j < size; j++) {
              fullName = bandia.person.fullName();
              var obj_temp = {}
              obj_temp.fullName = fullName;
              temp.push(obj_temp);
            }
            
          }
        }
            console.log(temp);
            // this.results = temp
            temp.forEach((data) => {
      this.$refs.editor2.editor.getSession().setValue(JSON.stringify(data))
      console.log(data)

            })
    //   this.$refs.editor2.editor.getSession().setValue(JSON.parse(temp))


      }

    },
  },
};
</script>

<style>
.card {
  padding: 1rem;
  height: 50%;
}

.cards {
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
</style>
