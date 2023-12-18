import { Button } from "antd";
import styled from "styled-components";

export const ButtonContainer = styled(Button)`
  background: #d39331 !important;
  border: 1px solid #d39331 !important;
  width: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  border-radius: 0;
  .loader {
    font-size: 2rem !important;
  }

  &:disabled {
    background: #d39331;
    border: 1px solid #d39331;
    width: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    border-radius: 0;
    opacity: 0.5;

    &:hover {
      background: #d39331;
      border: 1px solid #d39331;
      width: 180px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;
      border-radius: 0;
      opacity: 0.5;
    }
  }

  span {
    font-size: 1.3em;
    color: #ffffff;
  }
  &:focus,
  &:hover {
    background: #d39331;
    border-radius: 0;
    border: 1px solid #d39331;
    opacity: 0.9;
    span {
      color: #ffffff;
    }
  }
  @media (max-width: 992px) {
    & {
      width: 150px;
      height: 50px;
      padding: 0px 0px;
      span {
        // font-size: 1em !important;
      }
    }
  }
  @media (max-width: 768px) {
    & {
      width: 110px;
      height: 40px;
      span {
        font-size: 1em !important;
      }
    }
  }
`;

export const EnrolledButton = styled(Button)`
  background: #eaeaea !important;
  border: 1px solid #eaeaea !important;
  min-width: 180px;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  border-radius: 0;
  .loader {
    font-size: 2rem !important;
  }

  /* &:disabled {
    background: #d39331;
    border: 1px solid #d39331;
    width: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    border-radius: 0;
    opacity: 0.5;

    &:hover {
      background: #d39331;
      border: 1px solid #d39331;
      width: 180px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;
      border-radius: 0;
      opacity: 0.5;
    }
  } */

  span {
    font-size: 1.3em;
    color: #808080;
    font-weight: 600;
  }
  &:focus,
  &:hover {
    background: #d39331;
    border-radius: 0;
    border: 1px solid #d39331;
    opacity: 0.9;
    span {
      color: #808080;
      font-weight: 600;
    }
  }
  @media (max-width: 992px) {
    & {
      width: 150px;
      height: 50px;
      padding: 0px 0px;
      span {
        // font-size: 1em !important;
      }
    }
  }
  @media (max-width: 768px) {
    & {
      width: 110px;
      height: 40px;
      span {
        font-size: 1em !important;
      }
    }
  }
`;
