<template>
  <div>
    <h1 class="app-name">Person</h1>
    <p>This generates basic person data</p>
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
          <td>First Name</td>
          <td>person.firstName()</td>
          <td>Generates random First Name</td>
        </tr>
        <tr>
          <td>Last Name</td>
          <td>person.lastName()</td>
          <td>Generates random Last Name</td>
        </tr>
        <tr>
          <td>Full Name</td>
          <td>person.fullName()</td>
          <td>Generates random Full Name</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>person.email()</td>
          <td>Generates random Email</td>
        </tr>
        <tr>
          <td>Phone</td>
          <td>person.phone()</td>
          <td>Generates random Phone Number</td>
        </tr>
        <tr>
          <td>Nida No</td>
          <td>person.nida()</td>
          <td>Generates random Nida Number</td>
        </tr>
        <tr>
          <td>Tribe</td>
          <td>person.tribe()</td>
          <td>Generates random Tribe name</td>
        </tr>
      </tbody>
    </table>

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