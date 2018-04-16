import * as mongoose from 'mongoose'
import {Model} from 'mongoose'
import {TestHelper} from './TestHelper'
import {LogCRUD} from './LogCRUD'

describe('LogCRUD test', async function () {
  let Log: LogCRUD

  const log = {
    userId: 'uu',
    requestId: '122342343',
    name: 'in',
    tags: {
      url: 'hao123',
      query: {a: 1}
    }
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

  it(' patch save ', async () => {
    await Log.patchSave([log, log])

    const count = await Log.model.count({})
    console.log('count', count)
    expect(count).toEqual(3)
  })

  afterAll((done) => {
    mongoose.disconnect(done)
  })
})
