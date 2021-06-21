[![Build Status](https://travis-ci.com/shemmjunior/bandia.svg?branch=main)](https://travis-ci.com/shemmjunior/bandia)
# Bandia Data

Generate Tanzanian based mock data for fast ui population and server responses mockups.

For Full documentation visit https://bandia.shemmjunior.me

[DEMO AVAILABLE HERE](https://bandia.shemmjunior.me/#/playground)

### Installation and Usage

To install run `npm install bandia-data`


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
 ### Location
 - [ ]  Region
 - [ ]  District
 - [ ]  Ward
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
### Ecommerce
 - [ ] Products with pricing
 - [ ] Descriptions
### Miscallenous
 - [x]  Color
 - [x]  Food  


### Acknowledgements
 - Inspired by [Faker.js](https://github.com/Marak/Faker.js)
 
## Contributing
Contributions are always welcome 😃! Currently we need more data and you can raise a PR for any issue or feature support.
  
## License
[MIT](https://choosealicense.com/licenses/mit/)

  
