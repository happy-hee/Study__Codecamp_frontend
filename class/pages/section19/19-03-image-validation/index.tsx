import { gql, useMutation } from "@apollo/client";
import { useRef, useState } from "react";
import type { ChangeEvent } from "react";
import { IMutation, IMutationUploadFileArgs } from "../../../src/commons/types/generated/types";
import { checkValidationFile } from "../../../src/commons/library/validationFile";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const [imageUrl, setImageUrl] = useState(""); // useState : 값을 저장
  const fileRef = useRef<HTMLInputElement>(null); // useRef : 태그를 저장
  const [uploadFile] = useMutation<Pick<IMutation, "uploadFile">, IMutationUploadFileArgs>(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    const file = event.target.files?.[0]; // 배열로 들어오는 이유: <input tyle="file" multiple /> 일 때, 여러개 드래그 해서 파일 여러개 선택)

    // checkValidationFile -> 많은 곳에서 쓰이니 라이브러리를 따로 만듦
    const isValid = checkValidationFile(file);
    // 검증한 boolean 값이 false 라면 return
    if (!isValid) return;

    const result = await uploadFile({
      variables: { file },
    });
    // console.log(result.data?.uploadFile.url);
    setImageUrl(result.data?.uploadFile.url ?? "");
    // console.log(imageUrl);
  };

  const onClickImage = (): void => {
    // document.getElementById("파일태그ID")?.click();

    fileRef.current?.click();
  };

  return (
    <>
      <div style={{ width: "100px", height: "100px", backgroundColor: "lightgray" }} onClick={onClickImage}>
        이미지선택
      </div>
      {/**
       * [STUDY MEMO]
       * 1) ref 속성으로 변수(fileRef)와 태그(input)를 연결
       * fileRef = <input type="file" /> 이 상태가 된 것
       *
       * 2) accept 속성으로 파일 확장자 제한
       * accept에서 지정한 파일 확장자 외에는 아예 파일도 안 보이고 선택이 안 되도록 함.
       */}
      <input style={{ display: "none" }} type="file" onChange={onChangeFile} ref={fileRef} accept="image/jpeg, image/png" />
      <img src={`https://storage.googleapis.com/${imageUrl}`} alt="" />
    </>
  );
}
