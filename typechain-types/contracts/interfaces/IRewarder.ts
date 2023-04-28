/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface IRewarderInterface extends utils.Interface {
  functions: {
    "onDeposit(uint256,uint256)": FunctionFragment;
    "onReward(uint256,uint256,address)": FunctionFragment;
    "onWithdraw(uint256,uint256)": FunctionFragment;
    "pendingTokens(uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "onDeposit"
      | "onReward"
      | "onWithdraw"
      | "pendingTokens"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "onDeposit",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "onReward",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onWithdraw",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingTokens",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "onDeposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "onReward", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "onWithdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingTokens",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IRewarder extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IRewarderInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    onDeposit(
      relicId: PromiseOrValue<BigNumberish>,
      depositAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    onReward(
      relicId: PromiseOrValue<BigNumberish>,
      rewardAmount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    onWithdraw(
      relicId: PromiseOrValue<BigNumberish>,
      withdrawalAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    pendingTokens(
      relicId: PromiseOrValue<BigNumberish>,
      rewardAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string[], BigNumber[]]>;
  };

  onDeposit(
    relicId: PromiseOrValue<BigNumberish>,
    depositAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  onReward(
    relicId: PromiseOrValue<BigNumberish>,
    rewardAmount: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  onWithdraw(
    relicId: PromiseOrValue<BigNumberish>,
    withdrawalAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  pendingTokens(
    relicId: PromiseOrValue<BigNumberish>,
    rewardAmount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[string[], BigNumber[]]>;

  callStatic: {
    onDeposit(
      relicId: PromiseOrValue<BigNumberish>,
      depositAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    onReward(
      relicId: PromiseOrValue<BigNumberish>,
      rewardAmount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    onWithdraw(
      relicId: PromiseOrValue<BigNumberish>,
      withdrawalAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    pendingTokens(
      relicId: PromiseOrValue<BigNumberish>,
      rewardAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string[], BigNumber[]]>;
  };

  filters: {};

  estimateGas: {
    onDeposit(
      relicId: PromiseOrValue<BigNumberish>,
      depositAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    onReward(
      relicId: PromiseOrValue<BigNumberish>,
      rewardAmount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    onWithdraw(
      relicId: PromiseOrValue<BigNumberish>,
      withdrawalAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    pendingTokens(
      relicId: PromiseOrValue<BigNumberish>,
      rewardAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    onDeposit(
      relicId: PromiseOrValue<BigNumberish>,
      depositAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    onReward(
      relicId: PromiseOrValue<BigNumberish>,
      rewardAmount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    onWithdraw(
      relicId: PromiseOrValue<BigNumberish>,
      withdrawalAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    pendingTokens(
      relicId: PromiseOrValue<BigNumberish>,
      rewardAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
