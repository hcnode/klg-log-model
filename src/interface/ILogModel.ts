import {Document} from 'mongoose'
import {ILog} from './ILog'

/**
 * 用于数据库持久化,会带上 mongoose 的操作方法
 */
export interface ILogModel extends ILog, Document {
}
