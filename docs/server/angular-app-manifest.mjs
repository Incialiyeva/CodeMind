
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/CodeMind/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/CodeMind"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 442, hash: '06d3c1582409af91e7e23b779a6014330171d4412aecc1c59033f8cd226efb19', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 955, hash: '72070251bbe0cea5eb3521ae82d42e600fbd68d4c09e7e7bc184edc49920b45d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 10050, hash: '8b1ab24ffb1d26c52ac092748fa876219f80c24438322a585c9fd00259555520', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
