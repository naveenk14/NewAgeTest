import React from 'react'
import './Transactions.css'
import { Button, Flex, Typography } from 'antd'
import Export from '../../../assets/Export.svg'
import Filter from '../../../assets/Filter 2.svg'
import TransactionTable from './TransactionTable'

const Transactions = () => {
  return (
    <>
      <div className="transactions_description">
            <p className='m-0'>View Your Transactions</p>
            <p className='m-0'>You can see all your transaction history here & also export in excel file if needed.</p>
      </div>
      <Flex horizontal justify='space-between' align='center' >
          <p 
            className='m-0'
            style={{
              fontWeight:"500",
              fontSize:"15px",
              lineHeight:"22px",
              letterSpacing:".01em",
              color:"#181E25",
            }}
          >Transactions History</p>
          <Flex style={{marginBottom:"17px"}}>
            <Button
              icon={<img size={16} src={Export}></img>}
              style={{
                fontWeight:"400",
                fontSize:"13px",
                lineHeight:"19px",
                letterSpacing:".01em",
                textAlign:"center",
                color:"#495A6E",
                marginRight:"10px",
                border: "1px solid #E7EAF0"
              }}
            >Export</Button>
            <Button
              icon={<img size={16} src={Filter}></img>}
              style={{
                fontWeight:"400",
                fontSize:"13px",
                lineHeight:"19px",
                letterSpacing:".01em",
                textAlign:"center",
                color:"#495A6E",
                border: "1px solid #E7EAF0"
              }}
            >Filter</Button>
          </Flex>
      </Flex>
      <TransactionTable />
    </>
  )
}

export default Transactions