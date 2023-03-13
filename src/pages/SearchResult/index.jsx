import React, { useEffect, useState } from 'react'
import DoubleSideLayout from '../../../template/DoubleSideLayout/DoubleSideLayout'
import { SearchCard } from '../../../components/Cards/SearchCard/SearchCard'
import style from './Search.module.css'
import { Link, useSearchParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsUpDown, faCircle } from '@fortawesome/free-solid-svg-icons'
import TicketCard from '../../../components/Cards/TicketCard/TicketCard'
import planes from '../../assets/icon/planes.png'
import { useGetAllFlightQuery } from '../../features/flight/flightApi'
import { FormatRupiah } from '@arismun/format-rupiah'
import { showLoading } from '../../common/loadingHandler'
import Swal from 'sweetalert2'

export const SearchResult = () => {
  const { data: flights, isLoading, isSuccess } = useGetAllFlightQuery({})
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchResult, setSearchResult] = useState({
    starting_place : searchParams.get('starting_place') || "",
    destination_place : searchParams.get('destination_place') || "",
    transit: searchParams.get('transit') || "direct",
    departure_date: searchParams.get('departure_date') || '',
    capacity: searchParams.get('capacity') || 1,
    type_seat: searchParams.get('type_seat') || ''
  })

//   useEffect(() => {
//     if(isLoading) showLoading('Please Wait....')
//     if(isSuccess) Swal.close()

//   }, [isLoading, isSuccess])
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
                  <span className='ms-2 me-2'>{searchResult.capacity} Passenger</span><FontAwesomeIcon icon={faCircle} />
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
        classRight={'col-12 col-md-7 col-lg-8 mt-3 mt-md-0'}
        leftside={
          <>
            <div className="headLeft d-md-flex justify-content-between align-items-center d-none">
              <p className='h4 p-0 '>Filter</p>
              <Link className='text-blue no-underline fw-bolder'>Reset</Link>
            </div>
            <SearchCard />
          </>
        }
      >
        <div className="headRight d-flex justify-content-between">
          <h4 className='d-none d-md-block'>Select tickets <span className='text-secondary h5 '>({flights?.length} flight found)</span></h4>
          <span className='text-secondary h5 d-block d-md-none h-6'>{flights?.length} flight found</span>
          <Link className='h6 no-underline text-dark'>Sort by <FontAwesomeIcon icon={faArrowsUpDown} /> </Link>
        </div>

        {flights?.map((f,i) => (
          // console.log(f?.id_airlane),
          <>
            <TicketCard
              key={i}
              id={f?.id}
              id_airline={f?.id_airlane}
              price={<FormatRupiah value={f?.price} />}
              departure_time={f?.departure_time}
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
      </DoubleSideLayout>
    </>
  )
}
