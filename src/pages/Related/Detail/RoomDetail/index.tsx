/**
 * @ Description: 查看房间详情页面
 **/


import React, { ReactElement } from 'react'

import DetailCard from '../Card'
import {useHistory ,useParams} from 'react-router-dom'
import style from './style.module.scss'

interface Props {
    meetingId: string;
}

function Detail({}: Props): ReactElement {
 const {meetingId}=useParams()
  
 const history = useHistory()
 //mock数据
 const guestInfo = {
    guestid: '123',
    meetingid:'123',
    avatarUrl: 'c5f822d4-9fd5-4a24-a7c8-42ed4bad74c5.jpg',
    introduction: '123',
    name: '123',
    position: '123',
    flightInfo: '123',
    personId: '123',
    guestTel: '123'
 }
 const roomInfo = {
     roomType: 'max',
     roomid: '123',
     roomPrice: '123'
 }
 return (
    <div className={style.container}>
        <p className={style.title}>分配详情</p>
        <DetailCard meetingId={meetingId as string} guest={guestInfo} room={roomInfo}/>
        <DetailCard meetingId={meetingId as string} guest={guestInfo} room={roomInfo}/>
        <DetailCard meetingId={meetingId as string} guest={guestInfo} room={roomInfo}/>
        <DetailCard meetingId={meetingId as string} guest={guestInfo} room={roomInfo}/>
        <DetailCard meetingId={meetingId as string} guest={guestInfo} room={roomInfo}/>
        <DetailCard meetingId={meetingId as string} guest={guestInfo} room={roomInfo}/>
    </div>
  )
}
 
export default Detail