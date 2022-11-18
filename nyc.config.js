module.exports = {
  "extends": "@istanbuljs/nyc-config-typescript",
  "exclude": [
    'src/Models/Connection.ts',   
  ],
  "include": [
    "src/Models",
    "src/Services",
    "src/Controllers"
  ],
  "reporter": [
    "text",
    "text-summary",
    "json-summary",
    "html",
    "lcov"
  ],
  "all": true
}
