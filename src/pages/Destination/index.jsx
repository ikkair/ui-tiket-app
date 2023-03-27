import React from 'react';
import TicketCard from '../../../components/Cards/TicketCard/TicketCard';
import BaseLayout from '../../../template/BaseLayout/BaseLayout';
import sunset from '../../assets/explore/sunset.jpg';
import { useGetDestinationByIdQuery } from '../../features/destination/destinationApi';
import './destination.css';
import { useParams } from 'react-router-dom';
import { useGetAllFlightQuery } from '../../features/flight/flightApi';
import { FormatRupiah } from '@arismun/format-rupiah';

const Destination = () => {
  const { id } = useParams();
  const { data } = useGetDestinationByIdQuery(id);
  const { data: ticket } = useGetAllFlightQuery({
    starting_place: '',
    destination_place: data?.name?.toString(),
    type_trip: '',
    departure_date: '',
    class_flight: '',
    transit: '',
    filter_luggage: '',
    filter_wifi: '',
    filter_meal: '',
    limit: '',
    page: '',
    sortBY: '',
    sort: '',
  });
  console.log(ticket?.destination_place);
  return (
    <>
      <BaseLayout>
        <div className="container-fluid m-0 p-0">
          <div className="top-des d-flex justify-content-center">
            <div className="img-des img-fluid w-75">
              <img className="w-100 h-100 img-fluid img-box" src={data?.photo} />
              <div className="text-des text-center position-absolute top-50 start-50 translate-middle des-title">
                <div className="text-say text-white fw-bolder" style={{ fontFamily: 'Dancing Script' }}>
                  Say Yes
                </div>
                <div className="text-vaca" style={{ fontFamily: 'Roboto Condensed' }}>
                  TO YOUR VACATION
                </div>
                <div className="text-destination text-white fw-bolder" style={{ fontFamily: 'Dancing Script' }}>
                  {data?.name}
                </div>
              </div>
            </div>
          </div>
          <div className="description my-5 d-flex justify-content-center">
            <div className="desc w-75 text-center fs-5">{data?.description}</div>
          </div>
          <div className="container d-flex justify-content-center">
            <div className="ticket w-75 mb-5">
              {ticket === undefined ? (
                <p>Ticket not available</p>
              ) : (
                ticket?.data?.map((f, i) => (
                  <>
                    <TicketCard
                      key={i}
                      id={f?.id}
                      id_airline={f?.id_airlane}
                      name_airline={f?.name_airline}
                      transit={f?.transit}
                      duration_time={f?.duration_time}
                      price={<FormatRupiah value={f?.price} />}
                      departure_time={f?.departure_time}
                      photo={f?.image_airline}
                      arrived_time={f?.arrived_time}
                      starting_place={f?.starting_place}
                      departure_date={f?.departure_date}
                      destination_place={f?.destination_place}
                      meal={f?.meal}
                      wifi={f?.wifi}
                      luggage={f?.luggage}
                    />
                  </>
                ))
              )}
            </div>
          </div>
        </div>
      </BaseLayout>
    </>
  );
};

export default Destination;
