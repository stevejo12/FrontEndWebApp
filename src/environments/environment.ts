// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  algolia: {
    appId: 'SHTAHB9M2H',
    apiKey: '6c4ea95b984a31285c85716d00e3b4a5',
    indexName: 'hotel',
    urlSync: false
  }
};
