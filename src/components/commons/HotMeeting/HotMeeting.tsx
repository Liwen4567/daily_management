/**
 * @ Author: liwen
 * @ Create Time: 2020-09-22 15:37
 * @ Modified by: liwen
 * @ Description: 热门会议
 * 废弃---------------
 */
import React, { ReactElement, useState } from 'react'
import Input from '@/components/forms/Input';
import { useRequest } from '@umijs/hooks';
import { Spin, Popover, List, Avatar } from 'antd'

import {
    getHotMeeting,
} from '@/services/apis/message';




function HotMeeting() {
    const [hotmeetingList, sethotmeetingList] = useState([])
    const getHotMeetingR = useRequest(getHotMeeting, {
        onSuccess: (result, param) => {
            if (result.data) {
                console.log(result.data['hot meetings'])
                sethotmeetingList(result.data['hot meetings'].slice(0,2))
            }
        }
    })
    return (
        <>
            <List
                itemLayout="horizontal"
                dataSource={hotmeetingList}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            title={<a href="###">123</a>}
                            description="123"
                        />
                    </List.Item>
                )}
            />
        </>
    )
}
export default HotMeeting