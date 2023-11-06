export default function YoutubeLibraryPage() {
  // 1. 원하는 유튜브 영상을 화면에 나오도록 만들어 주세요.
  // 2. 가로 800px, 세로 600px로 사이즈를 조정해 주세요.
  // 3. 자동 음소거, 자동재생 기능을 적용해 주세요. => &autoplay=1 &mute=1

  return (
    <>
      <div>
        <iframe id="ytplayer" width="800" height="600" src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&mute=1&origin=http://example.com"></iframe>
      </div>
    </>
  );
}
