export default [

  {input:'./src/main.js',

  output: {
    file: './build/main.js',
    format: 'umd',
    name: 'EmigaLogger'
  }},
  {input:'./src/lib/EmigaCookies.js',

  output: {
    file: './build/EmigaCookies.js',
    format: 'umd',
    name: 'EmigaCookies'
  }},
  {input:'./src/lib/EmigaData.js',

  output: {
    file: './build/EmigaData.js',
    format: 'umd',
    name: 'EmigaData'
  }},
  {input:'./src/lib/EmigaInit.js',

  output: {
    file: './build/EmigaInit.js',
    format: 'umd',
    name: 'EmigaInit'
  }},
  {input:'./src/lib/EmigaSelector.js',

  output: {
    file: './build/EmigaSelector.js',
    format: 'umd',
    name: 'EmigaSelector'
  }},
  {input:'./src/lib/EmigaToken.js',

  output: {
    file: './build/EmigaToken.js',
    format: 'umd',
    name: 'EmigaToken'
  }},

];