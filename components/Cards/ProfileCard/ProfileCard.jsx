import React from "react";
import style from "./ProfileCard.module.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import photo from '../../../src/assets/profile/profile.jpg'
import BankingCard from "../BankingCard/BankingCard";
import { Link } from "react-router-dom";
import { faGear, faRightFromBracket, faStar, faUser } from "@fortawesome/free-solid-svg-icons";

const ProfileCard = ({ data, className }) => {
  return (
    <Card className={`${style.card} ${className} border-0 px-3 py-4`}>
      <Card.Img
        className={`${style.userPhoto} mx-auto img-fluid rounded-circle border-blue`}
        variant="top"
        src={photo}
      />
      <Button className={`${style.btnSelectPhoto} mx-auto btn bg-transparent mt-3 text-blue border-blue fw-semibold`}>
        Select Photo
      </Button>
      <Card.Body>
        <Card.Title className={'fw-semibold text-center'}>Muhamad Ilham Darmawan</Card.Title>
        <Card.Subtitle className="mb-2 text-muted mt-2 text-center">Jakarta, Indonesia</Card.Subtitle>
        <div className="row mt-4">
          <div className="col-12 px-0 d-flex justify-content-between">
            <span className="fw-semibold d-inline-block">Cards</span>
            <span className="fw-semibold text-blue d-block">+ Add</span>
          </div>
          <div className="col-12 d-flex flex-column gap-2">
            <BankingCard className={'mt-2'}/>
          </div>
          <div className="col-12 d-flex flex-column mt-4 ">
            <Link to={'#'} className={`text-decoration-none text-start text-blue`}>
              <span className="text-blue fw-semibold gap-5 d-flex align-items-center">
                <FontAwesomeIcon icon={faUser}/> Profile
              </span>
            </Link>
            <Link to={'#'} className={`text-decoration-none mt-4 text-start`}>
              <span className="fw-semibold gap-5 d-flex align-items-center text-dark">
                <FontAwesomeIcon icon={faStar} className="text-secondary"/>My Review
              </span>
            </Link>
            <Link to={'#'} className={`text-decoration-none mt-4 text-start`}>
              <span className="fw-semibold gap-5 d-flex align-items-center text-dark">
                <FontAwesomeIcon icon={faGear} className="text-secondary"/>Setting
              </span>
            </Link>
            <Link to={'#'} className={`text-decoration-none mt-4 text-start`}>
              <span className="fw-semibold gap-5 d-flex align-items-center text-danger">
                <FontAwesomeIcon icon={faRightFromBracket}/>Logout
              </span>
            </Link>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
