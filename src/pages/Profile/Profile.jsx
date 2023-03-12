import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProfileCard from '../../../components/Cards/ProfileCard/ProfileCard'
import SectionCard from '../../../components/Cards/SectionCard/SectionCard'
import ProfileInputForm from '../../../components/Forms/ProfileInputForm/ProfileInputForm'
import { workerContactForm, workerBiodataForm } from '../../../lib/customerForm'
import DoubleSideLayout from '../../../template/DoubleSideLayout/DoubleSideLayout'
import { closeLoading, failedLoading, showLoading, successLoading } from '../../common/loadingHandler'
import { useGetUserProfileQuery, useUpdateUserProfileMutation } from '../../features/user/userApi'
import style from './Profile.module.css'

const Profile = () => {
  const staticId = 1
  const {data, isLoading, isSuccess} = useGetUserProfileQuery(staticId)
  const [updateUserProfile, {isLoading: isLoadingUpdateUser, isSuccess: isSuccessUpdateUser, isError: isErrorUpdateUser}] = useUpdateUserProfileMutation()
  const [profile, setProfile] = useState({})


  const changeHandler = (e) => {
    console.log(profile)
    setProfile(prev => {
      return {
        ...prev,
        [e.target.name] : e.target.value
      }
    })
  }

  const updateHandler = async (e) => {
    e.preventDefault()
    // const formData = new FormData()
    // for(let attr in profile){
    //   formData.append(attr, profile[attr])
    // }
    await updateUserProfile({id: staticId, data: profile})
  }

  useEffect(() => {
    if(isSuccess) {
      setProfile(data)
    }

  }, [isSuccess, isLoading])

  useEffect(() => {
    if(isSuccessUpdateUser) successLoading('User success updated!')
    if(isErrorUpdateUser) failedLoading('Update Failed!')
    if(isLoadingUpdateUser) showLoading('Please wait...')
  }, [isSuccessUpdateUser, isLoadingUpdateUser, isErrorUpdateUser])
  

  return (
    <DoubleSideLayout
      classLeft={'col-12 col-md-5 col-lg-4'}
      classRight={'col-12 col-md-7 col-lg-8 mt-3 mt-md-0'}
      leftside={
        <ProfileCard 
          onchange={(e) => setProfile(prev => ({...prev, photo: e.target.files[0]}))}
          data={data}/>
      }
    >
      <SectionCard header={true} title={"Profile"}>
        <div className="row">
          <div className="col-12">
            <span className='fw-bold fs-3'>Profile</span>
          </div>
        </div>
        <Form onSubmit={updateHandler}>
          <div className="row mt-3">
            <div className="col-12 col-lg-6">
              <div className="row">
                <div className="col-12">
                  <span className='fw-bold'>Contact</span>
                </div>
                <div className="col-12 mt-2">
                  {workerContactForm?.map((input, i) => (
                    <ProfileInputForm 
                      key={i}
                      className={`mb-4`}
                      title={input.title}
                      name={input.name}
                      type={input.type}
                      placeholder={input.placeholder}
                      value={profile[input.name]}
                      onchange={changeHandler} 
                    />
                  ))}
                </div>
                <div className="col-12 d-flex justify-content-end fw-semibold">
                  <Link to={'#'} className={'text-blue text-decoration-none'}>Account Setting 
                    <FontAwesomeIcon className='ms-4' icon={faArrowRight} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="row">
                <div className="col-12">
                  <span className='fw-bold'>Biodata</span>
                </div>
                
                <div className="col-12 mt-2">
                  {workerBiodataForm?.map((input, i) => (
                    <ProfileInputForm 
                      key={i}
                      className={`mb-4`}
                      title={input.title}
                      name={input.name}
                      type={input.type}
                      placeholder={input.placeholder}
                      value={profile[input.name]}
                      onchange={changeHandler} 
                    />
                  ))}
                </div>
                <div className="col-12 d-flex justify-content-end py-1">
                  <Button 
                    className={`${style.btnSave} bg-blue text-light btn-shadow border-0`}
                    type={"submit"}
                  >Save</Button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </SectionCard>
    </DoubleSideLayout>
  )
}

export default Profile