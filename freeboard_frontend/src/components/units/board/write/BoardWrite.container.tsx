import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useRef, useState } from "react";
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./BoardWrite.queries";
import BoardWriteUI from "./BoardWrite.presenter";
import { IBoardWriteProps } from "./BoardWrite.types";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IMutationUploadFileArgs,
  IUpdateBoardInput,
} from "../../../../commons/types/generated/types";
import { Modal } from "antd";
import { Address } from "react-daum-postcode";
import { checkValidationFile } from "../../../../commons/libraries/validationFile";

export default function BoardNew(props: IBoardWriteProps) {
  const router = useRouter();

  // 데이터 State
  const [writer, setWriter] = useState(""); // 이름
  const [password, setPassword] = useState(""); // 비밀번호
  const [title, setTitle] = useState(""); // 제목
  const [contents, setContents] = useState(""); // 내용
  const [youtubeUrl, setYoutubeUrl] = useState(""); // 유튜브 링크
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState(""); // 주소1
  const [addressDetail, setAddressDetail] = useState(""); // 주소2
  const [zipcode, setZipcode] = useState(""); // 우편번호
  const [createBoard] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(CREATE_BOARD); // 게시글 등록 Mutation
  const [updateBoard] = useMutation<Pick<IMutation, "updateBoard">, IMutationUpdateBoardArgs>(UPDATE_BOARD);
  const [imageUrl, setImageUrl] = useState<string[]>([]); // 이미지
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation<Pick<IMutation, "uploadFile">, IMutationUploadFileArgs>(UPLOAD_FILE);

  // 에러메세지
  const [errorWriter, setErrorWriter] = useState(""); // 이름
  const [errorPassword, setErrorPassword] = useState(""); // 비밀번호
  const [errorTitle, setErrorTitle] = useState(""); // 제목
  const [errorContents, setErrorContents] = useState(""); // 내용
  const [isActive, setIsActive] = useState(false);

  // 데이터 저장
  function onChangeWriter(event: ChangeEvent<HTMLInputElement>) {
    // 이름
    setWriter(event.target.value);
    if (event.target.value && password && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    if (event.target.value !== "") {
      setErrorWriter("");
    }
  }
  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    // 비밀번호
    setPassword(event.target.value);
    if (event.target.value && writer && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    if (event.target.value !== "") {
      setErrorPassword("");
    }
  }
  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    // 제목
    setTitle(event.target.value);
    if (event.target.value && writer && password && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    if (event.target.value !== "") {
      setErrorTitle("");
    }
  }
  function onChangeContents(event: ChangeEvent<HTMLTextAreaElement>) {
    // 내용
    setContents(event.target.value);
    if (event.target.value && writer && password && title) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    if (event.target.value !== "") {
      setErrorContents("");
    }
  }

  function onChangeYoutubeUrl(event: ChangeEvent<HTMLInputElement>) {
    // 유튜브
    setYoutubeUrl(event.target.value);
  }

  function onChangeAddressDetail(event: ChangeEvent<HTMLInputElement>) {
    // 상세 주소
    setAddressDetail(event.target.value);
  }

  // 주소 검색
  const onCompleteAddressSearch = (data: Address): void => {
    setAddress(data.address); // 주소1
    setZipcode(data.zonecode); // 우편번호
    setIsOpen((prev) => !prev);
  };

  // 사진 첨부
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    const file = event.target.files?.[0];

    const isValid = checkValidationFile(file);
    if (!isValid) return;

    const result = await uploadFile({
      variables: { file },
    });

    const imageList = result.data?.uploadFile.url ?? "";
    setImageUrl((prev) => [...prev, imageList]);
  };

  const onClickAddressModal = (): void => {
    setIsOpen((prev) => !prev);
  };

  const onClickUploadImage = (): void => {
    fileRef.current?.click();
  };

  // 게시글 등록
  const onClickSubmit = async (): Promise<void> => {
    // 데이터 빈칸 검증
    if (!writer) {
      setErrorWriter("이름을 입력해주세요.");
    }
    if (!password) {
      setErrorPassword("비밀번호를 입력해주세요.");
    }
    if (!title) {
      setErrorTitle("제목을 입력해주세요.");
    }
    if (!contents) {
      setErrorContents("내용을 입력해주세요.");
    }

    if (writer && password && title && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              // shorthand-property
              // 객체에서 key 와 value 의 이름이 같다면 생략 가능
              writer,
              password,
              title,
              contents,
              youtubeUrl,
              images: imageUrl,
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
            },
          },
        });

        Modal.success({
          content: "등록되었습니다.",
        });
        // 상세페이지로 이동
        if (result.data?.createBoard._id === undefined) {
          alert("요청에 문제가 있습니다.");
          return;
        }
        void router.push(`/boards/${result.data?.createBoard._id}`);
      } catch (error) {
        if (typeof error === "string") {
          Modal.error({
            content: error.toUpperCase(),
          });
        } else if (error instanceof Error) {
          Modal.error({
            content: error.message,
          });
        }
      }
    }
  };

  // 게시글 수정
  const onClickUpdate = async (): Promise<void> => {
    // if~else 문으로 작성하게 되면 코드가 너무 길어지므로
    // return을 사용해서 자신을 감싼 함수(onClickUpdate)를 종료해준다.

    // return 의 기능 : 종료하고 값을 반환해줘
    // 1. 함수를 종료
    // 2. 값을 반환 (return 뒤에 작성한 값)
    // => 아래쪽이 실행이 안되도록 해준다.

    // 검증
    if (!title && !contents && !youtubeUrl && !address && !addressDetail && !zipcode) {
      Modal.warning({
        content: "수정한 내용이 없습니다.",
      });
      return;
    }

    if (!password) {
      Modal.warning({
        content: "비밀번호를 입력해주세요.",
      });
      return;
    }

    const updateBoardInput: IUpdateBoardInput = {};

    // 각 값이 있을 경우만 게시글 수정
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;
    if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;
    if (zipcode !== "" || address !== "" || addressDetail !== "") {
      updateBoardInput.boardAddress = {};
      if (zipcode !== "") updateBoardInput.boardAddress.zipcode = zipcode;
      if (address !== "") updateBoardInput.boardAddress.address = address;
      if (addressDetail !== "") updateBoardInput.boardAddress.addressDetail = addressDetail;
    }

    try {
      // boardId가 string이 아닐 경우 대비 얼럿
      if (typeof router.query.boardId !== "string") {
        Modal.error({ content: "시스템에 문제가 있습니다." });
        return;
      }

      // 객체 변수에 담기
      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password,
          updateBoardInput,
        },
      });

      // 상세페이지로 이동
      if (result.data?.updateBoard._id === undefined) {
        alert("요청에 문제가 있습니다.");
        return;
      }
      void router.push(`/boards/${result.data?.updateBoard._id}`);
    } catch (error) {
      // instance란: 원본으로부터 만들어진 것 (error는 Error의 instance 이다)
      if (error instanceof Error) {
        Modal.error({ content: error.message });
      }
    }
  };

  return (
    <BoardWriteUI
      onChangeWriter={onChangeWriter}
      errorWriter={errorWriter}
      onChangePassword={onChangePassword}
      errorPassword={errorPassword}
      onChangeTitle={onChangeTitle}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      errorTitle={errorTitle}
      onChangeContents={onChangeContents}
      errorContents={errorContents}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      // BoardNewPage 에서는 props로 data를 넘겨주고 있지 않음.
      // 그러므로 등록 페이지의 경우 data가 undefined가 된다.
      onChangeAddressDetail={onChangeAddressDetail}
      onClickAddressModal={onClickAddressModal}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onChangeFile={onChangeFile}
      data={props.data}
      imageUrl={imageUrl}
      isActive={isActive}
      isEdit={props.isEdit}
      address={address}
      zipcode={zipcode}
      isOpen={isOpen}
      onClickUploadImage={onClickUploadImage}
      fileRef={fileRef}
    />
  );
}
