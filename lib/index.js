/**
 * Test error occured.
 */
function throwError() {
  throw new Error('Error triggered.')
}

/**
 * Test stdout and stderr log
 */
function writeLog() {
  console.log('stdout test')
  console.error('stderr test')
}

/**
 * Test timeout
 * @param {Integer} ms 
 */
function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Delay done!')
      resolve()
    }, ms)
  })
}

/**
 * Test whether recieved SIGUSR2
 */
process.on('SIGUSR2', () => {
  console.error('Signal SIGUSR2 recieved!',
                 'Check whether "Done" has been output.')
})

module.exports = {
  throwError: throwError,
  writeLog: writeLog,
  delay: delay,
}
