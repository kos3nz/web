const fs = require('fs')
const colors = require('./colors.cjs')

const file = 'moonlight-ii.json'

let text = fs.readFileSync(`./theme/${file}`, 'utf8')

Object.entries(colors).forEach(([colorVar, hexStr]) => {
  text = text.replace(new RegExp(`\\${colorVar}`, 'g'), hexStr)
})

fs.writeFileSync(`./theme/${file}`, text)
