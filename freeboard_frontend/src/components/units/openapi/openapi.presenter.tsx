import { IPropsOpenapiUIProps } from "./openapi.types";
import * as S from "./openapi.styles";

export default function OpenapiUI(props: IPropsOpenapiUIProps) {
  return (
    <>
      <S.Wrapper>
        {props.bgColors.map((item: string, index: number) => (
          <>
            <S.Box key={index} style={{ backgroundColor: item }}>
              <S.Text>랜덤 색상</S.Text>
            </S.Box>
          </>
        ))}
      </S.Wrapper>
    </>
  );
}
