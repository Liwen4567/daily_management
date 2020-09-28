/**
 * @ Author: zao
 * @ Create Time: 2020-08-20 18:49:22
 * @ Modified by: zao
 * @ Description: 系统消息页面
 */

import React, { ReactElement, useState } from 'react';

import { Spin, Collapse, Button, Modal } from 'antd';

// import systemMsgContainer from '@/store/systemMsg';
import style from './Message.module.scss';


import { useRequest } from '@umijs/hooks';
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
import {
  feedback,
  getUserMessage,
} from '@/services/apis/message';
import { toUpper } from 'lodash';
import { useImmer } from 'use-immer';



const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const { TextArea } = Input;

interface Props {

}

interface ImessageHeader {
  isRead?: boolean;
  content?: string;
}

function MessageHeader({ isRead, content }: ImessageHeader): ReactElement {
  return (
    <div className={style.msgHeader}>
      {isRead ? null : <div className={style.msgDot}></div>}
      <div className={style.msgContent}>{content}</div>
    </div>
  )
}

function Message({ }: Props): ReactElement {
  //const systemMsg = systemMsgContainer.useContainer()
  const [IsDisable, setIsDisable] = useState(true)
  const [IsModelShow, setIsModelShow] = useState(false)
  const { Panel } = Collapse


  //反馈消息
  const feedbackR = useRequest(feedback, {
    manual: true,
    onSuccess: (result, param) => {
      if (result.data) {
              
         
      }
    }
  })

  // feedbackR.run({
  //   username: "",
  //   message: "string",
  //   updataTime: "string"
  // })

  //获取系统消息
  const [msgList, setmsgList] = useState([])
  const getUserMessageR = useRequest(getUserMessage, {
    onSuccess: (result, param) => {
      if (result.data) {
        //console.log(result.data)
        setmsgList(result.data.list)
      }
    }
  })



  return (
    // <Spin spinning={systemMsg.loading} wrapperClassName={style.container}>
    <Spin spinning={getUserMessageR.loading} wrapperClassName={style.container}>
      <Button type="primary" className={style.button} onClick={() => { setIsModelShow(true) }}>我要反馈</Button>
      <Modal
        title="我要反馈"
        visible={IsModelShow}
        //onOk={()=>{setIsModelShow(true)}}
        onOk={() => { setIsModelShow(false) }}
        onCancel={() => { setIsModelShow(false) }}
        okButtonProps={{ disabled: IsDisable }}
        //confirmLoading={updatePwdR.loading}
        className={style.Modal}
      >
        <span className={style.span}>To:</span>
        <Input
          allowClear
          prefix={<UserOutlined />}
          maxLength={10}
          className={style.input}
          onChange={(e) => {
            if (e.target.value) {
              setIsDisable(false)
            } else {
              setIsDisable(true)
            }
          }}
          style={{
            width: 180 + "px",
            marginLeft: 10 + "px",
            marginBottom: 15 + "px",
          }}
        />
        <TextArea
          placeholder="请输入内容"
          allowClear
          autoSize={{ minRows: 3, maxRows: 10 }}
        />
      </Modal>
      <Collapse className={style.collapse} expandIconPosition='right'>
        {msgList.map((item, index) => {
          return (
            <Panel
              key={index}
              header={
                <>
                  <span>From:   {index}</span>
                  <span style={{
                    marginLeft: 20 + "px"
                  }}>Time:   {index}</span>
                </>
              }
              className={style.Panel}
            >
              {item}
            </Panel>
          )
        })}
      </Collapse>
      {/* <Search
        placeholder="请输入信息"
        enterButton="告诉我们"
        size="large"
        onSearch={value => console.log(value)}
      /> */}
    </Spin>
  )
}

export default Message
