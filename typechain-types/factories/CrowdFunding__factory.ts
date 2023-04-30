/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { CrowdFunding, CrowdFundingInterface } from "../CrowdFunding";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "string",
        name: "_title",
        type: "string",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_goal",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_image",
        type: "string",
      },
    ],
    name: "createProject",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getInvestors",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getProjects",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "goal",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "currentValue",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "image",
            type: "string",
          },
          {
            internalType: "address[]",
            name: "investors",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "investments",
            type: "uint256[]",
          },
        ],
        internalType: "struct CrowdFunding.Project[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "investToProject",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "numberOfProjects",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "projects",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "goal",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentValue",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "image",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052600060015534801561001557600080fd5b5061192b806100256000396000f3fe6080604052600436106100555760003560e01c8063107046bd1461005a5780631139de551461009d57806399d985da146100db578063db5e4c7f146100f7578063dcc6012814610122578063f64bc5081461014d575b600080fd5b34801561006657600080fd5b50610081600480360381019061007c9190610ba3565b61018a565b6040516100949796959493929190610cb0565b60405180910390f35b3480156100a957600080fd5b506100c460048036038101906100bf9190610ba3565b610384565b6040516100d2929190610eb0565b60405180910390f35b6100f560048036038101906100f09190610ba3565b610494565b005b34801561010357600080fd5b5061010c6105f4565b6040516101199190610ee7565b60405180910390f35b34801561012e57600080fd5b506101376105fa565b60405161014491906111cd565b60405180910390f35b34801561015957600080fd5b50610174600480360381019061016f9190611350565b6109d0565b6040516101819190610ee7565b60405180910390f35b60006020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010180546101d390611460565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff90611460565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b50505050509080600201805461026190611460565b80601f016020809104026020016040519081016040528092919081815260200182805461028d90611460565b80156102da5780601f106102af576101008083540402835291602001916102da565b820191906000526020600020905b8154815290600101906020018083116102bd57829003601f168201915b50505050509080600301549080600401549080600501549080600601805461030190611460565b80601f016020809104026020016040519081016040528092919081815260200182805461032d90611460565b801561037a5780601f1061034f5761010080835404028352916020019161037a565b820191906000526020600020905b81548152906001019060200180831161035d57829003601f168201915b5050505050905087565b6060806000808481526020019081526020016000206007016000808581526020019081526020016000206008018180548060200260200160405190810160405280929190818152602001828054801561043257602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116103e8575b505050505091508080548060200260200160405190810160405280929190818152602001828054801561048457602002820191906000526020600020905b815481526020019060010190808311610470575b5050505050905091509150915091565b60003490506000806000848152602001908152602001600020905080600701339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060080182908060018154018082558091505060019003906000526020600020016000909190919091505560008160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1683604051610589906114c2565b60006040518083038185875af1925050503d80600081146105c6576040519150601f19603f3d011682016040523d82523d6000602084013e6105cb565b606091505b5050905080156105ee578282600501546105e59190611506565b82600501819055505b50505050565b60015481565b6060600060015467ffffffffffffffff81111561061a57610619611225565b5b60405190808252806020026020018201604052801561065357816020015b610640610af7565b8152602001906001900390816106385790505b50905060005b6001548110156109c8576000806000838152602001908152602001600020905080604051806101200160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546106ec90611460565b80601f016020809104026020016040519081016040528092919081815260200182805461071890611460565b80156107655780601f1061073a57610100808354040283529160200191610765565b820191906000526020600020905b81548152906001019060200180831161074857829003601f168201915b5050505050815260200160028201805461077e90611460565b80601f01602080910402602001604051908101604052809291908181526020018280546107aa90611460565b80156107f75780601f106107cc576101008083540402835291602001916107f7565b820191906000526020600020905b8154815290600101906020018083116107da57829003601f168201915b5050505050815260200160038201548152602001600482015481526020016005820154815260200160068201805461082e90611460565b80601f016020809104026020016040519081016040528092919081815260200182805461085a90611460565b80156108a75780601f1061087c576101008083540402835291602001916108a7565b820191906000526020600020905b81548152906001019060200180831161088a57829003601f168201915b505050505081526020016007820180548060200260200160405190810160405280929190818152602001828054801561093557602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116108eb575b505050505081526020016008820180548060200260200160405190810160405280929190818152602001828054801561098d57602002820191906000526020600020905b815481526020019060010190808311610979575b5050505050815250508383815181106109a9576109a861153a565b5b60200260200101819052505080806109c090611569565b915050610659565b508091505090565b6000806000806001548152602001908152602001600020905042816003015410610a2f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2690611623565b60405180910390fd5b878160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555086816001019081610a8391906117ef565b5085816002019081610a9591906117ef565b508381600401819055508481600301819055506000816005018190555082816006019081610ac391906117ef565b5060016000815480929190610ad790611569565b919050555060018054610aea91906118c1565b9150509695505050505050565b604051806101200160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160608152602001606081526020016000815260200160008152602001600081526020016060815260200160608152602001606081525090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b610b8081610b6d565b8114610b8b57600080fd5b50565b600081359050610b9d81610b77565b92915050565b600060208284031215610bb957610bb8610b63565b5b6000610bc784828501610b8e565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610bfb82610bd0565b9050919050565b610c0b81610bf0565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610c4b578082015181840152602081019050610c30565b60008484015250505050565b6000601f19601f8301169050919050565b6000610c7382610c11565b610c7d8185610c1c565b9350610c8d818560208601610c2d565b610c9681610c57565b840191505092915050565b610caa81610b6d565b82525050565b600060e082019050610cc5600083018a610c02565b8181036020830152610cd78189610c68565b90508181036040830152610ceb8188610c68565b9050610cfa6060830187610ca1565b610d076080830186610ca1565b610d1460a0830185610ca1565b81810360c0830152610d268184610c68565b905098975050505050505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610d6981610bf0565b82525050565b6000610d7b8383610d60565b60208301905092915050565b6000602082019050919050565b6000610d9f82610d34565b610da98185610d3f565b9350610db483610d50565b8060005b83811015610de5578151610dcc8882610d6f565b9750610dd783610d87565b925050600181019050610db8565b5085935050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610e2781610b6d565b82525050565b6000610e398383610e1e565b60208301905092915050565b6000602082019050919050565b6000610e5d82610df2565b610e678185610dfd565b9350610e7283610e0e565b8060005b83811015610ea3578151610e8a8882610e2d565b9750610e9583610e45565b925050600181019050610e76565b5085935050505092915050565b60006040820190508181036000830152610eca8185610d94565b90508181036020830152610ede8184610e52565b90509392505050565b6000602082019050610efc6000830184610ca1565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600082825260208201905092915050565b6000610f4a82610c11565b610f548185610f2e565b9350610f64818560208601610c2d565b610f6d81610c57565b840191505092915050565b600082825260208201905092915050565b6000610f9482610d34565b610f9e8185610f78565b9350610fa983610d50565b8060005b83811015610fda578151610fc18882610d6f565b9750610fcc83610d87565b925050600181019050610fad565b5085935050505092915050565b600082825260208201905092915050565b600061100382610df2565b61100d8185610fe7565b935061101883610e0e565b8060005b838110156110495781516110308882610e2d565b975061103b83610e45565b92505060018101905061101c565b5085935050505092915050565b60006101208301600083015161106f6000860182610d60565b50602083015184820360208601526110878282610f3f565b915050604083015184820360408601526110a18282610f3f565b91505060608301516110b66060860182610e1e565b5060808301516110c96080860182610e1e565b5060a08301516110dc60a0860182610e1e565b5060c083015184820360c08601526110f48282610f3f565b91505060e083015184820360e086015261110e8282610f89565b91505061010083015184820361010086015261112a8282610ff8565b9150508091505092915050565b60006111438383611056565b905092915050565b6000602082019050919050565b600061116382610f02565b61116d8185610f0d565b93508360208202850161117f85610f1e565b8060005b858110156111bb578484038952815161119c8582611137565b94506111a78361114b565b925060208a01995050600181019050611183565b50829750879550505050505092915050565b600060208201905081810360008301526111e78184611158565b905092915050565b6111f881610bf0565b811461120357600080fd5b50565b600081359050611215816111ef565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61125d82610c57565b810181811067ffffffffffffffff8211171561127c5761127b611225565b5b80604052505050565b600061128f610b59565b905061129b8282611254565b919050565b600067ffffffffffffffff8211156112bb576112ba611225565b5b6112c482610c57565b9050602081019050919050565b82818337600083830152505050565b60006112f36112ee846112a0565b611285565b90508281526020810184848401111561130f5761130e611220565b5b61131a8482856112d1565b509392505050565b600082601f8301126113375761133661121b565b5b81356113478482602086016112e0565b91505092915050565b60008060008060008060c0878903121561136d5761136c610b63565b5b600061137b89828a01611206565b965050602087013567ffffffffffffffff81111561139c5761139b610b68565b5b6113a889828a01611322565b955050604087013567ffffffffffffffff8111156113c9576113c8610b68565b5b6113d589828a01611322565b94505060606113e689828a01610b8e565b93505060806113f789828a01610b8e565b92505060a087013567ffffffffffffffff81111561141857611417610b68565b5b61142489828a01611322565b9150509295509295509295565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061147857607f821691505b60208210810361148b5761148a611431565b5b50919050565b600081905092915050565b50565b60006114ac600083611491565b91506114b78261149c565b600082019050919050565b60006114cd8261149f565b9150819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061151182610b6d565b915061151c83610b6d565b9250828201905080821115611534576115336114d7565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600061157482610b6d565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036115a6576115a56114d7565b5b600182019050919050565b7f54686520646561646c696e652073686f756c642062652061206461746520696e60008201527f20746865206675747572652e0000000000000000000000000000000000000000602082015250565b600061160d602c83610c1c565b9150611618826115b1565b604082019050919050565b6000602082019050818103600083015261163c81611600565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026116a57fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611668565b6116af8683611668565b95508019841693508086168417925050509392505050565b6000819050919050565b60006116ec6116e76116e284610b6d565b6116c7565b610b6d565b9050919050565b6000819050919050565b611706836116d1565b61171a611712826116f3565b848454611675565b825550505050565b600090565b61172f611722565b61173a8184846116fd565b505050565b5b8181101561175e57611753600082611727565b600181019050611740565b5050565b601f8211156117a35761177481611643565b61177d84611658565b8101602085101561178c578190505b6117a061179885611658565b83018261173f565b50505b505050565b600082821c905092915050565b60006117c6600019846008026117a8565b1980831691505092915050565b60006117df83836117b5565b9150826002028217905092915050565b6117f882610c11565b67ffffffffffffffff81111561181157611810611225565b5b61181b8254611460565b611826828285611762565b600060209050601f8311600181146118595760008415611847578287015190505b61185185826117d3565b8655506118b9565b601f19841661186786611643565b60005b8281101561188f5784890151825560018201915060208501945060208101905061186a565b868310156118ac57848901516118a8601f8916826117b5565b8355505b6001600288020188555050505b505050505050565b60006118cc82610b6d565b91506118d783610b6d565b92508282039050818111156118ef576118ee6114d7565b5b9291505056fea2646970667358221220fdd93355a85400fad86aebdef13aa5d364da0db620a8962b48c5148befad6e5f64736f6c63430008120033";

type CrowdFundingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CrowdFundingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CrowdFunding__factory extends ContractFactory {
  constructor(...args: CrowdFundingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CrowdFunding> {
    return super.deploy(overrides || {}) as Promise<CrowdFunding>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): CrowdFunding {
    return super.attach(address) as CrowdFunding;
  }
  override connect(signer: Signer): CrowdFunding__factory {
    return super.connect(signer) as CrowdFunding__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CrowdFundingInterface {
    return new utils.Interface(_abi) as CrowdFundingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CrowdFunding {
    return new Contract(address, _abi, signerOrProvider) as CrowdFunding;
  }
}
