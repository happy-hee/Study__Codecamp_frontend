import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBanner() {
  const Wrapper = styled.div`
    height: 400px;
  `;

  const BannerSlider = styled(Slider)`
    height: 400px;
  `;

  const BannerImage = styled.img`
    height: 400px;
    margin: 0 auto;
  `;

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: false,
  };

  return (
    <Wrapper>
      <BannerSlider {...settings}>
        <div>
          <BannerImage src="/images/banner/banner_4.png" />
        </div>
        <div>
          <BannerImage src="/images/banner/banner_1.png" />
        </div>
        <div>
          <BannerImage src="/images/banner/banner_2.png" />
        </div>
        <div>
          <BannerImage src="/images/banner/banner_3.png" />
        </div>
      </BannerSlider>
    </Wrapper>
  );
}
