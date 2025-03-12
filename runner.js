const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImE3NTRlN2ZiLTZkYWMtNGQzZC05YmViLTg2Y2U4NmZiODBiMy0xNzQxNzc4NTY3NDk5IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiY2ViMmE1MzgtYmNiYy00ZWVhLTllNWEtYzk5MzRlMjhmMzU0IiwidHlwZSI6InQifQ.7SgJaQjc9ejKVv3bDkDXd-Kn5tH2-3lJnDdvvl6NaIs'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
