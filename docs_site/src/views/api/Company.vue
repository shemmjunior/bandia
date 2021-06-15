<template>
  <div>
    <h1 class="app-name">Company</h1>
    <p>This generates Data of various Companies</p>

    <h5>Properties</h5>

    Table Here
    <p>Basic Example usage:</p>
    <pre v-highlightjs="sourcecode"><code class="javascript">
        const bandia = require('bandia-data')

        const companyName = bandia.company.name() // Katani Ltd

   </code></pre>
  </div>
</template>

<script>
export default {
  name: "Company",
};
</script>

<style>
</style>