import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Wrapper = styled.div`
  height: 400px;
`;

export const BannerImage = styled.img`
  height: 400px;
  margin: 0 auto;
`;

export const BannerSlider = styled(Slider)`
  .slick-arrow {
    width: 1200px;
    border: 3px solid red;
    margin: 0 auto;
  }
  .slick-dots {
    bottom: 30px;
    li {
      width: auto;
      height: auto;
      margin: 0 8px;
      &.slick-active {
        button {
          background-color: #fff;
          opacity: 1;
          &:before {
            display: none;
          }
        }
      }
      button {
        width: 8px;
        height: 8px;
        border: 1px solid #fff;
        background-color: transparent;
        border-radius: 50%;
        opacity: 1;
        &:before {
          display: none;
        }
      }
    }
  }
`;
