import React from 'react'
import Navbar from '../../components/Dashboard/Navbar'
import Sidebar from '../../components/Dashboard/Sidebar'


const DashboardLayout = ({children, title}) => {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>{title}</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
        <div className="container-fluid">
          {children}
        </div>
      </section>
      </div>

    

      <Sidebar />
    </div> 
  )
}

export default DashboardLayout