import { Menu, Tabs } from 'antd';
import React from 'react'
import Approval from '../PendingActions/Approval/Approval';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import CustomStatusIcon from './CustomStatusIcon';
import ViewCredit from '../PendingActions/Payment/ViewCredit';
import ShipperTab from '../PendingActions/ShipperTab';
import UploadTab from '../PendingActions/UploadTab';
import PaymentTab from '../PendingActions/PaymentTab';
import image from '../../../../assets/Warning.svg'

const TabBase = () => {

  const item = [
    {
      name:"Shipment Details",
      comp:<ShipperTab />,
      active:true,
      complete:false,
      warning:true
    },
    {
      name:"Upload Document",
      comp:<UploadTab />,
      active:false,
      complete:true,
      warning:false
    },
    {
      name:"Payment",
      comp:<PaymentTab />,
      active:false,
      complete:true,
      warning:false
    },
    {
      name:"Approvals",
      comp:<Approval />,
      active:false,
      complete:true,
      warning:false
    }
  ]

  const Tab =({children,warning})=>{
    return <div className='d-inline-flex justify-content-between align-items-center' style={{width:"175px"}}>
              <p className='m-0'>{children}</p>
              {warning && <img src={image} alt="" />}
              {console.log(children.name)}
            </div>
  }

  return (
    <div className='d-flex align-items-start justify-content-start vertical_tab'>
        <Tabs
            defaultActiveKey="1"
            tabPosition="left"
            
            items={item.map((item,i)=>{
              return {
                    icon:<CustomStatusIcon active={item.active} complete={item.complete} />,
                    label: <Tab children={item.name} warning={item.warning} />,
                    key: i,
                    disabled: i == 5,
                    children: item.comp,
                };

            }
            )
          }
        />
    </div>
  )
}

export default TabBase