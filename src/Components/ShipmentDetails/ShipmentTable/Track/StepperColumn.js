import React, { useState } from 'react'
import { TiTick } from 'react-icons/ti'

const StepperColumn = ({step}) => {

    const [activeYellow,setActiveYellow] = useState(2)
    const [activeGreen,setActiveGreen] = useState(1)
    let modified = false
    console.log("step",step)
    for(let i in step){
        // console.log(`current:${step[+i]?.milestone_status} next:${step[+i+1]?.milestone_status} previous: ${step[+i-1]?.milestone_status}`)
        if(step[+i]?.milestone_status === "COMPLETED" && step[+i-1]?.milestone_status === "IN PROGRESS"){
            // const filtered = step.filter((i)=>i.milestone_status === "COMPLETED")
            // console.log(filtered)
            modified = true
        }
      }
    console.log(modified)

  return (
    <div className='stepper_column d-flex flex-column justify-content-between' style={{maxWidth:"1400px"}}>
        {
            modified && step?.filter((i)=>i.milestone_status === "COMPLETED").map((step,i)=>(
                <div className='d-flex flex-row step-item' >
                     <div key={i} className={`me-5 ${step.milestone_status==="COMPLETED" && 'complete'}`} style={{zIndex:"1"}}>
                        <p className='m-0 step'>
                            {
                                step.milestone_status==="COMPLETED"?<TiTick size={20} color='white' />:
                            
                            <div style={{backgroundColor:"#ACB8C4",borderRadius:"50%",width:"10px",height:"10px"}}>
                                
                            </div>
                            }
                        </p>
                    </div>
                    <div className="step_body">
                        <p className='m-0' style={{color:"#181E25"}}>{step.header_text}</p>
                        <p className='m-0' >{step.description} {step.remarks_date}</p>
                    </div>
                </div>
            ))
        }
        {
            !modified && step?.map((step,i)=>(
                <div className='d-flex flex-row step-item' >
                     <div key={i} className={`me-5 ${step.milestone_status==="COMPLETED" && 'complete'}`} style={{zIndex:"1"}}>
                        <p className='m-0 step'>
                            {
                                step.milestone_status==="COMPLETED"?<TiTick size={20} color='white' />:
                            
                            <div style={{backgroundColor:"#ACB8C4",borderRadius:"50%",width:"10px",height:"10px"}}>
                                
                            </div>
                            }
                        </p>
                    </div>
                    <div className="step_body">
                        <p className='m-0' style={{color:"#181E25"}}>{step.header_text}</p>
                        <p className='m-0' >{step.description} {step.remarks_date}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default StepperColumn