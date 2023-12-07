import { gql, useMutation } from "@apollo/client";
import { useRef, useState } from "react";
import type { ChangeEvent } from "react";
import { IMutation, IMutationUploadFileArgs } from "../../../src/commons/types/generated/types";

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
      {/* ref 속성으로 변수(fileRef)와 태그(input)를 연결 
           fileRef = <input type="file" /> 이 상태가 된 것
      */}
      <input style={{ display: "none" }} type="file" onChange={onChangeFile} ref={fileRef} />
      <img src={`https://storage.googleapis.com/${imageUrl}`} alt="" />
    </>
  );
}
