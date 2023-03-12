import React from 'react'

const ModalMedium = ({children, title, id}) => {
  return (
    <div class="modal fade" data-bs-backdrop="static" id={id} data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">{title}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalMedium