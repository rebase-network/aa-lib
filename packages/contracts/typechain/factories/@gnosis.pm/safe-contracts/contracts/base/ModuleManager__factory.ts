/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ModuleManager,
  ModuleManagerInterface,
} from "../../../../../@gnosis.pm/safe-contracts/contracts/base/ModuleManager";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "DisabledModule",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "EnabledModule",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "ExecutionFromModuleFailure",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "ExecutionFromModuleSuccess",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "prevModule",
        type: "address",
      },
      {
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "disableModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "enableModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "enum Enum.Operation",
        name: "operation",
        type: "uint8",
      },
    ],
    name: "execTransactionFromModule",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "enum Enum.Operation",
        name: "operation",
        type: "uint8",
      },
    ],
    name: "execTransactionFromModuleReturnData",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "returnData",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "start",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "pageSize",
        type: "uint256",
      },
    ],
    name: "getModulesPaginated",
    outputs: [
      {
        internalType: "address[]",
        name: "array",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "next",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "isModuleEnabled",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610c34806100206000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c8063610b592511610050578063610b5925146100d3578063cc2f8452146100e8578063e009cfde1461010957600080fd5b80632d9ad53d14610077578063468721a71461009f5780635229073f146100b2575b600080fd5b61008a610085366004610896565b61011c565b60405190151581526020015b60405180910390f35b61008a6100ad3660046108f6565b610171565b6100c56100c03660046108f6565b61028c565b6040516100969291906109f0565b6100e66100e1366004610896565b6102c2565b005b6100fb6100f6366004610a6d565b6104b2565b604051610096929190610a97565b6100e6610117366004610b0e565b6105df565b6000600173ffffffffffffffffffffffffffffffffffffffff83161480159061016b575073ffffffffffffffffffffffffffffffffffffffff8281166000908152602081905260409020541615155b92915050565b6000336001148015906101a857503360009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff1615155b610213576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475331303400000000000000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b610220858585855a6107bb565b905080156102585760405133907f6895c13664aa4f67288b25d7a21d7aaa34916e355fb9b6fae0a139a9085becb890600090a2610284565b60405133907facd2c8702804128fdb0db2bb49f6d127dd0181c13fd45dbfe16de0930e2bd37590600090a25b949350505050565b6000606061029c86868686610171565b915060405160203d0181016040523d81523d6000602083013e8091505094509492505050565b6102ca610802565b73ffffffffffffffffffffffffffffffffffffffff811615801590610306575073ffffffffffffffffffffffffffffffffffffffff8116600114155b61036c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f4753313031000000000000000000000000000000000000000000000000000000604482015260640161020a565b73ffffffffffffffffffffffffffffffffffffffff81811660009081526020819052604090205416156103fb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f4753313032000000000000000000000000000000000000000000000000000000604482015260640161020a565b600060208181527fada5013122d395ba3c54772283fb069b10426056ef8ca54750cb9bb552a59e7d805473ffffffffffffffffffffffffffffffffffffffff85811680865260408087208054939094167fffffffffffffffffffffffff00000000000000000000000000000000000000009384161790935560019095528254168417909155519182527fecdf3a3effea5783a3c4c2140e677577666428d44ed9d474a0b3a4c9943f8440910160405180910390a150565b606060008267ffffffffffffffff8111156104cf576104cf6108b8565b6040519080825280602002602001820160405280156104f8578160200160208202803683370190505b5073ffffffffffffffffffffffffffffffffffffffff80861660009081526020819052604081205492945091165b73ffffffffffffffffffffffffffffffffffffffff811615801590610562575073ffffffffffffffffffffffffffffffffffffffff8116600114155b801561056d57508482105b156105d1578084838151811061058557610585610b41565b73ffffffffffffffffffffffffffffffffffffffff92831660209182029290920181019190915291811660009081529182905260409091205416816105c981610b70565b925050610526565b908352919491935090915050565b6105e7610802565b73ffffffffffffffffffffffffffffffffffffffff811615801590610623575073ffffffffffffffffffffffffffffffffffffffff8116600114155b610689576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f4753313031000000000000000000000000000000000000000000000000000000604482015260640161020a565b73ffffffffffffffffffffffffffffffffffffffff82811660009081526020819052604090205481169082161461071c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f4753313033000000000000000000000000000000000000000000000000000000604482015260640161020a565b73ffffffffffffffffffffffffffffffffffffffff818116600081815260208181526040808320805488871685528285208054919097167fffffffffffffffffffffffff00000000000000000000000000000000000000009182161790965592849052825490941690915591519081527faab4fa2b463f581b2b32cb3b7e3b704b9ce37cc209b5fb4d77e593ace4054276910160405180910390a15050565b600060018360018111156107d1576107d1610bcf565b036107e9576000808551602087018986f490506107f9565b600080855160208701888a87f190505b95945050505050565b33301461086b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f4753303331000000000000000000000000000000000000000000000000000000604482015260640161020a565b565b803573ffffffffffffffffffffffffffffffffffffffff8116811461089157600080fd5b919050565b6000602082840312156108a857600080fd5b6108b18261086d565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b80356002811061089157600080fd5b6000806000806080858703121561090c57600080fd5b6109158561086d565b935060208501359250604085013567ffffffffffffffff8082111561093957600080fd5b818701915087601f83011261094d57600080fd5b81358181111561095f5761095f6108b8565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156109a5576109a56108b8565b816040528281528a60208487010111156109be57600080fd5b8260208601602083013760006020848301015280965050505050506109e5606086016108e7565b905092959194509250565b821515815260006020604081840152835180604085015260005b81811015610a2657858101830151858201606001528201610a0a565b81811115610a38576000606083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01692909201606001949350505050565b60008060408385031215610a8057600080fd5b610a898361086d565b946020939093013593505050565b604080825283519082018190526000906020906060840190828701845b82811015610ae657815173ffffffffffffffffffffffffffffffffffffffff1684529284019290840190600101610ab4565b50505073ffffffffffffffffffffffffffffffffffffffff9490941692019190915250919050565b60008060408385031215610b2157600080fd5b610b2a8361086d565b9150610b386020840161086d565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610bc8577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fdfea26469706673582212208e928792075019e3fc9d4793bb4516577063dea071398e6e09c1cca834514f0364736f6c634300080f0033";

type ModuleManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ModuleManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ModuleManager__factory extends ContractFactory {
  constructor(...args: ModuleManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ModuleManager> {
    return super.deploy(overrides || {}) as Promise<ModuleManager>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ModuleManager {
    return super.attach(address) as ModuleManager;
  }
  override connect(signer: Signer): ModuleManager__factory {
    return super.connect(signer) as ModuleManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ModuleManagerInterface {
    return new utils.Interface(_abi) as ModuleManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ModuleManager {
    return new Contract(address, _abi, signerOrProvider) as ModuleManager;
  }
}