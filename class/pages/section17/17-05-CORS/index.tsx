/**
 * [STUDY MEMO]
 *
 * SOP (Same Origin Policy)
 *   데이터를 출발지가 같은 곳에서만 받아 올 수 있게 하자는 정책
 *   => 예시) 네이버(브라우저) <-> 네이버(백엔드)   같은 네이버에서만 데이터를 주고 받을 수 있게 함
 *
 * CORS(Cross Origin Resources Sharing)
 *   데이터를 쉐어링(나눠주다) 할 수 있게 하자는 정책
 *   => 예시) 네이버(브라우저) <-> 다음(백엔드)
 *
 * CORS 과정
 *   허용일 경우 [브라우저 <-> 백엔드]
 *   1) [네이버 -> 다음] Preflight(request) - 네이버가 다음에게 CORS 요청
 *   2) [네이버 <- 다음] CORS: O(True) / method: POST, GET - 허용 / 사용 가능한 메서드: POST, GET으로 응답
 *   3) [네이버 -> 다음] createBoard 같은 API 요청을 보냄
 *   4) [네이버 <- 다음] 데이터를 보내줌
 *
 *   거절일 경우 [브라우더 <-> 백엔드]
 *   1) [네이버 -> 다음] Preflight(request) - 네이버가 다음에게 CORS 요청
 *   2) [네이버 <- 다음] CORS: X(false)
 *   3) [네이버 -> 다음] 다음에게 요청을 보내기 전 브라우저가 막으면서 Error 메세지를 보여줌
 *
 *   오픈 API인데 CORS가 false로 되어있는 경우 : 백엔드 -> 백엔드로 요청
 *   1) [네이버(브라우저) -> 네이버(백엔드)] - 다음(백엔드)에 대신 요청해달라 요청
 *   (이때 백엔드를 대리인 서버 라는 의미로 proxy 서버라고 함)
 *   2) [네이버(백엔드) -> 다음(백엔드)] - axios 를 통해 요청하고 데이터를 response로 받아옴
 */
