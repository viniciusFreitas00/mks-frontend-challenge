import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Card, ProductsInfoContent } from "./styles";

interface ProductSkeletonProps {
  count: number;
}

export function ProductSkeleton({ count }: ProductSkeletonProps) {
  return (
    <>
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <Card key={index}>
            <Skeleton count={1} width={170} height={138} />
            <ProductsInfoContent>
              <div>
                <Skeleton count={1} width={70} height={30} />
                <Skeleton count={1} width={70} height={30} />
              </div>
              <Skeleton count={1} width={170} height={70} />
            </ProductsInfoContent>
          </Card>
        ))}
    </>
  );
}
