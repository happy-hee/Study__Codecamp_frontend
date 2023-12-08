import * as S from "./BoardDetail.styles";
import { IBoardDetailUIProps } from "./BoardDetail.types";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <S.Wrapper>
      <S.CardWrapper>
        <S.Header>
          <S.ProfileWrapper>
            <S.ProfileIcon src="/images/profile_icon.png" />
            <S.Info>
              <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
              <S.CreatedAt>{props.data?.fetchBoard?.createdAt}</S.CreatedAt>
            </S.Info>
            <S.InfoEtcWrapper>
              <S.InfoEtc>
                <S.LinkIcon />
                <S.AddressTooltip
                  placement="topRight"
                  title={`${props.data?.fetchBoard?.boardAddress?.address ?? ""} ${
                    props.data?.fetchBoard?.boardAddress?.addressDetail ?? ""
                  }`}
                >
                  <S.AddressIcon />
                </S.AddressTooltip>
              </S.InfoEtc>
            </S.InfoEtcWrapper>
          </S.ProfileWrapper>
        </S.Header>
        <S.Body>
          <S.Title>{props.data?.fetchBoard?.title}</S.Title>
          <S.Contents>
            <img
              src={
                props.data?.fetchBoard?.images
                  ? `https://storage.googleapis.com/${props.data?.fetchBoard?.images[0]}`
                  : ""
              }
            />

            {/* props.data?.f {etchBoard?.images} */}
            {props.data?.fetchBoard?.contents}
          </S.Contents>
          {props.data?.fetchBoard.youtubeUrl !== "" && ( // 유튜브 영상이 있을 경우만 표시
            <S.Youtube>
              <S.VideoPlayer
                url={`${props.data?.fetchBoard?.youtubeUrl ?? ""}`}
                width={486}
                height={240}
                style={{ display: "inline-block" }}
              ></S.VideoPlayer>
            </S.Youtube>
          )}
          <S.LikeWrapper>
            <S.Like onClick={props.onClickLike}>
              <S.LikeIcon />
              <S.LikeCount>{props.likeCount}</S.LikeCount>
            </S.Like>
            <S.Dislike onClick={props.onClickDislike}>
              <S.DislikeIcon />
              <S.DislikeCount>{props.dislikeCount}</S.DislikeCount>
            </S.Dislike>
          </S.LikeWrapper>
        </S.Body>
      </S.CardWrapper>
      <S.BottomWrapper>
        <S.Button>목록으로</S.Button>
        <S.Button onClick={props.onClickMoveEdit}>수정하기</S.Button>
        <S.Button>삭제하기</S.Button>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
