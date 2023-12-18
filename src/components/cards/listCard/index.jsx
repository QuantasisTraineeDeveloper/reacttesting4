import React from "react";
import { CardContainer, Wrapper } from "./index.style";
import { BsCheck } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";

const ListCard = ({ plan, planPeriod }) => {
  return (
    <Wrapper>
      <CardContainer className={plan.title === "Premium" ? "active" : ""}>
        <h1>{plan.title}</h1>
        {plan.features.map(({ id, included, feature }) => (
          <p
            key={id}
            style={{
              color: `${included ? "#181059" : "rgba(24, 16, 89, 0.4)"}`,
            }}>
            <span>
              {included ? (
                <BsCheck />
              ) : (
                <IoIosClose
                  style={{
                    color: "rgba(24, 16, 89, 0.4)",
                  }}
                />
              )}
            </span>
            <div
              className='featureTitle'
              dangerouslySetInnerHTML={{ __html: feature }}
            />
          </p>
        ))}
        <div className='amount'>
          <strong>
            ${plan.price}
            <span>&nbsp;/{planPeriod}</span>
          </strong>
        </div>
        <div>
          <a href='#'>Choose</a>
        </div>
      </CardContainer>
    </Wrapper>
  );
};

export default ListCard;
