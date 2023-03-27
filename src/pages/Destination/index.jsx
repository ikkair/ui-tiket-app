import React from 'react';
import TicketCard from '../../../components/Cards/TicketCard/TicketCard';
import BaseLayout from '../../../template/BaseLayout/BaseLayout';
import sunset from '../../assets/explore/sunset.jpg';
import './destination.css';

const Destination = () => {
  return (
    <>
      <BaseLayout>
        <div className="container-fluid m-0 p-0">
          <div className="top-des d-flex justify-content-center">
            <div className="dark"></div>
            <img className="w-75 img-fluid img-box" src={sunset} />
          </div>
          <div className="description my-5 d-flex justify-content-center">
            <div className="desc w-75 text-center fs-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel debitis hic inventore, aliquam blanditiis voluptatibus incidunt excepturi est dolorem! Veniam cupiditate id nobis rem eos quod, repudiandae odit harum perspiciatis
              doloremque similique quasi, reprehenderit ratione? Aliquam, debitis. Ullam et, recusandae aspernatur eum iusto nulla odio sapiente id explicabo quo. Maiores facere ex provident saepe a quasi quia? Tenetur eligendi eius impedit
              ut! Quas ex debitis est necessitatibus modi, quam sunt eligendi, sapiente quae odit et possimus. Quisquam, incidunt ipsam fugit debitis nobis minus non soluta illo laboriosam. Aspernatur cum odio, ipsam, aliquam molestias at
              illum fuga asperiores mollitia reprehenderit accusantium.
            </div>
          </div>
          <div className="container d-flex justify-content-center">
            <div className="ticket w-75 mb-5">
              <TicketCard />
            </div>
          </div>
        </div>
      </BaseLayout>
    </>
  );
};

export default Destination;
