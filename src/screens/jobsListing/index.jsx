import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoadingSpinner from "../../common/Loading/LoadingSpinner";
import { Btn, Heading, StyledCard } from "../liveClasses/index.style";
import { Col, Row } from "antd";
import { getAlljobsList } from "../../redux/jobsListingSlice";

const Index = () => {
  const dispatch = useDispatch();
  const [showMessage, setShowMessage] = useState(false);
  const [loading, setLoading] = useState(true);
  const { alljobsList } = useSelector((state) => state?.jobsListing);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getAlljobsList());
        setLoading(false);
      } catch (error) {
        // Handle error fetching data
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowMessage(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Heading>
      <div className="row">
        <h2 className="heading">Jobs</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col title">
            <h2 className="f-l-class">Available Jobs</h2>
            <p className="len-class">{alljobsList.length} jobs found</p>
          </div>
        </div>
      </div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div>
          {alljobsList.length > 0 ? (
            alljobsList.map((data, i) => (
              <StyledCard
                key={i}
                className="mt-1 mb-1 pt-1 pb-1"
                hoverable
                style={{ width: "100%" }}
              >
                <Row gutter={16}>
                  <div>
                    <p>{data.companyName}</p>
                    <h3>{data.jobTitle}</h3>
                    <p>{data.jobDescription}</p>
                    <Row style={{ alignItems: "center" }}>
                      <Col>
                        <strong>{data.jobLocation}</strong>
                      </Col>
                      <Col>
                        <strong>{data.jobLocation}</strong>
                      </Col><Col>
                        <strong>{data.jobLocation}</strong>
                      </Col>
                      <Col>
                        <Btn onClick={console.log("click")}>Button</Btn>
                      </Col>
                    </Row>
                  </div>
                </Row>
              </StyledCard>
            ))
          ) : (
            <div className="mt-3 mb-3 text-center">
              {showMessage && <p>No classes starting soon</p>}
            </div>
          )}
        </div>
      )}
    </Heading>
  );
};

export default Index;
