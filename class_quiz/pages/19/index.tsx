// # 소주제 : 이미지 업로드
// ## 1. 이미지 업로드

import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState, useRef, useEffect } from "react";
import { IMutation, IMutationUploadFileArgs } from "../../src/commons/types/generated/types";
import { LikeOutlined } from "@ant-design/icons";

// ## 2. 고난도) 이미지 좌측 정렬 알고리즘

// 1. 아래 버튼을 클릭하여 이미지를 넣을 수 있도록 만들어 주세요.
// ⇒ 어떤 칸을 클릭하던 상관 없이, 이미지는 좌측정렬 되어야 합니다.

// 3. file 태그를 활용해 이미지가 변경되면 uploadFile API를 사용하여 이미지를 업로드 해 주세요.
const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const [uploadFile] = useMutation<Pick<IMutation, "uploadFile">, IMutationUploadFileArgs>(UPLOAD_FILE);
  // 4. 업로드한 결과로 받은 url을 state에 저장하여 업로드된 이미지가 화면에 나타나도록 만들어 주세요.
  const [ImageUrl, setImageUrl] = useState("");
  const fileRef = useRef<HTMLInputElement>(null); // 태그 저장

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    const file = event.target.files?.[0];

    const result = await uploadFile({
      variables: { file },
    });

    setImageUrl(result.data?.uploadFile.url ?? "");
  };

  /* 6. file 태그를 숨기고, 좋아요 아이콘을 누르면 file 태그가 눌리도록 연결해 보세요.
  ⇒ 힌트) useRef를 사용해 주세요.
  힌트) 좋아요 아이콘은 ant-Design에 있습니다. */
  const onClickImage = () => {
    fileRef.current?.click();
  };

  // 2. 해당 페이지에 접속하면 자동으로 비밀번호에 커서가 깜빡이도록 만들어 주세요.
  // ⇒ 힌트) useEffect에서 useRef를 사용해야 합니다.
  const passwordRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    passwordRef.current?.focus();
  }, []);

  return (
    <>
      <div>=============================================</div>
      {/* 1. 게시물을 작성하기 위한 작성자, 비밀번호, 제목, 내용 4개의 입력창을 만들어 주세요. */}
      <div>
        작성자 : <input type="text" />
        비밀번호 : <input type="text" />
        제목 : <input type="text" />
        내용 : <input type="text" />
      </div>
      {/* 2. 이미지를 올릴 file 태그를 만들어 주세요. */}
      <div>
        {/* 6. file 태그를 숨기고, 좋아요 아이콘을 누르면 file 태그가 눌리도록 연결해 보세요. */}
        <div onClick={onClickImage}>
          <LikeOutlined style={{ color: "red", fontSize: "90px" }} />
        </div>

        <input style={{ display: "none" }} type="file" onChange={onChangeFile} ref={fileRef} />
        <img src={ImageUrl ? `https://storage.googleapis.com/${ImageUrl}` : ""} alt="" />
      </div>

      {/* 5. [저장하기] 버튼을 만들고, 해당 버튼을 클릭하면, createBoard API를 활용하여 작성자, 비밀번호, 제목, 내용, 이미지URL을 등록해 주세요. */}
      <button>저장하기</button>
      <div>=============================================</div>

      {/* 1. 비밀번호 입력창 1개를 만들어 주세요. */}
      <input type="password" ref={passwordRef} />
    </>
  );
}
