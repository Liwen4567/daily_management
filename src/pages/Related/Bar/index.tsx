/**
 * @ Author: zao
 * @ Create Time: 2020-08-20 18:49:22
 * @ Modified by: zao
 * @ Description: 会议详情bar
 */

import React, { ReactElement } from 'react'
import Guest from '@/components/commons/Guest'
import style from './style.module.scss'
import Button from '@/components/commons/Button'
import { useHistory, useLocation, useParams} from 'react-router-dom'

interface Props {
  num?: string;
  guestList?: {
    img: string;
    name: string;
  }[];
  callback?: () => any;
}

function Bar({num='5',guestList,callback}: Props): ReactElement {
 const history = useHistory();
 const { pathname } = useLocation()
 const { meetingId } = useParams();
 
  const JumpToDetail = ()=>{
    console.log(pathname);
    if(pathname.includes('aircraft')){
      history.push('/detail/airdetail/'+ meetingId);
    }else if(pathname.includes('accommodation')){
      history.push('/detail/roomdetail/'+ meetingId);
    }else{

    }
    //history.push('/detail/roomdetail')
    
 }

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.tt}>已安排嘉宾: <span>{num}</span>人</div>
        <Button className={style.btn} onClick={JumpToDetail} value={'查看详情'} color={'rgba(253, 202, 48, 1)'}/>
      </div>
      <div className={style.list}>
        {
          guestList?.map((item, index) => {
            return <Guest key={`guest${index}`} img={item.img} name={item.name}/>
          })
        }
      </div>
    </div>
  )
}

export default Bar
