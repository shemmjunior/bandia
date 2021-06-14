<template>
  <div>
    <div class="center">
      <button class="btn btn-primary" @click="runCode()">GENERATE DATA</button>
    </div>

    <div class="cards">
      <div class="card">
        <h4>How to Generate Data</h4>
        Define an array with the attributes you want currently we have
        two...more are to come.

        <ul>
          <li>firstName</li>
          <li>lastName</li>
        </ul>
        Also you'll have to specify the length of data you want to generate by
        writing the number to the last index of the defined array <br /><br />
        Example of Definition: <br /><br />
        ["firstName", "lastName", 10] <br /><br />
        Press generate data <br /><br />
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
        <vue-json-pretty style="height: 50% !important; overflow-y: scroll;" :highlightSelectedNode="false" :data="results">
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
import { forEach } from '../../../src/data/first_name';
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
      results: [
        {
          firstName: "Alpha",
          lastName: "John",
        },
        {
          firstName: "Peter",
          lastName: "Alex",
        },
        {
          firstName: "Musa",
          lastName: "Charles",
        },
      ],
    };
  },
  mounted() {
    this.content = `["firstName", "lastName", 10]`.toString();
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

        for (let i = 0; i < compiled.length; i++) {
          const size = compiled[compiled.length - 1];

          if (compiled[i] == "firstName") {
            for (let j = 0; j < size; j++) {
              firstName = bandia.person.firstName();
              var obj_temp1 = {};
              obj_temp1.firstName = firstName;
              firstNameObj.push(obj_temp1);
            }
          } else if (compiled[i] == "lastName") {
            for (let j = 0; j < size; j++) {
              lastName = bandia.person.lastName();
              var obj_temp2 = {};
              obj_temp2.lastName = lastName;
              lastNameObj.push(obj_temp2);
            }
          } else if (compiled[i] == "fullName") {
            for (let j = 0; j < size; j++) {
              fullName = bandia.person.fullName();
              var obj_temp3 = {};
              obj_temp3.fullName = fullName;
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

<style>
.card {
  padding: 1rem;
  height: 50%;
  width: auto;
}
.btn {
  height: 35px;
  margin: 5px 10px;
  padding: 6px;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease-in-out;
}

.btn.btn-primary {
  background-color: #17499f;
  color: #ffffff;
}
.btn.btn-primary:hover {
  background-color: #0e377c;
}
.center {
  display: flex;
  justify-content: center;
}

.vjs-tree {
  background-color: #272822 !important;
  color: white !important;
  font-size: 12px !important;
  min-height: 600px;
}

.vjs-tree__node:hover {
  background-color: darkgray !important;
}

.cards {
  max-width: auto;
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
</style>
