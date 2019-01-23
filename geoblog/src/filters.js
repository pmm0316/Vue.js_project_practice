/**
 * CREATED DATE: 2019/1/22 10:28:48
 * author: mingmingbuzai
 * email: 847679250@qq.com
 */
import moment from 'moment'

export function date(value) {
  return moment(value).format('L')
}
