const fs = require('fs')
var chalk = require('chalk')
const DEFAULT_NS = 'translation'
// i18n-scanner.config.js
// i18n-scanner.config.js
module.exports = {
  input: ['./src/**/*.{js,jsx}'],
  output: './src/locales',
  options: {
    debug: false,
    removeUnusedKeys: false,
    sort: false,
    func: {
      list: ['t'],
      extensions: ['.js', '.jsx']
    },
    trans: false,
    //lngs: ['en', 'es', 'fr', 'pt'],
    lngs: ['en', 'fr', 'tr'],
    defaultLng: 'en',
    defaultNs: 'translation',
    defaultValue: (lng, ns, key) => {
      if (lng === 'en') {
        return key
      }
      return ''
    },
    nsSeparator: false,
    keySeparator: false,
    plural: true,
    resource: {
      loadPath: '{{lng}}/{{ns}}.json',
      savePath: '{{lng}}/{{ns}}.json'
    },
    metadata: {},
    allowDynamicKeyNames: false
  },
  transform: function customTransform (file, enc, done) {
    'use strict'
    const parser = this.parser
    const content = fs.readFileSync(file.path, enc)

    let ns
    const match = content.match(/useTranslation\(.+\)/)
    if (match) ns = match[0].split(/(\'|\")/)[2]

    let count = 0
    parser.parseFuncFromString(
      content,
      { list: ['t'] },

      function (key, options) {
        console.log('test', key)
        parser.set(
          key,
          Object.assign({}, options, {
            ns: ns ? ns : DEFAULT_NS,
            nsSeparator: false,
            keySeparator: false
          })
        )
        ++count
      }
    )
    parser.parseTransFromString(
      content,
      { component: 'Trans', i18nKey: 'i18nKey' },
      function (key, options) {
        parser.set(
          key.split(':')[1],
          Object.assign({}, options, {
            ns: key.split(':')[0],
            nsSeparator: false,
            keySeparator: false
          })
        )
        ++count
      }
    )

    if (count > 0) {
      console.log(
        `i18next-scanner: count=${chalk.cyan(count)}, file=${chalk.yellow(
          JSON.stringify(file.relative)
        )}`
      )
    }

    done()
  }
}
