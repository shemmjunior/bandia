const random_element = array => {
  return Math.floor(Math.random() * (array.length - 1)) + 1
}

const shuffler = array => {
  return array.sort(() => Math.random() - 0.5)
}

module.exports = {
  shuffler: shuffler,
  random_element: random_element
}
