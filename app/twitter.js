import twitter from 'twitter'

var client = new twitter({
  consumer_key: 'joNEHfMcreL7v10Z5zTWmjA36',
  consumer_secret: 'y5wcFyQ6iIcz5t7Rxrh5Cow33deam9tyXwUvLjI9KAQcvR4qqN',
  access_token_key: '293288330-INSIHmI4xrqpHSbnt1vsu3iS9qwp5NuLiBPWoU2J',
  access_token_secret: 'KOD7Nfk0ZgRBVOTjqZiMyQgo5bnGFO4pQ54jF1EcPrlaa'
})

function getDate() {
  var today = new Date()
  var month = today.getMonth().length == 2 ? today.getMonth() : '0' + (today.getMonth() + 1)
  return today.getFullYear() + '-' + month + '-01'
}

searchPeru = 'pisco (peru OR peruano) -chile -chileno since:' + getDate()
searchChile = 'pisco (chile OR chileno) -peru -peruano since:' + getDate()
