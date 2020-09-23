/**
 * @ Author: zao
 * @ Create Time: 2020-03-22
 * @ Modified by: zao
 * @ Description: 封装antd search组件
 * TODO: 记得添加api和逻辑
 */

import React, { ReactElement, useState } from 'react';

import { Input } from 'antd';
import { useHistory } from 'react-router-dom';

import style from './Search.module.scss';
import { useRequest } from '@umijs/hooks';
import { SearchMeeting } from '@/services/apis/item';

interface Props {
  className?: string;
  targetUrl?: string;
  showSearch: boolean;
}

function Search({ className, showSearch }: Props): ReactElement {
  const history = useHistory()
  const { Search } = Input
  const [searchCondition, setsearchCondition] = useState("")

  const SearchMeetingR = useRequest(SearchMeeting, {
    manual: true,
    onSuccess: (result, params) => {
      if (result.data) {
        console.log(result.data)

      }
    }
  })



  const handleSearch = (e: any) => {
    //history.push({ pathname: '/search', state: { value } })
    console.log(e)
    SearchMeetingR.run(e)
  }
  return (
    <div className={`${className} ${showSearch ? style.wrapper : style.hideWrapper}`} >
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

export default Search
