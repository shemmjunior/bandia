<template>
  <div>
    <h1 class="app-name">Finance</h1>
     <p>This generates Financial Data</p>

        <h5>Properties</h5>

    Table Here
    <p>Basic Example usage: </p>
    <pre style="width: 55% !important;">
      <code class="language-js">
        const bandia = require('bandia-data')

        const bankName = bandia.finance.bank() // CRDB Bank
        const companyName = bandia.company.name() // Katani Ltd
      </code>
    </pre>
  </div>
</template>

<script>
export default {
    name: 'Finance'
}
</script>

<style>

</style>