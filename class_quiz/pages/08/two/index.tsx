import { useRouter } from "next/router";

export default function TwoPage() {
  const router = useRouter();
  const changeBodyString = router.asPath.slice(4);

  return <div>{changeBodyString} 영역 입니다.</div>;
}
