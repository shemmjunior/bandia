<template>
  <div>
    <h1 class="app-name">Finance</h1>
    <p>This generates Financial Data</p>

    <h5>Properties</h5>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Access Method</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bank Name</td>
          <td>finance.bank()</td>
          <td>Generates random Bank Name</td>
        </tr>
      </tbody>
    </table>
    <p>Basic Example usage:</p>
    <pre v-highlightjs="sourcecode"><code class="javascript">
      const bandia = require('bandia-data')

      const bankName = bandia.finance.bank() // CRDB Bank

   </code></pre>
  </div>
</template>

<script>
export default {
  name: "Finance",
};
</script>

<style>
</style>