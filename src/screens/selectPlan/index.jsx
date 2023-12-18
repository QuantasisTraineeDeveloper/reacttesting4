import { Col, Row, Switch } from "antd";
import React from "react";
import { Container } from "react-bootstrap";
import { selectplan } from "../../assets/data/allData";
import ListCard from "../../components/cards/listCard";
import MobPlanSelect from "../../components/mobSelect";
import PlanDataTable from "../../components/table/planList";
import { SectionHeading } from "../home/index.style";
import { Wrapper } from "./index.style";
import plans from "../../components/json/plans.json";
import { useState } from "react";

const Plans = () => {
  const [planPeriod, setPlanPeriod] = useState("monthly");
  const onChange = (checked) => {
    if (checked) {
      setPlanPeriod("annualy");
    } else {
      setPlanPeriod("monthly");
    }
  };
  return (
    <Wrapper>
      <SectionHeading>
        Select your suitable <strong>Plan</strong>
      </SectionHeading>
      <div className='text-center'>
        <p className='my-4'>
          We have several powerful plans to learn with us and get everything you
          need
        </p>
        <div className='switch'>
          <strong className={`${planPeriod === "monthly" ? "activePlan" : ""}`}>
            Monthly
          </strong>
          <Switch onChange={onChange} />
          <strong className={`${planPeriod === "annualy" ? "activePlan" : ""}`}>
            Annualy
          </strong>
        </div>
      </div>
      <div>
        <Container fluid>
          <Row align='bottom'>
            {plans[planPeriod].map((plan, i) => {
              return (
                <Col key={i} xs={{ span: 24 }} lg={{ span: 6 }}>
                  <ListCard plan={plan} planPeriod={planPeriod} />
                </Col>
              );
            })}
          </Row>
          <div className='dataArea'>
            <h2>detailed comparison</h2>
            <PlanDataTable comparision={plans.comparision} />
          </div>
          <div>
            <MobPlanSelect />
          </div>
        </Container>
      </div>
    </Wrapper>
  );
};

export default Plans;
