/**
 * @ Author: zao
 * @ Create Time: 2020-03-22
 * @ Modified by: zao
 * @ Description: 封装antd search组件
 * TODO: 记得添加api和逻辑
 */

import React, { ReactElement, useState, createContext } from 'react';

import { Input } from 'antd';
import { useHistory, withRouter } from 'react-router-dom';

import style from './Search.module.scss';
import { useRequest } from '@umijs/hooks';
import { SearchMeeting } from '@/services/apis/item';



interface Props {
  className?: string;
  targetUrl?: string;
  showSearch: boolean;
}


function Search(props: any, { className, showSearch }: Props): ReactElement {
  const history = useHistory()
  const { Search } = Input
  const [searchCondition, setsearchCondition] = useState("")
  const [searchMeetingList, setsearchMeetingList] = useState([""])
  const SearchMeetingR = useRequest(SearchMeeting, {
    manual: true,
    onSuccess: (result, params) => {
      if (result.data) {
        //let meetingList = result.data.meeting
        //console.log(result.data)
        setsearchMeetingList(result.data.meeting)
        //setmeetingList([""])
        props.history.push({pathname: '/', params:{searchMeetingList: searchMeetingList, searched: true}})
      }
    }
  })

  //console.log(props)
  const handleSearch = (e: any) => {
    //history.push({ pathname: '/search', state: { value } })
    //console.log(e)
    SearchMeetingR.run(e)
    setsearchCondition("")
  }
  return (
    <div className={`${className} ${props.showSearch ? style.wrapper : style.hideWrapper}`} >
      <div className={style.container}>
        <Search
          className={style.show}
          value={searchCondition}
          placeholder='搜索会议/时间'
          onSearch={handleSearch}
          enterButton
          onChange={(e) => {
            setsearchCondition(e.target.value)
            //console.log(e.target.value)
          }}
        />
      </div>
    </div>

  )
}

export default withRouter(Search) 
