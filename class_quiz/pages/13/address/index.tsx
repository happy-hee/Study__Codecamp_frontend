import DaumPostcodeEmbed, { Address } from "react-daum-postcode";

export default function AddressPage(props: any) {
  // 1. react-daum-postcode 라이브러리 사용 (국내 주소정보를 검색할 수 있는 인기있는 라이브러리)
  // 2. 빈 화면에 주소검색화면이 나타나도록 만들어 주세요.
  // 3. 주소 검색 후, 최종적으로 주소를 선택하면 주소검색화면이 자동으로 사라지도록 만들어 주세요.

  const handleComplete = (data: Address): void => {
    console.log(data);
  };

  return (
    <>
      <DaumPostcodeEmbed onComplete={handleComplete} autoClose={true} {...props} />;
    </>
  );
}
