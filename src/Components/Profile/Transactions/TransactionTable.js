import { Table } from 'antd'
import React from 'react'
import './TransactionTable.css'
import CreditDollar from '../../../assets/Dollar.svg'
import DebitDollar from '../../../assets/RedDollar.svg'
import Coin from '../../../assets/FslCoin.svg'

const TransactionTable = () => {
    const columns = [
        {
          title: 'Transaction  ID',
          dataIndex: 'TransactionID',
          key: 'TransactionID',
        },
        {
          title: 'Date',
          dataIndex: 'Date',
          key: 'Date',
        },
        {
          title: 'Description',
          dataIndex: 'Description',
          key: 'Description',
        },
        {
          title: 'Credit',
          dataIndex: 'Credit',
          key: 'Credit',
        },
        {
          title: 'Debit',
          dataIndex: 'Debit',
          key: 'Debit',
        },
        {
          title: 'Balance',
          dataIndex: 'Balance',
          key: 'Balance',
        },
      ];

      const Description = ({title,desciption}) =>{
        return <>
                    <p className='m-0'
                        style={{
                            fontWeight:"400",
                            fontSize:"14px",
                            lineHeight:"24px",
                            letterSpacing:".01em",
                            color:"#29333D"
                        }}
                    >{title}</p>
                    <p className='m-0'
                        style={{
                            fontWeight:"400",
                            fontSize:"13px",
                            lineHeight:"19px",
                            letterSpacing:".01em",
                            color:"#495A6E"
                        }}
                    >{desciption}</p>
               </>
      }

      const Credit=({value})=>{
            return <div className='d-flex justify-content-start'>
                      <img style={{marginRight:"8px"}} src={CreditDollar} alt="" />
                      <p className='m-0' 
                          style={{
                            fontWeight:"400",
                            fontSize:"14px",
                            lineHeight:"24px",
                            letterSpacing:".01em",
                            color:"#27AA81",
                            }}>
                        {value}
                      </p>
                  </div>
      }
      const Debit=({value})=>{
            return <div className='d-flex justify-content-start'>
                      <img style={{marginRight:"8px",}} src={DebitDollar} alt="" />
                      <p className='m-0' 
                          style={{
                            fontWeight:"400",
                            fontSize:"14px",
                            lineHeight:"24px",
                            letterSpacing:".01em",
                            color:"#DA1E28",
                            }}>
                        {value}
                      </p>
                  </div>
      }
      const CoinFsl=({value})=>{
            return <div className='d-flex justify-content-start'>
                      <img style={{marginRight:"8px"}} src={Coin} alt="" />
                      <p className='m-0' 
                          style={{
                            fontWeight:"400",
                            fontSize:"14px",
                            lineHeight:"24px",
                            letterSpacing:".01em",
                            color:"#EA8634",
                            }}>
                        {value}
                      </p>
                  </div>
      }

      const data = [
        {
          key: '1',
          TransactionID:"207468",
          Date:"12/05/2023",
          Description:<Description title="You got 1000 FSL reward points" desciption="For completing 10 bookings" />,
          Credit: <Credit value="1000" />,
          Debit:<Debit value="500" />,
          Balance:"Wallet - $10,000",
        },
        {
          key: '2',
          TransactionID:"207468",
          Date:"12/05/2023",
          Description:<Description title="You got 1000 FSL reward points" desciption="For completing 10 bookings" />,
          Credit: <Debit value="500" />,
          Debit:<Credit value="1000" />,
          Balance:"Wallet - $10,000",
        },
        {
          key: '3',
          TransactionID:"207468",
          Date:"12/05/2023",
          Description:<Description title="You got 1000 FSL reward points" desciption="For completing 10 bookings" />,
          Credit: <CoinFsl value="500" />,
          Debit:<Credit value="1000" />,
          Balance:"Wallet - $10,000",
        },
        {
          key: '3',
          TransactionID:"207468",
          Date:"12/05/2023",
          Description:<Description title="You got 1000 FSL reward points" desciption="For completing 10 bookings" />,
          Credit: <Debit value="500" />,
          Debit:<Credit value="1000" />,
          Balance:"Wallet - $10,000",
        },
        {
          key: '4',
          TransactionID:"207468",
          Date:"12/05/2023",
          Description:<Description title="You got 1000 FSL reward points" desciption="For completing 10 bookings" />,
          Credit: <CoinFsl value="500" />,
          Debit:<Credit value="1000" />,
          Balance:"Wallet - $10,000",
        },
        {
          key: '5',
          TransactionID:"207468",
          Date:"12/05/2023",
          Description:<Description title="You got 1000 FSL reward points" desciption="For completing 10 bookings" />,
          Credit: <Credit value="500" />,
          Debit:<CoinFsl value="1000" />,
          Balance:"Wallet - $10,000",
        },
      ]

  return (
    <Table columns={columns} dataSource={data} />
  )
}

export default TransactionTable