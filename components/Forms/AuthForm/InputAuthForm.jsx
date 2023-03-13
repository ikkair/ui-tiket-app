import React from 'react'
import style from './style.module.css'

const InputAuthForm = (props) => {
    return (
        <div className="mb-4">
            <div className=''>
                <input style={{height: '50px'}} type={props.type} className={`form-control border-0 border-2 rounded-0 border-bottom ${style.formControl}`} name={props.name} placeholder={props.placeholder} required={props.req} onChange={props.onchange}/>
            </div>
        </div>
    )
}

export default InputAuthForm