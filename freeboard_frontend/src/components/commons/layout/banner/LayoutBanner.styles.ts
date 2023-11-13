import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Wrapper = styled.div`
  height: 400px;
`;

export const BannerSlider = styled(Slider)`
  height: 400px;
`;

export const BannerImage = styled.img`
  height: 400px;
  margin: 0 auto;
`;