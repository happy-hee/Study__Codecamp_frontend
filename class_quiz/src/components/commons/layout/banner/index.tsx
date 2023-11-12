import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBanner() {
  const Wrapper = styled.div`
    height: 300px;
    background-color: #eabbc0;
    overflow: hidden;
  `;

  const MySlider = styled(Slider)`
    width: 300px;
    margin: 0 auto;
  `;

  const SliderImage = styled.img`
    width: 100%;
  `;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <div>
        <div>
          <MySlider {...settings}>
            <div>
              <SliderImage src="/images/image1.jpg" />
            </div>
            <div>
              <SliderImage src="/images/image2.jpg" />
            </div>
            <div>
              <SliderImage src="/images/image3.jpg" />
            </div>
          </MySlider>
        </div>
      </div>
    </Wrapper>
  );
}
