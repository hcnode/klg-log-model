import * as mongoose from 'mongoose'
import {Model} from 'mongoose'
import {TestHelper} from './TestHelper'
import {LogCRUD} from './LogCRUD'

describe('LogCRUD test', async function () {
  let Log: LogCRUD

  const log = {
    userId: 'uu',
    requestId: '122342343',
    type: 'in',
    useTime: 109
  }

  beforeAll(async () => {
    // mockgoose 会下载一个 mongodb 实例，所以这里要等待比较久
    jest.setTimeout(200e3)
    const db = await TestHelper.initMockDbConnection()
    Log = new LogCRUD(db)
  })

  it(' save ', async () => {
    await Log.save(log)
    const logs = await Log.model.find()
    console.log('logs', logs)
    expect(logs.length).toEqual(1)
    expect(logs[0].userId).toEqual(log.userId)
    expect(logs[0].requestId).toEqual(log.requestId)
  })

  it(' update responseAsync', async () => {
    const fLog = await Log.model.findOne()
    expect(fLog.requestId).toEqual(log.requestId)
    // fLog.responseAsync = {
    //   code: 0,
    //   msg: 'ok'
    // }
    // await fLog.save()
    await Log.saveResponseAsync(fLog.id, {
      code: 0,
      msg: 'ok'
    })

    const newLog = await Log.model.findOne()
    console.log('newLog', newLog)
    expect(newLog.responseAsync).toEqual({
      code: 0,
      msg: 'ok'
    })
  })

  afterAll((done) => {
    mongoose.disconnect(done)
  })
})
