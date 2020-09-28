/**
 * @ Description: 系统消息相关接口
 */

import * as config from './config'
import { get, post, deleteFile } from '../axios'


/**
 * 反馈消息
 */
export const feedback = (username: string, message: string, updataTime: string) => post(config.FEEDBACK, { data: { username, message, updataTime } })

/**
 * 获取系统消息
 */
export const getUserMessage = () => get(config._GET_USER_MESSAGE)

/**
 * 获取热门会议
 */
export const getHotMeeting = () => get(config._GET_HOT_MEETING)



