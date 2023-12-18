import styled from "styled-components";

export const Wrapper = styled("div")`
  .testimonySection {
    text-align: center;
    p {
      color: #31313160;
    }
    .noTestimonial {
      padding: 4rem 2rem 2rem 2rem;
      color: #d39331;
      text-align: center;
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 2em;
        margin-top: 1em;
      }
      p {
        color: #31313160;
      }
    }
  }
`;
export const TestimonalUserCard = styled("div")`
  width: 100%;
  min-height: 330px;
  height: auto;
  max-width: 654px;
  margin: 3.5em auto 6em;
  padding: 2em 0;
  border: none;
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.1);
  h3 {
    font-weight: 700;
    font-size: 12px;
    color: var(--primary);
  }
  .userImage {
    width: 103px;
    height: 119px;
    margin: auto;
    oveflow: hidden;
    img {
      width: 100%;
    }
  }

  .noImage {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 103px;
    height: 119px;
    margin: auto;
    oveflow: hidden;
    background-color: #dee8ff;
    color: var(--primary);
    font-size: 3rem;
  }

  h1 {
    width: 100%;
    max-width: 475px;
    font-weight: 700;
    font-size: 1.5em;
    margin: auto;
    line-height: 147.9%;
  }
  p {
    margin-top: 2em;
    margin-bottom: 0.5em;
  }
  h6 {
    margin-bottom: 0.7em;
  }

  @media (max-width: 768px) {
    & {
      height: 230px;
      max-width: 654px;
      margin: 2.5em auto 6em;
      padding: 2em 0;
      border: none;
      box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.1);
      h3 {
        font-weight: 700;
        font-size: 12px;
        color: var(--primary);
      }
      .userImage {
        width: 51.97px;
        height: 60.03px;
      }
      .noImage {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 51.97px;
        height: 60.03px;
        margin: auto;
        oveflow: hidden;
        background-color: #dee8ff;
        color: var(--primary);
        font-size: 1.5rem;
      }
      h1 {
        width: 300px;
        font-size: 1em !important;
        line-height: 1.5;
        margin-top: 0em !important;
      }
      p {
        margin: 0.5em 0 0.3em;
        font-size: 0.8em !important;
      }
      h6 {
        font-size: 0.8em !important;
      }
    }
  }
`;
