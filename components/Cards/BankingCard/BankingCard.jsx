import React from 'react'

const BankingCard = ({className}) => {
  return (
    <div className={`${className} row`}>
      <div className="col-12 bg-blue btn-shadow py-3 px-4 main-border">
        <div className="row">
          <div className="col-12 d-flex justify-content-between">
            <span className='fw-semibold text-light'>4441 1235 5512 5551</span>
          </div>
          <div className="col-12 d-flex justify-content-between">
            <span className='text-small text-blue-secondary'>X Card</span>
            <span className='text-small text-blue-secondary'>$ 1,440.2</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BankingCard