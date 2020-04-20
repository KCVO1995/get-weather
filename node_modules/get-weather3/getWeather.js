const axios = require('axios')

const getWeather = city => {
    return new Promise((resolve, reject) => {
        axios.get(`http://rap2api.taobao.org/app/mock/244238/weather?city=${encodeURI(city)}`)
            .then(
                response => resolve(response.data),
                e => { console.log(e); reject('网络错误') }
            )
    })
}

module.exports = getWeather