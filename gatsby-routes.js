const { resolve } = require('path')

module.exports = [
  /* ---- Routes ---- */
  { path: '/', matchPath: '/**', component: resolve(`src/ui/routes/Router.tsx`) }
]
