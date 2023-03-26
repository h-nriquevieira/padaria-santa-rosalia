
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-app-js": preferDefault(require("/home/henrique/projects/padaria-sta-rosalia/src/pages/App.js"))
}

