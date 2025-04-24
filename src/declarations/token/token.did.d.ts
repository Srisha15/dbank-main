import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'balanceOf' : (arg_0: Principal) => Promise<bigint>,
  'checkBalance' : () => Promise<number>,
  'compound' : () => Promise<undefined>,
  'getSymbol' : () => Promise<string>,
  'payOut' : () => Promise<string>,
  'topUp' : (arg_0: number) => Promise<undefined>,
  'transfer' : (arg_0: Principal, arg_1: bigint) => Promise<string>,
  'withdraw' : (arg_0: number) => Promise<undefined>,
}
