/**
 * @ Author: zao
 * @ Create Time: 2020-08-20 18:49:22
 * @ Modified by: zao
 * @ Description: 添加相关信息
 */

 //还没有房间的接口
import React, { ReactElement } from 'react'
import { Iguest } from '@/services/apis/guest'
import {Idriver} from '@/services/apis/driver'
import Input from '@/components/forms/Input'
import {Iroom} from '@/services/apis/room'
import Button from '@/components/commons/Button'
import { Spin } from 'antd'
import Assign from '../Assign'
import {useBoolean} from '@umijs/hooks'
import style from './style.module.scss'
interface Props {
  type: 'guest' | 'car' | 'room';
  meetingId: string;
  loading?: boolean;
  guest?: Iguest;
  car?: Idriver;
  room?: Iroom;
}

function Card({ meetingId, guest, car, room, loading = false }: Props): ReactElement {
  const showAssign=useBoolean(false)
  return (
    <Spin wrapperClassName={style.container} spinning={loading}>

      {guest && (<div className={style.form}>
        <Input type='text' name='姓名' readOnly value={guest.name} />
        <Input type='text' name='职位' readOnly value={guest.position} />
        <Input type='text' name='航班信息' readOnly value={guest.flightInfo} />
        <Input type='text' name='身份证号' readOnly value={guest.personId} />
        <Button value='分配接机和住宿' className={style.btn} onClick={showAssign.setTrue}/>
        <Assign meetingId={meetingId} visible={showAssign} guestId={guest.guestid as string}/>
      </div>)}
      {car && (
        <div className={style.form}>
          <Input type='text' name='司机姓名' readOnly value={car.driverName} />
          <Input type='text' name='联系电话' readOnly value={car.driverTel} />
          <Input type='text' name='车型' readOnly value={car.carType} />
          <Input type='text' name='车牌号' readOnly value={car.carId} />
        </div>
      )}
      {room && (
        <div className={style.form}>
          <Input type='text' name='房间号' readOnly value={room.roomid}/>
          <Input type='text' name='房间类型' readOnly value={room.roomType}/>
          <Input type='text' name='房间价格' readOnly value={room.roomPrice}/>
      </div>
      )}
    </Spin>
  )
}

export default Card
