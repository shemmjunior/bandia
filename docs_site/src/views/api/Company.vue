<template>
  <div>
    <h1 class="app-name">Company</h1>
    <p>This generates Data of various Companies</p>

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
          <td>Company Name</td>
          <td>company.name()</td>
          <td>Generates random Company Name</td>
        </tr>
      </tbody>
    </table>
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