//描述列表项目

import React, {
    ReactElement,
  } from 'react';
  
import style from './InfoItem.module.scss'  
interface Props{
  name: string;//input框前面的label
  className?: string;
  value?: string;//项目的值
}

function InfoItem(props: Props):ReactElement{
  const {
    name,
    value
  } = {...props}
    return (
      <div className={`${style.container} ${props.className}`}>
        <label className={style.label}>{name}</label>
        <span className={style.msgLine}>{value}</span>
      </div>
    )
}

export default InfoItem;