import styled from "styled-components";

export const Wrapper = styled("div")`
  background-color: #ffffff;
  height: 100%;
`;
export const ImageArea = styled("div")`
  width: 70%;
  position: relative;
  margin: 0 2rem 0;
  padding: 0 2em 2em;
  img {
    width: 100%;
    max-width: 100%;
  }
  .image {
    z-index: 2;
    position: relative;
  }
  .shadowImg {
    width: 80%;
    position: absolute;
    top: 4em;
    left: 0;
    right: 4em;
    bottom: 0;
    opacity: 0.2;
    z-index: 1;
  }
  @media (max-width: 992px) {
    & {
      width: 100%;
      margin: 0 1rem 2em;
      padding: 0 2em 1em;
      .shadowImg {
        width: 80%;
        position: absolute;
        top: 2em;
        left: 0;
        right: 4em;
        bottom: 0;
        opacity: 0.2;
        z-index: 1;
      }
    }
  }
`;

export const DiscoverSection = styled("div")`
  padding: 1em 3em;
  .tabsBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #3367d610;
      width: 109.5px;
      height: 109px;
      border-radius: 50%;
      margin: 0 0.7em;
    }
  }
  p {
    max-width: 880px;
    margin: 0rem auto 1rem;
    text-align: center;
    color: #31313160;
  }
  @media (max-width: 992px) {
    & {
      height: 100%;
      padding: 1em;
      .tabsBtn {
        display: flex;
        justify-content: center;
        align-items: center;
        a {
          display: flex;
          justify-content: center;
          align-items: center;
          background: #3367d610;
          width: 86.5px;
          height: 86px;
          border-radius: 50%;
          margin: 0 0.7em;
        }
      }
    }
  }
`;

export const SectionHeading = styled("h1")`
  max-width: 890px;
  font-weight: 300;
  font-size: 2.9em;
  line-height: 58px;
  text-align: center;
  margin: 1em auto 0.3em;
  color: #313131;
  strong {
    font-weight: 700;
  }
  @media (max-width: 992px) {
    & {
      font-size: 1.5em;
      line-height: 38px;
    }
  }
`;
export const SpecialistCards = styled("div")`
  max-width: 1000px;
  margin: auto;
  .cardItems {
    display: flex;
    justify-content: space-between;
    margin: 3em 0 6em;
    &:nth-child(even) {
      flex-direction: row-reverse;
    }
    p {
      text-align: left;
      margin: 1em 0;
      font-weight: 400;
      font-size: 1em;
      color: #31313190 !important;
    }
    .cardLabel {
      display: flex;
      justify-content: strat;
      align-items: center;
      margin-bottom: 1em;
      img {
        width: 20px;
        margin-right: 0.6em;
      }
      span {
        color: #010101;
        font-weight: 600;
      }
    }
    button {
      margin-top: 1rem;
      width: 136px;
      height: 50px;
      background: #ffffff;
      border-radius: 0;
      padding: 0.2em 1em;
      border: 1px solid #d39331;
      span {
        color: #d39331;
        font-size: 1.2em;
      }
    }
    .lists {
      width: 100%;
      .tags {
        display: flex;
        justify-content: strat;
        align-items: center;
        column-count: 2;
        /* flex-direction: column; */
        flex-wrap: wrap;
      }
      .tagsItem {
        width: 50%;
        margin-bottom: 1em;
        p {
          font-weight: 400;
          color: #010101 !important;
          font-size: 1.2em;
          margin: 0em 0 0.3em;
        }
        h5 {
          color: #3f6fd8;
          font-size: 1.5em;
        }
      }
    }
  }
  @media (max-width: 992px) {
    & {
      .cardItems {
        display: flex;
        margin: 2em 0 3em;
        justify-content: space-between;
        align-items: center;
        text-align: left;
        flex-direction: column;
        &:nth-child(even) {
          flex-direction: column;
        }
        h1 {
          text-align: left;
          margin-top: 0em;
          font-size: 1.5em;
        }
        p {
          text-align: left;
          font-size: 0.9em;
        }
        .lists {
          width: 100%;
          .tags {
            display: flex;
            justify-content: strat;
            align-items: center;
            column-count: 2;
            /* flex-direction: column; */
            flex-wrap: wrap;
          }
          .tagsItem {
            width: 50%;
            text-align: left;
            margin-bottom: 1em;
            p {
              color: #010101;
              font-size: 1em;
              margin: 0em 0 0.3em;
            }
            h5 {
              color: #3f6fd8;
              font-size: 1.1em;
            }
          }
          .cardLabel {
            margin-bottom: 0.3em;
          }
        }
        button {
          margin: auto;
          margin-top: 1rem;
          width: 110px;
          height: 40px;
          background: #ffffff;
          border-radius: 0;
          padding: 0.2em 1em;
          border: 1px solid #d39331;
          span {
            color: #d39331;
            font-size: 1.1em;
          }
        }
      }
    }
  }
`;
