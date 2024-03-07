import Tippy from '@tippyjs/react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import Loader from '@/components/Loader/Loader';
import { Token } from '@/types';
import { formatNumber, formatPriceInfo } from '@/utils';

type rowsType = Array<{
  token: Token;
  price: number | null;
  tokenBalance: number | null;
  balanceInUsd: number | null;
  available: number | null;
  fee: number | null;
  currentPoolAmount: number | null;
  currentPoolAmountUsd: number | null;
  maxPoolCapacity: number | null;
  equivalentAmount: number | null;
}>;

export default function SaveOnFeesBlocks({
  rows,
  onCollateralTokenChange,
  isFeesLoading,
  setCollateralInput,
  collateralToken,
}: {
  rows: rowsType;
  onCollateralTokenChange: (t: Token) => void;
  isFeesLoading: boolean;
  setCollateralInput: (value: number | null) => void;
  collateralToken: Token | null;
}) {
  const currentFee = rows.find(
    (row) => row.token.symbol === collateralToken?.symbol,
  )?.fee;

  return (
    <div className={'grid grid-cols-1 md:grid-cols-2 gap-5 w-full mt-4'}>
      {rows.map((row) => (
        <div
          key={row.token.symbol}
          className={twMerge(
            'flex flex-col w-full border rounded-2xl transition-border duration-300 cursor-pointer hover:border-gray-500',
            isFeesLoading && 'opacity-25 cursor-wait',
            collateralToken?.symbol === row.token.symbol
              ? 'border-gray-500'
              : 'border-gray-400',
          )}
          onClick={() => {
            onCollateralTokenChange(row.token);
            setCollateralInput(row.equivalentAmount);
          }}
        >
          <div className="flex items-center justify-between border-b border-b-gray-200 p-3 py-2">
            <div className="flex flex-row gap-2 items-center flex-none">
              <input
                className="cursor-pointer mx-1"
                type="radio"
                checked={collateralToken?.symbol === row.token.symbol}
                onChange={() => undefined}
              />

              <Image
                src={row.token.image}
                width={30}
                height={30}
                alt={`${row.token.symbol} logo`}
              />
              <div>
                <p className="text-sm opacity-50 font-mono">
                  {row.token.symbol}
                </p>
                <h3 className="text-sm capitalize font-mono">
                  {row.token.name}
                </h3>
              </div>
            </div>

            <div>
              <p className="text-sm opacity-50 text-right">Fees</p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 justify-end text-right">
                {!isFeesLoading &&
                  currentFee &&
                  row.fee &&
                  collateralToken?.symbol !== row.token.symbol && (
                    <p
                      className={twMerge(
                        'text-sm font-medium text-right order-1 sm:order-none',
                        currentFee > row.fee
                          ? 'text-green-500'
                          : 'text-red-500',
                      )}
                    >
                      {currentFee - row.fee !== 0 &&
                        formatPriceInfo(
                          Math.abs(currentFee - row.fee),
                          undefined,
                          2,
                          true,
                        )}

                      {currentFee > row.fee ? ' more' : ' less'}
                    </p>
                  )}

                <p className="text-lg font-mono text-right">
                  {!isFeesLoading ? (
                    `${formatPriceInfo(row.fee)}`
                  ) : (
                    <Loader width={50} height={28} />
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full bg-gray-200 rounded-b-2xl p-3 h-full">
            <p className="opacity-25 text-sm">Details</p>
            <div className="flex w-full justify-between">
              <p className="text-sm opacity-50">Price</p>
              <p className="text-sm font-mono text-right">
                {formatPriceInfo(row.price)}
              </p>
            </div>

            <div className="flex w-full justify-between">
              <div className="text-sm opacity-50">Available</div>
              <Tippy
                content={
                  <ul className="flex flex-col gap-2">
                    {row.currentPoolAmount && (
                      <li className="flex flex-row gap-2 justify-between">
                        <p className="text-sm text-txtfade">
                          Current Pool Amount:
                        </p>
                        <p className="text-sm font-mono text-right">
                          {` ${formatPriceInfo(row.currentPoolAmountUsd)}`}
                          <br />
                          {`(${formatNumber(row.currentPoolAmount, 2)} ${
                            row.token.symbol
                          })`}
                        </p>
                      </li>
                    )}

                    <li className="flex flex-row gap-2 justify-between">
                      <p className="text-sm text-txtfade">Max Pool Capacity:</p>
                      <p className="text-sm font-mono text-right">
                        {`${formatPriceInfo(row.maxPoolCapacity)}`}
                      </p>
                    </li>
                  </ul>
                }
                placement="bottom"
              >
                <div className="flex">
                  <p className="text-sm tooltip-target cursor-help font-mono text-right">
                    {formatPriceInfo(row.available)}
                  </p>
                </div>
              </Tippy>
            </div>

            <div className="flex w-full justify-between">
              <p className="text-sm opacity-50">Wallet</p>
              <p className="text-sm font-mono text-right">
                {row.tokenBalance
                  ? `${formatNumber(row?.tokenBalance, 2)} ${
                      row?.token.symbol
                    } (${formatPriceInfo(row?.balanceInUsd)})`
                  : '–'}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
