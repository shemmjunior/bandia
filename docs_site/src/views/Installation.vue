<template>
  <div>
    <h1 class="app-name">Introduction</h1>
    <p>
      Bandia data is a package that generates random data that are useful in
      every day development especially when mocking data to front-end or data
      POST/GET simulator from nodejs backend
    </p>
    <a href="https://www.npmjs.com/package/bandia-data" target="_blank"
      >Link to NPM Package Site</a
    >

    <h3>Installation</h3>

    <p>The package can be installed via the npm package, simply run</p>
    <pre v-highlightjs="sourcecode"><code class="javascript">
          npm install bandia-data

   </code></pre>

    <p>You can acquire the package via definition</p>
    <pre v-highlightjs="sourcecode"><code class="javascript">
      const bandia = require('bandia-data')

   </code></pre>
  </div>
</template>

<script>
export default {
  name: "Installation",
};
</script>

<style>
</style>