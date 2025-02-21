import { Table } from 'antd'
import React from 'react'
import { VscClose } from 'react-icons/vsc'

const ContainerDetailsModal = ({children,handleContClose}) => {

    
    const columns = [{
        title: 'Container Details',
        dataIndex: 'container',
      }]
      console.log(children)
  return (
    <>
        <Table columns={columns} dataSource={children} pagination={false} /> 
        <div
            className="modal_cancel_icon flex-center-end"
            style={{
            position: "absolute",
            right: "-30px",
            top: "0",
            cursor: "pointer",
        }}
      >
        <VscClose size={22} color="#ffff" onClick={() => handleContClose()} />
      </div>
    </>
  )
}

export default ContainerDetailsModal