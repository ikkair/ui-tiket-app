import React from "react";
import Card from "react-bootstrap/Card";
import style from "./SectionCard.module.css";

const SectionCard = ({ title, children, header, className }) => {
  return (
    <Card className={`${className} border-0 mb-3 main-border overflow-hidden`}>
      {header && (
        <Card.Header className={`${style.cardHeader} fw-semibold text-medium text-blue border-0 pb-0 px-4 pt-4`}>
          {title}
        </Card.Header>
      )}
      <Card.Body className={`px-4 py-0 pb-3`}>{children}</Card.Body>
    </Card>
  );
};

export default SectionCard;
