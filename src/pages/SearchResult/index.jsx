import React from 'react'
import SectionCard from '../../../components/Cards/SectionCard/SectionCard'
import DoubleSideLayout from '../../../template/DoubleSideLayout/DoubleSideLayout'
import { SearchCard } from '../../../components/Cards/SearchCard/SearchCard'

export const SearchResult = () => {
    return (
        
        <DoubleSideLayout
            classLeft={'col-12 col-md-5 col-lg-4'}
            classRight={'col-12 col-md-7 col-lg-8 mt-3 mt-md-0'}
            leftside={<SearchCard/>}
        >


            <SectionCard>
            </SectionCard>
        </DoubleSideLayout>
    )
}
