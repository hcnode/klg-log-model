import {Document, Model, Schema, Types} from 'mongoose'

export const modelSchema = {
  userId: {type: String, index: true},         // 需要查询用户的所有请求，该字段要索引
  requestId: {type: String, index: true},      // 用于串联业务的 唯一id
  type: {type: String, required: true, enum: ['in', 'out'], index: true},  // 类型，是请求其他系统 out 还是接受其他请求 in
  server: {type: String},   // 请求到哪里，只有 out 的 log 需要记录
  useTime: {type: Number},  // 请求耗时 ms
  interfaceName: {type: String},    // 接口名
  httpMethod: {type: String},   // get or  post
  retryTimes: {type: Number},   // 重试次数, 对外请求会因为网络问题需要重试，记录该字段可以帮助开发判断网络情况
  url: {type: String},          // 请求 url
  body: {type: Object},         // 请求参数
  response: {type: Object},     // 返回结果
  responseAsync: {type: Object} // 异步返回结果，某些请求是异步的，最好能关联起来
}

const LogSchema: Schema = new Schema(modelSchema)

LogSchema.set('timestamps', true)        // createAt, updatedAt -> UTC
export {LogSchema}
