import * as S from "./LayoutBanner.styles";

export default function LayoutBannerUI() {
  // Slider 세팅
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <S.Wrapper>
      <S.BannerSlider {...settings}>
        <div>
          <S.BannerImage src="/images/banner/banner_1.png" />
        </div>
        <div>
          <S.BannerImage src="/images/banner/banner_2.png" />
        </div>
        <div>
          <S.BannerImage src="/images/banner/banner_3.png" />
        </div>
        <div>
          <S.BannerImage src="/images/banner/banner_4.png" />
        </div>
      </S.BannerSlider>
    </S.Wrapper>
  );
}
