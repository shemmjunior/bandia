<template>
  <div>
    <div class="center">
      <button class="btn btn-primary" @click="runCode()">GENERATE DATA</button>
    </div>

    <div class="cards">
      <div class="card">
        <h4>How to Generate Data</h4>
        Define the schema with any object keys name you want.
     
        <br />
        <b> Supported Definitions:</b> <br />
        <pre v-highlightjs="sourcecode"><code class="code javascript">
      var schema = {
        jina_la_kwanza: "bandia.person.firstName",
        jina_la_mwisho: "bandia.person.lastName",
        jina_kamili: "bandia.person.fullName",
        email: "bandia.person.email",
        phone: "bandia.person.phone",
        nida_id: "bandia.person.nida",
        kabila: "bandia.person.tribe",
        bank: "bandia.finance.bank",
        company_name: "bandia.company.name",
        started_on: "bandia.date.past",
        exited_on: "bandia.date.future",

        size: 10 // Length of objects
    };
    schema;

   </code></pre>

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
        jina_la_kwanza: "bandia.person.firstName",
        jina_la_mwisho: "bandia.person.lastName",
        email: "bandia.person.email",
        phone: "bandia.person.phone",
        nida_id: "bandia.person.nida",
        kabila: "bandia.person.tribe",

        bank: "bandia.finance.bank",
        company_name: "bandia.company.name",
        started_on: "bandia.date.past",
        exited_on: "bandia.date.future",
      
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
      const bandiaFirstName = keys.find((key) => compiled[key] == "bandia.person.firstName");
      const bandiaLastName = keys.find((key) => compiled[key] == "bandia.person.lastName");
      const bandiaFullName = keys.find((key) => compiled[key] == "bandia.person.fullName");
      const bandiaEmail = keys.find((key) => compiled[key] == "bandia.person.email");
      const bandiaPhone = keys.find((key) => compiled[key] == "bandia.person.phone");
      const bandiaNida = keys.find((key) => compiled[key] == "bandia.person.nida");
      const bandiaTribe = keys.find((key) => compiled[key] == "bandia.person.tribe");
      const bandiaBank = keys.find((key) => compiled[key] == "bandia.finance.bank");
      const bandiaCompany = keys.find((key) => compiled[key] == "bandia.company.name");
      const bandiaPast = keys.find((key) => compiled[key] == "bandia.date.past");
      const bandiaFuture = keys.find((key) => compiled[key] == "bandia.date.future");

      if (compiled === undefined) {
      } else {
        var temp = [];

        let firstNameObj = [];
        let lastNameObj = [];
        let fullNameObj = [];
        let emailObj = [];
        let phoneObj = [];
        let nidaObj = [];
        let tribeObj = [];

        let bankObj = [];
        let companyNameObj = [];
        let pastObj = [];
        let futureObj = [];

        for (let i = 0; i < size; i++) {
          if ( keys[i] === bandiaFirstName && compiled[bandiaFirstName] === "bandia.person.firstName" ) {
            for (let j = 0; j < size; j++) {
              const firstName = bandia.person.firstName();
              const temp = {};
              temp[bandiaFirstName] = firstName;
              firstNameObj.push(temp);
            }
          } else if ( keys[i] === bandiaLastName && compiled[bandiaLastName] === "bandia.person.lastName" ) {
            for (let j = 0; j < size; j++) {
              const lastName = bandia.person.lastName();
              const temp = {};
              temp[bandiaLastName] = lastName;
              lastNameObj.push(temp);
            }
          } else if ( keys[i] === bandiaFullName && compiled[bandiaFullName] === "bandia.person.fullName" ) {
            for (let j = 0; j < size; j++) {
              const fullName = bandia.person.fullName();
              const temp = {};
              temp[bandiaFullName] = fullName;
              fullNameObj.push(temp);
            }
          } else if ( keys[i] === bandiaEmail && compiled[bandiaEmail] === "bandia.person.email") {
            for (let j = 0; j < size; j++) {
              const email = bandia.person.email();
              const temp = {};
              temp[bandiaEmail] = email;
              emailObj.push(temp);
            }
          } else if ( keys[i] === bandiaPhone && compiled[bandiaPhone] === "bandia.person.phone") {
            for (let j = 0; j < size; j++) {
              const phone = bandia.person.phone();
              const temp = {};
              temp[bandiaPhone] = phone;
              phoneObj.push(temp);
            }
          } else if (keys[i] === bandiaNida && compiled[bandiaNida] === "bandia.person.nida" ) {
            for (let j = 0; j < size; j++) {
              const nida = bandia.person.nida();
              const temp = {};
              temp[bandiaNida] = nida;
              nidaObj.push(temp);
            }
          } else if (keys[i] === bandiaTribe && compiled[bandiaTribe] === "bandia.person.tribe") {
            for (let j = 0; j < size; j++) {
              const tribe = bandia.person.tribe();
              const temp = {};
              temp[bandiaTribe] = tribe;
              tribeObj.push(temp);
            }
          } else if (keys[i] === bandiaBank && compiled[bandiaBank] === "bandia.finance.bank") {
            for (let j = 0; j < size; j++) {
              const bank = bandia.finance.bank();
              const temp = {};
              temp[bandiaBank] = bank;
              bankObj.push(temp);
            }
          } else if (keys[i] === bandiaCompany && compiled[bandiaCompany] === "bandia.company.name") {
            for (let j = 0; j < size; j++) {
              const company = bandia.company.name();
              const temp = {};
              temp[bandiaCompany] = company;
              companyNameObj.push(temp);
            }
          }  else if (keys[i] === bandiaPast && compiled[bandiaPast] === "bandia.date.past") {
            for (let j = 0; j < size; j++) {
              const past = bandia.date.past();
              const temp = {};
              temp[bandiaPast] = past;
              pastObj.push(temp);
            }
          }  else if (keys[i] === bandiaFuture && compiled[bandiaFuture] === "bandia.date.future") {
            for (let j = 0; j < size; j++) {
              const future = bandia.date.future();
              const temp = {};
              temp[bandiaFuture] = future;
              futureObj.push(temp);
            }
          }

        }
        temp = firstNameObj.map((firstName, i) => ({
          ...firstName,
          ...lastNameObj[i],
          ...fullNameObj[i],
          ...emailObj[i],
          ...phoneObj[i],
          ...nidaObj[i],
          ...tribeObj[i],
          ...bankObj[i],
          ...companyNameObj[i],
          ...pastObj[i],
          ...futureObj[i]

        }));

        this.results = temp;
      }
    },
  },
};
</script>

<style>
/* pre code {
  width: 100% !important;
} */

.code {
  width: 100% !important;
}
</style>
