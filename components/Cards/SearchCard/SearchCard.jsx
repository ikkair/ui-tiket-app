import React from 'react'
import { Card } from 'react-bootstrap'
import RangeSlider from 'react-range-slider-input/dist/components/RangeSlider'
import 'react-range-slider-input/dist/style.css'
import { useState } from 'react'
import { useGetAllAirlineQuery } from '../../../src/features/airline/airlineApi'

export const SearchCard = ({onchange}) => {
  const [value, setValue] = useState([30, 60]);
  const [transit, setTransit] = useState([])

  const {data: airlines, isLoading, isSuccess} = useGetAllAirlineQuery()

  const changeHandler = (e) => {
    const checkChecked = document.querySelector(`#${e.target.id}`).checked
    if(checkChecked){
      if(e.target.value == 'true'){
        onchange({target: {value: true, name: e.target.name}})
      }else {
        onchange({target: {value: false, name: e.target.name}})
      }
    }else {
      if(e.target.name == 'filter_wifi' || e.target.name == 'filter_meal' || e.target.name == 'filter_luggage') {
        onchange({target: {value: false, name: e.target.name}})
      }else {
        onchange({target: {value: "", name: e.target.name}})
      }
    }
  }

  const changeHandlerTransit = (e) => {
    const checkChecked = document.querySelector(`#${e.target.id}`).checked
    if(checkChecked){
      let data = ''
      if(transit.length > 0) {
        data += `${transit[0]},${e.target.value}`
      }else {
        setTransit([e.target.value])
        data += e.target.value
      }
      onchange({target: {name: e.target.name, value: data}})
    }else {
      let data = ''
      for(let i = 0; i < transit.length; i++) {
        if(!transit.includes(e.target.value)){
          setTransit(transit[i])
          data = transit[i]
        }else {
          setTransit([])
        }
      }
      onchange({target: {name: e.target.name, value: data}})

    }
  }

  const changeHandlerFacilities = (e) => {
    const checkChecked = document.querySelector(`#${e.target.id}`).checked
    if(checkChecked){
      onchange(e)
    }else {
      onchange({target: {name: e.target.name, value: false}})
    }
  }
  return (
    <Card className={`border-0 shadow px-3 py-4 d-none d-md-block`}>
      <div className="accordion accordion-flush" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button className="accordion-button fw-bolder text-blue" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              Transit
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div className="accordion-body">
              <div className="form-check d-flex justify-content-between flex-row-reverse">
                <input className="form-check me-1" name={`transit`} id={`direct`} type="checkbox" value="direct" onChange={changeHandlerTransit}/>
                <label className="form-check-label p-0 m-0" htmlFor="defaultCheck1">
                  <span style={{ marginLeft: '-25px' }}>Direct</span>
                </label>
              </div>
              <div className="form-check d-flex justify-content-between flex-row-reverse mb-3">
                <input className="form-check me-1" name={`transit`} id={`transit`} type="checkbox" value="transit" onChange={changeHandlerTransit} />
                <label className="form-check-label p-0 m-0" htmlFor="defaultCheck1">
                  <span style={{ marginLeft: '-25px' }}>Transit</span>
                </label>
              </div>
            </div>
          </div>
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button className="accordion-button fw-bolder text-blue" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
              Facilites
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
            <div className="accordion-body">
              <div className="form-check d-flex justify-content-between flex-row-reverse">
                <input className="form-check me-1" name={`filter_wifi`} id={`filter_wifi`} type="checkbox" value={"wifi"} onChange={changeHandlerFacilities}/>
                <label className="form-check-label p-0 m-0" htmlFor="defaultCheck1">
                  <span style={{ marginLeft: '-25px' }}>Wifi</span>
                </label>
              </div>
              <div className="form-check d-flex justify-content-between flex-row-reverse">
                <input className="form-check me-1" name={`filter_meal`} id={`filter_meal`} type="checkbox" value={"meal"} onChange={changeHandlerFacilities} />
                <label className="form-check-label p-0 m-0" htmlFor="defaultCheck1">
                  <span style={{ marginLeft: '-25px' }}>Meal</span>
                </label>
              </div>
              <div className="form-check d-flex justify-content-between flex-row-reverse mb-3">
                <input className="form-check me-1" name={`filter_luggage`} id={`filter_luggage`} type="checkbox" value={'luggage'} onChange={changeHandlerFacilities} />
                <label className="form-check-label p-0 m-0" htmlFor="defaultCheck1">
                  <span style={{ marginLeft: '-25px' }}>Luggage</span>
                </label>
              </div>
            </div>
          </div>


          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button className="accordion-button fw-bolder text-blue" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo2" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
              Airlines
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo2" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
            <div className="accordion-body">
              {airlines?.map(airline => (
                <div className="form-check d-flex justify-content-between flex-row-reverse">
                 <input className="form-check me-1" name={`airlines`} id={`airlines${airline.id}`} type="checkbox" value={airline.name} onChange={changeHandler}/>
                 <label className="form-check-label p-0 m-0" htmlFor="defaultCheck1">
                   <span style={{ marginLeft: '-25px' }}>{airline.name}</span>
                 </label>
                </div>
              ))}
            </div>
          </div>

          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button className="accordion-button fw-bolder text-blue" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="true" aria-controls="panelsStayOpen-collapseThree">
              Price
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingThre">
            <div className="accordion-body">
              <div className="form-check text-center" style={{ marginLeft: '-25px' }}>
                <div className="label d-flex justify-content-between mb-3">
                  <div className="title">Lowest</div>
                  <div className="title">Highest</div>
                </div>
                <RangeSlider className={`text-blue`} value={value} onInput={setValue} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}


