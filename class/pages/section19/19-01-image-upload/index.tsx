import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { IMutation, IMutationUploadFileArgs } from "../../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const [imageUrl, setImageUrl] = useState("");

  const [uploadFile] = useMutation<Pick<IMutation, "uploadFile">, IMutationUploadFileArgs>(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    const file = event.target.files?.[0]; // 배열로 들어오는 이유: <input tyle="file" multiple /> 일 때, 여러개 드래그 해서 파일 여러개 선택)

    const result = await uploadFile({
      variables: { file },
    });

    console.log(result.data?.uploadFile.url);

    setImageUrl(result.data?.uploadFile.url ?? "");

    console.log(imageUrl);
  };

  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <img src={`https://storage.googleapis.com/${imageUrl}`} alt="" />
    </>
  );
}
