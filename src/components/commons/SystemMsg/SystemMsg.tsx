/**
 * @ Author: zao
 * @ Create Time: 2020-03-22
 * @ Modified by: zao
 * @ Description: 全局系统消息浮动窗口
 */

import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom'
import style from './SystemMsg.module.scss';
import { FireTwoTone } from '@ant-design/icons';
import { Spin } from 'antd';

interface Props {
  name: string;
  //msgList: { id?: number | string; title?: string; }[];
  msgList: any[];
}

function SystemMsg({ name = '', msgList }: Props): ReactElement {
  //console.log(msgList)
  const history = useHistory()

  return (
    <div className={style.container}>
      <h2 className={style.title}>{name}</h2>
      <ul className={style.msgList}>
        {msgList?.map(item => (
            <li key={item.meetingid} onClick={() => history.push(`/info/${item.meetingid}`)}>
              {item.mName}
              <FireTwoTone 
                twoToneColor="#ee5454"
                style={{
                  position: "absolute",
                  right: 10 + "px",
                  marginTop: 5 + "px"
                }} />
            </li>
        ))}
      </ul>
    </div>
  )
}

export default SystemMsg
