const yargs    = require('yargs')
const commands = require('./commands')

const command = yargs.argv._[0]
const name    = yargs.argv.name
const price   = yargs.argv.price

switch(command) {
  case 'add':
    commands.add(name, price)
  break
  case 'remove':
    commands.remove(name)
  break
  case 'showAll':
    commands.showAll()
  break
  case 'priceOf':
    commands.priceOf(name)
  break
  default:
    console.log('Command unknow')
}
