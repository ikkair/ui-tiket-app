import React from 'react';
import large from '../../assets/explore/img-large.png';
import small from '../../assets/explore/img-small.png';
import blue from '../../assets/explore/blue.png';
import spain from '../../assets/explore/spain.png';
import bali from '../../assets/explore/Bali.png';
// import style from './dashboard.module.css';
import './landing.css';
import plane from '../../assets/explore/plane.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faArrowRight, faArrowRightArrowLeft, faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';
import BaseLayout from '../../../template/BaseLayout/BaseLayout';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <>
      <BaseLayout>
        {/* Hero */}
        <section className="container-fluid Hero">
          <div className="row">
            <div className="col-md-6 my-5 Hero">
              <div className="col-md-12 d-flex justify-content-center flex-column ms-4 pe-5 pb-5 pt-4">
                <h1 className="fw-bold">
                  Find your <span className="">Flight</span>
                </h1>
                <p className="fw-semibold mt-2">and explore the world with us</p>
              </div>
              <div className="col-md-12 text-start none Hero">
                <img src={large} className="customImg" alt="" />
              </div>
            </div>
            <div className="col-md-6 Hero">
              <div className="col-md-12 text-end mt-2 Hero">
                <img src={small} className={`img-fluid imgFluidHero cusImg`} alt="" />
              </div>
              <div className="col-md-12 text-end mt-5">
                <img src={blue} className={`img-fluid imgFluidHero customImageBubble`} width="180" alt="" />
              </div>
              <div className="card card-body customCard cardHero">
                <div className="col-12">
                  <p className="fw-semibold">Hey,</p>
                  <h5>Where you want to go?</h5>
                  <div className="row">
                    <div className="col-8 text-start">
                      <p className={`fw-bold blue py-2`}>Recently searched</p>
                    </div>
                    <div className="col-4 text-end">
                      <FontAwesomeIcon className="blue" icon={faAngleRight}></FontAwesomeIcon>
                    </div>
                  </div>
                  <div className="row border-destination mb-4 pt-2">
                    <div className="col-6 text-start">
                      <p className="text-muted">from</p>
                    </div>
                    <div className="col-6 text-end">
                      <p className="text-muted">to</p>
                    </div>
                    <div className="col-4 text-start">
                      <h5 className="fw-bold">Medan</h5>
                      <p className="text-muted">Sumatera</p>
                    </div>
                    <div className="col-4 text-center">
                      <div className="col-12">
                        <FontAwesomeIcon className="blue" icon={faArrowRightArrowLeft}></FontAwesomeIcon>
                      </div>
                      <div className="col-12"></div>
                    </div>
                    <div className="col-4 text-end">
                      <h5 className="fw-bold">Jakarta</h5>
                      <p className="text-muted">DKI Jakarta</p>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row text-center mb-3">
                      <div className="col-6">
                        <button type="button" className="btn btn-primary bgBlue fw-semibold">
                          <img src={plane} width="20" alt="" />
                          <span className="p-2">One way</span>
                        </button>
                      </div>
                      <div className="col-6">
                        <button type="button" className="btn btnGray">
                          <FontAwesomeIcon icon={faArrowRotateRight}></FontAwesomeIcon>
                          <span className="p-2 fw-semibold">Round trip</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 my-2">
                    <div>
                      <label htmlFor="inputDeparture" className="fw-semibold form-label text-muted">
                        Departure
                      </label>
                      <input type="text" className="form-control p-2 customBorderInput" id="inputDeparture" placeholder="Monday, 20 July 2020" />
                    </div>
                  </div>
                  <div className="col-12 mb-2">
                    <label htmlFor="inputDeparture" className="fw-semibold form-label text-muted mt-2">
                      How many person?
                    </label>
                    <div className="row">
                      <div className="col-6">
                        <input type="number" className="form-control p-2 customBorderInput" id="inputDeparture" placeholder="Child" />
                      </div>
                      <div className="col-6">
                        <input type="number" className="form-control p-2 customBorderInput" id="inputDeparture" placeholder="Adult" />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mb-2">
                    <label htmlFor="inputDeparture" className="fw-semibold form-label text-muted mt-2">
                      Which class do you want?
                    </label>
                    <div className="row">
                      <div className="col-4 p-1 d-flex flex-row">
                        <input type="radio" name="class" id="class" defaultValue="Economy" />
                        <label htmlFor="class" className="fw-semibold d-flex ps-1 align-items-center">
                          Economy
                        </label>
                      </div>
                      <div className="col-4 p-1 d-flex flex-row">
                        <input type="radio" name="class" id="class" defaultValue="Business" />
                        <label htmlFor="class" className="fw-semibold d-flex ps-1 align-items-center">
                          Business
                        </label>
                      </div>
                      <div className="col-4 p-1 d-flex flex-row">
                        <input type="radio" name="class" id="class" defaultValue="First Class" />
                        <label htmlFor="class" className="fw-semibold d-flex ps-1 align-items-center">
                          First Class
                        </label>
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-primary bgBlue p-2 px-5 mt-3 fw-bold w-100 d-flex justify-content-between align-items-center">
                    SEARCH FLIGHT <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                  </button>
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
                <h2 className="fw-bold mb-3">Trending Destinations</h2>
              </div>
              <div className="col text-end">
                <Link href={'/'} className="text-decoration-none fw-bold">
                  View Link
                </Link>
              </div>
            </div>
            <div className="customSpace">
              <Swiper
                spaceBetween={30}
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
                    slidesPerView: 3.1,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                  1280: {
                    slidesPerView: 5,
                  },
                }}
              >
                <SwiperSlide>
                  <Link href={'/'}>
                    <div className="cardSlider">
                      <div className="cardOverlay" />
                      <div className="cardImage">
                        <img src={spain} alt="" className="image" />
                      </div>
                      <div className="cardLabel border rounded-4 py-1 px-3 text-white">
                        <span className="fw-bold">15</span> Airlines
                      </div>
                      <div className="cardDescription flexRow">
                        <div className="flexCol flexAuto">
                          <p>Bali</p>
                          <h4>Indonesia</h4>
                        </div>
                        <div>
                          <button type="button" className="customButton">
                            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href={'/'}>
                    <div className="cardSlider">
                      <div className="cardOverlay" />
                      <div className="cardImage">
                        <img src={spain} alt="" className="image" />
                      </div>
                      <div className="cardLabel border rounded-4 py-1 px-3 text-white">
                        <span className="fw-bold">15</span> Airlines
                      </div>
                      <div className="cardDescription flexRow">
                        <div className="flexCol flexAuto">
                          <p>Bali</p>
                          <h4>Indonesia</h4>
                        </div>
                        <div>
                          <button type="button" className="customButton">
                            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href={'/'}>
                    <div className="cardSlider">
                      <div className="cardOverlay" />
                      <div className="cardImage">
                        <img src={spain} alt="" className="image" />
                      </div>
                      <div className="cardLabel border rounded-4 py-1 px-3 text-white">
                        <span className="fw-bold">15</span> Airlines
                      </div>
                      <div className="cardDescription flexRow">
                        <div className="flexCol flexAuto">
                          <p>Bali</p>
                          <h4>Indonesia</h4>
                        </div>
                        <div>
                          <button type="button" className="customButton">
                            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href={'/'}>
                    <div className="cardSlider">
                      <div className="cardOverlay" />
                      <div className="cardImage">
                        <img src={spain} alt="" className="image" />
                      </div>
                      <div className="cardLabel border rounded-4 py-1 px-3 text-white">
                        <span className="fw-bold">15</span> Airlines
                      </div>
                      <div className="cardDescription flexRow">
                        <div className="flexCol flexAuto">
                          <p>Bali</p>
                          <h4>Indonesia</h4>
                        </div>
                        <div>
                          <button type="button" className="customButton">
                            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href={'/'}>
                    <div className="cardSlider">
                      <div className="cardOverlay" />
                      <div className="cardImage">
                        <img src={spain} alt="" className="image" />
                      </div>
                      <div className="cardLabel border rounded-4 py-1 px-3 text-white">
                        <span className="fw-bold">15</span> Airlines
                      </div>
                      <div className="cardDescription flexRow">
                        <div className="flexCol flexAuto">
                          <p>Bali</p>
                          <h4>Indonesia</h4>
                        </div>
                        <div>
                          <button type="button" className="customButton">
                            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              </Swiper>
            </div>
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
