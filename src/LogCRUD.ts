import {Model, Connection} from 'mongoose'
import {ILogModel} from './interface/ILogModel'
import {DbHelper} from './DbHelper'

export class LogCRUD {
  private _model: Model<ILogModel>
  get model (): Model<ILogModel> {
    return this._model
  }

  constructor (db: Connection, modelName?) {
    if (!db) throw new Error('必须传入 mongoose db 对象完成 log db 初始化')
    this._model = DbHelper.initModel(db, modelName)
  }

  async save (log: object) {
    return await new this._model(log).save()
  }

  async saveResponseAsync (id: string, responseAsync: object) {
    return await this._model.findByIdAndUpdate(id, {responseAsync})
  }
}
