<template>
  <div>
    <h1 class="app-name">Miscallenous</h1>
    <p>This generates Miscallenous data types such as color</p>

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
          <td>Rangi</td>
          <td>misc.rangi()</td>
          <td>Generates random Color Name</td>
        </tr>
      </tbody>
    </table>

    <p>Basic Example usage:</p>

    <pre v-highlightjs="sourcecode"><code class="javascript">
      const bandia = require('bandia-data')

      const = bandia.misc.rangi() // Nyekundu
   </code></pre>
  </div>
</template>

<script>
export default {
  name: "Misc",
};
</script>

<style>
</style>