import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Alert, Card, Tooltip, Upload } from 'antd'
import React, { useState } from 'react'
import uploadIcon from '../../assets/Upload.svg'
import './ProfileHeader.css'
import Edit_Image  from '../../assets/profile_Edit.svg'
import CountryFlag from '../Core-Components/CountryFlag';
import { toast } from 'react-toastify';

const ProfileHeader = ({setOpenEditModal,profileData}) => {

    const userDetails = profileData?.profileData
    console.log(userDetails)
    const details = "TY"

    //This is for ConvertBase64
    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
      };
      const beforeUpload = (file) => {
        // const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        // if (!isJpgOrPng) {
        //   console.log('You can only upload JPG/PNG file!');
        // }
        // const isLt2M = file.size / 1024 / 1024 < 2;
        // if (!isLt2M) {
        //  console.log('Image must smaller than 2MB!');
        // }
        // return isJpgOrPng && isLt2M;
        return false;
      };

    //This is for Upload Handle Change
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const handleChange = (info) => {
      // if (info.file.status === 'uploading') {
      //   setLoading(true);
      //   return;
      // }
      // if (info.file.status === 'done') {
      //   // Get this url from response in real world.
      //   getBase64(info.file.originFileObj, (url) => {
      //     setLoading(false);
      //     setImageUrl(url);
      //   });
      // }
      // console.log(URL.createObjectURL(info))
      console.log(info)
      console.log(info.file)
      const file = info.file
      console.log(file.size)
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        console.log('Image must smaller than 2MB!');
        toast.error("Image must be smaller than 2MB!")
      }
      else{
        setImageUrl(URL.createObjectURL(file))
        console.log(file)
      }
      
    }

    //This is for Upload Image
    const uploadButton = (
        <button
          style={{
            border: 0,
            background: 'none',
          }}
          type="button"
        >
          {loading ? <LoadingOutlined /> : <img src={uploadIcon}></img>}
          <div 
            style={{
                fontWeight:"400",
                fontSize:"12px",
                lineHeight:"18px",
                letterSpacing:".01em",
                color:"#29333D"
            }}
          >
            Upload Image
          </div>
        </button>
    );

    //This is profile data
    // const [profileinputs, setProfileinputs] = useState([
    //   {
    //     name:"Jhon Doe",
    //     email:"email@email.com",
    //     workemail:"email@email.com",
    //     phonenumber:"+91 7878786767",
    //     companyname:"Abc Enterprise",
    //     companyprofile:"Exporter",
    //     preferredcurrency:"USD"
    //   }
    // ])
    const getFirstLetter = (str) => {
      if (str && str.length > 0) {
        return str.charAt(0); // or str[0]
      }
      return "";
    };

  return (
    <Card
          style={{
            width: "100%",
          }}
          className='container mx-auto p-0 mob_response profile_header_section'
          id='mobile_margin'
        >
            <div className="row profile_details">
                <div className="col-2" style={{position:"relative"}}>
                    <Upload
                        // name="avatar"
                        listType="picture-circle"
                        className="avatar-uploader"
                        showUploadList={false}
                        // action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                        beforeUpload={beforeUpload}
                        onChange={handleChange}
                        accept='.svg,.png,.jpeg,.jpg'
                    >
                        {imageUrl ? (
                            <img
                                src={imageUrl}
                                alt="avatar"
                                style={{
                                width: '100%',
                                borderRadius:"50%",
                                height:"100%",
                                objectFit:"cover",
                                }}
                            />
                        ) : (
                          <div className='d-flex justify-content-center align-items-center' style={{fontSize:"32px",fontWeight:"700",color:"black",height:"100%",width:"100%",borderRadius:"50%"}}>
                             {getFirstLetter(userDetails?.company)}
                          </div>
                        )}
                    </Upload>
                    <div className='horizontal_line' >

                    </div>
                </div>
                <div className="col-10 profile_box d-flex align-items-start">
                    <div className="profile_box_1"> 
                        <div className="name_field">
                            <p className='m-0'>Company Name</p>
                                <p className='m-0'>
                                {userDetails?.company?.length <= 50 && userDetails?.company?.length>0 ? (
                                    userDetails?.company
                                  ) :userDetails?.company?.length >50? (
                                    <Tooltip placement="topLeft" zIndex={9999} title={userDetails?.company}>
                                      <span role="button">
                                        {userDetails?.company?.slice(0,5 ).trim().split("").join("") +
                                          "..."}
                                      </span>
                                    </Tooltip>
                                  ):
                                    "-"
                                  }
                                  </p>
                        </div>
                        <div className="companyname_field">
                            <p className='m-0'>Country</p>
                            <p className='m-0'>
                            <CountryFlag countryCode={userDetails?.country_code} />&nbsp;&nbsp;
                            {/* {userDetails?.country_name?.length <= 27 ? (
                                    userDetails?.country_name
                                  ) : (
                                    <Tooltip placement="topLeft" zIndex={9999} title={userDetails?.country_name}>
                                      <span role="button">
                                        {userDetails?.country_name?.slice(0,26 ).trim().split("").join("") +
                                          "..."}
                                      </span>
                                    </Tooltip>
                                  )}  */}
                                {userDetails?.country_name?.length <= 27 && userDetails?.country_name?.length>0 ? (
                                    userDetails?.country_name
                                  ) :userDetails?.country_name?.length >27? (
                                    <Tooltip placement="topLeft" zIndex={9999} title={userDetails?.country_name}>
                                      <span role="button">
                                        {userDetails?.country_name?.slice(0,26 ).trim().split("").join("") +
                                          "..."}
                                      </span>
                                    </Tooltip>
                                  ):
                                    "-"
                                  }
                            </p>
                        </div>
                    </div>
                    <div className="profile_box_2">
                        <div className="email_field">
                            <p className='m-0'>Email</p>
                            <p className='m-0'>            
                                {userDetails?.email?.length <= 27 && userDetails?.email?.length>0 ? (
                                    userDetails?.email
                                  ) :userDetails?.email?.length >27? (
                                    <Tooltip placement="topLeft" zIndex={9999} title={userDetails?.email}>
                                      <span role="button">
                                        {userDetails?.email?.slice(0,26 ).trim().split("").join("") +
                                          "..."}
                                      </span>
                                    </Tooltip>
                                  ):
                                    "-"
                                  }
                            </p>    
                        </div>
                        <div className="companyprofile_field">
                            <p className='m-0'>Preferred currency</p>
                            <p className='m-0'>{userDetails?.currency_code?.length>0?(userDetails?.currency_code):"-"}</p>
                        </div>
                    </div>
                    <div className="profile_box_3">
                        <div className="workemail_field">
                            <p className='m-0'>Phone</p>
                            <p className='m-0'>
                            {userDetails?.phone_no?.length>0?(userDetails?.phone_no):"-"}
                            {/* {userDetails?.email.length <= 27 ? (
                                    userDetails?.email
                                  ) : (
                                    <Tooltip placement="topLeft" zIndex={9999} title={userDetails?.email}>
                                      <span role="button">
                                        {userDetails?.email.slice(0,26 ).trim().split("").join("") +
                                          "..."}
                                      </span>
                                    </Tooltip>
                                  )}  */}
                            </p>    
                        </div>
                        {/* <div className="prefcurrency_field">
                            <p className='m-0'>Preferred currency</p>
                            <p className='m-0'>USD</p>
                        </div> */}
                    </div>
                    {/* <div className="profile_box_4">
                        <div className="phone_field">
                            <p className='m-0'>Phone</p>
                            <p className='m-0'>{userDetails?.mobile}</p>    
                        </div>
                    </div> */}
                    {/* <div className="edit_icon_box">
                        <img src={Edit_Image} alt="" role='button' onClick={()=>setOpenEditModal(true)} />
                    </div> */}
                </div>
                {/* <div className="col-1">
                        <img src={Edit_Image} alt="" />
                </div> */}
            </div>
        </Card>
  )
}

export default ProfileHeader