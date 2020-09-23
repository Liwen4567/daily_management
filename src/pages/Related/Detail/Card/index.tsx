//航班或者房间的显示卡片组件
import React, { ReactElement} from 'react'
import { Spin } from 'antd'
import Avatar from '@/components/forms/Avatar'
import InfoItem from '@/components/commons/InfoItem'
import Guest from '@/components/commons/Guest'
import { Iguest, getGuestAvatar } from '@/services/apis/guest'
import { Idriver } from '@/services/apis/driver'
import { Iroom } from '@/services/apis/room'

import style from './style.module.scss'

interface Props {
    meetingId: string;
    loading?: boolean;
    guest?: Iguest;
    driver?: Idriver;
    room?: Iroom;
}

function DetailCard({ meetingId, guest, driver, room, loading = false}:Props){
    return (
        <Spin wrapperClassName={style.contanier} spinning={ loading }>
                 
            { guest && (<div className={style.info}>
                <Guest key={'1'} img={guest.avatarUrl} name={guest.name}/>
                <div className={style.infoText}>
                <InfoItem name='姓名'  value={guest.name}/>
                <InfoItem name='职位'  value={guest.position}/>
                <InfoItem name='电话'  value={guest.guestTel}/>
                <InfoItem name='航班信息'  value={guest.flightInfo}/>
              
                {
                driver && (<>
                    <InfoItem name='车牌号'  value={driver.carId}/>
                    <InfoItem name='司机电话'  value={driver.driverTel}/>
                    <InfoItem name='价格'  value={driver.carType}/>
                </>)
            }
            {
                room && (<>
                    <InfoItem name='房型'  value={room.roomType}/>
                    <InfoItem name='房间号'  value={room.roomid}/>
                    <InfoItem name='价格'  value={room.roomPrice}/>
                </>)
            }  
            </div>              
            </div>                            
            )}
        </Spin>
    )

}

export default DetailCard;