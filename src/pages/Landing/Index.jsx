import React, { useState } from 'react';
import large from '../../assets/explore/img-large.png';
import small from '../../assets/explore/img-small.png';
import blue from '../../assets/explore/blue.png';
import japan from '../../assets/explore/japan.png';
import bali from '../../assets/explore/Bali.png';
import './landing.css';
import plane from '../../assets/explore/plane.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faArrowRight, faArrowRightArrowLeft, faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';
import BaseLayout from '../../../template/BaseLayout/BaseLayout';
import { Link, useNavigate } from 'react-router-dom';
import { useGetAllDestinationQuery } from '../../features/destination/destinationApi';

const Index = () => {
  const navigate = useNavigate();

  const date = new Date();
  const currentDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  const [child, setChild] = useState(0);
  const [adult, setAdult] = useState(0);
  const [searchFlight, setSearchFlight] = useState({
    starting_place: 'Medan',
    destination_place: 'Jakarta',
    type_trip: 'one way',
    departure_date: currentDate,
    class_flight: 'economy',
  });

  const changeHandler = (e) => {
    setSearchFlight((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const generateUrlSearch = (args) => {
    let url = '';
    for (let attr in args) {
      url += `${attr}=${args[attr]}&`;
    }

    return url;
  };

  const submitHandler = (e) => {
    const searchData = {
      ...searchFlight,
      capacity: Number(child) + Number(adult),
    };
    const queryParams = generateUrlSearch(searchData);
    return navigate(`/flights?${queryParams}page=1`);
  };

  // Destination
  const { data: destination } = useGetAllDestinationQuery();

  return (
    <>
      <BaseLayout>
        {/* Hero */}
        <section className="container-fluid">
          <div className="row">
            <div className="col-md-6 my-5 Hero">
              <div className="col-md-12 d-flex justify-content-center w-100 flex-column ms-5 ps-5 pb-5 pt-4">
                <h1 className="fw-bold">
                  Find your <span className="text-blue">Flight</span>
                </h1>
                <p className="fw-semibold mt-2">and explore the world with us</p>
              </div>
              <div className="col-md-12 text-start none Hero">
                <img src={large} className="customImg img-fluid" alt="" />
              </div>
            </div>
            <div className="col-md-6 Hero">
              <div className="col-md-12 text-end mt-2 Hero none">
                <img src={small} className={`img-fluid imgFluidHero cusImg`} alt="" />
              </div>
              <div className="col-md-12 text-end mt-5 none">
                <img src={blue} className={`img-fluid imgFluidHero customImageBubble`} width="180" alt="" />
              </div>
              <div className="card card-body customCard cardHero me-5">
                <div className="col-12">
                  <p className="fw-semibold">Hey,</p>
                  <h5 className="fw-semibold">Where you want to go?</h5>
                  <div className="row">
                    <div className="col-8 text-start">
                      <p className={`fw-bold blue py-2`}>Recently searched</p>
                    </div>
                    <div className="col-4 text-end">
                      <FontAwesomeIcon className="blue" icon={faAngleRight}></FontAwesomeIcon>
                    </div>
                  </div>
                  <div className="row pt-2">
                    <div className="col-12 destination py-2 px-3">
                      <div className="row">
                        <div className="col-6 text-start">
                          <p className="text-muted">from</p>
                        </div>
                        <div className="col-6 text-end">
                          <p className="text-muted">to</p>
                        </div>
                        <div className="col-12">
                          <div className="row">
                            <div className="col-5 d-flex flex-wrap justift-content-center">
                              <input type="text" name="starting_place" className="form-control px-0 shadow-none border-0 fw-bold fs-5" value={searchFlight.starting_place} onChange={changeHandler} />
                              <p className="text-muted text-mediumms-auto">Indonesia</p>
                            </div>
                            <div className="col-2 text-center pt-3">
                              <div className="col-12">
                                <FontAwesomeIcon className="blue" icon={faArrowRightArrowLeft}></FontAwesomeIcon>
                              </div>
                              <div className="col-12"></div>
                            </div>
                            <div className="col-5 d-flex flex-wrap justift-content-center align-items-end">
                              <input type="text" name="destination_place" className="text-end px-0 form-control shadow-none border-0 fw-bold fs-5" value={searchFlight.destination_place} onChange={changeHandler} />
                              <p className="text-muted text-medium ms-auto">Indonesia</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 mt-4">
                      <div className="row mb-3">
                        <div className="col-6 ps-0">
                          <button
                            type="button"
                            className={`btn ${searchFlight?.type_trip == 'one way' ? 'bg-blue' : 'btnGray'} ms-0 fw-semibold w-100`}
                            onClick={(e) =>
                              setSearchFlight((prev) => {
                                return {
                                  ...prev,
                                  type_trip: 'one way',
                                };
                              })
                            }
                          >
                            <img src={plane} width="20" alt="" />
                            <span className="p-2">One way</span>
                          </button>
                        </div>
                        <div className="col-6 d-flex justify-content-end px-0">
                          <button
                            type="button"
                            className={`btn ms-auto  ${searchFlight?.type_trip == 'rounded trip' ? 'bg-blue' : 'btnGray'}  w-100`}
                            onClick={(e) =>
                              setSearchFlight((prev) => {
                                return {
                                  ...prev,
                                  type_trip: 'rounded trip',
                                };
                              })
                            }
                          >
                            <FontAwesomeIcon icon={faArrowRotateRight}></FontAwesomeIcon>
                            <span className="p-2 fw-semibold">Rounded trip</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 px-0 my-2">
                      <div>
                        <label htmlFor="inputDeparture" className="fw-semibold form-label text-muted">
                          Departure
                        </label>
                        <input type="date" min={currentDate} value={searchFlight.departure_date} onChange={changeHandler} name={'departure_date'} className="form-control p-2 customBorderInput" id="inputDeparture" />
                      </div>
                    </div>

                    <div className="col-12 px-0 mb-2">
                      <div className="row">
                        <div className="col-6">
                          <label htmlFor="child" className="text-muted fw-semibold">
                            Child
                          </label>
                          <input type="number" className="form-control p-2 customBorderInput" id="child" value={child} onChange={(e) => setChild(Number(e.target.value))} placeholder="Child" />
                        </div>
                        <div className="col-6">
                          <label htmlFor="child" className="text-muted fw-semibold">
                            Adult
                          </label>
                          <input type="number" className="form-control p-2 customBorderInput" id="inputDeparture" placeholder="Adult" value={adult} onChange={(e) => setAdult(Number(e.target.value))} />
                        </div>
                      </div>
                    </div>

                    <div className="col-12 px-0 mb-3">
                      <label htmlFor="inputDeparture" className="fw-semibold form-label text-muted mt-2">
                        Which class do you want?
                      </label>
                      <div className="d-flex justify-content-between fw-semibold">
                        <div class="form-check">
                          <input class="form-check-input" value={`economy`} name={'class_flight'} onChange={changeHandler} type="radio" id="flexRadioDefault1" checked />
                          <label class="form-check-label" htmlFor="flexRadioDefault1">
                            Economy
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" value={`busniess`} name={'class_flight'} onChange={changeHandler} type="radio" id="flexRadioDefault2" />
                          <label class="form-check-label" htmlFor="flexRadioDefault2">
                            Business
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" value={`first class`} name={'class_flight'} onChange={changeHandler} type="radio" id="flexRadioDefault2" />
                          <label class="form-check-label" htmlFor="flexRadioDefault2">
                            First Class
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 px-0 mb-2">
                      <button className="btn btn-blue px-3 py-2 mt-2 fw-bold w-100 d-flex justify-content-between align-items-center" onClick={submitHandler}>
                        SEARCH FLIGHT <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Hero */}

        {/* Trending */}
        <section>
          <div className="container mt-5">
            <div className="row align-items-center">
              <div className="col">
                <h5 className="blue spacing">TRENDING</h5>
                <h2 className="fw-bold mb-5">Trending Destinations</h2>
              </div>
              <div className="col text-end">
                <Link href={'/'} className="text-decoration-none fw-bold">
                  View Link
                </Link>
              </div>

              <div className="col-12 mt-3 trending-overflow d-flex">
                {destination?.map((item) => (
                  // <SwiperSlide>
                  <Link href={'/'} className={`cardDestination me-5 text-white`}>
                    <div className="cardSlider">
                      <div className="cardOverlay" />
                      <div className="cardImage">
                        <img src={japan} alt="" className="image" />
                      </div>
                      <div className="cardLabel py-1 px-3 mx-2 text-white">
                        <span className="fw-bold">{item?.popularity}</span> Airlines
                      </div>
                      <div className="cardDescription px-2">
                        <div className="row align-items-center">
                          <div className="col">
                            <h5>{item?.name}</h5>
                          </div>
                          <div className="col d-flex justify-content-end">
                            <button type="button" className="customButton">
                              <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  // </SwiperSlide>
                ))}
                {/* <Swiper
                  spaceBetween={20}
                  slidesOffsetBefore={10}
                  slidesOffsetAfter={10}
                  breakpoints={{
                    100: {
                      slidesPerView: 1.5,
                    },
                    400: {
                      slidesPerView: 2.1,
                    },
                    768: {
                      slidesPerView: 3,
                    },
                    1024: {
                      slidesPerView: 5,
                    },
                    1280: {
                      slidesPerView: 5,
                    },
                  }}
                >
                  
                </Swiper> */}
              </div>
            </div>
            <div className="customSpace"></div>
          </div>
        </section>
        {/* End Trending */}

        {/* Top Destination */}
        <section className="container-fluid p-5">
          <div className="py-5 bgImage text-white">
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                  <p className="">TOP 10</p>
                  <h2 className="">Top Destinations</h2>
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="">
                  <Swiper
                    spaceBetween={10}
                    slidesOffsetBefore={10}
                    slidesOffsetAfter={10}
                    breakpoints={{
                      100: {
                        slidesPerView: 1,
                      },
                      425: {
                        slidesPerView: 1,
                      },
                      768: {
                        slidesPerView: 3,
                      },
                      1024: {
                        slidesPerView: 4,
                      },
                      1280: {
                        slidesPerView: 5,
                      },
                    }}
                  >
                    {destination?.map((item) => (
                      <SwiperSlide>
                        <div className="col-lg-2 spaceCust p-5 d-flex justify-content-center">
                          <div className="row">
                            <div className="col-md-12 story">
                              <img src={bali} alt="wrapkit" className="imgCustom rounded-circle" />
                              <h5 className="mt-4 text-center">{item?.name}</h5>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                    <SwiperSlide>
                      <div className="col-lg-2 spaceCust p-5 d-flex justify-content-center">
                        <div className="row">
                          <div className="col-md-12 story">
                            <img src={bali} alt="wrapkit" className="imgCustom rounded-circle" />
                            <h5 className="mt-4 text-center">Bali</h5>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="col-lg-2 spaceCust p-5 d-flex justify-content-center">
                        <div className="row">
                          <div className="col-md-12 story">
                            <img src={bali} alt="wrapkit" className="imgCustom rounded-circle" />
                            <h5 className="mt-4 text-center">Bali</h5>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="col-lg-2 spaceCust p-5 d-flex justify-content-center">
                        <div className="row">
                          <div className="col-md-12 story">
                            <img src={bali} alt="wrapkit" className="imgCustom rounded-circle" />
                            <h5 className="mt-4 text-center">Bali</h5>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="col-lg-2 spaceCust p-5 d-flex justify-content-center">
                        <div className="row">
                          <div className="col-md-12 story">
                            <img src={bali} alt="wrapkit" className="imgCustom rounded-circle" />
                            <h5 className="mt-4 text-center">Bali</h5>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-8 text-center">
                <nav aria-label="Page navigation example">
                  <button type="button" className="btn infoBack mx-3 wArrow">
                    <FontAwesomeIcon icon={faAngleLeft} className="fs-3"></FontAwesomeIcon>
                  </button>
                  <button type="button" className="btn infoNext mx-3 wArrow">
                    <FontAwesomeIcon icon={faAngleRight} className="fs-3"></FontAwesomeIcon>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </section>
        {/* End Top Destination */}
      </BaseLayout>
    </>
  );
};

export default Index;
