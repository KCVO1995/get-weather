#!/usr/bin/env node

const getWeather = require('./getWeather')


if (process.argv[2] === '--help') {
    console.log(`
        Usage: weather <cityName>
        Example: weather 广州
    `)
} else if (process.argv[2] === '--version') {
    console.log(`v1.0.6`)

} else {
    let city = process.argv[2]
    getWeather(city).then(data => {
        console.log('当前城市:' + data.city)
        console.log('日期:' + data.date)
        console.log('天气:' + data.weather)
        console.log('温度' + data.temperature)
    }, e => {
        throw new Error(e)
    })
}