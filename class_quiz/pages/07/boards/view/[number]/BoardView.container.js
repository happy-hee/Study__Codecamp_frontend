import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardViewUI from "./BoardView.presenter";
import { FETCH_PRODUCT } from "./BoardView.queries";

export default function BoardView() {
  const router = useRouter();

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: {
      productId: router.query.number,
    },
  });

  console.log(data);

  return (
    <div>
      <BoardViewUI data={data} />
    </div>
  );
}
