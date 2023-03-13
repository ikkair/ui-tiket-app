import React, { useEffect, useState } from "react";
import style from "./ProfileCard.module.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import photo from '../../../src/assets/profile/profile.jpg'
import BankingCard from "../BankingCard/BankingCard";
import { Link } from "react-router-dom";
import { faGear, faRightFromBracket, faStar, faUser } from "@fortawesome/free-solid-svg-icons";

const ProfileCard = ({ data, className, onchange}) => {

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  function trigerInputFile(e) {
    document.querySelector(`#photo-file`).click()
  }

  const selectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
    onchange(e);
  };

  useEffect(() => {
    if (!selectedFile) {
      setSelectedFile(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  return (
    <Card className={`${style.card} ${className} shadow-none border-0 px-3 py-4`}>
      <Card.Img
        className={`${style.userPhoto} mx-auto img-fluid rounded-circle border-photo-blue`}
        variant="top"
        src={preview ? preview : photo}
        width={137}
        height={137}
      />
      <input type="file" className="d-none" id="photo-file" onChange={selectFile}/>
      <Button 
        className={`${style.btnSelectPhoto} mx-auto btn bg-transparent mt-3 text-blue border-blue fw-semibold`}
        onClick={trigerInputFile}  
      >
        Select Photo
      </Button>
      <Card.Body className="d-flex flex-column">
        <Card.Title className={'fw-semibold text-center'}>{data?.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted mt-2 text-center">{data?.city}, {data?.address}</Card.Subtitle>
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
