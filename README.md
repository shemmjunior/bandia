[![Build Status](https://travis-ci.com/shemmjunior/bandia.svg?branch=main)](https://travis-ci.com/shemmjunior/bandia)
# Bandia Data

Generate Tanzanian based mock data for fast ui population and server responses mockups.

For full documentation visit https://bandia.shemmjunior.me

### Installation and Usage
Currently releases are under beta version until all attributes are added.

To install run `npm install bandia-data@0.0.2-beta.1`

```javascript
const bandia = require('bandia-data')

// Person 
const firstName = bandia.person.firstName()    // Alex
const lastName = bandia.person.lastName()     // Matiku
const fullName = bandia.person.fullName()    // Maswi Mussa
const email = bandia.person.email()         // alphamusa@gmail.com
const phone = bandia.person.phone()   // 0743800456
const nida = bandia.person.nida()   // 19831212-63860-51590-43
const tribe = bandia.person.tribe() // Msukuma

// Dates
const dateBetween = bandia.date.between('2020-12-04', '2021-03-23') // 2021-01-03
const past = bandia.date.past() // 2019-04-05
const future = bandia.date.future() // Future Date from Today

// Finance
const bankName = bandia.finance.bank() // CRDB Bank
const companyName = bandia.company.name() // Katani Ltd

// Misc
const = bandia.misc.rangi() // Nyekundu


```

You can play with the playground site at https://bandia.shemmjunior.me but it is still under development only two attributes are supported up to date. Currently we have only two attributes supported at the playground, the playground will be complete in the near future.


## Supported Attributes

### Person
 - [x]  First Name
 - [x]  Last Name
 - [x]  Full Name
 - [x]  Email
 - [x]  Phone
 - [x]  National ID
 - [ ]  Job Title
 - [ ]  Avatar
 - [x]  Tribe
### Finance
 - [x]  Bank Name
 - [ ]  Account Number
 - [ ]  Amount
 - [ ]  Transaction Type
### Company
 - [x]  Company Name
 - [ ]  Address
 - [ ]  Description
### Dates
 - [x]  Past
 - [x]  Future
 - [x]  Between
### Miscallenous
 - [x]  Color  


### Acknowledgements

 - Inspired by [Faker.js](https://github.com/Marak/Faker.js)

  
## License

[MIT](https://choosealicense.com/licenses/mit/)

  
