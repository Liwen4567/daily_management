/**
 * @ Description: 详细信息的侧边消息布局
 */

import React, { ReactElement, useState } from 'react';

import { Spin } from 'antd'
import SystemMsg from '@/components/commons/SystemMsg';
import systemMsgContainer from '@/store/systemMsg'
import style from './Detail.module.scss';
import HotMeeting from '@/components/commons/HotMeeting/HotMeeting';


interface Props {
  children: React.ReactNode;
}

function DetailLayout({ children }: Props): ReactElement {
  const systemMsg = systemMsgContainer.useContainer()
  

  return (
    <div className={style.container}>
      <div className={style.left}>{children}</div>
      <div className={style.right}>
        <Spin spinning={systemMsg.loading} >
          {/* <SystemMsg name='热门会议' msgList={systemMsg.msgList} /> */}
          <HotMeeting />
        </Spin>
      </div>

    </div>
  )
}

export default DetailLayout
