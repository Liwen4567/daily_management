/**
 * @ Description: 查看航班详情
 **/


import React, { ReactElement } from 'react'

import {useHistory ,useParams} from 'react-router-dom'

import  DetailCard  from '../Card'
import style from './style.module.scss'

interface Props {
    meetingId: string;
}

function AirDetail(): ReactElement {

 const { meetingId } = useParams()
 const history = useHistory()


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
const driverInfo = {
    driverId: '123',
    carId: '123',
    driverName: 'lyx',
    driverTel: '123456',
    carType: '123456'
}
 return (
    <div className={style.container}>
        <p className={style.title}>分配详情</p>
        <DetailCard meetingId={meetingId as string} guest={guestInfo} driver={driverInfo} />
        <DetailCard meetingId={meetingId as string} guest={guestInfo} driver={driverInfo} />
        <DetailCard meetingId={meetingId as string} guest={guestInfo} driver={driverInfo} />
        <DetailCard meetingId={meetingId as string} guest={guestInfo} driver={driverInfo} />
        <DetailCard meetingId={meetingId as string} guest={guestInfo} driver={driverInfo} />
        <DetailCard meetingId={meetingId as string} guest={guestInfo} driver={driverInfo} />
    </div>
  )
}

export default AirDetail