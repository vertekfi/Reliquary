/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  Signer,
  utils,
} from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface ReliquaryEventsInterface extends utils.Interface {
  functions: {};

  events: {
    "CreateRelic(uint256,address,uint256)": EventFragment;
    "Deposit(uint256,uint256,address,uint256)": EventFragment;
    "EmergencyWithdraw(uint256,uint256,address,uint256)": EventFragment;
    "Harvest(uint256,uint256,address,uint256)": EventFragment;
    "LevelChanged(uint256,uint256)": EventFragment;
    "LogPoolAddition(uint256,uint256,address,address,address,bool)": EventFragment;
    "LogPoolModified(uint256,uint256,address,address)": EventFragment;
    "LogSetEmissionCurve(address)": EventFragment;
    "LogUpdatePool(uint256,uint256,uint256,uint256)": EventFragment;
    "Merge(uint256,uint256,uint256)": EventFragment;
    "Shift(uint256,uint256,uint256)": EventFragment;
    "Split(uint256,uint256,uint256)": EventFragment;
    "Withdraw(uint256,uint256,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CreateRelic"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EmergencyWithdraw"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Harvest"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LevelChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogPoolAddition"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogPoolModified"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogSetEmissionCurve"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogUpdatePool"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Merge"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Shift"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Split"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export interface CreateRelicEventObject {
  pid: BigNumber;
  to: string;
  relicId: BigNumber;
}
export type CreateRelicEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  CreateRelicEventObject
>;

export type CreateRelicEventFilter = TypedEventFilter<CreateRelicEvent>;

export interface DepositEventObject {
  pid: BigNumber;
  amount: BigNumber;
  to: string;
  relicId: BigNumber;
}
export type DepositEvent = TypedEvent<
  [BigNumber, BigNumber, string, BigNumber],
  DepositEventObject
>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export interface EmergencyWithdrawEventObject {
  pid: BigNumber;
  amount: BigNumber;
  to: string;
  relicId: BigNumber;
}
export type EmergencyWithdrawEvent = TypedEvent<
  [BigNumber, BigNumber, string, BigNumber],
  EmergencyWithdrawEventObject
>;

export type EmergencyWithdrawEventFilter =
  TypedEventFilter<EmergencyWithdrawEvent>;

export interface HarvestEventObject {
  pid: BigNumber;
  amount: BigNumber;
  to: string;
  relicId: BigNumber;
}
export type HarvestEvent = TypedEvent<
  [BigNumber, BigNumber, string, BigNumber],
  HarvestEventObject
>;

export type HarvestEventFilter = TypedEventFilter<HarvestEvent>;

export interface LevelChangedEventObject {
  relicId: BigNumber;
  newLevel: BigNumber;
}
export type LevelChangedEvent = TypedEvent<
  [BigNumber, BigNumber],
  LevelChangedEventObject
>;

export type LevelChangedEventFilter = TypedEventFilter<LevelChangedEvent>;

export interface LogPoolAdditionEventObject {
  pid: BigNumber;
  allocPoint: BigNumber;
  poolToken: string;
  rewarder: string;
  nftDescriptor: string;
  allowPartialWithdrawals: boolean;
}
export type LogPoolAdditionEvent = TypedEvent<
  [BigNumber, BigNumber, string, string, string, boolean],
  LogPoolAdditionEventObject
>;

export type LogPoolAdditionEventFilter = TypedEventFilter<LogPoolAdditionEvent>;

export interface LogPoolModifiedEventObject {
  pid: BigNumber;
  allocPoint: BigNumber;
  rewarder: string;
  nftDescriptor: string;
}
export type LogPoolModifiedEvent = TypedEvent<
  [BigNumber, BigNumber, string, string],
  LogPoolModifiedEventObject
>;

export type LogPoolModifiedEventFilter = TypedEventFilter<LogPoolModifiedEvent>;

export interface LogSetEmissionCurveEventObject {
  emissionCurveAddress: string;
}
export type LogSetEmissionCurveEvent = TypedEvent<
  [string],
  LogSetEmissionCurveEventObject
>;

export type LogSetEmissionCurveEventFilter =
  TypedEventFilter<LogSetEmissionCurveEvent>;

export interface LogUpdatePoolEventObject {
  pid: BigNumber;
  lastRewardTime: BigNumber;
  lpSupply: BigNumber;
  accRewardPerShare: BigNumber;
}
export type LogUpdatePoolEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber],
  LogUpdatePoolEventObject
>;

export type LogUpdatePoolEventFilter = TypedEventFilter<LogUpdatePoolEvent>;

export interface MergeEventObject {
  fromId: BigNumber;
  toId: BigNumber;
  amount: BigNumber;
}
export type MergeEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  MergeEventObject
>;

export type MergeEventFilter = TypedEventFilter<MergeEvent>;

export interface ShiftEventObject {
  fromId: BigNumber;
  toId: BigNumber;
  amount: BigNumber;
}
export type ShiftEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  ShiftEventObject
>;

export type ShiftEventFilter = TypedEventFilter<ShiftEvent>;

export interface SplitEventObject {
  fromId: BigNumber;
  toId: BigNumber;
  amount: BigNumber;
}
export type SplitEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  SplitEventObject
>;

export type SplitEventFilter = TypedEventFilter<SplitEvent>;

export interface WithdrawEventObject {
  pid: BigNumber;
  amount: BigNumber;
  to: string;
  relicId: BigNumber;
}
export type WithdrawEvent = TypedEvent<
  [BigNumber, BigNumber, string, BigNumber],
  WithdrawEventObject
>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface ReliquaryEvents extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ReliquaryEventsInterface;

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

  functions: {};

  callStatic: {};

  filters: {
    "CreateRelic(uint256,address,uint256)"(
      pid?: PromiseOrValue<BigNumberish> | null,
      to?: PromiseOrValue<string> | null,
      relicId?: PromiseOrValue<BigNumberish> | null
    ): CreateRelicEventFilter;
    CreateRelic(
      pid?: PromiseOrValue<BigNumberish> | null,
      to?: PromiseOrValue<string> | null,
      relicId?: PromiseOrValue<BigNumberish> | null
    ): CreateRelicEventFilter;

    "Deposit(uint256,uint256,address,uint256)"(
      pid?: PromiseOrValue<BigNumberish> | null,
      amount?: null,
      to?: PromiseOrValue<string> | null,
      relicId?: PromiseOrValue<BigNumberish> | null
    ): DepositEventFilter;
    Deposit(
      pid?: PromiseOrValue<BigNumberish> | null,
      amount?: null,
      to?: PromiseOrValue<string> | null,
      relicId?: PromiseOrValue<BigNumberish> | null
    ): DepositEventFilter;

    "EmergencyWithdraw(uint256,uint256,address,uint256)"(
      pid?: PromiseOrValue<BigNumberish> | null,
      amount?: null,
      to?: PromiseOrValue<string> | null,
      relicId?: PromiseOrValue<BigNumberish> | null
    ): EmergencyWithdrawEventFilter;
    EmergencyWithdraw(
      pid?: PromiseOrValue<BigNumberish> | null,
      amount?: null,
      to?: PromiseOrValue<string> | null,
      relicId?: PromiseOrValue<BigNumberish> | null
    ): EmergencyWithdrawEventFilter;

    "Harvest(uint256,uint256,address,uint256)"(
      pid?: PromiseOrValue<BigNumberish> | null,
      amount?: null,
      to?: PromiseOrValue<string> | null,
      relicId?: PromiseOrValue<BigNumberish> | null
    ): HarvestEventFilter;
    Harvest(
      pid?: PromiseOrValue<BigNumberish> | null,
      amount?: null,
      to?: PromiseOrValue<string> | null,
      relicId?: PromiseOrValue<BigNumberish> | null
    ): HarvestEventFilter;

    "LevelChanged(uint256,uint256)"(
      relicId?: PromiseOrValue<BigNumberish> | null,
      newLevel?: null
    ): LevelChangedEventFilter;
    LevelChanged(
      relicId?: PromiseOrValue<BigNumberish> | null,
      newLevel?: null
    ): LevelChangedEventFilter;

    "LogPoolAddition(uint256,uint256,address,address,address,bool)"(
      pid?: PromiseOrValue<BigNumberish> | null,
      allocPoint?: null,
      poolToken?: PromiseOrValue<string> | null,
      rewarder?: PromiseOrValue<string> | null,
      nftDescriptor?: null,
      allowPartialWithdrawals?: null
    ): LogPoolAdditionEventFilter;
    LogPoolAddition(
      pid?: PromiseOrValue<BigNumberish> | null,
      allocPoint?: null,
      poolToken?: PromiseOrValue<string> | null,
      rewarder?: PromiseOrValue<string> | null,
      nftDescriptor?: null,
      allowPartialWithdrawals?: null
    ): LogPoolAdditionEventFilter;

    "LogPoolModified(uint256,uint256,address,address)"(
      pid?: PromiseOrValue<BigNumberish> | null,
      allocPoint?: null,
      rewarder?: PromiseOrValue<string> | null,
      nftDescriptor?: null
    ): LogPoolModifiedEventFilter;
    LogPoolModified(
      pid?: PromiseOrValue<BigNumberish> | null,
      allocPoint?: null,
      rewarder?: PromiseOrValue<string> | null,
      nftDescriptor?: null
    ): LogPoolModifiedEventFilter;

    "LogSetEmissionCurve(address)"(
      emissionCurveAddress?: PromiseOrValue<string> | null
    ): LogSetEmissionCurveEventFilter;
    LogSetEmissionCurve(
      emissionCurveAddress?: PromiseOrValue<string> | null
    ): LogSetEmissionCurveEventFilter;

    "LogUpdatePool(uint256,uint256,uint256,uint256)"(
      pid?: PromiseOrValue<BigNumberish> | null,
      lastRewardTime?: null,
      lpSupply?: null,
      accRewardPerShare?: null
    ): LogUpdatePoolEventFilter;
    LogUpdatePool(
      pid?: PromiseOrValue<BigNumberish> | null,
      lastRewardTime?: null,
      lpSupply?: null,
      accRewardPerShare?: null
    ): LogUpdatePoolEventFilter;

    "Merge(uint256,uint256,uint256)"(
      fromId?: PromiseOrValue<BigNumberish> | null,
      toId?: PromiseOrValue<BigNumberish> | null,
      amount?: null
    ): MergeEventFilter;
    Merge(
      fromId?: PromiseOrValue<BigNumberish> | null,
      toId?: PromiseOrValue<BigNumberish> | null,
      amount?: null
    ): MergeEventFilter;

    "Shift(uint256,uint256,uint256)"(
      fromId?: PromiseOrValue<BigNumberish> | null,
      toId?: PromiseOrValue<BigNumberish> | null,
      amount?: null
    ): ShiftEventFilter;
    Shift(
      fromId?: PromiseOrValue<BigNumberish> | null,
      toId?: PromiseOrValue<BigNumberish> | null,
      amount?: null
    ): ShiftEventFilter;

    "Split(uint256,uint256,uint256)"(
      fromId?: PromiseOrValue<BigNumberish> | null,
      toId?: PromiseOrValue<BigNumberish> | null,
      amount?: null
    ): SplitEventFilter;
    Split(
      fromId?: PromiseOrValue<BigNumberish> | null,
      toId?: PromiseOrValue<BigNumberish> | null,
      amount?: null
    ): SplitEventFilter;

    "Withdraw(uint256,uint256,address,uint256)"(
      pid?: PromiseOrValue<BigNumberish> | null,
      amount?: null,
      to?: PromiseOrValue<string> | null,
      relicId?: PromiseOrValue<BigNumberish> | null
    ): WithdrawEventFilter;
    Withdraw(
      pid?: PromiseOrValue<BigNumberish> | null,
      amount?: null,
      to?: PromiseOrValue<string> | null,
      relicId?: PromiseOrValue<BigNumberish> | null
    ): WithdrawEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
