import {Document, Model, Schema, Types} from 'mongoose'

export const modelSchema = {
  userId: {type: String, index: true},         // 需要查询用户的所有请求，该字段要索引
  requestId: {type: String, index: true},      // 用于串联业务的 唯一id
  name: {type: String, required: true, index: true},
  timestamp: {type: Number},  // 开始时间
  duration: {type: Number},  // 请求耗时 ms
  tags: {
    httpMethod: {type: String},
    hostname: {type: String},
    port: {type: Number},           // http 端口
    response_size: {type: Number},
    status_code: {type: String},              // http 状态码
    url: {type: String},              // 请求 url
    query: {type: Object},             // 请求参数 get 请求参数
    body: {type: Object},             //  请求参数 post 请求参数
    response: {type: Object},         // 返回结果
  }
}

const LogSchema: Schema = new Schema(modelSchema)

LogSchema.set('timestamps', true)        // createAt, updatedAt -> UTC
export {LogSchema}
