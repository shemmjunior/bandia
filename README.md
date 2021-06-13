# Bandia Data

Generate Tanzanian based mock data

### Installation and Usage
To install run `npm install bandia-data`

```javascript
const bandia = require('bandia-data')

// Person 
const firstName = bandia.person.firstName()    // Alex
const lastName = bandia.person.lastName()     // Matiku
const fullName = bandia.person.fullName()    // Peter Jackson
const email = bandia.person.email()         // alphamusa@gmail.com
const phone = bandia.person.phone()   // 0743800456
const nida = bandia.person.nida()   // 19831212-63860-51590-43
const tribe = bandia.person.tribe() // Msukuma

// Dates
const dateBetween = bandia.date.between('2020-12-04', '2021-03-23') // 2021-01-03

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
 - [ ]  Bank Name
 - [ ]  Account Number
 - [ ]  Amount
 - [ ]  Transaction Type
### Company
 - [ ]  Company Name
 - [ ]  Address
 - [ ]  Description
### Dates
 - [ ]  Past
 - [ ]  Future
 - [x]  Between
### Miscallenous
 - [ ]  Color  


### Acknowledgements

 - Inspired by [Faker.js](https://github.com/Marak/Faker.js)

  
## License

[MIT](https://choosealicense.com/licenses/mit/)

  
