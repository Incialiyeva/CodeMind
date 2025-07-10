
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
    'index.csr.html': {size: 442, hash: '82e83f036586eea72a64e989df97c4bf5220f4c821e342354092fbb6b0d61513', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 955, hash: 'a7190f961e54330afac7f9bdd8ac661f465cdcebe41c972010b6c118dcd17d94', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3890, hash: '8f3ad1328ce156d891e8363268263a73106f5b3d9e34ea859b1e91f3c014b0fe', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
