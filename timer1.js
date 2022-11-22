
var args = process.argv.slice(2)
// const times = [300,500,900,1000,15000]
const timer = function (times) {
  for (let time of times) {
    if (!isNaN(time) && time > 0) {
      setTimeout(() => {
        console.log("BEEEEP")
        process.stdout.write('\x07')
      }, time * 1000)
    } 
  }


}
timer(args)

