/**
 * @ Author: zao
 * @ Create Time: 2020-08-20 18:49:22
 * @ Modified by: zao
 * @ Description: 侧边消息布局，包含内容和侧边布局（有效）
 */

import React, { ReactElement, useState } from 'react';

import { Spin } from 'antd'
import SystemMsg from '@/components/commons/SystemMsg';
import style from './MsgLayout.module.scss';
import systemMsgContainer from '@/store/systemMsg'

import HotMeeting from '@/components/commons/HotMeeting/HotMeeting';
import {
  getHotMeeting,
} from '@/services/apis/message';
import { useRequest } from '@umijs/hooks';



interface Props {
  children: React.ReactNode;
}

function MsgLayout({ children }: Props): ReactElement {
  const systemMsg = systemMsgContainer.useContainer()

  const [hotmeetingList, sethotmeetingList] = useState([])
  const getHotMeetingR = useRequest(getHotMeeting, {
    onSuccess: (result, param) => {
      if (result.data) {
        //console.log(result.data['hot meetings'])
        sethotmeetingList(result.data['hot meetings'].slice(0, 3))
      }
    }
  })





  return (
    <div className={style.container}>
      <div className={style.left}>{children}</div>
      <div className={style.right}>
        <Spin spinning={getHotMeetingR.loading} >
        <SystemMsg name='热门会议' msgList={hotmeetingList} />
        {/* <HotMeeting /> */}
      </Spin>
      </div>
      

    </div>

  )
}

export default MsgLayout
