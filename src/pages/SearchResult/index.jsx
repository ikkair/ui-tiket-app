import React, { useEffect, useState } from 'react'
import DoubleSideLayout from '../../../template/DoubleSideLayout/DoubleSideLayout'
import { SearchCard } from '../../../components/Cards/SearchCard/SearchCard'
import style from './Search.module.css'
import { Link, useAsyncValue, useSearchParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsUpDown, faCircle } from '@fortawesome/free-solid-svg-icons'
import TicketCard from '../../../components/Cards/TicketCard/TicketCard'
import planes from '../../assets/icon/planes.png'
import { useGetAllFlightQuery } from '../../features/flight/flightApi'
import { FormatRupiah } from '@arismun/format-rupiah'
import { showLoading } from '../../common/loadingHandler'
import Swal from 'sweetalert2'

export const SearchResult = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchResult, setSearchResult] = useState({
    starting_place : searchParams.get('starting_place') || "",
    destination_place : searchParams.get('destination_place') || "",
    type_trip: searchParams.get('type_trip') || "one way",
    departure_date: searchParams.get('departure_date') || '',
    capacity: searchParams.get('capacity') || 1,
    class_flight: searchParams.get('class_flight') || '',
    page: searchParams.get('page') || '1',
    limit: searchParams.get('limit'),
    transit:"",
    filter_luggage: "",
    filter_wifi: "",
    filter_meal: ""
  })
  const { data: flights, isLoading, isSuccess, isError } = useGetAllFlightQuery(
    {
      starting_place: searchResult?.starting_place,
      destination_place: searchResult?.destination_place,
      type_trip: searchResult?.type_trip,
      departure_date: searchResult?.departure_date,
      class_flight: searchResult?.class_flight,
      transit: searchResult?.transit,
      filter_luggage: searchResult?.filter_luggage,
      filter_wifi: searchResult?.filter_wifi,
      filter_meal: searchResult?.filter_meal,
      limit: searchResult?.limit,
      page: searchResult?.page
    }
  )

  function reDestructTransit(value) {
   
  }

  function regenerateUrl(lastQuery){
    let page = window.location.href.split("&")
    let url = ''
    page.forEach((query, i) => {
      if(i == page.length -1){ 
        url += `page=`+lastQuery
      }else {
        url += `${query}&`
      }
    })

    return url
  }

  const renderPagination = () => {
  
    const element = []
    if(element < flights?.pagination?.totalPage){
      for(let i = 0; i < flights?.pagination?.totalPage; i++) {
        element.push(
          <li key={i} className={`page-item px-0`}><a className="page-link" href={`${regenerateUrl(i+1)}`}>{i + 1}</a></li>
        )
      }
    }
  

    return element
  }

  useEffect(() => {
  }, [searchResult])

  useEffect(() => {
    if(isSuccess) Swal.close()
    if(isLoading) showLoading('Please wait...')
    if(isError) Swal.close()
  }, [isLoading, isSuccess, isError])
  return (
    <>
      <div className={`optionrute container position-relative`}>
        <div className={`${style.headingTop}`}>
          <div className="row text-light">
            <div className="col d-flex align-items-center">
              <div className="image me-3 d-sm-block d-none">
                <img src={planes} alt="" />
              </div>
              <div className="route text-wrap">
                <span className='d-flex justify-content-between'>
                  <p className='m-0 p-0'>From</p>
                  <p className='m-0 p-0'>To</p>
                </span>
                <div className='d-flex align-items-center justify-content-between' bg-primary>
                  <h5 className='me-4 p-0 fw-semibold'>{searchResult?.starting_place} </h5><FontAwesomeIcon icon={faArrowsUpDown} />
                  <h5 className='ms-4 p-0 fw-semibold'>{searchResult?.destination_place} </h5>
                </div>
                <p className='m-0 p-0 text-lighter' style={{ fontSize: '12px' }}>
                  <span className='me-2'>Monday. {searchResult.departure_date}</span><FontAwesomeIcon icon={faCircle} />
                  <span className='ms-2 me-2'>{searchResult.capacity == 0 ? 1 : searchResult.capacity} Passenger</span><FontAwesomeIcon icon={faCircle} />
                </p>
              </div>
            </div>

            <div className="col-md-4 col-12 text-md-end d-none d-md-flex justify-content-end">
              <Link to={'/#'} className='no-underline text-light fw-bolder my-auto'>Change Search</Link>
            </div>
          </div>
        </div>
      </div>
      <DoubleSideLayout
        className={style.styleBaseLayout}
        classLeft={'col-12 col-md-5 col-lg-4'}
        classRight={'col-12 col-md-7 col-lg-8 mt-3 mt-md-0 overflow-hidden'}
        leftside={
          <>
            <div className="headLeft d-md-flex justify-content-between align-items-center d-none">
              <p className='h4 p-0 '>Filter</p>
              <Link className='text-blue no-underline fw-bolder'>Reset</Link>
            </div>
            <SearchCard onchange={(e) => setSearchResult(prev => 
              ({...prev, [e.target.name] : e.target.value}))
            }/>
          </>
        }
      >
        <div className="headRight d-flex justify-content-between">
          <h4 className='d-none d-md-block'>Select tickets <span className='text-secondary h5 '>({flights?.data?.length} flight found)</span></h4>
          <span className='text-secondary h5 d-block d-md-none h-6'>{flights?.data?.length} flight found</span>
          <Link className='h6 no-underline text-dark'>Sort by <FontAwesomeIcon icon={faArrowsUpDown} /> </Link>
        </div>

        {flights?.data?.map((f,i) => (
          <>
            <TicketCard
              key={i}
              id={f?.id}
              capacity={searchResult?.capacity}
              id_airline={f?.id_airlane}
              name_airline={f?.name_airline}
              transit={f?.transit}
              duration_time={f?.duration_time}
              price={<FormatRupiah value={f?.price} />}
              departure_time={f?.departure_time}
              photo={f?.image_airline}
              arrived_time={f?.arrived_time}
              starting_place={f?.starting_place}
              departure_date={f?.departure_date}
              destination_place={f?.destination_place}
              meal={f?.meal}
              wifi={f?.wifi}
              luggage={f?.luggage}
            />
          </>
        ))}
        <nav aria-label="Page navigation example">
          <ul className="pagination d-flex justify-content-center">
            <li className="page-item px-0"><a className="page-link" href="#">{`<<`}</a></li>
            {renderPagination()?.map(page => page)}
            <li className="page-item px-0"><a className="page-link" href="#">{`>>`}</a></li>
          </ul>
        </nav>
      
      </DoubleSideLayout>
    </>
  )
}
