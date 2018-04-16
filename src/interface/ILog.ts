/**
 * 字段定义
 */
export interface ILog {
  userId: string
  requestId: string
  name: string
  timestamp: number
  duration: number
  tags: {
    'httpMethod': string
    'url': string
    'hostname': string
    'port': number
    'query': object
    'body': object
    'response': object
    'response_size': number
    'status_code': string
  }
}
