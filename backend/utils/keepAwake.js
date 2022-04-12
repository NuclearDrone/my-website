const fetch = require('node-fetch')

const wakeUpDyno = (url, interval = 25, callback) => {
  const milliseconds = interval * 60000;
  setTimeout(() => {
    try {
      fetch(url)
    } catch (e) {
      console.log(e.message)
    } finally {
      try {
        callback() // execute callback, if passed
      }
      catch (e) {
        callback ? console.log(e.message) : null
      }
      finally {
        return wakeUpDyno(url, interval, callback)
      }    
    }
  }, milliseconds
)}

module.exports = wakeUpDyno