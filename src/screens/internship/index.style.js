import styled from "styled-components";

const primaryColor = "#313131";
const secondaryColor = "#3f6fd8";
const mobileBreakpoint = "768px";

export const Container = styled.div`
  margin: 0 auto;
  padding: 20px;
  overflow: hidden;
  position: relative;
  letter-spacing: 0em;
  font-family: "Source Sans Pro";
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  margin-top: 2.2rem;
  margin-bottom: 6rem;
  width: 80%;
  display: flex;
  flex-direction: column;

  @media (max-width: ${mobileBreakpoint}) {
    width: 100%;
  }

  .heading {
    text-align: center;
    font-size: 46px;
    font-weight: bold;
    margin-bottom: 0.3em;
    line-height: 58px;
    color: ${primaryColor};
  }

  .img {
    width: 100%;
    max-width: 400px;
    height: auto;
    align-self: center;
    margin-bottom: 1em;
  }

  .wd {
    max-width: 600px;
  }

  .description,
  .ul_description {
    justify-content: center;
    width: 90%;
    font-size: 16px;
    line-height: 147.9%;
    padding: 20px 0;
    opacity: 0.7;
    color: ${primaryColor};
    display: inline;
    margin: auto;
  }

  .ul_description {
    line-height: 180%;
  }

  .sub-title {
    font-size: 24px;
    text-align: left;
    font-weight: 600;
  }

  .title {
    font-size: 36px;
    font-weight: bold;
    line-height: 120%;
    padding: 10px 0;
  }

  .sub_desc {
    font-size: 18px;
  }

  .sub_text {
    font-size: 24px;
    font-weight: bold;
    color: ${secondaryColor};
  }

  .icon {
    width: 24px;
    height: 24px;
    padding-right: 5px;
  }
  .icon_trans {
    width: 64px;
    height: 64px;
    margin-bottom: 20px;
  }
  .icon_curve {
    width: 38px;
    height: 38px;
    margin-bottom: 20px;
  }
  .process {
    margin: auto;
  }

  @media (max-width: ${mobileBreakpoint}) {
    width: 99%;

    .heading {
      font-size: 32px;
      line-height: 42px;
      margin-bottom: 1em;
    }

    .img {
      width: auto;
      max-width: 100%;
      margin: auto;
    }

    .description,
    .ul_description {
      font-size: 14px;
      line-height: 24px;
    }

    .sub-title {
      font-size: 20px;
    }

    .title {
      font-size: 24px;
    }

    .sub_desc {
      font-size: 13px;
    }

    .mb-sub_desc {
      font-size: 12px;
      display: inline;
    }
    .icon_trans {
      width: 38px;
      height: 38px;
      margin-bottom: 20px;
    }
    .icon_curve {
      width: 18px;
      height: 18px;
      margin-bottom: 20px;
      margin-top: 20px;
    }
    .sub_text {
      font-size: 15px;
    }
  }
`;
