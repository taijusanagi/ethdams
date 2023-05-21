/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  GitcoinPassportPaymaster,
  GitcoinPassportPaymasterInterface,
} from "../../contracts/GitcoinPassportPaymaster";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "_entryPoint",
        type: "address",
      },
      {
        internalType: "bytes16",
        name: "_gitcoinPassportUserId",
        type: "bytes16",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "unstakeDelaySec",
        type: "uint32",
      },
    ],
    name: "addStake",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "entryPoint",
    outputs: [
      {
        internalType: "contract IEntryPoint",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeposit",
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
    inputs: [],
    name: "gitcoinPassportUserId",
    outputs: [
      {
        internalType: "bytes16",
        name: "",
        type: "bytes16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
        internalType: "enum IPaymaster.PostOpMode",
        name: "mode",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "actualGasCost",
        type: "uint256",
      },
    ],
    name: "postOp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unlockStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "userOp",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "userOpHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "maxCost",
        type: "uint256",
      },
    ],
    name: "validatePaymasterUserOp",
    outputs: [
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "validationData",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
    ],
    name: "withdrawStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523480156200001157600080fd5b50604051620015f9380380620015f9833981810160405281019062000037919062000266565b81620000586200004c620000bf60201b60201c565b620000c760201b60201c565b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250505080600160006101000a8154816fffffffffffffffffffffffffffffffff021916908360801c02179055505050620002ad565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001bd8262000190565b9050919050565b6000620001d182620001b0565b9050919050565b620001e381620001c4565b8114620001ef57600080fd5b50565b6000815190506200020381620001d8565b92915050565b60007fffffffffffffffffffffffffffffffff0000000000000000000000000000000082169050919050565b620002408162000209565b81146200024c57600080fd5b50565b600081519050620002608162000235565b92915050565b6000806040838503121562000280576200027f6200018b565b5b60006200029085828601620001f2565b9250506020620002a3858286016200024f565b9150509250929050565b6080516112ff620002fa600039600081816102b30152818161034a0152818161044501528181610471015281816104fb0152818161058b0152818161062a01526108a001526112ff6000f3fe6080604052600436106100c25760003560e01c8063b0d691fe1161007f578063c399ec8811610059578063c399ec881461020d578063d0e30db014610238578063f2fde38b14610242578063f465c77e1461026b576100c2565b8063b0d691fe146101a2578063bb9fe6bf146101cd578063c23a5cea146101e4576100c2565b80630396cb60146100c7578063205c2878146100e3578063715018a61461010c5780638da5cb5b14610123578063a4616aed1461014e578063a9a2340914610179575b600080fd5b6100e160048036038101906100dc9190610a79565b6102a9565b005b3480156100ef57600080fd5b5061010a60048036038101906101059190610b3a565b610340565b005b34801561011857600080fd5b506101216103d9565b005b34801561012f57600080fd5b506101386103ed565b6040516101459190610b9b565b60405180910390f35b34801561015a57600080fd5b50610163610416565b6040516101709190610bf1565b60405180910390f35b34801561018557600080fd5b506101a0600480360381019061019b9190610c96565b610429565b005b3480156101ae57600080fd5b506101b7610443565b6040516101c49190610d69565b60405180910390f35b3480156101d957600080fd5b506101e2610467565b005b3480156101f057600080fd5b5061020b60048036038101906102069190610d84565b6104f1565b005b34801561021957600080fd5b50610222610587565b60405161022f9190610dc0565b60405180910390f35b610240610628565b005b34801561024e57600080fd5b5061026960048036038101906102649190610e07565b6106b6565b005b34801561027757600080fd5b50610292600480360381019061028d9190610e8f565b610739565b6040516102a0929190610f8e565b60405180910390f35b6102b161075c565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16630396cb6034836040518363ffffffff1660e01b815260040161030b9190610fcd565b6000604051808303818588803b15801561032457600080fd5b505af1158015610338573d6000803e3d6000fd5b505050505050565b61034861075c565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663205c287883836040518363ffffffff1660e01b81526004016103a3929190610ff7565b600060405180830381600087803b1580156103bd57600080fd5b505af11580156103d1573d6000803e3d6000fd5b505050505050565b6103e161075c565b6103eb60006107da565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600160009054906101000a900460801b81565b61043161089e565b61043d8484848461092e565b50505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b61046f61075c565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663bb9fe6bf6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156104d757600080fd5b505af11580156104eb573d6000803e3d6000fd5b50505050565b6104f961075c565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663c23a5cea826040518263ffffffff1660e01b81526004016105529190611020565b600060405180830381600087803b15801561056c57600080fd5b505af1158015610580573d6000803e3d6000fd5b5050505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016105e29190610b9b565b602060405180830381865afa1580156105ff573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106239190611050565b905090565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663b760faf934306040518363ffffffff1660e01b81526004016106829190610b9b565b6000604051808303818588803b15801561069b57600080fd5b505af11580156106af573d6000803e3d6000fd5b5050505050565b6106be61075c565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361072d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072490611100565b60405180910390fd5b610736816107da565b50565b6060600061074561089e565b610750858585610934565b91509150935093915050565b610764610a1b565b73ffffffffffffffffffffffffffffffffffffffff166107826103ed565b73ffffffffffffffffffffffffffffffffffffffff16146107d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107cf9061116c565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461092c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610923906111d8565b60405180910390fd5b565b50505050565b606060008061094286610a23565b905060008190508073ffffffffffffffffffffffffffffffffffffffff1663b30e4fc2600160009054906101000a900460801b6040518263ffffffff1660e01b81526004016109919190610bf1565b602060405180830381865afa1580156109ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109d29190611230565b610a11576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a08906112a9565b60405180910390fd5b5050935093915050565b600033905090565b6000808235905080915050919050565b600080fd5b600080fd5b600063ffffffff82169050919050565b610a5681610a3d565b8114610a6157600080fd5b50565b600081359050610a7381610a4d565b92915050565b600060208284031215610a8f57610a8e610a33565b5b6000610a9d84828501610a64565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610ad182610aa6565b9050919050565b610ae181610ac6565b8114610aec57600080fd5b50565b600081359050610afe81610ad8565b92915050565b6000819050919050565b610b1781610b04565b8114610b2257600080fd5b50565b600081359050610b3481610b0e565b92915050565b60008060408385031215610b5157610b50610a33565b5b6000610b5f85828601610aef565b9250506020610b7085828601610b25565b9150509250929050565b6000610b8582610aa6565b9050919050565b610b9581610b7a565b82525050565b6000602082019050610bb06000830184610b8c565b92915050565b60007fffffffffffffffffffffffffffffffff0000000000000000000000000000000082169050919050565b610beb81610bb6565b82525050565b6000602082019050610c066000830184610be2565b92915050565b60038110610c1957600080fd5b50565b600081359050610c2b81610c0c565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f840112610c5657610c55610c31565b5b8235905067ffffffffffffffff811115610c7357610c72610c36565b5b602083019150836001820283011115610c8f57610c8e610c3b565b5b9250929050565b60008060008060608587031215610cb057610caf610a33565b5b6000610cbe87828801610c1c565b945050602085013567ffffffffffffffff811115610cdf57610cde610a38565b5b610ceb87828801610c40565b93509350506040610cfe87828801610b25565b91505092959194509250565b6000819050919050565b6000610d2f610d2a610d2584610aa6565b610d0a565b610aa6565b9050919050565b6000610d4182610d14565b9050919050565b6000610d5382610d36565b9050919050565b610d6381610d48565b82525050565b6000602082019050610d7e6000830184610d5a565b92915050565b600060208284031215610d9a57610d99610a33565b5b6000610da884828501610aef565b91505092915050565b610dba81610b04565b82525050565b6000602082019050610dd56000830184610db1565b92915050565b610de481610b7a565b8114610def57600080fd5b50565b600081359050610e0181610ddb565b92915050565b600060208284031215610e1d57610e1c610a33565b5b6000610e2b84828501610df2565b91505092915050565b600080fd5b60006101608284031215610e5057610e4f610e34565b5b81905092915050565b6000819050919050565b610e6c81610e59565b8114610e7757600080fd5b50565b600081359050610e8981610e63565b92915050565b600080600060608486031215610ea857610ea7610a33565b5b600084013567ffffffffffffffff811115610ec657610ec5610a38565b5b610ed286828701610e39565b9350506020610ee386828701610e7a565b9250506040610ef486828701610b25565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b60005b83811015610f38578082015181840152602081019050610f1d565b60008484015250505050565b6000601f19601f8301169050919050565b6000610f6082610efe565b610f6a8185610f09565b9350610f7a818560208601610f1a565b610f8381610f44565b840191505092915050565b60006040820190508181036000830152610fa88185610f55565b9050610fb76020830184610db1565b9392505050565b610fc781610a3d565b82525050565b6000602082019050610fe26000830184610fbe565b92915050565b610ff181610ac6565b82525050565b600060408201905061100c6000830185610fe8565b6110196020830184610db1565b9392505050565b60006020820190506110356000830184610fe8565b92915050565b60008151905061104a81610b0e565b92915050565b60006020828403121561106657611065610a33565b5b60006110748482850161103b565b91505092915050565b600082825260208201905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006110ea60268361107d565b91506110f58261108e565b604082019050919050565b60006020820190508181036000830152611119816110dd565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061115660208361107d565b915061116182611120565b602082019050919050565b6000602082019050818103600083015261118581611149565b9050919050565b7f53656e646572206e6f7420456e747279506f696e740000000000000000000000600082015250565b60006111c260158361107d565b91506111cd8261118c565b602082019050919050565b600060208201905081810360008301526111f1816111b5565b9050919050565b60008115159050919050565b61120d816111f8565b811461121857600080fd5b50565b60008151905061122a81611204565b92915050565b60006020828403121561124657611245610a33565b5b60006112548482850161121b565b91505092915050565b7f696e76616c6964206163636f756e740000000000000000000000000000000000600082015250565b6000611293600f8361107d565b915061129e8261125d565b602082019050919050565b600060208201905081810360008301526112c281611286565b905091905056fea26469706673582212206053db878731bec6dbe714b061e76268fee9d788ebc04d257880e29fedb5060364736f6c63430008130033";

type GitcoinPassportPaymasterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GitcoinPassportPaymasterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GitcoinPassportPaymaster__factory extends ContractFactory {
  constructor(...args: GitcoinPassportPaymasterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _entryPoint: PromiseOrValue<string>,
    _gitcoinPassportUserId: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GitcoinPassportPaymaster> {
    return super.deploy(
      _entryPoint,
      _gitcoinPassportUserId,
      overrides || {}
    ) as Promise<GitcoinPassportPaymaster>;
  }
  override getDeployTransaction(
    _entryPoint: PromiseOrValue<string>,
    _gitcoinPassportUserId: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _entryPoint,
      _gitcoinPassportUserId,
      overrides || {}
    );
  }
  override attach(address: string): GitcoinPassportPaymaster {
    return super.attach(address) as GitcoinPassportPaymaster;
  }
  override connect(signer: Signer): GitcoinPassportPaymaster__factory {
    return super.connect(signer) as GitcoinPassportPaymaster__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GitcoinPassportPaymasterInterface {
    return new utils.Interface(_abi) as GitcoinPassportPaymasterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GitcoinPassportPaymaster {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as GitcoinPassportPaymaster;
  }
}