/**
 * @ Description: 关于房间的相关接口
 */

import * as config from './config'
import { get, post,deleteFile } from '../axios'

export interface Iroom{
  roomid?: string,
  roomType?: string,
  roomPrice?: string
}
export const getAllRooms = (meetingId: string) => post(config.SHOW_ALL_DRIVERS, {
  data: {
    meetingId
  }
})

export const assignRoom = (meetingId: string, driverId: string, guestId: string) => post(config.ASSIGN_DRIVER, {
  data: {
   
  },msg:'分配成功'
})