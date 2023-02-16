//setTimeout
// console.log('Starting')

// setTimeout(() => {
//     console.log('2 Second Timer')
// }, 2000)

// setTimeout(() => {
//     console.log('0 Second Timer')
// }, 0)

// console.log('Stopping')

const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=7ee92f2635fe67cb1c06cefece5e458f&query=37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
    console.log(response.body.currently)
})