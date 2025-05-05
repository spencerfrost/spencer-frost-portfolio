module.exports = {
  apps: [
    {
      name: 'spencer-frost-portfolio',
      script: '.output/server/index.mjs',
      exec_mode: 'cluster',
      instances: 'max',
      env: {
        NODE_ENV: 'production',
        PORT: 3032
      }
    }
  ]
}