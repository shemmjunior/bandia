const random_element = array => {
  return Math.floor(Math.random() * (array.length - 1)) + 1
}

const shuffler = array => {
  return array.sort(() => Math.random() - 0.5)
}

const random_number_length = n => {
  return Math.floor(Math.random() * 8999999999 + 1000000000).toString().substring(0,n)
}


module.exports = {
  shuffler: shuffler,
  random_element: random_element,
  random_number_length: random_number_length
}
