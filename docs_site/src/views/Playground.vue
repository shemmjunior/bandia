<template>
  <div>
    <div class="center">
      <button class="btn btn-primary" @click="runCode()">GENERATE DATA</button>
    </div>

    <div class="cards">
      <div class="card">
        <h4>How to Generate Data</h4>
        Define the schema with any object keys name you want. Also Currently we
        have two supported APIs...more are to come.
        <ul>
          <li>firstName</li>
          <li>lastName</li>
        </ul>
        <br />
        Example of Definition: <br />
        <pre>
  <code>
    var schema = {
        jina_la_kwanza: "bandia.firstName",
        jina_la_mwisho: "bandia.lastName",

        size: 10 // Length of objects to generate
      
      };

    schema;
  </code>
</pre>
        Finally Press generate data <br /><br />
        Here we generate 10 objects with firstName and lastName
      </div>
      <div class="card">
        <editor
          ref="editor1"
          @init="editorInit"
          v-model="content"
          lang="javascript"
          theme="monokai"
          width="100%"
          height="600"
        ></editor>
        <br />
      </div>
      <div class="card">
        <vue-json-pretty
          style="height: 50% !important; overflow-y: scroll"
          :highlightSelectedNode="false"
          :data="results"
        >
        </vue-json-pretty>
      </div>
    </div>
  </div>
</template>

<script>
import editor from "vue2-ace-editor";
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";
import * as bandia from "../../../src/index";
import Button from "@/components/Button";
import * as example from "../assets/example";
export default {
  name: "Playground",
  components: {
    editor,
    VueJsonPretty,
    Button,
  },
  data() {
    return {
      content: null,
      results: example,
    };
  },
  mounted() {
    this.content = `
    var schema = {
    jina_la_kwanza: "bandia.firstName",
    jina_la_mwisho: "bandia.lastName",
    size: 10
    };

    schema;
    
    
    `.toString();
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
      const keys = Object.keys(compiled);
      const size = compiled.size;

      // Definitions
      const bandiaFirstName = keys.find(
        (key) => compiled[key] == "bandia.firstName"
      );
      const bandiaLastName = keys.find(
        (key) => compiled[key] == "bandia.lastName"
      );
      const bandiaFullName = keys.find(
        (key) => compiled[key] == "bandia.fullName"
      );

      if (compiled === undefined) {
      } else {
        let obj = {};
        var temp = [];
        let firstName = "";
        let lastName = "";
        let fullName = "";

        let firstNameObj = [];
        let lastNameObj = [];
        let fullNameObj = [];

        for (let i = 0; i < size; i++) {
          if (
            keys[i] === bandiaFirstName &&
            compiled[bandiaFirstName] === "bandia.firstName"
          ) {
            for (let j = 0; j < size; j++) {
              firstName = bandia.person.firstName();
              var obj_temp1 = {};
              obj_temp1[bandiaFirstName] = firstName;
              firstNameObj.push(obj_temp1);
            }
          } else if (
            keys[i] === bandiaLastName &&
            compiled[bandiaLastName] === "bandia.lastName"
          ) {
            for (let j = 0; j < size; j++) {
              lastName = bandia.person.lastName();
              var obj_temp2 = {};
              obj_temp2[bandiaLastName] = lastName;
              lastNameObj.push(obj_temp2);
            }
          } else if (
            keys[i] === bandiaFullName &&
            compiled[bandiaFullName] === "bandia.fullName"
          ) {
            for (let j = 0; j < size; j++) {
              fullName = bandia.person.fullName();
              var obj_temp3 = {};
              obj_temp3[bandiaFullName] = fullName;
              fullNameObj.push(obj_temp3);
            }
          }
        }
        temp = firstNameObj.map((firstName, i) => ({
          ...firstName,
          ...lastNameObj[i],
          ...fullNameObj[i],
        }));

        this.results = temp;
      }
    },
  },
};
</script>

<style></style>
