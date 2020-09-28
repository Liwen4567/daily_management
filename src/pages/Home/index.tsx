/**
 * @ Author: zao
 * @ Create Time: 2020-08-20 18:49:22
 * @ Modified by: zao
 * @ Description: 主页
 */

// TODO: remember to set item total number

import React, {
  ReactElement,
  useState,
  useEffect,
  useContext,
  createContext
} from 'react';

import {
  Pagination,
  Spin,
} from 'antd';

import SelectBar from '@/components/bars/SelectBar';
import Item, { Iitem } from '@/components/commons/ProjectItem';
import { transformItemList } from '@/utils/itemDataTransfer';
import { useRequest, useUnmount } from '@umijs/hooks';
import {
  getHomeItemList,
  getItemTypes,
  getHomeItemListByCondition,
  getItemCount
} from '@/services/apis/item';
import { withRouter } from 'react-router-dom';

import style from './Home.module.scss';

interface Props {

}



function Home(props: any, { }: Props): ReactElement {
  const PER_PAGE = 9 // 每页的最多item数量
  const [type, setType] = useState('-1') // -1代表首页
  const [page, setPage] = useState(1) // 分页page偏移量
  const [meetingNum, setMeetingNum] = useState(0) // item的总数
  const [meetingList, setMeetingList] = useState<any[]>() // item的数据
  const [searchMeetingNum, setSearchMeetingNum] = useState(0) // 通过搜索得到的item的总数
  const [searchMeetingList, setSearchMeetingList] = useState<any[]>() // 通过搜索得到的item的数据
  const [typeList, setTypeList] = useState<any[]>() // 类别
  const [Searched, setSearched] = useState(255) // 是否是通过搜索得到数据 0表示不是通过搜索得到， 1表示通过搜索得到， 255为默认（不是通过搜索得到）







  const meetingNumR = useRequest(getItemCount, {
    cacheKey: 'meetingNum',
    onSuccess: (result, params) => {
      if (result.data) {
        setMeetingNum(result.data.count)
      }
    },
    onError: (result, params) => {
      console.log(result)

    }
  })
  const meetingListR = useRequest((page = 0) => getHomeItemList(page, PER_PAGE), {
    cacheKey: 'homeList',
    onSuccess: (result, params) => {
      if (result.data) {
        setMeetingList(transformItemList(result.data.meetings))
      }
    },
    onError: (error) => {
      console.log('错误')

      console.log(error)

    }
  })

  //处理搜索后，页面转跳后获取的数据   meetingList
  useEffect(() => {
    //console.log(props)
    try {
      //console.log(props.location.params.searchMeetingList)
      setSearchMeetingNum(props.location.params.searchMeetingList.length)
      setSearchMeetingList(transformItemList(props.location.params.searchMeetingList))
      setSearched(props.location.params.searched)
      
    } catch {
      //console.log("error")
    }

  })
  
  //console.log(props) 
  


  const typeListR = useRequest(getItemTypes, {
    cacheKey: 'meetingType',
    onSuccess: (result, params) => {
      if (result.data) {
        let types: any[] = result.data.types.map((item: any) => item)
        types.unshift({ typeid: -1, type: '全部' })
        setTypeList(types)
      }
    }
  })
  const typeMeetingListR = useRequest((type: number) => getHomeItemListByCondition(type), {
    manual: true,
    onSuccess: (result, params) => {
      if (result.data) {
        setMeetingList(transformItemList(result.data.meetings))
      }
    }
  })
  // 处理分页
  const handlePagination = async (page: number) => {
    setPage(page)
    meetingListR.run((page - 1) * 9)
  }
  // 处理条件搜索
  const handleTypeChange = async (e: any) => {
    setType(e.target.value)
    if (e.target.value === '-1') {
      setPage(1)
      meetingListR.run(0)
      meetingNumR.run()
    } else {
      typeMeetingListR.run(e.target.value)
    }
  }

  useUnmount(() => {
    meetingNumR.cancel('cancel meetingNumR')
    meetingListR.cancel('cancel meetingListR')
    typeListR.cancel('cancel typeListR')

  })

  return (
    <div className={style.container}>
      <Spin spinning={typeListR.loading}>
        <SelectBar className={style.bar} name='类别' typeTarget={type} typeList={typeList} onChange={(e: any) => handleTypeChange(e)} />
      </Spin>


      <div className={style.itemList}>
        <Spin spinning={type === '-1' ? meetingListR.loading : typeMeetingListR.loading}>
          <div className={style.list}>
            {(Searched == 1 ? searchMeetingList : meetingList)?.map((item: any) => {
              return <Item jumpTo={'info'} key={item.id} item={item} />
            })}
          </div>
        </Spin>

        {
          type === '-1' ?
            <Spin spinning={meetingNumR.loading}>
              <Pagination className={style.pagination} pageSize={PER_PAGE} current={page} total={(Searched == 1 ? searchMeetingNum : meetingNum)} onChange={handlePagination} hideOnSinglePage={true} />
            </Spin> : null
        }
      </div>

    </div>
  )
}

export default withRouter(Home) 
