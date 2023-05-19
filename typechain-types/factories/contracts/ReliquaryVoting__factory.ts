/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  ReliquaryVoting,
  ReliquaryVotingInterface,
} from "../../contracts/ReliquaryVoting";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "relicId",
        type: "uint256",
      },
    ],
    name: "getPositionVotingPower",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IReliquary",
        name: "_reliquary",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "reliquary",
    outputs: [
      {
        internalType: "contract IReliquary",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001961001e565b6100de565b600054610100900460ff161561008a5760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff90811610156100dc576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b610e8c806100ed6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80639010d07c1161008c578063c4d66de811610066578063c4d66de8146101b6578063ca15c873146101c9578063d547741f146101dc578063e754de63146101ef57600080fd5b80639010d07c1461017057806391d148541461019b578063a217fddf146101ae57600080fd5b806301ffc9a7146100d4578063248a9ca3146100fc5780632f2ff15d1461012d57806336568abe146101425780635999fd9c14610155578063632a9a5214610168575b600080fd5b6100e76100e2366004610b27565b610202565b60405190151581526020015b60405180910390f35b61011f61010a366004610b51565b60009081526065602052604090206001015490565b6040519081526020016100f3565b61014061013b366004610b7f565b61022d565b005b610140610150366004610b7f565b610257565b61011f610163366004610b51565b6102da565b610140610356565b61018361017e366004610baf565b61036a565b6040516001600160a01b0390911681526020016100f3565b6100e76101a9366004610b7f565b610389565b61011f600081565b6101406101c4366004610bd1565b6103b4565b61011f6101d7366004610b51565b6104e8565b6101406101ea366004610b7f565b6104ff565b60fb54610183906001600160a01b031681565b60006001600160e01b03198216635a05180f60e01b1480610227575061022782610524565b92915050565b60008281526065602052604090206001015461024881610559565b6102528383610566565b505050565b6001600160a01b03811633146102cc5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6102d68282610588565b5050565b60fb5460405163e48dc13560e01b81526004810183905260009182916001600160a01b039091169063e48dc1359060240160c060405180830381865afa158015610328573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061034c9190610c04565b5060009392505050565b61035e6105aa565b610368600160c955565b565b6000828152609760205260408120610382908361060a565b9392505050565b60009182526065602090815260408084206001600160a01b0393909316845291905290205460ff1690565b600054610100900460ff16158080156103d45750600054600160ff909116105b806103ee5750303b1580156103ee575060005460ff166001145b6104515760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016102c3565b6000805460ff191660011790558015610474576000805461ff0019166101001790555b61047c610616565b61048461063d565b60fb80546001600160a01b0319166001600160a01b03841617905580156102d6576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b60008181526097602052604081206102279061066c565b60008281526065602052604090206001015461051a81610559565b6102528383610588565b60006001600160e01b03198216637965db0b60e01b148061022757506301ffc9a760e01b6001600160e01b0319831614610227565b6105638133610676565b50565b61057082826106cf565b60008281526097602052604090206102529082610755565b610592828261076a565b600082815260976020526040902061025290826107d1565b600260c954036105fc5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016102c3565b600260c955565b600160c955565b600061038283836107e6565b600054610100900460ff166103685760405162461bcd60e51b81526004016102c390610c8c565b600054610100900460ff166106645760405162461bcd60e51b81526004016102c390610c8c565b610368610810565b6000610227825490565b6106808282610389565b6102d65761068d81610837565b610698836020610849565b6040516020016106a9929190610d07565b60408051601f198184030181529082905262461bcd60e51b82526102c391600401610d7c565b6106d98282610389565b6102d65760008281526065602090815260408083206001600160a01b03851684529091529020805460ff191660011790556107113390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000610382836001600160a01b0384166109e5565b6107748282610389565b156102d65760008281526065602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6000610382836001600160a01b038416610a34565b60008260000182815481106107fd576107fd610daf565b9060005260206000200154905092915050565b600054610100900460ff166106035760405162461bcd60e51b81526004016102c390610c8c565b60606102276001600160a01b03831660145b60606000610858836002610ddb565b610863906002610dfa565b67ffffffffffffffff81111561087b5761087b610bee565b6040519080825280601f01601f1916602001820160405280156108a5576020820181803683370190505b509050600360fc1b816000815181106108c0576108c0610daf565b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106108ef576108ef610daf565b60200101906001600160f81b031916908160001a9053506000610913846002610ddb565b61091e906001610dfa565b90505b6001811115610996576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061095257610952610daf565b1a60f81b82828151811061096857610968610daf565b60200101906001600160f81b031916908160001a90535060049490941c9361098f81610e12565b9050610921565b5083156103825760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016102c3565b6000818152600183016020526040812054610a2c57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610227565b506000610227565b60008181526001830160205260408120548015610b1d576000610a58600183610e29565b8554909150600090610a6c90600190610e29565b9050818114610ad1576000866000018281548110610a8c57610a8c610daf565b9060005260206000200154905080876000018481548110610aaf57610aaf610daf565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080610ae257610ae2610e40565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610227565b6000915050610227565b600060208284031215610b3957600080fd5b81356001600160e01b03198116811461038257600080fd5b600060208284031215610b6357600080fd5b5035919050565b6001600160a01b038116811461056357600080fd5b60008060408385031215610b9257600080fd5b823591506020830135610ba481610b6a565b809150509250929050565b60008060408385031215610bc257600080fd5b50508035926020909101359150565b600060208284031215610be357600080fd5b813561038281610b6a565b634e487b7160e01b600052604160045260246000fd5b600060c08284031215610c1657600080fd5b60405160c0810181811067ffffffffffffffff82111715610c4757634e487b7160e01b600052604160045260246000fd5b8060405250825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60005b83811015610cf2578181015183820152602001610cda565b83811115610d01576000848401525b50505050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351610d3f816017850160208801610cd7565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351610d70816028840160208801610cd7565b01602801949350505050565b6020815260008251806020840152610d9b816040850160208701610cd7565b601f01601f19169190910160400192915050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615610df557610df5610dc5565b500290565b60008219821115610e0d57610e0d610dc5565b500190565b600081610e2157610e21610dc5565b506000190190565b600082821015610e3b57610e3b610dc5565b500390565b634e487b7160e01b600052603160045260246000fdfea26469706673582212204dfa982e4a034a5a21dc0132260adf533efdf880232dc0665286a52856cef52d64736f6c634300080f0033";

type ReliquaryVotingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReliquaryVotingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ReliquaryVoting__factory extends ContractFactory {
  constructor(...args: ReliquaryVotingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ReliquaryVoting> {
    return super.deploy(overrides || {}) as Promise<ReliquaryVoting>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ReliquaryVoting {
    return super.attach(address) as ReliquaryVoting;
  }
  override connect(signer: Signer): ReliquaryVoting__factory {
    return super.connect(signer) as ReliquaryVoting__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReliquaryVotingInterface {
    return new utils.Interface(_abi) as ReliquaryVotingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReliquaryVoting {
    return new Contract(address, _abi, signerOrProvider) as ReliquaryVoting;
  }
}
