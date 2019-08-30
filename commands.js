const fs = require('fs')

const fileRead = (file = 'list.json') => {
  try {
    return JSON.parse(fs.readFileSync(file))
  }
  catch(error) {
    return []
  }
}

const fileWrite = (data, file = 'list.json') => {
  try {
    fs.writeFileSync(file, JSON.stringify(data))
  }
  catch(error) {
    console.log(error)
  }

}

const add = (name, price) => {
  let list = fileRead()

  const indice = list.findIndex(x => x.name === name)

  if (indice !== -1) {
    list[indice].price = price
  }
  else {
    list.push({ name, price })
  }

  fileWrite(list)
}

const remove = name => {
  let list = fileRead()

  list = list.filter(x => x.name !== name)

  fileWrite(list)
}

const showAll = () => {
  const list = fileRead()

  console.log(list)
}

const priceOf = name => {
  const list = fileRead()

  const indice = list.findIndex(x => x.name = name)

  if (indice !== -1) {
    console.log(list[indice].price)
  }
}

module.exports = { add, remove, showAll, priceOf }
