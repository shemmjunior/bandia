<template>
  <div>
    <h1 class="app-name">Dates</h1>
    <p>This generates date type data</p>

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
          <td>Past Date</td>
          <td>date.past()</td>
          <td>Generates random Past date not less than 31-01-2019</td>
        </tr>
          <tr>
          <td>Future Date</td>
          <td>date.future()</td>
          <td>Generates random Future date less than 31-12-2022</td>
        </tr>
          <tr>
          <td>Between</td>
          <td>date.between(startdate, enddate)</td>
          <td>Generates random date between startdate and enddate</td>
        </tr>
      </tbody>
    </table>
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