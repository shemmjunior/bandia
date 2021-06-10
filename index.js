const generator = require('./src/bandia')

for (let index = 0; index < 5; index++) {
  // console.log(`${generator.firstName()} || ${generator.fullName()} || ${generator.email()} `)
  console.log(`${generator.phone()}`)
}

module.exports = {
  bandia: generator
}
