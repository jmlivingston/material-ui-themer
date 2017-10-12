const fs = require('fs')
const path = require('path')

const basePath = path.join(__dirname, '../src/material-ui-demos')

const filter = ['.js', 'Data.js']

const getFiles = dir => {
  return fs.readdirSync(dir).reduce((files, file) => {
    return fs.statSync(path.join(dir, file)).isDirectory()
      ? files.concat(getFiles(path.join(dir, file)))
      : ((file.indexOf('.js') !== -1 && file.indexOf('Data.js') === -1) ? files.concat(path.join(dir, file).replace(basePath, '')) : files)
  }, [])
}

const files = getFiles(basePath).map(file => file.replace('.js', ''))

fs.writeFile(path.join(__dirname, '../src/data.js'), 'export const demoData = ' + JSON.stringify(files, null, 2), error => {
  error && console.log(error)
})
