/**
 * @ Author: liwen
 * @ Create Time: 2020-09-21 17:27
 * @ Modified by: liwen
 * @ Description: 详细信息（根据身份选择渲染）
   废弃----------------
 */
import React, { ReactElement } from 'react'
import Input from '@/components/forms/Input';
import { useUpdateEffect } from '@umijs/hooks';

interface Props {
    role?: string;
    realname?: string;
    graYear?: string;
    major?: string;
    job?: string;
    college?: string;
}

function DetailInfo(role: Props, realname?: Props, graYear?: Props, major?: Props): any {
    console.log(realname)
    //realname.setValue(realname)
    if (role.role == "嘉宾") {
        return (
            <div>
                123
                {/* <Input type='text' bind={userInfoR.data.data.info.realname} name='姓名' msg='修改需要源手机认证' readOnly update={true} /> */}
                {/* <Input type='text' bind={phone} name='电话' msg='修改需要源手机认证' readOnly update={true} />
                <Input type='text' bind={phone} name='电话' msg='修改需要源手机认证' readOnly update={true} /> */}
            </div>

        )
    } else {
        return (
            <div>
                456
                {/* <Input type='text' bind={realname} name='姓名' msg='修改需要源手机认证' readOnly update={true} />
                <Input type='text' bind={graYear} name='毕业年份' msg='修改需要源手机认证' readOnly update={true} />
                <Input type='text' bind={major} name='专业' msg='修改需要源手机认证' readOnly update={true} /> */}
            </div>
        )
    }
}

export default DetailInfo