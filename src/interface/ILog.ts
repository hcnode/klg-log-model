/**
 * 字段定义
 */
export interface ILog {
  userId: string
  requestId: string
  type: string
  server?: string
  useTime: number
  interfaceName: string
  httpMethod: string
  retryTimes?: string
  url: string
  body: object
  response: object
  responseAsync: object
}
