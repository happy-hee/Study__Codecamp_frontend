/**
 * 파일 검증
 * @param file 파일
 * @returns boolean
 */
export const checkValidationFile = (file?: File) => {
  // 각각 if 문에 boolean 값으로 return 문을 반환

  // 파일 검증
  // 파일이 첨부되지 않은 경우
  if (typeof file === "undefined") {
    alert("파일이 없습니다.");
    return false;
  }

  // 파일 용량 제한
  // 사이즈에 1024를 곱하는 이유 : 1mb * 1024 = 1kb / 1kb * 1024 = 1mb / imb * 1024 = 1gb 이기때문에 5mb 를 저렇게 표현
  if (file.size > 5 * 1024 * 1024) {
    alert("파일 용량이 너무 큽니다. (제한: 5MB");
    return false;
  }

  // 파일 확장자 제한 (선택은 가능하지만 경고 알림)
  if (!file.type.includes("jpeg") && !file.type.includes("png")) {
    alert("jpeg 또는 png 파일만 첨부가 가능합니다.");
    return false;
  }

  return true;
};
