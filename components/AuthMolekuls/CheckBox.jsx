import React from 'react'
import style from './AuthMolekuls.module.css'

const CheckBox = (props) => {
  return (
    <div class="form-check mb-5 mt-2 customCheck">
        <input class="form-check-input" type="checkbox" value={props.value} id={style.flexCheckDefault} disabled={props.disabled} onChange={props.onchange} />
        <label class={`form-check-label`} for={style.flexCheckDefault}>
          I agree to terms & conditions
        </label>
    </div>
  )
}

export default CheckBox