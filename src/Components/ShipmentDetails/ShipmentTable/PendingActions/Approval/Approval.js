import { Input, Table } from 'antd';
import React, { useState } from 'react'
import './Approval.css'
import { Link } from 'react-router-dom';
import Modal from '../../Modal/Modal';
import ApproveModal from '../../Modal/ApproveModal';
import ChangeRequestModal from '../../Modal/ChangeRequestModal';
import ChangeRequirementsModal from '../../Modal/ChangeRequirementsModal';

const Approval = () => {

  //cancel_request_modal
  const [openApproveModal,setOpenApproveModal] = useState(false)
  const handleApproveOpen =()=>{
    setOpenApproveModal(true)
  }
  const handleApproveClose =()=>{
    setOpenApproveModal(false)
  }
  //cancel_request_modal
  const [openRequestModal,setOpenrequestModal] = useState(false)
  const handleRequestOpen =()=>{
    setOpenrequestModal(true)
  }
  const handleRequestClose =()=>{
    setOpenrequestModal(false)
  }
  //cancel_request_modal
  const [openRequireModal,setOpenRequireModal] = useState(false)
  const handleRequireOpen =()=>{
    setOpenRequireModal(true)
  }
  const handleRequireClose =()=>{
    setOpenRequireModal(false)
  }


  const Comments = () =>{
        return (
            <div className='d-flex justify-content-center align-items-center'>
                <Input style={{width:"50%"}} className='me-2' size="large" />
                <input type='button' className='btn btn-success me-2' style={{backgroundColor:"#19CB94",border:"none"}} value={"Approve"} onClick={()=>handleApproveOpen()} />
                <input type='button' className='btn btn-danger ' style={{backgroundColor:" #D32D2F"}} value={"Modify"} onClick={()=>handleRequireOpen()} />
            </div>
        )
  }

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          sorter: {
            compare: (a, b) => a.chinese - b.chinese,
            multiple: 3,
          },
        },
        {
          title: 'Status',
          dataIndex: 'status',
          sorter: {
            compare: (a, b) => a.chinese - b.chinese,
            multiple: 3,
          },
        },
        {
          title: 'Due Date',
          dataIndex: 'DueDate',
          sorter: {
            compare: (a, b) => a.math - b.math,
            multiple: 2,
          },
        },
        {
          title: 'Preview',
          dataIndex: 'preview',
        },
        {
          title: 'Comments',
          dataIndex: 'comments',
        },
      ];
      const data = [
        {
          key: '1',
          name: 'Draft BL',
          status: "Pending",
          DueDate: "10/05/2023",
          preview: <Link className='text-decoration-none' to="/">View</Link>,
          comments:<Comments />

        },
        {
            key: '2',
            name: 'Proforma Invoice',
            status: "Pending",
            DueDate: "10/05/2023",
            preview: <Link className='text-decoration-none' to="/">View</Link>,
            comments:<Comments />
        },
      ];

      

      const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
      };

  return (
   <>
         <div className="approval" style={{paddingTop:"30px"}}>
            {
              data.length>0 ? <Table columns={columns} dataSource={data} onChange={onChange}  />:
              <p className='m-0 text-center'>No approvals pending at the moment</p>
            }
        </div>
        <Modal isOpen={openApproveModal} width={"527px"} height={"471.93px"}>
            <>
                <ApproveModal handleApproveClose={handleApproveClose}  />
            </>
        </Modal>
        <Modal isOpen={openRequestModal} width={"527px"} height={"428px"}>
            <>
                <ChangeRequestModal handleRequestClose={handleRequestClose}  />
            </>
        </Modal>
        <Modal isOpen={openRequireModal} width={"527px"} height={"363.93px"}>
            <>
                <ChangeRequirementsModal handleRequireClose={handleRequireClose} handleRequestOpen={handleRequestOpen}  />
            </>
        </Modal>
   </>
  )
}

export default Approval