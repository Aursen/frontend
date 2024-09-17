import Image from 'next/image';
import React from 'react';

import Button from '@/components/common/Button/Button';
import TabSelect from '@/components/common/TabSelect/TabSelect';
import { ALP_LOCK_PERIODS, ALP_STAKE_MULTIPLIERS } from '@/constant';
import { AlpLockPeriod } from '@/types';
import { formatNumber } from '@/utils';

import lockIcon from '../../../../public/images/Icons/lock.svg';
import walletImg from '../../../../public/images/wallet-icon.svg';

export default function ALPStakeToken({
  balance,
  amount,
  setAmount,
  lockPeriod,
  setLockPeriod,
  onStakeAmountChange,
  stakeAmount,
  errorMessage,
}: {
  balance: number | null;
  amount: number | null;
  setAmount: (amount: number | null) => void;
  lockPeriod: AlpLockPeriod;
  setLockPeriod: (lockPeriod: AlpLockPeriod) => void;
  onStakeAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  stakeAmount: () => void;
  errorMessage: string;
}) {
  const lockPeriods = ALP_LOCK_PERIODS.map((lockPeriod) => ({
    title: lockPeriod,
    activeColor: 'border-white',
  }));

  return (
    <div className="flex flex-col sm:flex-row lg:flex-col rounded-lg sm:min-w-[400px] h-fit">
      <div className="flex flex-col gap-5 justify-between w-full px-5">
        <div className="mt-4">
          <div className="flex flex-row justify-between mb-1">
            <h5 className="ml-4"> Amount</h5>

            <div className="text-sm flex items-center justify-end h-6">
              <Image
                className="mr-1 opacity-60 relative"
                src={walletImg}
                height={17}
                width={17}
                alt="Wallet icon"
              />
              <span className="text-txtfade font-mono text-xs mr-1">
                {balance !== null ? `${formatNumber(balance, 2)} ALP` : '–'}
              </span>
            </div>
          </div>

          <div className="relative flex flex-row w-full">
            <div className="flex items-center bg-bcolor border rounded-l-xl px-3  border-r-none">
              <p className="opacity-50 font-mono text-sm">ALP</p>
            </div>
            <input
              className="w-full bg-inputcolor border border-bcolor rounded-xl rounded-l-none p-3 px-4 text-xl font-mono"
              type="number"
              onWheel={(e) => {
                // Disable the scroll changing input value
                (e.target as HTMLInputElement).blur();
              }}
              value={amount ?? ''}
              onChange={onStakeAmountChange}
              placeholder="0.00"
            />
            <Button
              className="absolute right-2 bottom-3.5"
              title="MAX"
              variant="primary"
              onClick={() => {
                if (balance === null) return;

                setAmount(balance);
              }}
            />
          </div>
        </div>

        <div>
          <div className="flex flex-row gap-1 mb-2 ml-4">
            <Image
              className="relative"
              src={lockIcon}
              width={14}
              height={18}
              alt="lock icon"
            />
            <h5 className="text-sm font-medium ">Lock duration (days)</h5>
          </div>

          <TabSelect
            className="font-mono"
            selected={lockPeriod}
            initialSelectedIndex={lockPeriods.findIndex(
              (x) => x.title === lockPeriod,
            )}
            tabs={lockPeriods}
            onClick={(title) => {
              setLockPeriod(title);
            }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 justify-between w-full p-5 ">
        <ul className="flex flex-col gap-2">
          <li className="text-sm opacity-25">Benefits</li>
          <li className="flex flex-row justify-between">
            <p className="text-sm opacity-50">Days </p>
            <p className="text-sm font-mono"> {lockPeriod} </p>
          </li>
          <li className="flex flex-row justify-between">
            <p className="text-sm opacity-50"> USDC yield</p>
            <p className="text-sm font-mono">
              {ALP_STAKE_MULTIPLIERS[lockPeriod].usdc}x
            </p>
          </li>
          <li className="flex flex-row justify-between">
            <p className="text-sm opacity-50">ADX token yield </p>
            <p className="text-sm font-mono">
              {ALP_STAKE_MULTIPLIERS[lockPeriod].adx}x
            </p>
          </li>
        </ul>

        <Button
          className="w-full"
          size="lg"
          title={errorMessage ? errorMessage : '[S]take'}
          disabled={!!errorMessage || !amount}
          onClick={stakeAmount}
        />
      </div>
    </div>
  );
}
