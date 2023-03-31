import useAdrenaClient from "@/hooks/useAdrenaClient";
import { useSelector } from "@/store/store";
import { Token } from "@/types";
import { formatNumber, formatPriceInfo, getCustodyLiquidity } from "@/utils";
import { BN } from "@project-serum/anchor";

export default function PositionDetails({
  tokenB,
  entryPrice,
  exitPrice,
  className,
}: {
  tokenB: Token;
  entryPrice: number | null;
  exitPrice: number | null;
  className?: string;
}) {
  const tokenPrices = useSelector((s) => s.tokenPrices);
  const client = useAdrenaClient();

  return (
    <div className={`flex flex-col p-1 text-sm ${className}`}>
      <div className="w-full flex justify-between items-center mt-1">
        <span className="text-txtfade">Entry Price</span>
        <span>{entryPrice !== null ? formatPriceInfo(entryPrice) : "-"}</span>
      </div>

      <div className="w-full flex justify-between items-center mt-1">
        <span className="text-txtfade">Exit Price</span>
        <span>{exitPrice !== null ? formatPriceInfo(exitPrice) : "-"}</span>
      </div>

      <div className="w-full flex justify-between items-center mt-1">
        <span className="text-txtfade">Borrow Fee</span>
        <span>
          {client && tokenB
            ? `${formatNumber(
                client
                  .getCustodyByMint(tokenB.mint)
                  .borrowRateState.currentRate.mul(new BN(100))
                  .toNumber(),
                4
              )}% / hr`
            : "-"}
        </span>
      </div>

      <div className="w-full flex justify-between items-center mt-1">
        <span className="text-txtfade">Available Liquidity</span>
        <span>
          {client && tokenB && tokenPrices && tokenPrices[tokenB.name]
            ? formatPriceInfo(
                getCustodyLiquidity(
                  client.getCustodyByMint(tokenB.mint),
                  tokenPrices[tokenB.name]!
                )
              )
            : "-"}
        </span>
      </div>
    </div>
  );
}
