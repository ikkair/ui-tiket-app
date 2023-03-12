import React from 'react'
import SectionCard from '../../../components/Cards/SectionCard/SectionCard'
import DoubleSideLayout from '../../../template/DoubleSideLayout/DoubleSideLayout'
import { SearchCard } from '../../../components/Cards/SearchCard/SearchCard'
import style from './Search.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsUpDown} from '@fortawesome/free-solid-svg-icons'
import TicketCard from '../../../components/Cards/TicketCard/TicketCard'

export const SearchResult = () => {
    return (
        
        <DoubleSideLayout
            className={style.styleBaseLayout}
            classLeft={'col-12 col-md-5 col-lg-4'}
            classRight={'col-12 col-md-7 col-lg-8 mt-3 mt-md-0'}
            leftside={
            <>
                <div className="headLeft d-flex justify-content-between align-items-center">
                    <p className='h4 p-0 '>Filter</p>
                    <Link className='text-blue no-underline fw-bolder'>Reset</Link>
                </div>
                <SearchCard/>
            </>
        }
        >
            <div className="headRight d-flex justify-content-between">
                <h4>Select tickets <span className='text-secondary h5'>(6 flight found)</span></h4>
                <Link className='h6 no-underline text-dark'>Sort by <FontAwesomeIcon icon={faArrowsUpDown}/> </Link>
            </div>
            <TicketCard 
                id={'satu'}
            />
            <TicketCard
                id={'dua'}
            />



            

            
        </DoubleSideLayout>
    )
}
