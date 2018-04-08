import {Connection, Model} from 'mongoose'
import {ILogModel} from './interface/ILogModel'
import {LogSchema} from './LogModel'

export class DbHelper {
  static initModel (db: Connection, modelName = 'Log') {
    return db.model<ILogModel>(modelName, LogSchema, modelName)
  }
}
