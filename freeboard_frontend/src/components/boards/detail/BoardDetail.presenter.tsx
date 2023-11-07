import { Tooltip } from "antd";
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
                <Tooltip placement="topRight" title={`${props.data?.fetchBoard?.boardAddress?.address} ${props.data?.fetchBoard?.boardAddress?.addressDetail ?? ""}`}>
                  <S.AddressIcon />
                </Tooltip>
              </S.InfoEtc>
            </S.InfoEtcWrapper>
          </S.ProfileWrapper>
        </S.Header>
        <S.Body>
          <S.Title>{props.data?.fetchBoard?.title}</S.Title>
          <S.Contents>
            {props.data?.fetchBoard?.contents}
            <S.Youtube>
              <S.Iframe id="ytplayer" width="486" height="240" src={`${props.data?.fetchBoard?.youtubeUrl ?? ""}`}></S.Iframe>
            </S.Youtube>
          </S.Contents>
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
