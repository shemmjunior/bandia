<template>
  <div>
    <h1 class="app-name">Dates</h1>
    <p>This generates date type data</p>

    <h5>Properties</h5>

    Table Here
    <p>Basic Example usage:</p>
    <pre v-highlightjs="sourcecode"><code class="javascript">
        const bandia = require('bandia-data')

        const dateBetween = bandia.date.between('2020-12-04', '2021-03-23') // 2021-01-03
        const past = bandia.date.past() // 2019-04-05
        const future = bandia.date.future() // Future Date from Today
   </code></pre>
  </div>
</template>

<script>
export default {
  name: "Dates",
};
</script>

<style>
</style>