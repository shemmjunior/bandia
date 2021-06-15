<template>
  <div>
    <h1 class="app-name">Person</h1>
    <p>This generates basic person data</p>
    <h5>Properties</h5>
    <p>Basic Example usage:</p>
    <pre v-highlightjs="sourcecode"><code class="javascript">
        const bandia = require('bandia-data')

        const firstName = bandia.person.firstName()    // Alex
        const lastName = bandia.person.lastName()     // Matiku
        const fullName = bandia.person.fullName()    // Peter Jackson
        const email = bandia.person.email()         // alphamusa@gmail.com
        const phone = bandia.person.phone()   // 0743800456
        const nida = bandia.person.nida()   // 19831212-63860-51590-43
        const tribe = bandia.person.tribe() // Msukuma

   </code></pre>
  </div>
</template>

<script>
export default {
  name: "Person",
};
</script>

<style>
</style>