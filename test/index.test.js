const job_example = require('..')
const assert = require('assert')

describe('example_job test', function () {
  it('3 seconds test', async () => {
    await job_example.delay(3000)
  })
  it('throw an Error', () => {
    assert.throws(()=>{
      job_example.throwError()
    })
  })
  it('write log', () => {
    job_example.writeLog()
  })
})
