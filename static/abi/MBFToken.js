export default {
  'contractName': 'MBFToken',
  'abi': [
    {
      'constant': true,
      'inputs': [],
      'name': 'name',
      'outputs': [
        {
          'name': '',
          'type': 'string'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': 'guy',
          'type': 'address'
        },
        {
          'name': 'wad',
          'type': 'uint256'
        }
      ],
      'name': 'approve',
      'outputs': [
        {
          'name': '',
          'type': 'bool'
        }
      ],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': 'member',
          'type': 'address'
        }
      ],
      'name': 'removeMember',
      'outputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'globalDecimals',
      'outputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'name': 'historyProfits',
      'outputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'totalSupply',
      'outputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'decimals',
      'outputs': [
        {
          'name': '',
          'type': 'uint8'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [
        {
          'name': '',
          'type': 'address'
        }
      ],
      'name': 'accounts',
      'outputs': [
        {
          'name': 'profit',
          'type': 'uint256'
        },
        {
          'name': 'taken',
          'type': 'uint256'
        },
        {
          'name': 'settled',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [
        {
          'name': '',
          'type': 'address'
        }
      ],
      'name': 'balanceOf',
      'outputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [],
      'name': 'renounceOwnership',
      'outputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'totalProfit',
      'outputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'owner',
      'outputs': [
        {
          'name': '',
          'type': 'address'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'isOwner',
      'outputs': [
        {
          'name': '',
          'type': 'bool'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'symbol',
      'outputs': [
        {
          'name': '',
          'type': 'string'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [
        {
          'name': '',
          'type': 'address'
        }
      ],
      'name': 'whitelist',
      'outputs': [
        {
          'name': '',
          'type': 'bool'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': 'dst',
          'type': 'address'
        },
        {
          'name': 'wad',
          'type': 'uint256'
        }
      ],
      'name': 'transfer',
      'outputs': [
        {
          'name': '',
          'type': 'bool'
        }
      ],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'finalized',
      'outputs': [
        {
          'name': '',
          'type': 'bool'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'name': 'historyTime',
      'outputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': 'member',
          'type': 'address'
        }
      ],
      'name': 'addMember',
      'outputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'maxSupply',
      'outputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'targetPrice',
      'outputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [
        {
          'name': '',
          'type': 'address'
        },
        {
          'name': '',
          'type': 'address'
        }
      ],
      'name': 'allowance',
      'outputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': 'newOwner',
          'type': 'address'
        }
      ],
      'name': 'transferOwnership',
      'outputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'name': '_collateralAddress',
          'type': 'address'
        },
        {
          'name': '_maxSupply',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'constructor'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'name': '_owner',
          'type': 'address'
        },
        {
          'indexed': false,
          'name': '_value',
          'type': 'uint256'
        }
      ],
      'name': 'Mint',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'name': '_owner',
          'type': 'address'
        },
        {
          'indexed': false,
          'name': '_value',
          'type': 'uint256'
        }
      ],
      'name': 'Burn',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'name': '_owner',
          'type': 'address'
        },
        {
          'indexed': false,
          'name': '_value',
          'type': 'uint256'
        }
      ],
      'name': 'Withdraw',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': false,
          'name': '_value',
          'type': 'uint256'
        }
      ],
      'name': 'Pay',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'name': 'previousOwner',
          'type': 'address'
        },
        {
          'indexed': true,
          'name': 'newOwner',
          'type': 'address'
        }
      ],
      'name': 'OwnershipTransferred',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'name': '_owner',
          'type': 'address'
        },
        {
          'indexed': true,
          'name': '_spender',
          'type': 'address'
        },
        {
          'indexed': false,
          'name': '_value',
          'type': 'uint256'
        }
      ],
      'name': 'Approval',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'name': '_from',
          'type': 'address'
        },
        {
          'indexed': true,
          'name': '_to',
          'type': 'address'
        },
        {
          'indexed': false,
          'name': '_value',
          'type': 'uint256'
        }
      ],
      'name': 'Transfer',
      'type': 'event'
    },
    {
      'constant': false,
      'inputs': [],
      'name': 'finalize',
      'outputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': 'wad',
          'type': 'uint256'
        }
      ],
      'name': 'setTargetPrice',
      'outputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': 'wad',
          'type': 'uint256'
        }
      ],
      'name': 'pay',
      'outputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [
        {
          'name': 'beneficiary',
          'type': 'address'
        }
      ],
      'name': 'unsettledProfitOf',
      'outputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [
        {
          'name': 'beneficiary',
          'type': 'address'
        }
      ],
      'name': 'profitOf',
      'outputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [
        {
          'name': 'beneficiary',
          'type': 'address'
        }
      ],
      'name': 'totalProfitOf',
      'outputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [],
      'name': 'withdraw',
      'outputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': 'src',
          'type': 'address'
        },
        {
          'name': 'dst',
          'type': 'address'
        },
        {
          'name': 'wad',
          'type': 'uint256'
        }
      ],
      'name': 'transferFrom',
      'outputs': [
        {
          'name': '',
          'type': 'bool'
        }
      ],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': 'wad',
          'type': 'uint256'
        }
      ],
      'name': 'join',
      'outputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    }
  ],
  'metadata': '{\'compiler\':{\'version\':\'0.5.10+commit.5a6ea5b1\'},\'language\':\'Solidity\',\'output\':{\'abi\':[{\'constant\':false,\'inputs\':[{\'name\':\'wad\',\'type\':\'uint256\'}],\'name\':\'join\',\'outputs\':[],\'payable\':false,\'stateMutability\':\'nonpayable\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[],\'name\':\'name\',\'outputs\':[{\'name\':\'\',\'type\':\'string\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'constant\':false,\'inputs\':[{\'name\':\'guy\',\'type\':\'address\'},{\'name\':\'wad\',\'type\':\'uint256\'}],\'name\':\'approve\',\'outputs\':[{\'name\':\'\',\'type\':\'bool\'}],\'payable\':false,\'stateMutability\':\'nonpayable\',\'type\':\'function\'},{\'constant\':false,\'inputs\':[{\'name\':\'member\',\'type\':\'address\'}],\'name\':\'removeMember\',\'outputs\':[],\'payable\':false,\'stateMutability\':\'nonpayable\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[],\'name\':\'globalDecimals\',\'outputs\':[{\'name\':\'\',\'type\':\'uint256\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[{\'name\':\'beneficiary\',\'type\':\'address\'}],\'name\':\'totalProfitOf\',\'outputs\':[{\'name\':\'\',\'type\':\'uint256\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[{\'name\':\'\',\'type\':\'uint256\'}],\'name\':\'historyProfits\',\'outputs\':[{\'name\':\'\',\'type\':\'uint256\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[],\'name\':\'totalSupply\',\'outputs\':[{\'name\':\'\',\'type\':\'uint256\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'constant\':false,\'inputs\':[{\'name\':\'src\',\'type\':\'address\'},{\'name\':\'dst\',\'type\':\'address\'},{\'name\':\'wad\',\'type\':\'uint256\'}],\'name\':\'transferFrom\',\'outputs\':[{\'name\':\'\',\'type\':\'bool\'}],\'payable\':false,\'stateMutability\':\'nonpayable\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[],\'name\':\'decimals\',\'outputs\':[{\'name\':\'\',\'type\':\'uint8\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'constant\':false,\'inputs\':[],\'name\':\'withdraw\',\'outputs\':[],\'payable\':false,\'stateMutability\':\'nonpayable\',\'type\':\'function\'},{\'constant\':false,\'inputs\':[],\'name\':\'finalize\',\'outputs\':[],\'payable\':false,\'stateMutability\':\'nonpayable\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[{\'name\':\'beneficiary\',\'type\':\'address\'}],\'name\':\'profitOf\',\'outputs\':[{\'name\':\'\',\'type\':\'uint256\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[{\'name\':\'beneficiary\',\'type\':\'address\'}],\'name\':\'unsettledProfitOf\',\'outputs\':[{\'name\':\'\',\'type\':\'uint256\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[{\'name\':\'\',\'type\':\'address\'}],\'name\':\'accounts\',\'outputs\':[{\'name\':\'profit\',\'type\':\'uint256\'},{\'name\':\'taken\',\'type\':\'uint256\'},{\'name\':\'settled\',\'type\':\'uint256\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'constant\':false,\'inputs\':[{\'name\':\'wad\',\'type\':\'uint256\'}],\'name\':\'setTargetPrice\',\'outputs\':[],\'payable\':false,\'stateMutability\':\'nonpayable\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[{\'name\':\'\',\'type\':\'address\'}],\'name\':\'balanceOf\',\'outputs\':[{\'name\':\'\',\'type\':\'uint256\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'constant\':false,\'inputs\':[],\'name\':\'renounceOwnership\',\'outputs\':[],\'payable\':false,\'stateMutability\':\'nonpayable\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[],\'name\':\'totalProfit\',\'outputs\':[{\'name\':\'\',\'type\':\'uint256\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[],\'name\':\'owner\',\'outputs\':[{\'name\':\'\',\'type\':\'address\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[],\'name\':\'isOwner\',\'outputs\':[{\'name\':\'\',\'type\':\'bool\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[],\'name\':\'symbol\',\'outputs\':[{\'name\':\'\',\'type\':\'string\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[{\'name\':\'\',\'type\':\'address\'}],\'name\':\'whitelist\',\'outputs\':[{\'name\':\'\',\'type\':\'bool\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'constant\':false,\'inputs\':[{\'name\':\'dst\',\'type\':\'address\'},{\'name\':\'wad\',\'type\':\'uint256\'}],\'name\':\'transfer\',\'outputs\':[{\'name\':\'\',\'type\':\'bool\'}],\'payable\':false,\'stateMutability\':\'nonpayable\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[],\'name\':\'finalized\',\'outputs\':[{\'name\':\'\',\'type\':\'bool\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[{\'name\':\'\',\'type\':\'uint256\'}],\'name\':\'historyTime\',\'outputs\':[{\'name\':\'\',\'type\':\'uint256\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'constant\':false,\'inputs\':[{\'name\':\'wad\',\'type\':\'uint256\'}],\'name\':\'pay\',\'outputs\':[],\'payable\':false,\'stateMutability\':\'nonpayable\',\'type\':\'function\'},{\'constant\':false,\'inputs\':[{\'name\':\'member\',\'type\':\'address\'}],\'name\':\'addMember\',\'outputs\':[],\'payable\':false,\'stateMutability\':\'nonpayable\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[],\'name\':\'maxSupply\',\'outputs\':[{\'name\':\'\',\'type\':\'uint256\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[],\'name\':\'targetPrice\',\'outputs\':[{\'name\':\'\',\'type\':\'uint256\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'constant\':true,\'inputs\':[{\'name\':\'\',\'type\':\'address\'},{\'name\':\'\',\'type\':\'address\'}],\'name\':\'allowance\',\'outputs\':[{\'name\':\'\',\'type\':\'uint256\'}],\'payable\':false,\'stateMutability\':\'view\',\'type\':\'function\'},{\'constant\':false,\'inputs\':[{\'name\':\'newOwner\',\'type\':\'address\'}],\'name\':\'transferOwnership\',\'outputs\':[],\'payable\':false,\'stateMutability\':\'nonpayable\',\'type\':\'function\'},{\'inputs\':[{\'name\':\'_collateralAddress\',\'type\':\'address\'},{\'name\':\'_maxSupply\',\'type\':\'uint256\'}],\'payable\':false,\'stateMutability\':\'nonpayable\',\'type\':\'constructor\'},{\'anonymous\':false,\'inputs\':[{\'indexed\':true,\'name\':\'_owner\',\'type\':\'address\'},{\'indexed\':false,\'name\':\'_value\',\'type\':\'uint256\'}],\'name\':\'Mint\',\'type\':\'event\'},{\'anonymous\':false,\'inputs\':[{\'indexed\':true,\'name\':\'_owner\',\'type\':\'address\'},{\'indexed\':false,\'name\':\'_value\',\'type\':\'uint256\'}],\'name\':\'Burn\',\'type\':\'event\'},{\'anonymous\':false,\'inputs\':[{\'indexed\':true,\'name\':\'_owner\',\'type\':\'address\'},{\'indexed\':false,\'name\':\'_value\',\'type\':\'uint256\'}],\'name\':\'Withdraw\',\'type\':\'event\'},{\'anonymous\':false,\'inputs\':[{\'indexed\':false,\'name\':\'_value\',\'type\':\'uint256\'}],\'name\':\'Pay\',\'type\':\'event\'},{\'anonymous\':false,\'inputs\':[{\'indexed\':true,\'name\':\'previousOwner\',\'type\':\'address\'},{\'indexed\':true,\'name\':\'newOwner\',\'type\':\'address\'}],\'name\':\'OwnershipTransferred\',\'type\':\'event\'},{\'anonymous\':false,\'inputs\':[{\'indexed\':true,\'name\':\'_owner\',\'type\':\'address\'},{\'indexed\':true,\'name\':\'_spender\',\'type\':\'address\'},{\'indexed\':false,\'name\':\'_value\',\'type\':\'uint256\'}],\'name\':\'Approval\',\'type\':\'event\'},{\'anonymous\':false,\'inputs\':[{\'indexed\':true,\'name\':\'_from\',\'type\':\'address\'},{\'indexed\':true,\'name\':\'_to\',\'type\':\'address\'},{\'indexed\':false,\'name\':\'_value\',\'type\':\'uint256\'}],\'name\':\'Transfer\',\'type\':\'event\'}],\'devdoc\':{\'methods\':{\'isOwner()\':{\'details\':\'Returns true if the caller is the current owner.\'},\'owner()\':{\'details\':\'Returns the address of the current owner.\'},\'renounceOwnership()\':{\'details\':\'Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\'},\'transferOwnership(address)\':{\'details\':\'Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\'}}},\'userdoc\':{\'methods\':{}}},\'settings\':{\'compilationTarget\':{\'/Users/yangzhao/WorkSpace/contract-fund-p106-1/contracts/MBFToken.sol\':\'MBFToken\'},\'evmVersion\':\'petersburg\',\'libraries\':{},\'optimizer\':{\'enabled\':true,\'runs\':200},\'remappings\':[]},\'sources\':{\'/Users/yangzhao/WorkSpace/contract-fund-p106-1/contracts/ERC20Token.sol\':{\'keccak256\':\'0x196845c5556459959f73724eaa285e25c5a1353644c345d13b9847c648c869b6\',\'urls\':[\'bzzr://b981176a40aa360994b3278f11a3c15987dd47b846644bf30714eac44438e698\',\'dweb:/ipfs/QmcQk9czidaKai8rZsz1To56AUv4M7nR8SbTm2tz5seAw3\']},\'/Users/yangzhao/WorkSpace/contract-fund-p106-1/contracts/MBFToken.sol\':{\'keccak256\':\'0x8c25640ad9ab8c6dec5932ec7e668a4e223bd0a4d62b9d616930bc4161843898\',\'urls\':[\'bzzr://6d51bf4d092f29c65a392d1790cfb3d8b50c341c77674373b86fc7f4068ae1e1\',\'dweb:/ipfs/QmYt2M2R5xWYc6HXjyafssHLsqjuNJ67Wi8ejVPhw97edy\']},\'/Users/yangzhao/WorkSpace/contract-fund-p106-1/contracts/MintableERC20Token.sol\':{\'keccak256\':\'0x76b88bee563e7ac6ea107b9a9eee93579b17fd450932b7a99c621d0bc40e8c67\',\'urls\':[\'bzzr://4157fbf112f07e67374722c524e1b1ba3cf81f23e746dfa295b0884ec9b2b3bf\',\'dweb:/ipfs/QmXxxYuFmhPxoactexartzjgUdZ7h3ecekTh32LJwpKLao\']},\'/Users/yangzhao/WorkSpace/contract-fund-p106-1/contracts/components/Ownable.sol\':{\'keccak256\':\'0x9d48a8c94207d291eee56d306554a4fbc5162c46a82fb479fc30d6713ae89e52\',\'urls\':[\'bzzr://4d4e6f1b1d97ae3b76181e069bf5a00c045e5665368634a681ecb03a76c525c3\',\'dweb:/ipfs/QmT7HtDRKBtyvnFnPVBPh46TCTaFWtZh8Sjrix8RYHWwyv\']},\'/Users/yangzhao/WorkSpace/contract-fund-p106-1/contracts/components/Whitelist.sol\':{\'keccak256\':\'0xc60b2126b084c27cd35fdd51cda3d80c83bd2ab54d406c3279c0759c691b87dd\',\'urls\':[\'bzzr://8008267ab2997a92c145b668c5e9956241b6b6d06e309342cf7ed836de094bc3\',\'dweb:/ipfs/QmcpMFj3Mt42Bqstcaedkwhsk1cKihRocHbAbRxrjgq8iV\']},\'/Users/yangzhao/WorkSpace/contract-fund-p106-1/contracts/interfaces/IERC20Token.sol\':{\'keccak256\':\'0xf33407a438a4202779be79690141ecbcad1146c48eb526635f56c182f3b25f73\',\'urls\':[\'bzzr://b6aa3f7936ba91776a0578ea0125de98e0d0d44a0e7be0f40a75c818faf56363\',\'dweb:/ipfs/QmWe1ANCixBZYX72FaL1F5epqXyZMwWEmKKUgNf83G7cdQ\']},\'/Users/yangzhao/WorkSpace/contract-fund-p106-1/contracts/lib/Address.sol\':{\'keccak256\':\'0xd793386f5dcdb2201879fb3369f4d481a9368029cb0f1448e3008b49249d53f4\',\'urls\':[\'bzzr://d744df3c4289dad0be2de8373e0ec76afdc9ed6912688e1bdb15aa5a36d5d002\',\'dweb:/ipfs/QmcggMfrTKqZRWowNpmFD67GxkgTN6b2thXj9wfYekP2GM\']},\'/Users/yangzhao/WorkSpace/contract-fund-p106-1/contracts/lib/SafeERC20Token.sol\':{\'keccak256\':\'0xddbe5e34035ab984fa3f49b99b889d99929f6a83d817e7d9e0c58451934cb59f\',\'urls\':[\'bzzr://19f32f6826a12677f9fce57431af59ddf4fd096bae48db5e3b543e979b0f0882\',\'dweb:/ipfs/QmZdxJoe9gqfbzy3BTbq32z8Np9cxMQShVgg2EHSbzZXqD\']},\'/Users/yangzhao/WorkSpace/contract-fund-p106-1/contracts/lib/SafeMath.sol\':{\'keccak256\':\'0xd9990b860d1ea264416586255a032914ce54c8a05d8c0afbad3066415795a0dd\',\'urls\':[\'bzzr://ebf86c56405d0aa146d90ed06d960343a949f3c7a711e33bfde27f7f259763d1\',\'dweb:/ipfs/QmVuBckkBSM8NvwJtcbf44TC9LJfCZAYeAjBymv96QWgP7\']},\'/Users/yangzhao/WorkSpace/contract-fund-p106-1/contracts/lib/WadMath.sol\':{\'keccak256\':\'0xe5408ce5f3468b3c7581a110b280865b7dca37f0a6653da6cc54a2ed6aa8bbef\',\'urls\':[\'bzzr://fa67a266b226abaeea20152b99a52eb6c34ac1856996a3e314919df87e9d38c7\',\'dweb:/ipfs/QmbLuSoR2h2uvNg4fxeze4eEpfLC9QXq52Ao6pbjwgpqs7\']}},\'version\':1}',
  'bytecode': '0x60806040526000805460ff191660121790553480156200001e57600080fd5b5060405162001be538038062001be5833981810160405260408110156200004457600080fd5b508051602091820151604080518082018252600a81527f5031303620546f6b656e000000000000000000000000000000000000000000008186019081528251808401909352600483527f503130360000000000000000000000000000000000000000000000000000000095830195909552805193949293909283918391620000d091600191906200016b565b508051620000e69060029060208401906200016b565b5050600680546001600160a01b0319163317908190556040516001600160a01b03919091169350600092507f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091508290a3600880546001600160a01b0319166001600160a01b039390931692909217909155600955600a805460ff1916905562000210565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620001ae57805160ff1916838001178555620001de565b82800160010185558215620001de579182015b82811115620001de578251825591602001919060010190620001c1565b50620001ec929150620001f0565b5090565b6200020d91905b80821115620001ec5760008155600101620001f7565b90565b6119c580620002206000396000f3fe608060405234801561001057600080fd5b50600436106101f05760003560e01c806370a082311161010f578063b3f05b97116100a2578063d5abeb0111610071578063d5abeb0114610591578063dc38679c14610599578063dd62ed3e146105a1578063f2fde38b146105cf576101f0565b8063b3f05b9714610529578063b68d042014610531578063c290d6911461054e578063ca6d56dc1461056b576101f0565b80638f32d59b116100de5780638f32d59b146104c757806395d89b41146104cf5780639b19251a146104d7578063a9059cbb146104fd576101f0565b806370a082311461046d578063715018a614610493578063860015191461049b5780638da5cb5b146104a3576101f0565b806323b872dd1161018757806354198ce91161015657806354198ce9146103c05780635c19bcd6146103e65780635e5c06e21461040c5780636a64eff814610450576101f0565b806323b872dd1461035c578063313ce567146103925780633ccfd60b146103b05780634bb278f3146103b8576101f0565b80630f45684a116101c35780630f45684a146102f7578063126a0d2f146103115780631649f8881461033757806318160ddd14610354576101f0565b8063049878f3146101f557806306fdde0314610214578063095ea7b3146102915780630b1ca49a146102d1575b600080fd5b6102126004803603602081101561020b57600080fd5b50356105f5565b005b61021c6107c9565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561025657818101518382015260200161023e565b50505050905090810190601f1680156102835780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102bd600480360360408110156102a757600080fd5b506001600160a01b038135169060200135610856565b604080519115158252519081900360200190f35b610212600480360360208110156102e757600080fd5b50356001600160a01b03166108bd565b6102ff61097f565b60408051918252519081900360200190f35b6102ff6004803603602081101561032757600080fd5b50356001600160a01b0316610984565b6102ff6004803603602081101561034d57600080fd5b50356109c2565b6102ff6109e0565b6102bd6004803603606081101561037257600080fd5b506001600160a01b038135811691602081013590911690604001356109e6565b61039a610a4e565b6040805160ff9092168252519081900360200190f35b610212610a57565b610212610b8a565b6102ff600480360360208110156103d657600080fd5b50356001600160a01b0316610ca6565b6102ff600480360360208110156103fc57600080fd5b50356001600160a01b0316610ccf565b6104326004803603602081101561042257600080fd5b50356001600160a01b0316610d71565b60408051938452602084019290925282820152519081900360600190f35b6102126004803603602081101561046657600080fd5b5035610d92565b6102ff6004803603602081101561048357600080fd5b50356001600160a01b0316610e27565b610212610e39565b6102ff610eca565b6104ab610ed0565b604080516001600160a01b039092168252519081900360200190f35b6102bd610edf565b61021c610ef0565b6102bd600480360360208110156104ed57600080fd5b50356001600160a01b0316610f48565b6102bd6004803603604081101561051357600080fd5b506001600160a01b038135169060200135610f5d565b6102bd610f6a565b6102ff6004803603602081101561054757600080fd5b5035610f73565b6102126004803603602081101561056457600080fd5b5035610f80565b6102126004803603602081101561058157600080fd5b50356001600160a01b03166110c2565b6102ff61118c565b6102ff611192565b6102ff600480360360408110156105b757600080fd5b506001600160a01b0381358116916020013516611198565b610212600480360360208110156105e557600080fd5b50356001600160a01b03166111b5565b3360009081526007602052604090205460ff16610648576040805162461bcd60e51b815260206004820152600c60248201526b4d454d424552535f4f4e4c5960a01b604482015290519081900360640190fd5b600a5460ff1615610694576040805162461bcd60e51b81526020600482015260116024820152701053149150511657d19253905312569151607a1b604482015290519081900360640190fd5b6000600b54116106dc576040805162461bcd60e51b815260206004820152600e60248201526d14149250d157d393d517d253925560921b604482015290519081900360640190fd5b60008111801561070057506003546009546106fc9163ffffffff61120816565b8111155b610746576040805162461bcd60e51b8152602060048201526012602482015271455843454544535f4d41585f535550504c5960701b604482015290519081900360640190fd5b600061075d600b548361126590919063ffffffff16565b90506107853361076b610ed0565b6008546001600160a01b031691908463ffffffff61129e16565b61078f33836112fe565b60408051838152905133917f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885919081900360200190a25050565b60018054604080516020600284861615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561084e5780601f106108235761010080835404028352916020019161084e565b820191906000526020600020905b81548152906001019060200180831161083157829003601f168201915b505050505081565b3360008181526005602090815260408083206001600160a01b038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a35060015b92915050565b6108c5610edf565b610904576040805162461bcd60e51b81526020600482018190526024820152600080516020611947833981519152604482015290519081900360640190fd5b6001600160a01b03811660009081526007602052604090205460ff1661095e576040805162461bcd60e51b815260206004820152600a6024820152694e4f545f45584953545360b01b604482015290519081900360640190fd5b6001600160a01b03166000908152600760205260409020805460ff19169055565b601281565b60006109ba61099283610ca6565b6001600160a01b0384166000908152600f60205260409020600101549063ffffffff61139b16565b90505b919050565b600d81815481106109cf57fe5b600091825260209091200154905081565b60035481565b60006109f1846113f5565b6001600160a01b038316600090815260046020526040902054610a3257600c546001600160a01b0384166000908152600f6020526040902060020155610a3b565b610a3b836113f5565b610a4684848461144f565b949350505050565b60005460ff1681565b33610a9b576040805162461bcd60e51b815260206004820152600f60248201526e494e56414c49445f4144445245535360881b604482015290519081900360640190fd5b610aa4336113f5565b336000908152600f6020526040902054610af1576040805162461bcd60e51b81526020600482015260096024820152681393d7d41493d1925560ba1b604482015290519081900360640190fd5b336000908152600f60205260408120805491815560010154610b19908263ffffffff61139b16565b336000908152600f6020526040902060010155610b51610b37610ed0565b6008546001600160a01b031690338463ffffffff61129e16565b60408051828152905133917f884edad9ce6fa2440d8a54cc123490eb96d2768479d49ff9c7366125a9424364919081900360200190a250565b610b92610edf565b610bd1576040805162461bcd60e51b81526020600482018190526024820152600080516020611947833981519152604482015290519081900360640190fd5b600a5460ff1615610c22576040805162461bcd60e51b815260206004820152601660248201527543414e5f4f4e4c595f46494e414c495a455f4f4e434560501b604482015290519081900360640190fd5b600a805460ff19166001179055600354600954600091610c48919063ffffffff61120816565b9050610c5b610c55610ed0565b826112fe565b610c63610ed0565b6001600160a01b03167f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885826040518082815260200191505060405180910390a250565b6001600160a01b0381166000908152600f6020526040812054610cc883610ccf565b0192915050565b6001600160a01b0381166000908152600f6020526040812060020154600c541415610cfc575060006109bd565b6001600160a01b0382166000908152600f6020526040812060020154600c54610d2a9163ffffffff61120816565b6009546001600160a01b038516600090815260046020526040902054919250610d6a91610d5e90849063ffffffff61126516565b9063ffffffff6115f616565b9392505050565b600f6020526000908152604090208054600182015460029092015490919083565b610d9a610edf565b610dd9576040805162461bcd60e51b81526020600482018190526024820152600080516020611947833981519152604482015290519081900360640190fd5b60008111610e22576040805162461bcd60e51b8152602060048201526011602482015270494e56414c49445f5249475f505249434560781b604482015290519081900360640190fd5b600b55565b60046020526000908152604090205481565b610e41610edf565b610e80576040805162461bcd60e51b81526020600482018190526024820152600080516020611947833981519152604482015290519081900360640190fd5b6006546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600680546001600160a01b0319169055565b600c5481565b6006546001600160a01b031690565b6006546001600160a01b0316331490565b6002805460408051602060018416156101000260001901909316849004601f8101849004840282018401909252818152929183018282801561084e5780601f106108235761010080835404028352916020019161084e565b60076020526000908152604090205460ff1681565b6000610d6a3384846109e6565b600a5460ff1681565b600e81815481106109cf57fe5b610f88610edf565b610fc7576040805162461bcd60e51b81526020600482018190526024820152600080516020611947833981519152604482015290519081900360640190fd5b600a5460ff161515600114611013576040805162461bcd60e51b815260206004820152600d60248201526c1393d517d19253905312569151609a1b604482015290519081900360640190fd5b600c54611026908263ffffffff61139b16565b600c55600d805460018181019092557fd7b6990105719101dabeb77144f2a3385c8033acd3af97e9423a695e81ad1eb501829055600e80549182018155600052427fbb7b4a454dc3493923482f07822329ed19e8244eff582cc204f8554c3620c3fd909101556040805182815290517f781a2cca10f15083d2de4efa525a850679da338505fe558eb29b6ab494738deb9181900360200190a150565b6110ca610edf565b611109576040805162461bcd60e51b81526020600482018190526024820152600080516020611947833981519152604482015290519081900360640190fd5b6001600160a01b03811660009081526007602052604090205460ff1615611168576040805162461bcd60e51b815260206004820152600e60248201526d414c52454144595f45584953545360901b604482015290519081900360640190fd5b6001600160a01b03166000908152600760205260409020805460ff19166001179055565b60095481565b600b5481565b600560209081526000928352604080842090915290825290205481565b6111bd610edf565b6111fc576040805162461bcd60e51b81526020600482018190526024820152600080516020611947833981519152604482015290519081900360640190fd5b61120581611616565b50565b60008282111561125f576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b6000670de0b6b3a764000061128f61127d85856116b7565b6002670de0b6b3a76400005b0461139b565b8161129657fe5b049392505050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b1790526112f8908590611710565b50505050565b6001600160a01b038216600090815260046020526040902054611327908263ffffffff61139b16565b6001600160a01b038316600090815260046020526040902055600354611353908263ffffffff61139b16565b6003556040805182815290516001600160a01b038416916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b600082820183811015610d6a576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b600c546001600160a01b0382166000908152600f6020526040902060020154141561141f57611205565b61142881610ca6565b6001600160a01b0382166000908152600f60205260409020908155600c5460029091015550565b6001600160a01b0383166000908152600460205260408120548211156114b1576040805162461bcd60e51b8152602060048201526012602482015271494e53554646494349454e545f46554e445360701b604482015290519081900360640190fd5b6001600160a01b03841633148015906114ef57506001600160a01b038416600090815260056020908152604080832033845290915290205460001914155b15611585576001600160a01b038416600090815260056020908152604080832033845290915290205482111561155a576040805162461bcd60e51b815260206004820152600b60248201526a1393d517d0531313d5d15160aa1b604482015290519081900360640190fd5b6001600160a01b03841660009081526005602090815260408083203384529091529020805483900390555b6001600160a01b03808516600081815260046020908152604080832080548890039055938716808352918490208054870190558351868152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35060019392505050565b60008161128f61160e85670de0b6b3a76400006116b7565b600285611289565b6001600160a01b03811661165b5760405162461bcd60e51b81526004018080602001828103825260268152602001806119006026913960400191505060405180910390fd5b6006546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600680546001600160a01b0319166001600160a01b0392909216919091179055565b6000826116c6575060006108b7565b828202828482816116d357fe5b0414610d6a5760405162461bcd60e51b81526004018080602001828103825260218152602001806119266021913960400191505060405180910390fd5b611722826001600160a01b03166118c8565b611773576040805162461bcd60e51b815260206004820152601f60248201527f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e747261637400604482015290519081900360640190fd5b60006060836001600160a01b0316836040518082805190602001908083835b602083106117b15780518252601f199092019160209182019101611792565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611813576040519150601f19603f3d011682016040523d82523d6000602084013e611818565b606091505b50915091508161186f576040805162461bcd60e51b815260206004820181905260248201527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564604482015290519081900360640190fd5b8051156112f85780806020019051602081101561188b57600080fd5b50516112f85760405162461bcd60e51b815260040180806020018281038252602a815260200180611967602a913960400191505060405180910390fd5b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708115801590610a46575014159291505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f774f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65725361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a265627a7a7230582058c4b0e54f44fa9e7f3d506b534ecf086cad16709db0971025be2a79bb5f7cc864736f6c634300050a0032',
  'deployedBytecode': '0x608060405234801561001057600080fd5b50600436106101f05760003560e01c806370a082311161010f578063b3f05b97116100a2578063d5abeb0111610071578063d5abeb0114610591578063dc38679c14610599578063dd62ed3e146105a1578063f2fde38b146105cf576101f0565b8063b3f05b9714610529578063b68d042014610531578063c290d6911461054e578063ca6d56dc1461056b576101f0565b80638f32d59b116100de5780638f32d59b146104c757806395d89b41146104cf5780639b19251a146104d7578063a9059cbb146104fd576101f0565b806370a082311461046d578063715018a614610493578063860015191461049b5780638da5cb5b146104a3576101f0565b806323b872dd1161018757806354198ce91161015657806354198ce9146103c05780635c19bcd6146103e65780635e5c06e21461040c5780636a64eff814610450576101f0565b806323b872dd1461035c578063313ce567146103925780633ccfd60b146103b05780634bb278f3146103b8576101f0565b80630f45684a116101c35780630f45684a146102f7578063126a0d2f146103115780631649f8881461033757806318160ddd14610354576101f0565b8063049878f3146101f557806306fdde0314610214578063095ea7b3146102915780630b1ca49a146102d1575b600080fd5b6102126004803603602081101561020b57600080fd5b50356105f5565b005b61021c6107c9565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561025657818101518382015260200161023e565b50505050905090810190601f1680156102835780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102bd600480360360408110156102a757600080fd5b506001600160a01b038135169060200135610856565b604080519115158252519081900360200190f35b610212600480360360208110156102e757600080fd5b50356001600160a01b03166108bd565b6102ff61097f565b60408051918252519081900360200190f35b6102ff6004803603602081101561032757600080fd5b50356001600160a01b0316610984565b6102ff6004803603602081101561034d57600080fd5b50356109c2565b6102ff6109e0565b6102bd6004803603606081101561037257600080fd5b506001600160a01b038135811691602081013590911690604001356109e6565b61039a610a4e565b6040805160ff9092168252519081900360200190f35b610212610a57565b610212610b8a565b6102ff600480360360208110156103d657600080fd5b50356001600160a01b0316610ca6565b6102ff600480360360208110156103fc57600080fd5b50356001600160a01b0316610ccf565b6104326004803603602081101561042257600080fd5b50356001600160a01b0316610d71565b60408051938452602084019290925282820152519081900360600190f35b6102126004803603602081101561046657600080fd5b5035610d92565b6102ff6004803603602081101561048357600080fd5b50356001600160a01b0316610e27565b610212610e39565b6102ff610eca565b6104ab610ed0565b604080516001600160a01b039092168252519081900360200190f35b6102bd610edf565b61021c610ef0565b6102bd600480360360208110156104ed57600080fd5b50356001600160a01b0316610f48565b6102bd6004803603604081101561051357600080fd5b506001600160a01b038135169060200135610f5d565b6102bd610f6a565b6102ff6004803603602081101561054757600080fd5b5035610f73565b6102126004803603602081101561056457600080fd5b5035610f80565b6102126004803603602081101561058157600080fd5b50356001600160a01b03166110c2565b6102ff61118c565b6102ff611192565b6102ff600480360360408110156105b757600080fd5b506001600160a01b0381358116916020013516611198565b610212600480360360208110156105e557600080fd5b50356001600160a01b03166111b5565b3360009081526007602052604090205460ff16610648576040805162461bcd60e51b815260206004820152600c60248201526b4d454d424552535f4f4e4c5960a01b604482015290519081900360640190fd5b600a5460ff1615610694576040805162461bcd60e51b81526020600482015260116024820152701053149150511657d19253905312569151607a1b604482015290519081900360640190fd5b6000600b54116106dc576040805162461bcd60e51b815260206004820152600e60248201526d14149250d157d393d517d253925560921b604482015290519081900360640190fd5b60008111801561070057506003546009546106fc9163ffffffff61120816565b8111155b610746576040805162461bcd60e51b8152602060048201526012602482015271455843454544535f4d41585f535550504c5960701b604482015290519081900360640190fd5b600061075d600b548361126590919063ffffffff16565b90506107853361076b610ed0565b6008546001600160a01b031691908463ffffffff61129e16565b61078f33836112fe565b60408051838152905133917f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885919081900360200190a25050565b60018054604080516020600284861615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561084e5780601f106108235761010080835404028352916020019161084e565b820191906000526020600020905b81548152906001019060200180831161083157829003601f168201915b505050505081565b3360008181526005602090815260408083206001600160a01b038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a35060015b92915050565b6108c5610edf565b610904576040805162461bcd60e51b81526020600482018190526024820152600080516020611947833981519152604482015290519081900360640190fd5b6001600160a01b03811660009081526007602052604090205460ff1661095e576040805162461bcd60e51b815260206004820152600a6024820152694e4f545f45584953545360b01b604482015290519081900360640190fd5b6001600160a01b03166000908152600760205260409020805460ff19169055565b601281565b60006109ba61099283610ca6565b6001600160a01b0384166000908152600f60205260409020600101549063ffffffff61139b16565b90505b919050565b600d81815481106109cf57fe5b600091825260209091200154905081565b60035481565b60006109f1846113f5565b6001600160a01b038316600090815260046020526040902054610a3257600c546001600160a01b0384166000908152600f6020526040902060020155610a3b565b610a3b836113f5565b610a4684848461144f565b949350505050565b60005460ff1681565b33610a9b576040805162461bcd60e51b815260206004820152600f60248201526e494e56414c49445f4144445245535360881b604482015290519081900360640190fd5b610aa4336113f5565b336000908152600f6020526040902054610af1576040805162461bcd60e51b81526020600482015260096024820152681393d7d41493d1925560ba1b604482015290519081900360640190fd5b336000908152600f60205260408120805491815560010154610b19908263ffffffff61139b16565b336000908152600f6020526040902060010155610b51610b37610ed0565b6008546001600160a01b031690338463ffffffff61129e16565b60408051828152905133917f884edad9ce6fa2440d8a54cc123490eb96d2768479d49ff9c7366125a9424364919081900360200190a250565b610b92610edf565b610bd1576040805162461bcd60e51b81526020600482018190526024820152600080516020611947833981519152604482015290519081900360640190fd5b600a5460ff1615610c22576040805162461bcd60e51b815260206004820152601660248201527543414e5f4f4e4c595f46494e414c495a455f4f4e434560501b604482015290519081900360640190fd5b600a805460ff19166001179055600354600954600091610c48919063ffffffff61120816565b9050610c5b610c55610ed0565b826112fe565b610c63610ed0565b6001600160a01b03167f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885826040518082815260200191505060405180910390a250565b6001600160a01b0381166000908152600f6020526040812054610cc883610ccf565b0192915050565b6001600160a01b0381166000908152600f6020526040812060020154600c541415610cfc575060006109bd565b6001600160a01b0382166000908152600f6020526040812060020154600c54610d2a9163ffffffff61120816565b6009546001600160a01b038516600090815260046020526040902054919250610d6a91610d5e90849063ffffffff61126516565b9063ffffffff6115f616565b9392505050565b600f6020526000908152604090208054600182015460029092015490919083565b610d9a610edf565b610dd9576040805162461bcd60e51b81526020600482018190526024820152600080516020611947833981519152604482015290519081900360640190fd5b60008111610e22576040805162461bcd60e51b8152602060048201526011602482015270494e56414c49445f5249475f505249434560781b604482015290519081900360640190fd5b600b55565b60046020526000908152604090205481565b610e41610edf565b610e80576040805162461bcd60e51b81526020600482018190526024820152600080516020611947833981519152604482015290519081900360640190fd5b6006546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600680546001600160a01b0319169055565b600c5481565b6006546001600160a01b031690565b6006546001600160a01b0316331490565b6002805460408051602060018416156101000260001901909316849004601f8101849004840282018401909252818152929183018282801561084e5780601f106108235761010080835404028352916020019161084e565b60076020526000908152604090205460ff1681565b6000610d6a3384846109e6565b600a5460ff1681565b600e81815481106109cf57fe5b610f88610edf565b610fc7576040805162461bcd60e51b81526020600482018190526024820152600080516020611947833981519152604482015290519081900360640190fd5b600a5460ff161515600114611013576040805162461bcd60e51b815260206004820152600d60248201526c1393d517d19253905312569151609a1b604482015290519081900360640190fd5b600c54611026908263ffffffff61139b16565b600c55600d805460018181019092557fd7b6990105719101dabeb77144f2a3385c8033acd3af97e9423a695e81ad1eb501829055600e80549182018155600052427fbb7b4a454dc3493923482f07822329ed19e8244eff582cc204f8554c3620c3fd909101556040805182815290517f781a2cca10f15083d2de4efa525a850679da338505fe558eb29b6ab494738deb9181900360200190a150565b6110ca610edf565b611109576040805162461bcd60e51b81526020600482018190526024820152600080516020611947833981519152604482015290519081900360640190fd5b6001600160a01b03811660009081526007602052604090205460ff1615611168576040805162461bcd60e51b815260206004820152600e60248201526d414c52454144595f45584953545360901b604482015290519081900360640190fd5b6001600160a01b03166000908152600760205260409020805460ff19166001179055565b60095481565b600b5481565b600560209081526000928352604080842090915290825290205481565b6111bd610edf565b6111fc576040805162461bcd60e51b81526020600482018190526024820152600080516020611947833981519152604482015290519081900360640190fd5b61120581611616565b50565b60008282111561125f576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b6000670de0b6b3a764000061128f61127d85856116b7565b6002670de0b6b3a76400005b0461139b565b8161129657fe5b049392505050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b1790526112f8908590611710565b50505050565b6001600160a01b038216600090815260046020526040902054611327908263ffffffff61139b16565b6001600160a01b038316600090815260046020526040902055600354611353908263ffffffff61139b16565b6003556040805182815290516001600160a01b038416916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b600082820183811015610d6a576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b600c546001600160a01b0382166000908152600f6020526040902060020154141561141f57611205565b61142881610ca6565b6001600160a01b0382166000908152600f60205260409020908155600c5460029091015550565b6001600160a01b0383166000908152600460205260408120548211156114b1576040805162461bcd60e51b8152602060048201526012602482015271494e53554646494349454e545f46554e445360701b604482015290519081900360640190fd5b6001600160a01b03841633148015906114ef57506001600160a01b038416600090815260056020908152604080832033845290915290205460001914155b15611585576001600160a01b038416600090815260056020908152604080832033845290915290205482111561155a576040805162461bcd60e51b815260206004820152600b60248201526a1393d517d0531313d5d15160aa1b604482015290519081900360640190fd5b6001600160a01b03841660009081526005602090815260408083203384529091529020805483900390555b6001600160a01b03808516600081815260046020908152604080832080548890039055938716808352918490208054870190558351868152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35060019392505050565b60008161128f61160e85670de0b6b3a76400006116b7565b600285611289565b6001600160a01b03811661165b5760405162461bcd60e51b81526004018080602001828103825260268152602001806119006026913960400191505060405180910390fd5b6006546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600680546001600160a01b0319166001600160a01b0392909216919091179055565b6000826116c6575060006108b7565b828202828482816116d357fe5b0414610d6a5760405162461bcd60e51b81526004018080602001828103825260218152602001806119266021913960400191505060405180910390fd5b611722826001600160a01b03166118c8565b611773576040805162461bcd60e51b815260206004820152601f60248201527f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e747261637400604482015290519081900360640190fd5b60006060836001600160a01b0316836040518082805190602001908083835b602083106117b15780518252601f199092019160209182019101611792565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611813576040519150601f19603f3d011682016040523d82523d6000602084013e611818565b606091505b50915091508161186f576040805162461bcd60e51b815260206004820181905260248201527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564604482015290519081900360640190fd5b8051156112f85780806020019051602081101561188b57600080fd5b50516112f85760405162461bcd60e51b815260040180806020018281038252602a815260200180611967602a913960400191505060405180910390fd5b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708115801590610a46575014159291505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f774f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65725361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a265627a7a7230582058c4b0e54f44fa9e7f3d506b534ecf086cad16709db0971025be2a79bb5f7cc864736f6c634300050a0032',
  'sourceMap': '265:4566:1:-;;;53:28:0;;;-1:-1:-1;;53:28:0;79:2;53:28;;;1302:270:1;5:2:-1;;;;30:1;27;20:12;5:2;1302:270:1;;;;;;;;;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1302:270:1;;;;;;;;164:134:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;573:12:0;;1302:270:1;;;;164:134:4;;;;;;573:12:0;;:4;;164:134:4;573:12:0;:::i;:::-;-1:-1:-1;595:16:0;;;;:6;;:16;;;;;:::i;:::-;-1:-1:-1;;658:6:5;:19;;-1:-1:-1;;;;;;658:19:5;667:10;658:19;;;;;692:40;;-1:-1:-1;;;;;725:6:5;;;;;-1:-1:-1;658:6:5;;-1:-1:-1;692:40:5;;-1:-1:-1;658:6:5;;692:40;1462:10:1;:44;;-1:-1:-1;;;;;;1462:44:1;-1:-1:-1;;;;;1462:44:1;;;;;;;;;;;1516:9;:22;1548:9;:17;;-1:-1:-1;;1548:17:1;;;265:4566;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;265:4566:1;;;-1:-1:-1;265:4566:1;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;',
  'deployedSourceMap': '265:4566:1:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;265:4566:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4403:426;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;4403:426:1;;:::i;:::-;;87:19:0;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;87:19:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;624:180;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;;;624:180:0;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;454:167:6;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;454:167:6;-1:-1:-1;;;;;454:167:6;;:::i;462:57:1:-;;;:::i;:::-;;;;;;;;;;;;;;;;3093:180;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;3093:180:1;-1:-1:-1;;;;;3093:180:1;;:::i;796:52::-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;796:52:1;;:::i;139:26:0:-;;;:::i;4068:329:1:-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;;;4068:329:1;;;;;;;;;;;;;;;;;:::i;53:28:0:-;;;:::i;:::-;;;;;;;;;;;;;;;;;;;3561:501:1;;;:::i;1578:284::-;;;:::i;2825:262::-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;2825:262:1;-1:-1:-1;;;;;2825:262:1;;:::i;2469:350::-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;2469:350:1;-1:-1:-1;;;;;2469:350:1;;:::i;909:46::-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;909:46:1;-1:-1:-1;;;;;909:46:1;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;2076:155;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;2076:155:1;;:::i;172:65:0:-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;172:65:0;-1:-1:-1;;;;;172:65:0;;:::i;1598:137:5:-;;;:::i;741:49:1:-;;;:::i;815:77:5:-;;;:::i;:::-;;;;-1:-1:-1;;;;;815:77:5;;;;;;;;;;;;;;1166:90;;;:::i;112:21:0:-;;;:::i;87:49:6:-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;87:49:6;-1:-1:-1;;;;;87:49:6;;:::i;810:124:0:-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;;;810:124:0;;;;;;;;:::i;633:47:1:-;;;:::i;854:49::-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;854:49:1;;:::i;2237:226::-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;2237:226:1;;:::i;280:168:6:-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;280:168:6;-1:-1:-1;;;;;280:168:6;;:::i;579:47:1:-;;;:::i;686:49::-;;;:::i;243:65:0:-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;;;243:65:0;;;;;;;;;;:::i;1884:107:5:-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1884:107:5;-1:-1:-1;;;;;1884:107:5;;:::i;4403:426:1:-;228:10:6;218:21;;;;:9;:21;;;;;;;;210:46;;;;;-1:-1:-1;;;210:46:6;;;;;;;;;;;;-1:-1:-1;;;210:46:6;;;;;;;;;;;;;;;1911:9:1;;;;:18;1903:48;;;;;-1:-1:-1;;;1903:48:1;;;;;;;;;;;;-1:-1:-1;;;1903:48:1;;;;;;;;;;;;;;;4527:1;4513:11;;:15;4505:42;;;;;-1:-1:-1;;;4505:42:1;;;;;;;;;;;;-1:-1:-1;;;4505:42:1;;;;;;;;;;;;;;;4571:1;4565:3;:7;:44;;;;-1:-1:-1;4597:11:1;;4583:9;;:26;;;:13;:26;:::i;:::-;4576:3;:33;;4565:44;4557:75;;;;;-1:-1:-1;;;4557:75:1;;;;;;;;;;;;-1:-1:-1;;;4557:75:1;;;;;;;;;;;;;;;4643:17;4663:21;4672:11;;4663:3;:8;;:21;;;;:::i;:::-;4643:41;;4694:59;4722:10;4734:7;:5;:7::i;:::-;4694:10;;-1:-1:-1;;;;;4694:10:1;;:59;4743:9;4694:59;:27;:59;:::i;:::-;4763:22;4769:10;4781:3;4763:5;:22::i;:::-;4801:21;;;;;;;;4806:10;;4801:21;;;;;;;;;;1961:1;4403:426;:::o;87:19:0:-;;;;;;;;;;;;;;;-1:-1:-1;;87:19:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;624:180::-;709:10;683:4;699:21;;;:9;:21;;;;;;;;-1:-1:-1;;;;;699:26:0;;;;;;;;;;;:32;;;746:30;;;;;;;683:4;;699:26;;709:10;;746:30;;;;;;;;-1:-1:-1;793:4:0;624:180;;;;;:::o;454:167:6:-;1019:9:5;:7;:9::i;:::-;1011:54;;;;;-1:-1:-1;;;1011:54:5;;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;1011:54:5;;;;;;;;;;;;;;;-1:-1:-1;;;;;547:17:6;;;;;;:9;:17;;;;;;;;539:40;;;;;-1:-1:-1;;;539:40:6;;;;;;;;;;;;-1:-1:-1;;;539:40:6;;;;;;;;;;;;;;;-1:-1:-1;;;;;589:17:6;609:5;589:17;;;:9;:17;;;;;:25;;-1:-1:-1;;589:25:6;;;454:167::o;462:57:1:-;517:2;462:57;:::o;3093:180::-;3182:7;3212:54;3244:21;3253:11;3244:8;:21::i;:::-;-1:-1:-1;;;;;3212:21:1;;;;;;:8;:21;;;;;:27;;;;:54;:31;:54;:::i;:::-;3205:61;;3093:180;;;;:::o;796:52::-;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;796:52:1;:::o;139:26:0:-;;;;:::o;4068:329:1:-;4161:4;4181:17;4194:3;4181:12;:17::i;:::-;-1:-1:-1;;;;;4212:14:1;;;;;;:9;:14;;;;;;4208:133;;4271:11;;-1:-1:-1;;;;;4247:13:1;;;;;;:8;:13;;;;;:21;;:35;4208:133;;;4313:17;4326:3;4313:12;:17::i;:::-;4357:33;4376:3;4381;4386;4357:18;:33::i;:::-;4350:40;4068:329;-1:-1:-1;;;;4068:329:1:o;53:28:0:-;;;;;;:::o;3561:501:1:-;3618:10;3610:52;;;;;-1:-1:-1;;;3610:52:1;;;;;;;;;;;;-1:-1:-1;;;3610:52:1;;;;;;;;;;;;;;;3673:24;3686:10;3673:12;:24::i;:::-;3724:10;3745:1;3715:20;;;:8;:20;;;;;:27;3707:53;;;;;-1:-1:-1;;;3707:53:1;;;;;;;;;;;;-1:-1:-1;;;3707:53:1;;;;;;;;;;;;;;;3800:10;3771:17;3791:20;;;:8;:20;;;;;:27;;3828:31;;;-1:-1:-1;3898:26:1;;:41;;3791:27;3898:41;:30;:41;:::i;:::-;3878:10;3869:20;;;;:8;:20;;;;;:26;;:70;3949:59;3977:7;:5;:7::i;:::-;3949:10;;-1:-1:-1;;;;;3949:10:1;;3986;3998:9;3949:59;:27;:59;:::i;:::-;4024:31;;;;;;;;4033:10;;4024:31;;;;;;;;;;3561:501;:::o;1578:284::-;1019:9:5;:7;:9::i;:::-;1011:54;;;;;-1:-1:-1;;;1011:54:5;;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;1011:54:5;;;;;;;;;;;;;;;1653:9:1;;;;:18;1645:53;;;;;-1:-1:-1;;;1645:53:1;;;;;;;;;;;;-1:-1:-1;;;1645:53:1;;;;;;;;;;;;;;;1708:9;:16;;-1:-1:-1;;1708:16:1;1720:4;1708:16;;;1768:11;;1754:9;;1708;;1754:26;;:9;:26;:13;:26;:::i;:::-;1734:46;;1790:25;1796:7;:5;:7::i;:::-;1805:9;1790:5;:25::i;:::-;1836:7;:5;:7::i;:::-;-1:-1:-1;;;;;1831:24:1;;1845:9;1831:24;;;;;;;;;;;;;;;;;;1075:1:5;1578:284:1:o;2825:262::-;-1:-1:-1;;;;;3052:21:1;;2909:7;3052:21;;;:8;:21;;;;;:28;3019:30;3061:11;3019:17;:30::i;:::-;:61;;2825:262;-1:-1:-1;;2825:262:1:o;2469:350::-;-1:-1:-1;;;;;2604:21:1;;2562:7;2604:21;;;:8;:21;;;;;:29;;;2589:11;;:44;2585:83;;;-1:-1:-1;2656:1:1;2649:8;;2585:83;-1:-1:-1;;;;;2712:21:1;;2677:16;2712:21;;;:8;:21;;;;;:29;;;2696:11;;:46;;;:15;:46;:::i;:::-;2802:9;;-1:-1:-1;;;;;2773:22:1;;;;;;:9;:22;;;;;;2677:65;;-1:-1:-1;2759:53:1;;:37;;2677:65;;2759:37;:13;:37;:::i;:::-;:42;:53;:42;:53;:::i;:::-;2752:60;2469:350;-1:-1:-1;;;2469:350:1:o;909:46::-;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;2076:155::-;1019:9:5;:7;:9::i;:::-;1011:54;;;;;-1:-1:-1;;;1011:54:5;;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;1011:54:5;;;;;;;;;;;;;;;2174:1:1;2168:3;:7;2160:37;;;;;-1:-1:-1;;;2160:37:1;;;;;;;;;;;;-1:-1:-1;;;2160:37:1;;;;;;;;;;;;;;;2207:11;:17;2076:155::o;172:65:0:-;;;;;;;;;;;;;:::o;1598:137:5:-;1019:9;:7;:9::i;:::-;1011:54;;;;;-1:-1:-1;;;1011:54:5;;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;1011:54:5;;;;;;;;;;;;;;;1680:6;;1659:40;;1696:1;;-1:-1:-1;;;;;1680:6:5;;1659:40;;1696:1;;1659:40;1709:6;:19;;-1:-1:-1;;;;;;1709:19:5;;;1598:137::o;741:49:1:-;;;;:::o;815:77:5:-;879:6;;-1:-1:-1;;;;;879:6:5;815:77;:::o;1166:90::-;1243:6;;-1:-1:-1;;;;;1243:6:5;1229:10;:20;;1166:90::o;112:21:0:-;;;;;;;;;;;;;;-1:-1:-1;;112:21:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;87:49:6;;;;;;;;;;;;;;;:::o;810:124:0:-;870:4;893:34;906:10;918:3;923;893:12;:34::i;633:47:1:-;;;;;;:::o;854:49::-;;;;;;;;;;2237:226;1019:9:5;:7;:9::i;:::-;1011:54;;;;;-1:-1:-1;;;1011:54:5;;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;1011:54:5;;;;;;;;;;;;;;;2017:9:1;;;;:17;;:9;:17;2009:43;;;;;-1:-1:-1;;;2009:43:1;;;;;;;;;;;;-1:-1:-1;;;2009:43:1;;;;;;;;;;;;;;;2347:11;;:20;;2363:3;2347:20;:15;:20;:::i;:::-;2333:11;:34;2377:14;27:10:-1;;39:1;23:18;;;45:23;;;2377:24:1;;;;;2411:11;27:10:-1;;23:18;;;45:23;;-1:-1;2411:21:1;2428:3;2411:21;;;;;2448:8;;;;;;;;;;;;;2377:24;2448:8;;;2237:226;:::o;280:168:6:-;1019:9:5;:7;:9::i;:::-;1011:54;;;;;-1:-1:-1;;;1011:54:5;;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;1011:54:5;;;;;;;;;;;;;;;-1:-1:-1;;;;;371:17:6;;;;;;:9;:17;;;;;;;;370:18;362:45;;;;;-1:-1:-1;;;362:45:6;;;;;;;;;;;;-1:-1:-1;;;362:45:6;;;;;;;;;;;;;;;-1:-1:-1;;;;;417:17:6;;;;;:9;:17;;;;;:24;;-1:-1:-1;;417:24:6;437:4;417:24;;;280:168::o;579:47:1:-;;;;:::o;686:49::-;;;;:::o;243:65:0:-;;;;;;;;;;;;;;;;;;;;;;;;:::o;1884:107:5:-;1019:9;:7;:9::i;:::-;1011:54;;;;;-1:-1:-1;;;1011:54:5;;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;1011:54:5;;;;;;;;;;;;;;;1956:28;1975:8;1956:18;:28::i;:::-;1884:107;:::o;1275:179:11:-;1333:7;1365:1;1360;:6;;1352:49;;;;;-1:-1:-1;;;1352:49:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1423:5:11;;;1275:179::o;143:129:12:-;196:6;94:8;218:41;231:18;244:1;247;231:12;:18::i;:::-;257:1;94:8;251:7;;218:12;:41::i;:::-;:47;;;;;;;143:129;-1:-1:-1;;;143:129:12:o;846:207:10:-;977:68;;;-1:-1:-1;;;;;977:68:10;;;;;;;;;;;;;;;;;;;;;;26:21:-1;;;22:32;;;6:49;;977:68:10;;;;;;;;25:18:-1;;61:17;;-1:-1;;;;;182:15;-1:-1;;;179:29;160:49;;951:95:10;;970:5;;951:18;:95::i;:::-;846:207;;;;:::o;304:205:4:-;-1:-1:-1;;;;;391:13:4;;;;;;:9;:13;;;;;;:22;;409:3;391:22;:17;:22;:::i;:::-;-1:-1:-1;;;;;375:13:4;;;;;;:9;:13;;;;;:38;437:11;;:20;;453:3;437:20;:15;:20;:::i;:::-;423:11;:34;473:29;;;;;;;;-1:-1:-1;;;;;473:29:4;;;490:1;;473:29;;;;;;;;;304:205;;:::o;835:176:11:-;893:7;924:5;;;947:6;;;;939:46;;;;;-1:-1:-1;;;939:46:11;;;;;;;;;;;;;;;;;;;;;;;;;;;3279:276:1;3390:11;;-1:-1:-1;;;;;3357:21:1;;;;;;:8;:21;;;;;:29;;;:44;3353:81;;;3417:7;;3353:81;3474:21;3483:11;3474:8;:21::i;:::-;-1:-1:-1;;;;;3443:21:1;;;;;;:8;:21;;;;;:52;;;3537:11;;3505:29;;;;:43;3279:276;:::o;940:500:0:-;-1:-1:-1;;;;;1061:14:0;;1033:4;1061:14;;;:9;:14;;;;;;:21;-1:-1:-1;1061:21:0;1053:52;;;;;-1:-1:-1;;;1053:52:0;;;;;;;;;;;;-1:-1:-1;;;1053:52:0;;;;;;;;;;;;;;;-1:-1:-1;;;;;1120:17:0;;1127:10;1120:17;;;;:59;;-1:-1:-1;;;;;;1141:14:0;;;;;;:9;:14;;;;;;;;1156:10;1141:26;;;;;;;;-1:-1:-1;;1141:38:0;;1120:59;1116:194;;;-1:-1:-1;;;;;1203:14:0;;;;;;:9;:14;;;;;;;;1218:10;1203:26;;;;;;;;:33;-1:-1:-1;1203:33:0;1195:57;;;;;-1:-1:-1;;;1195:57:0;;;;;;;;;;;;-1:-1:-1;;;1195:57:0;;;;;;;;;;;;;;;-1:-1:-1;;;;;1266:14:0;;;;;;:9;:14;;;;;;;;1281:10;1266:26;;;;;;;:33;;;;;;;1116:194;-1:-1:-1;;;;;1320:14:0;;;;;;;:9;:14;;;;;;;;:21;;;;;;;1351:14;;;;;;;;;;:21;;;;;;1388:23;;;;;;;1351:14;;1388:23;;;;;;;;;;;-1:-1:-1;1429:4:0;940:500;;;;;:::o;278:127:12:-;331:6;397:1;353:41;366:20;379:1;94:8;366:12;:20::i;:::-;392:1;388;:5;;2092:225:5;-1:-1:-1;;;;;2165:22:5;;2157:73;;;;-1:-1:-1;;;2157:73:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2266:6;;2245:38;;-1:-1:-1;;;;;2245:38:5;;;;2266:6;;2245:38;;2266:6;;2245:38;2293:6;:17;;-1:-1:-1;;;;;;2293:17:5;-1:-1:-1;;;;;2293:17:5;;;;;;;;;;2092:225::o;1694:458:11:-;1752:7;1992:6;1988:45;;-1:-1:-1;2021:1:11;2014:8;;1988:45;2055:5;;;2059:1;2055;:5;:1;2078:5;;;;;:10;2070:56;;;;-1:-1:-1;;;2070:56:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2645:1100:10;3245:27;3253:5;-1:-1:-1;;;;;3245:25:10;;:27::i;:::-;3237:71;;;;;-1:-1:-1;;;3237:71:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;3379:12;3393:23;3428:5;-1:-1:-1;;;;;3420:19:10;3440:4;3420:25;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;3420:25:10;;;;;;;;;;;;;;;;;;;;;;;;14:1:-1;21;16:31;;;;75:4;69:11;64:16;;144:4;140:9;133:4;115:16;111:27;107:43;104:1;100:51;94:4;87:65;169:16;166:1;159:27;225:16;222:1;215:4;212:1;208:12;193:49;7:242;;16:31;36:4;31:9;;7:242;;3378:67:10;;;;3463:7;3455:52;;;;;-1:-1:-1;;;3455:52:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3522:17;;:21;3518:221;;3662:10;3651:30;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;3651:30:10;3643:85;;;;-1:-1:-1;;;3643:85:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;558:797:9;618:4;1266:20;;1111:66;1305:15;;;;;:42;;-1:-1:-1;1324:23:9;;;1297:51;-1:-1:-1;;558:797:9:o',
  'source': 'pragma solidity ^0.5.10;\n\nimport \'./components/Ownable.sol\';\nimport \'./components/Whitelist.sol\';\nimport \'./interfaces/IERC20Token.sol\';\nimport \'./MintableERC20Token.sol\';\nimport \'./lib/SafeMath.sol\';\nimport \'./lib/WadMath.sol\';\nimport \'./lib/SafeERC20Token.sol\';\n\ncontract MBFToken is\n    MintableERC20Token,\n    Ownable,\n    Whitelist\n{\n    using SafeMath for uint256;\n    using WadMath for uint256;\n    using SafeERC20 for IERC20Token;\n\n    // parameters\n    uint256 constant             public   globalDecimals = 18;\n    IERC20Token                  internal collateral;\n    uint256                      public   maxSupply;\n\n    bool                         public   finalized;\n    uint256                      public   targetPrice;\n    uint256                      public   totalProfit;\n    uint256[]                    public   historyProfits;\n    uint256[]                    public   historyTime;\n    mapping (address => Account) public   accounts;\n\n    // profit manager\n    struct Account {\n        uint256 profit;\n        uint256 taken;\n        uint256 settled;\n    }\n\n    // events\n    event Mint(address indexed _owner, uint256 _value);\n    event Burn(address indexed _owner, uint256 _value);\n    event Withdraw(address indexed _owner, uint256 _value);\n    event Pay(uint256 _value);\n\n    constructor(\n        address _collateralAddress,\n        uint256 _maxSupply\n    )\n        public\n        MintableERC20Token(\'P106 Token\', \'P106\')\n    {\n        collateral = IERC20Token(_collateralAddress);\n        maxSupply = _maxSupply;\n        finalized = false;\n    }\n\n    function finalize()\n        public\n        onlyOwner\n    {\n        require(finalized == false, \'CAN_ONLY_FINALIZE_ONCE\');\n        finalized = true;\n        uint256 remaining = maxSupply.sub(totalSupply);\n        _mint(owner(), remaining);\n\n        emit Mint(owner(), remaining);\n    }\n\n    modifier beforeFinalized {\n        require(finalized == false, \'ALREADY_FINALIZED\');\n        _;\n    }\n\n    modifier afterFinalized {\n        require(finalized == true, \'NOT_FINALIZED\');\n        _;\n    }\n\n    function setTargetPrice(uint256 wad)\n        public\n        onlyOwner\n    {\n        require(wad > 0, \'INVALID_RIG_PRICE\');\n        targetPrice = wad;\n    }\n\n    function pay(uint256 wad)\n        public\n        onlyOwner\n        afterFinalized\n    {\n        totalProfit = totalProfit.add(wad);\n        historyProfits.push(wad);\n        historyTime.push(now);\n\n        emit Pay(wad);\n    }\n\n    function unsettledProfitOf(address beneficiary)\n        public\n        view\n        returns (uint256)\n    {\n        if (totalProfit == accounts[beneficiary].settled) {\n            return 0;\n        }\n        uint256 toSettle = totalProfit.sub(accounts[beneficiary].settled);\n        return toSettle.wmul(balanceOf[beneficiary]).wdiv(maxSupply);\n    }\n\n    function profitOf(address beneficiary)\n        public\n        view\n        returns (uint256)\n    {\n        // unsettled { (total - settled) * balance / max } + settled { profit }\n        return unsettledProfitOf(beneficiary) + accounts[beneficiary].profit;\n    }\n\n    function totalProfitOf(address beneficiary)\n        public\n        view\n        returns (uint256)\n    {\n        return accounts[beneficiary].taken.add(profitOf(beneficiary));\n    }\n\n    function adjustProfit(address beneficiary)\n        internal\n    {\n        if (accounts[beneficiary].settled == totalProfit) {\n            return;\n        }\n        accounts[beneficiary].profit = profitOf(beneficiary);\n        accounts[beneficiary].settled = totalProfit;\n    }\n\n    function withdraw()\n        public\n    {\n        require(msg.sender != address(0), \'INVALID_ADDRESS\');\n\n        adjustProfit(msg.sender);\n        require(accounts[msg.sender].profit > 0, \'NO_PROFIT\');\n\n        uint256 available = accounts[msg.sender].profit;\n        accounts[msg.sender].profit = 0;\n        accounts[msg.sender].taken = accounts[msg.sender].taken.add(available);\n        collateral.safeTransferFrom(owner(), msg.sender, available);\n\n        emit Withdraw(msg.sender, available);\n    }\n\n    function transferFrom(address src, address dst, uint256 wad)\n        public\n        returns (bool)\n    {\n        adjustProfit(src);\n        if (balanceOf[dst] == 0) {\n            accounts[dst].settled = totalProfit;\n        } else {\n            adjustProfit(dst);\n        }\n        return super.transferFrom(src, dst, wad);\n    }\n\n    function join(uint256 wad)\n        public\n        whitelistOnly\n        beforeFinalized\n    {\n        require(targetPrice > 0, \'PRICE_NOT_INIT\');\n        require(wad > 0 && wad <= maxSupply.sub(totalSupply), \'EXCEEDS_MAX_SUPPLY\');\n\n        uint256 joinPrice = wad.wmul(targetPrice);\n        collateral.safeTransferFrom(msg.sender, owner(), joinPrice);\n        _mint(msg.sender, wad);\n\n        emit Mint(msg.sender, wad);\n    }\n}',
  'sourcePath': '/Users/yangzhao/WorkSpace/contract-fund-p106-1/contracts/MBFToken.sol',
  'ast': {
    'absolutePath': '/Users/yangzhao/WorkSpace/contract-fund-p106-1/contracts/MBFToken.sol',
    'exportedSymbols': {
      'MBFToken': [
        674
      ]
    },
    'id': 675,
    'nodeType': 'SourceUnit',
    'nodes': [
      {
        'id': 180,
        'literals': [
          'solidity',
          '^',
          '0.5',
          '.10'
        ],
        'nodeType': 'PragmaDirective',
        'src': '0:24:1'
      },
      {
        'absolutePath': '/Users/yangzhao/WorkSpace/contract-fund-p106-1/contracts/components/Ownable.sol',
        'file': './components/Ownable.sol',
        'id': 181,
        'nodeType': 'ImportDirective',
        'scope': 675,
        'sourceUnit': 984,
        'src': '26:34:1',
        'symbolAliases': [],
        'unitAlias': ''
      },
      {
        'absolutePath': '/Users/yangzhao/WorkSpace/contract-fund-p106-1/contracts/components/Whitelist.sol',
        'file': './components/Whitelist.sol',
        'id': 182,
        'nodeType': 'ImportDirective',
        'scope': 675,
        'sourceUnit': 1053,
        'src': '61:36:1',
        'symbolAliases': [],
        'unitAlias': ''
      },
      {
        'absolutePath': '/Users/yangzhao/WorkSpace/contract-fund-p106-1/contracts/interfaces/IERC20Token.sol',
        'file': './interfaces/IERC20Token.sol',
        'id': 183,
        'nodeType': 'ImportDirective',
        'scope': 675,
        'sourceUnit': 1122,
        'src': '98:38:1',
        'symbolAliases': [],
        'unitAlias': ''
      },
      {
        'absolutePath': '/Users/yangzhao/WorkSpace/contract-fund-p106-1/contracts/MintableERC20Token.sol',
        'file': './MintableERC20Token.sol',
        'id': 184,
        'nodeType': 'ImportDirective',
        'scope': 675,
        'sourceUnit': 873,
        'src': '137:34:1',
        'symbolAliases': [],
        'unitAlias': ''
      },
      {
        'absolutePath': '/Users/yangzhao/WorkSpace/contract-fund-p106-1/contracts/lib/SafeMath.sol',
        'file': './lib/SafeMath.sol',
        'id': 185,
        'nodeType': 'ImportDirective',
        'scope': 675,
        'sourceUnit': 1536,
        'src': '172:28:1',
        'symbolAliases': [],
        'unitAlias': ''
      },
      {
        'absolutePath': '/Users/yangzhao/WorkSpace/contract-fund-p106-1/contracts/lib/WadMath.sol',
        'file': './lib/WadMath.sol',
        'id': 186,
        'nodeType': 'ImportDirective',
        'scope': 675,
        'sourceUnit': 1654,
        'src': '201:27:1',
        'symbolAliases': [],
        'unitAlias': ''
      },
      {
        'absolutePath': '/Users/yangzhao/WorkSpace/contract-fund-p106-1/contracts/lib/SafeERC20Token.sol',
        'file': './lib/SafeERC20Token.sol',
        'id': 187,
        'nodeType': 'ImportDirective',
        'scope': 675,
        'sourceUnit': 1403,
        'src': '229:34:1',
        'symbolAliases': [],
        'unitAlias': ''
      },
      {
        'baseContracts': [
          {
            'arguments': null,
            'baseName': {
              'contractScope': null,
              'id': 188,
              'name': 'MintableERC20Token',
              'nodeType': 'UserDefinedTypeName',
              'referencedDeclaration': 872,
              'src': '290:18:1',
              'typeDescriptions': {
                'typeIdentifier': 't_contract$_MintableERC20Token_$872',
                'typeString': 'contract MintableERC20Token'
              }
            },
            'id': 189,
            'nodeType': 'InheritanceSpecifier',
            'src': '290:18:1'
          },
          {
            'arguments': null,
            'baseName': {
              'contractScope': null,
              'id': 190,
              'name': 'Ownable',
              'nodeType': 'UserDefinedTypeName',
              'referencedDeclaration': 983,
              'src': '314:7:1',
              'typeDescriptions': {
                'typeIdentifier': 't_contract$_Ownable_$983',
                'typeString': 'contract Ownable'
              }
            },
            'id': 191,
            'nodeType': 'InheritanceSpecifier',
            'src': '314:7:1'
          },
          {
            'arguments': null,
            'baseName': {
              'contractScope': null,
              'id': 192,
              'name': 'Whitelist',
              'nodeType': 'UserDefinedTypeName',
              'referencedDeclaration': 1052,
              'src': '327:9:1',
              'typeDescriptions': {
                'typeIdentifier': 't_contract$_Whitelist_$1052',
                'typeString': 'contract Whitelist'
              }
            },
            'id': 193,
            'nodeType': 'InheritanceSpecifier',
            'src': '327:9:1'
          }
        ],
        'contractDependencies': [
          178,
          872,
          983,
          1052
        ],
        'contractKind': 'contract',
        'documentation': null,
        'fullyImplemented': true,
        'id': 674,
        'linearizedBaseContracts': [
          674,
          1052,
          983,
          872,
          178
        ],
        'name': 'MBFToken',
        'nodeType': 'ContractDefinition',
        'nodes': [
          {
            'id': 196,
            'libraryName': {
              'contractScope': null,
              'id': 194,
              'name': 'SafeMath',
              'nodeType': 'UserDefinedTypeName',
              'referencedDeclaration': 1535,
              'src': '349:8:1',
              'typeDescriptions': {
                'typeIdentifier': 't_contract$_SafeMath_$1535',
                'typeString': 'library SafeMath'
              }
            },
            'nodeType': 'UsingForDirective',
            'src': '343:27:1',
            'typeName': {
              'id': 195,
              'name': 'uint256',
              'nodeType': 'ElementaryTypeName',
              'src': '362:7:1',
              'typeDescriptions': {
                'typeIdentifier': 't_uint256',
                'typeString': 'uint256'
              }
            }
          },
          {
            'id': 199,
            'libraryName': {
              'contractScope': null,
              'id': 197,
              'name': 'WadMath',
              'nodeType': 'UserDefinedTypeName',
              'referencedDeclaration': 1653,
              'src': '381:7:1',
              'typeDescriptions': {
                'typeIdentifier': 't_contract$_WadMath_$1653',
                'typeString': 'library WadMath'
              }
            },
            'nodeType': 'UsingForDirective',
            'src': '375:26:1',
            'typeName': {
              'id': 198,
              'name': 'uint256',
              'nodeType': 'ElementaryTypeName',
              'src': '393:7:1',
              'typeDescriptions': {
                'typeIdentifier': 't_uint256',
                'typeString': 'uint256'
              }
            }
          },
          {
            'id': 202,
            'libraryName': {
              'contractScope': null,
              'id': 200,
              'name': 'SafeERC20',
              'nodeType': 'UserDefinedTypeName',
              'referencedDeclaration': 1402,
              'src': '412:9:1',
              'typeDescriptions': {
                'typeIdentifier': 't_contract$_SafeERC20_$1402',
                'typeString': 'library SafeERC20'
              }
            },
            'nodeType': 'UsingForDirective',
            'src': '406:32:1',
            'typeName': {
              'contractScope': null,
              'id': 201,
              'name': 'IERC20Token',
              'nodeType': 'UserDefinedTypeName',
              'referencedDeclaration': 1121,
              'src': '426:11:1',
              'typeDescriptions': {
                'typeIdentifier': 't_contract$_IERC20Token_$1121',
                'typeString': 'contract IERC20Token'
              }
            }
          },
          {
            'constant': true,
            'id': 205,
            'name': 'globalDecimals',
            'nodeType': 'VariableDeclaration',
            'scope': 674,
            'src': '462:57:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_uint256',
              'typeString': 'uint256'
            },
            'typeName': {
              'id': 203,
              'name': 'uint256',
              'nodeType': 'ElementaryTypeName',
              'src': '462:7:1',
              'typeDescriptions': {
                'typeIdentifier': 't_uint256',
                'typeString': 'uint256'
              }
            },
            'value': {
              'argumentTypes': null,
              'hexValue': '3138',
              'id': 204,
              'isConstant': false,
              'isLValue': false,
              'isPure': true,
              'kind': 'number',
              'lValueRequested': false,
              'nodeType': 'Literal',
              'src': '517:2:1',
              'subdenomination': null,
              'typeDescriptions': {
                'typeIdentifier': 't_rational_18_by_1',
                'typeString': 'int_const 18'
              },
              'value': '18'
            },
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 207,
            'name': 'collateral',
            'nodeType': 'VariableDeclaration',
            'scope': 674,
            'src': '525:48:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_contract$_IERC20Token_$1121',
              'typeString': 'contract IERC20Token'
            },
            'typeName': {
              'contractScope': null,
              'id': 206,
              'name': 'IERC20Token',
              'nodeType': 'UserDefinedTypeName',
              'referencedDeclaration': 1121,
              'src': '525:11:1',
              'typeDescriptions': {
                'typeIdentifier': 't_contract$_IERC20Token_$1121',
                'typeString': 'contract IERC20Token'
              }
            },
            'value': null,
            'visibility': 'internal'
          },
          {
            'constant': false,
            'id': 209,
            'name': 'maxSupply',
            'nodeType': 'VariableDeclaration',
            'scope': 674,
            'src': '579:47:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_uint256',
              'typeString': 'uint256'
            },
            'typeName': {
              'id': 208,
              'name': 'uint256',
              'nodeType': 'ElementaryTypeName',
              'src': '579:7:1',
              'typeDescriptions': {
                'typeIdentifier': 't_uint256',
                'typeString': 'uint256'
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 211,
            'name': 'finalized',
            'nodeType': 'VariableDeclaration',
            'scope': 674,
            'src': '633:47:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_bool',
              'typeString': 'bool'
            },
            'typeName': {
              'id': 210,
              'name': 'bool',
              'nodeType': 'ElementaryTypeName',
              'src': '633:4:1',
              'typeDescriptions': {
                'typeIdentifier': 't_bool',
                'typeString': 'bool'
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 213,
            'name': 'targetPrice',
            'nodeType': 'VariableDeclaration',
            'scope': 674,
            'src': '686:49:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_uint256',
              'typeString': 'uint256'
            },
            'typeName': {
              'id': 212,
              'name': 'uint256',
              'nodeType': 'ElementaryTypeName',
              'src': '686:7:1',
              'typeDescriptions': {
                'typeIdentifier': 't_uint256',
                'typeString': 'uint256'
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 215,
            'name': 'totalProfit',
            'nodeType': 'VariableDeclaration',
            'scope': 674,
            'src': '741:49:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_uint256',
              'typeString': 'uint256'
            },
            'typeName': {
              'id': 214,
              'name': 'uint256',
              'nodeType': 'ElementaryTypeName',
              'src': '741:7:1',
              'typeDescriptions': {
                'typeIdentifier': 't_uint256',
                'typeString': 'uint256'
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 218,
            'name': 'historyProfits',
            'nodeType': 'VariableDeclaration',
            'scope': 674,
            'src': '796:52:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_array$_t_uint256_$dyn_storage',
              'typeString': 'uint256[]'
            },
            'typeName': {
              'baseType': {
                'id': 216,
                'name': 'uint256',
                'nodeType': 'ElementaryTypeName',
                'src': '796:7:1',
                'typeDescriptions': {
                  'typeIdentifier': 't_uint256',
                  'typeString': 'uint256'
                }
              },
              'id': 217,
              'length': null,
              'nodeType': 'ArrayTypeName',
              'src': '796:9:1',
              'typeDescriptions': {
                'typeIdentifier': 't_array$_t_uint256_$dyn_storage_ptr',
                'typeString': 'uint256[]'
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 221,
            'name': 'historyTime',
            'nodeType': 'VariableDeclaration',
            'scope': 674,
            'src': '854:49:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_array$_t_uint256_$dyn_storage',
              'typeString': 'uint256[]'
            },
            'typeName': {
              'baseType': {
                'id': 219,
                'name': 'uint256',
                'nodeType': 'ElementaryTypeName',
                'src': '854:7:1',
                'typeDescriptions': {
                  'typeIdentifier': 't_uint256',
                  'typeString': 'uint256'
                }
              },
              'id': 220,
              'length': null,
              'nodeType': 'ArrayTypeName',
              'src': '854:9:1',
              'typeDescriptions': {
                'typeIdentifier': 't_array$_t_uint256_$dyn_storage_ptr',
                'typeString': 'uint256[]'
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 225,
            'name': 'accounts',
            'nodeType': 'VariableDeclaration',
            'scope': 674,
            'src': '909:46:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_mapping$_t_address_$_t_struct$_Account_$232_storage_$',
              'typeString': 'mapping(address => struct MBFToken.Account)'
            },
            'typeName': {
              'id': 224,
              'keyType': {
                'id': 222,
                'name': 'address',
                'nodeType': 'ElementaryTypeName',
                'src': '918:7:1',
                'typeDescriptions': {
                  'typeIdentifier': 't_address',
                  'typeString': 'address'
                }
              },
              'nodeType': 'Mapping',
              'src': '909:28:1',
              'typeDescriptions': {
                'typeIdentifier': 't_mapping$_t_address_$_t_struct$_Account_$232_storage_$',
                'typeString': 'mapping(address => struct MBFToken.Account)'
              },
              'valueType': {
                'contractScope': null,
                'id': 223,
                'name': 'Account',
                'nodeType': 'UserDefinedTypeName',
                'referencedDeclaration': 232,
                'src': '929:7:1',
                'typeDescriptions': {
                  'typeIdentifier': 't_struct$_Account_$232_storage_ptr',
                  'typeString': 'struct MBFToken.Account'
                }
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'canonicalName': 'MBFToken.Account',
            'id': 232,
            'members': [
              {
                'constant': false,
                'id': 227,
                'name': 'profit',
                'nodeType': 'VariableDeclaration',
                'scope': 232,
                'src': '1009:14:1',
                'stateVariable': false,
                'storageLocation': 'default',
                'typeDescriptions': {
                  'typeIdentifier': 't_uint256',
                  'typeString': 'uint256'
                },
                'typeName': {
                  'id': 226,
                  'name': 'uint256',
                  'nodeType': 'ElementaryTypeName',
                  'src': '1009:7:1',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  }
                },
                'value': null,
                'visibility': 'internal'
              },
              {
                'constant': false,
                'id': 229,
                'name': 'taken',
                'nodeType': 'VariableDeclaration',
                'scope': 232,
                'src': '1033:13:1',
                'stateVariable': false,
                'storageLocation': 'default',
                'typeDescriptions': {
                  'typeIdentifier': 't_uint256',
                  'typeString': 'uint256'
                },
                'typeName': {
                  'id': 228,
                  'name': 'uint256',
                  'nodeType': 'ElementaryTypeName',
                  'src': '1033:7:1',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  }
                },
                'value': null,
                'visibility': 'internal'
              },
              {
                'constant': false,
                'id': 231,
                'name': 'settled',
                'nodeType': 'VariableDeclaration',
                'scope': 232,
                'src': '1056:15:1',
                'stateVariable': false,
                'storageLocation': 'default',
                'typeDescriptions': {
                  'typeIdentifier': 't_uint256',
                  'typeString': 'uint256'
                },
                'typeName': {
                  'id': 230,
                  'name': 'uint256',
                  'nodeType': 'ElementaryTypeName',
                  'src': '1056:7:1',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  }
                },
                'value': null,
                'visibility': 'internal'
              }
            ],
            'name': 'Account',
            'nodeType': 'StructDefinition',
            'scope': 674,
            'src': '984:94:1',
            'visibility': 'public'
          },
          {
            'anonymous': false,
            'documentation': null,
            'id': 238,
            'name': 'Mint',
            'nodeType': 'EventDefinition',
            'parameters': {
              'id': 237,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 234,
                  'indexed': true,
                  'name': '_owner',
                  'nodeType': 'VariableDeclaration',
                  'scope': 238,
                  'src': '1109:22:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 233,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '1109:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 236,
                  'indexed': false,
                  'name': '_value',
                  'nodeType': 'VariableDeclaration',
                  'scope': 238,
                  'src': '1133:14:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 235,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '1133:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '1108:40:1'
            },
            'src': '1098:51:1'
          },
          {
            'anonymous': false,
            'documentation': null,
            'id': 244,
            'name': 'Burn',
            'nodeType': 'EventDefinition',
            'parameters': {
              'id': 243,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 240,
                  'indexed': true,
                  'name': '_owner',
                  'nodeType': 'VariableDeclaration',
                  'scope': 244,
                  'src': '1165:22:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 239,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '1165:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 242,
                  'indexed': false,
                  'name': '_value',
                  'nodeType': 'VariableDeclaration',
                  'scope': 244,
                  'src': '1189:14:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 241,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '1189:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '1164:40:1'
            },
            'src': '1154:51:1'
          },
          {
            'anonymous': false,
            'documentation': null,
            'id': 250,
            'name': 'Withdraw',
            'nodeType': 'EventDefinition',
            'parameters': {
              'id': 249,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 246,
                  'indexed': true,
                  'name': '_owner',
                  'nodeType': 'VariableDeclaration',
                  'scope': 250,
                  'src': '1225:22:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 245,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '1225:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 248,
                  'indexed': false,
                  'name': '_value',
                  'nodeType': 'VariableDeclaration',
                  'scope': 250,
                  'src': '1249:14:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 247,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '1249:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '1224:40:1'
            },
            'src': '1210:55:1'
          },
          {
            'anonymous': false,
            'documentation': null,
            'id': 254,
            'name': 'Pay',
            'nodeType': 'EventDefinition',
            'parameters': {
              'id': 253,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 252,
                  'indexed': false,
                  'name': '_value',
                  'nodeType': 'VariableDeclaration',
                  'scope': 254,
                  'src': '1280:14:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 251,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '1280:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '1279:16:1'
            },
            'src': '1270:26:1'
          },
          {
            'body': {
              'id': 279,
              'nodeType': 'Block',
              'src': '1452:120:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 269,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'id': 265,
                      'name': 'collateral',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 207,
                      'src': '1462:10:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_contract$_IERC20Token_$1121',
                        'typeString': 'contract IERC20Token'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'arguments': [
                        {
                          'argumentTypes': null,
                          'id': 267,
                          'name': '_collateralAddress',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 256,
                          'src': '1487:18:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          }
                        }
                      ],
                      'expression': {
                        'argumentTypes': [
                          {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          }
                        ],
                        'id': 266,
                        'name': 'IERC20Token',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 1121,
                        'src': '1475:11:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_type$_t_contract$_IERC20Token_$1121_$',
                          'typeString': 'type(contract IERC20Token)'
                        }
                      },
                      'id': 268,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'kind': 'typeConversion',
                      'lValueRequested': false,
                      'names': [],
                      'nodeType': 'FunctionCall',
                      'src': '1475:31:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_contract$_IERC20Token_$1121',
                        'typeString': 'contract IERC20Token'
                      }
                    },
                    'src': '1462:44:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_contract$_IERC20Token_$1121',
                      'typeString': 'contract IERC20Token'
                    }
                  },
                  'id': 270,
                  'nodeType': 'ExpressionStatement',
                  'src': '1462:44:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 273,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'id': 271,
                      'name': 'maxSupply',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 209,
                      'src': '1516:9:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'id': 272,
                      'name': '_maxSupply',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 258,
                      'src': '1528:10:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '1516:22:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'id': 274,
                  'nodeType': 'ExpressionStatement',
                  'src': '1516:22:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 277,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'id': 275,
                      'name': 'finalized',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 211,
                      'src': '1548:9:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_bool',
                        'typeString': 'bool'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'hexValue': '66616c7365',
                      'id': 276,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': true,
                      'kind': 'bool',
                      'lValueRequested': false,
                      'nodeType': 'Literal',
                      'src': '1560:5:1',
                      'subdenomination': null,
                      'typeDescriptions': {
                        'typeIdentifier': 't_bool',
                        'typeString': 'bool'
                      },
                      'value': 'false'
                    },
                    'src': '1548:17:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'id': 278,
                  'nodeType': 'ExpressionStatement',
                  'src': '1548:17:1'
                }
              ]
            },
            'documentation': null,
            'id': 280,
            'implemented': true,
            'kind': 'constructor',
            'modifiers': [
              {
                'arguments': [
                  {
                    'argumentTypes': null,
                    'hexValue': '5031303620546f6b656e',
                    'id': 261,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': true,
                    'kind': 'string',
                    'lValueRequested': false,
                    'nodeType': 'Literal',
                    'src': '1426:12:1',
                    'subdenomination': null,
                    'typeDescriptions': {
                      'typeIdentifier': 't_stringliteral_211383fd76fbbdd33886daedf90f675cb678f3f61ed4a6aa412b97ebbd5e4df3',
                      'typeString': 'literal_string \'P106 Token\''
                    },
                    'value': 'P106 Token'
                  },
                  {
                    'argumentTypes': null,
                    'hexValue': '50313036',
                    'id': 262,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': true,
                    'kind': 'string',
                    'lValueRequested': false,
                    'nodeType': 'Literal',
                    'src': '1440:6:1',
                    'subdenomination': null,
                    'typeDescriptions': {
                      'typeIdentifier': 't_stringliteral_e04deb9009a1b2e47b491ccc3afffa77b3513632672a45b1f38f997a4c833193',
                      'typeString': 'literal_string \'P106\''
                    },
                    'value': 'P106'
                  }
                ],
                'id': 263,
                'modifierName': {
                  'argumentTypes': null,
                  'id': 260,
                  'name': 'MintableERC20Token',
                  'nodeType': 'Identifier',
                  'overloadedDeclarations': [],
                  'referencedDeclaration': 872,
                  'src': '1407:18:1',
                  'typeDescriptions': {
                    'typeIdentifier': 't_type$_t_contract$_MintableERC20Token_$872_$',
                    'typeString': 'type(contract MintableERC20Token)'
                  }
                },
                'nodeType': 'ModifierInvocation',
                'src': '1407:40:1'
              }
            ],
            'name': '',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 259,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 256,
                  'name': '_collateralAddress',
                  'nodeType': 'VariableDeclaration',
                  'scope': 280,
                  'src': '1323:26:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 255,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '1323:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 258,
                  'name': '_maxSupply',
                  'nodeType': 'VariableDeclaration',
                  'scope': 280,
                  'src': '1359:18:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 257,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '1359:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '1313:70:1'
            },
            'returnParameters': {
              'id': 264,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '1452:0:1'
            },
            'scope': 674,
            'src': '1302:270:1',
            'stateMutability': 'nonpayable',
            'superFunction': null,
            'visibility': 'public'
          },
          {
            'body': {
              'id': 315,
              'nodeType': 'Block',
              'src': '1635:227:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        'id': 288,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'id': 286,
                          'name': 'finalized',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 211,
                          'src': '1653:9:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '==',
                        'rightExpression': {
                          'argumentTypes': null,
                          'hexValue': '66616c7365',
                          'id': 287,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': true,
                          'kind': 'bool',
                          'lValueRequested': false,
                          'nodeType': 'Literal',
                          'src': '1666:5:1',
                          'subdenomination': null,
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          },
                          'value': 'false'
                        },
                        'src': '1653:18:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '43414e5f4f4e4c595f46494e414c495a455f4f4e4345',
                        'id': 289,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '1673:24:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_1beb00a07bd198ba7d37618d3c3476879b9c1385d999c210dcdf6cc0dddcbe67',
                          'typeString': 'literal_string \'CAN_ONLY_FINALIZE_ONCE\''
                        },
                        'value': 'CAN_ONLY_FINALIZE_ONCE'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_1beb00a07bd198ba7d37618d3c3476879b9c1385d999c210dcdf6cc0dddcbe67',
                          'typeString': 'literal_string \'CAN_ONLY_FINALIZE_ONCE\''
                        }
                      ],
                      'id': 285,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1671,
                        1672
                      ],
                      'referencedDeclaration': 1672,
                      'src': '1645:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 290,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '1645:53:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 291,
                  'nodeType': 'ExpressionStatement',
                  'src': '1645:53:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 294,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'id': 292,
                      'name': 'finalized',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 211,
                      'src': '1708:9:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_bool',
                        'typeString': 'bool'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'hexValue': '74727565',
                      'id': 293,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': true,
                      'kind': 'bool',
                      'lValueRequested': false,
                      'nodeType': 'Literal',
                      'src': '1720:4:1',
                      'subdenomination': null,
                      'typeDescriptions': {
                        'typeIdentifier': 't_bool',
                        'typeString': 'bool'
                      },
                      'value': 'true'
                    },
                    'src': '1708:16:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'id': 295,
                  'nodeType': 'ExpressionStatement',
                  'src': '1708:16:1'
                },
                {
                  'assignments': [
                    297
                  ],
                  'declarations': [
                    {
                      'constant': false,
                      'id': 297,
                      'name': 'remaining',
                      'nodeType': 'VariableDeclaration',
                      'scope': 315,
                      'src': '1734:17:1',
                      'stateVariable': false,
                      'storageLocation': 'default',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      },
                      'typeName': {
                        'id': 296,
                        'name': 'uint256',
                        'nodeType': 'ElementaryTypeName',
                        'src': '1734:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      'value': null,
                      'visibility': 'internal'
                    }
                  ],
                  'id': 302,
                  'initialValue': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 300,
                        'name': 'totalSupply',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 10,
                        'src': '1768:11:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'expression': {
                        'argumentTypes': null,
                        'id': 298,
                        'name': 'maxSupply',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 209,
                        'src': '1754:9:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      'id': 299,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'sub',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 1454,
                      'src': '1754:13:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$',
                        'typeString': 'function (uint256,uint256) pure returns (uint256)'
                      }
                    },
                    'id': 301,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '1754:26:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'nodeType': 'VariableDeclarationStatement',
                  'src': '1734:46:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'arguments': [],
                        'expression': {
                          'argumentTypes': [],
                          'id': 304,
                          'name': 'owner',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 906,
                          'src': '1796:5:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_function_internal_view$__$returns$_t_address_$',
                            'typeString': 'function () view returns (address)'
                          }
                        },
                        'id': 305,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'functionCall',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '1796:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 306,
                        'name': 'remaining',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 297,
                        'src': '1805:9:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'id': 303,
                      'name': '_mint',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 837,
                      'src': '1790:5:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$',
                        'typeString': 'function (address,uint256)'
                      }
                    },
                    'id': 307,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '1790:25:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 308,
                  'nodeType': 'ExpressionStatement',
                  'src': '1790:25:1'
                },
                {
                  'eventCall': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'arguments': [],
                        'expression': {
                          'argumentTypes': [],
                          'id': 310,
                          'name': 'owner',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 906,
                          'src': '1836:5:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_function_internal_view$__$returns$_t_address_$',
                            'typeString': 'function () view returns (address)'
                          }
                        },
                        'id': 311,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'functionCall',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '1836:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 312,
                        'name': 'remaining',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 297,
                        'src': '1845:9:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'id': 309,
                      'name': 'Mint',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 238,
                      'src': '1831:4:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$',
                        'typeString': 'function (address,uint256)'
                      }
                    },
                    'id': 313,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '1831:24:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 314,
                  'nodeType': 'EmitStatement',
                  'src': '1826:29:1'
                }
              ]
            },
            'documentation': null,
            'id': 316,
            'implemented': true,
            'kind': 'function',
            'modifiers': [
              {
                'arguments': null,
                'id': 283,
                'modifierName': {
                  'argumentTypes': null,
                  'id': 282,
                  'name': 'onlyOwner',
                  'nodeType': 'Identifier',
                  'overloadedDeclarations': [],
                  'referencedDeclaration': 916,
                  'src': '1621:9:1',
                  'typeDescriptions': {
                    'typeIdentifier': 't_modifier$__$',
                    'typeString': 'modifier ()'
                  }
                },
                'nodeType': 'ModifierInvocation',
                'src': '1621:9:1'
              }
            ],
            'name': 'finalize',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 281,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '1595:2:1'
            },
            'returnParameters': {
              'id': 284,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '1635:0:1'
            },
            'scope': 674,
            'src': '1578:284:1',
            'stateMutability': 'nonpayable',
            'superFunction': null,
            'visibility': 'public'
          },
          {
            'body': {
              'id': 326,
              'nodeType': 'Block',
              'src': '1893:76:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        'id': 321,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'id': 319,
                          'name': 'finalized',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 211,
                          'src': '1911:9:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '==',
                        'rightExpression': {
                          'argumentTypes': null,
                          'hexValue': '66616c7365',
                          'id': 320,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': true,
                          'kind': 'bool',
                          'lValueRequested': false,
                          'nodeType': 'Literal',
                          'src': '1924:5:1',
                          'subdenomination': null,
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          },
                          'value': 'false'
                        },
                        'src': '1911:18:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '414c52454144595f46494e414c495a4544',
                        'id': 322,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '1931:19:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_a84b963af821bd2b41d802daa2c7840123c5cf834cde12aa10bdce75ff0df2d9',
                          'typeString': 'literal_string \'ALREADY_FINALIZED\''
                        },
                        'value': 'ALREADY_FINALIZED'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_a84b963af821bd2b41d802daa2c7840123c5cf834cde12aa10bdce75ff0df2d9',
                          'typeString': 'literal_string \'ALREADY_FINALIZED\''
                        }
                      ],
                      'id': 318,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1671,
                        1672
                      ],
                      'referencedDeclaration': 1672,
                      'src': '1903:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 323,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '1903:48:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 324,
                  'nodeType': 'ExpressionStatement',
                  'src': '1903:48:1'
                },
                {
                  'id': 325,
                  'nodeType': 'PlaceholderStatement',
                  'src': '1961:1:1'
                }
              ]
            },
            'documentation': null,
            'id': 327,
            'name': 'beforeFinalized',
            'nodeType': 'ModifierDefinition',
            'parameters': {
              'id': 317,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '1893:0:1'
            },
            'src': '1868:101:1',
            'visibility': 'internal'
          },
          {
            'body': {
              'id': 337,
              'nodeType': 'Block',
              'src': '1999:71:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        'id': 332,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'id': 330,
                          'name': 'finalized',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 211,
                          'src': '2017:9:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '==',
                        'rightExpression': {
                          'argumentTypes': null,
                          'hexValue': '74727565',
                          'id': 331,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': true,
                          'kind': 'bool',
                          'lValueRequested': false,
                          'nodeType': 'Literal',
                          'src': '2030:4:1',
                          'subdenomination': null,
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          },
                          'value': 'true'
                        },
                        'src': '2017:17:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '4e4f545f46494e414c495a4544',
                        'id': 333,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '2036:15:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_c52b4ebd065593469a3c7d1425274a5bc8f1f01ff55e53236e5ea4b4745c5e01',
                          'typeString': 'literal_string \'NOT_FINALIZED\''
                        },
                        'value': 'NOT_FINALIZED'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_c52b4ebd065593469a3c7d1425274a5bc8f1f01ff55e53236e5ea4b4745c5e01',
                          'typeString': 'literal_string \'NOT_FINALIZED\''
                        }
                      ],
                      'id': 329,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1671,
                        1672
                      ],
                      'referencedDeclaration': 1672,
                      'src': '2009:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 334,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '2009:43:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 335,
                  'nodeType': 'ExpressionStatement',
                  'src': '2009:43:1'
                },
                {
                  'id': 336,
                  'nodeType': 'PlaceholderStatement',
                  'src': '2062:1:1'
                }
              ]
            },
            'documentation': null,
            'id': 338,
            'name': 'afterFinalized',
            'nodeType': 'ModifierDefinition',
            'parameters': {
              'id': 328,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '1999:0:1'
            },
            'src': '1975:95:1',
            'visibility': 'internal'
          },
          {
            'body': {
              'id': 356,
              'nodeType': 'Block',
              'src': '2150:81:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        'id': 348,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'id': 346,
                          'name': 'wad',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 340,
                          'src': '2168:3:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '>',
                        'rightExpression': {
                          'argumentTypes': null,
                          'hexValue': '30',
                          'id': 347,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': true,
                          'kind': 'number',
                          'lValueRequested': false,
                          'nodeType': 'Literal',
                          'src': '2174:1:1',
                          'subdenomination': null,
                          'typeDescriptions': {
                            'typeIdentifier': 't_rational_0_by_1',
                            'typeString': 'int_const 0'
                          },
                          'value': '0'
                        },
                        'src': '2168:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '494e56414c49445f5249475f5052494345',
                        'id': 349,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '2177:19:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_c2be6ad850ec57d2efd82e6cd8ec69a9a91db37db712f510c51ca115199cd30d',
                          'typeString': 'literal_string \'INVALID_RIG_PRICE\''
                        },
                        'value': 'INVALID_RIG_PRICE'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_c2be6ad850ec57d2efd82e6cd8ec69a9a91db37db712f510c51ca115199cd30d',
                          'typeString': 'literal_string \'INVALID_RIG_PRICE\''
                        }
                      ],
                      'id': 345,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1671,
                        1672
                      ],
                      'referencedDeclaration': 1672,
                      'src': '2160:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 350,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '2160:37:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 351,
                  'nodeType': 'ExpressionStatement',
                  'src': '2160:37:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 354,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'id': 352,
                      'name': 'targetPrice',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 213,
                      'src': '2207:11:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'id': 353,
                      'name': 'wad',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 340,
                      'src': '2221:3:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '2207:17:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'id': 355,
                  'nodeType': 'ExpressionStatement',
                  'src': '2207:17:1'
                }
              ]
            },
            'documentation': null,
            'id': 357,
            'implemented': true,
            'kind': 'function',
            'modifiers': [
              {
                'arguments': null,
                'id': 343,
                'modifierName': {
                  'argumentTypes': null,
                  'id': 342,
                  'name': 'onlyOwner',
                  'nodeType': 'Identifier',
                  'overloadedDeclarations': [],
                  'referencedDeclaration': 916,
                  'src': '2136:9:1',
                  'typeDescriptions': {
                    'typeIdentifier': 't_modifier$__$',
                    'typeString': 'modifier ()'
                  }
                },
                'nodeType': 'ModifierInvocation',
                'src': '2136:9:1'
              }
            ],
            'name': 'setTargetPrice',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 341,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 340,
                  'name': 'wad',
                  'nodeType': 'VariableDeclaration',
                  'scope': 357,
                  'src': '2100:11:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 339,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2100:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '2099:13:1'
            },
            'returnParameters': {
              'id': 344,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '2150:0:1'
            },
            'scope': 674,
            'src': '2076:155:1',
            'stateMutability': 'nonpayable',
            'superFunction': null,
            'visibility': 'public'
          },
          {
            'body': {
              'id': 389,
              'nodeType': 'Block',
              'src': '2323:140:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 371,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'id': 366,
                      'name': 'totalProfit',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 215,
                      'src': '2333:11:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'arguments': [
                        {
                          'argumentTypes': null,
                          'id': 369,
                          'name': 'wad',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 359,
                          'src': '2363:3:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        }
                      ],
                      'expression': {
                        'argumentTypes': [
                          {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        ],
                        'expression': {
                          'argumentTypes': null,
                          'id': 367,
                          'name': 'totalProfit',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 215,
                          'src': '2347:11:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        },
                        'id': 368,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'memberName': 'add',
                        'nodeType': 'MemberAccess',
                        'referencedDeclaration': 1429,
                        'src': '2347:15:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$',
                          'typeString': 'function (uint256,uint256) pure returns (uint256)'
                        }
                      },
                      'id': 370,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'kind': 'functionCall',
                      'lValueRequested': false,
                      'names': [],
                      'nodeType': 'FunctionCall',
                      'src': '2347:20:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '2333:34:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'id': 372,
                  'nodeType': 'ExpressionStatement',
                  'src': '2333:34:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 376,
                        'name': 'wad',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 359,
                        'src': '2397:3:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'expression': {
                        'argumentTypes': null,
                        'id': 373,
                        'name': 'historyProfits',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 218,
                        'src': '2377:14:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_array$_t_uint256_$dyn_storage',
                          'typeString': 'uint256[] storage ref'
                        }
                      },
                      'id': 375,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'push',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': null,
                      'src': '2377:19:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$',
                        'typeString': 'function (uint256) returns (uint256)'
                      }
                    },
                    'id': 377,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '2377:24:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'id': 378,
                  'nodeType': 'ExpressionStatement',
                  'src': '2377:24:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 382,
                        'name': 'now',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 1670,
                        'src': '2428:3:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'expression': {
                        'argumentTypes': null,
                        'id': 379,
                        'name': 'historyTime',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 221,
                        'src': '2411:11:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_array$_t_uint256_$dyn_storage',
                          'typeString': 'uint256[] storage ref'
                        }
                      },
                      'id': 381,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'push',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': null,
                      'src': '2411:16:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$',
                        'typeString': 'function (uint256) returns (uint256)'
                      }
                    },
                    'id': 383,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '2411:21:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'id': 384,
                  'nodeType': 'ExpressionStatement',
                  'src': '2411:21:1'
                },
                {
                  'eventCall': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 386,
                        'name': 'wad',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 359,
                        'src': '2452:3:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'id': 385,
                      'name': 'Pay',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 254,
                      'src': '2448:3:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_event_nonpayable$_t_uint256_$returns$__$',
                        'typeString': 'function (uint256)'
                      }
                    },
                    'id': 387,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '2448:8:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 388,
                  'nodeType': 'EmitStatement',
                  'src': '2443:13:1'
                }
              ]
            },
            'documentation': null,
            'id': 390,
            'implemented': true,
            'kind': 'function',
            'modifiers': [
              {
                'arguments': null,
                'id': 362,
                'modifierName': {
                  'argumentTypes': null,
                  'id': 361,
                  'name': 'onlyOwner',
                  'nodeType': 'Identifier',
                  'overloadedDeclarations': [],
                  'referencedDeclaration': 916,
                  'src': '2286:9:1',
                  'typeDescriptions': {
                    'typeIdentifier': 't_modifier$__$',
                    'typeString': 'modifier ()'
                  }
                },
                'nodeType': 'ModifierInvocation',
                'src': '2286:9:1'
              },
              {
                'arguments': null,
                'id': 364,
                'modifierName': {
                  'argumentTypes': null,
                  'id': 363,
                  'name': 'afterFinalized',
                  'nodeType': 'Identifier',
                  'overloadedDeclarations': [],
                  'referencedDeclaration': 338,
                  'src': '2304:14:1',
                  'typeDescriptions': {
                    'typeIdentifier': 't_modifier$__$',
                    'typeString': 'modifier ()'
                  }
                },
                'nodeType': 'ModifierInvocation',
                'src': '2304:14:1'
              }
            ],
            'name': 'pay',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 360,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 359,
                  'name': 'wad',
                  'nodeType': 'VariableDeclaration',
                  'scope': 390,
                  'src': '2250:11:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 358,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2250:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '2249:13:1'
            },
            'returnParameters': {
              'id': 365,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '2323:0:1'
            },
            'scope': 674,
            'src': '2237:226:1',
            'stateMutability': 'nonpayable',
            'superFunction': null,
            'visibility': 'public'
          },
          {
            'body': {
              'id': 427,
              'nodeType': 'Block',
              'src': '2575:244:1',
              'statements': [
                {
                  'condition': {
                    'argumentTypes': null,
                    'commonType': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    },
                    'id': 402,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftExpression': {
                      'argumentTypes': null,
                      'id': 397,
                      'name': 'totalProfit',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 215,
                      'src': '2589:11:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'BinaryOperation',
                    'operator': '==',
                    'rightExpression': {
                      'argumentTypes': null,
                      'expression': {
                        'argumentTypes': null,
                        'baseExpression': {
                          'argumentTypes': null,
                          'id': 398,
                          'name': 'accounts',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 225,
                          'src': '2604:8:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_mapping$_t_address_$_t_struct$_Account_$232_storage_$',
                            'typeString': 'mapping(address => struct MBFToken.Account storage ref)'
                          }
                        },
                        'id': 400,
                        'indexExpression': {
                          'argumentTypes': null,
                          'id': 399,
                          'name': 'beneficiary',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 392,
                          'src': '2613:11:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          }
                        },
                        'isConstant': false,
                        'isLValue': true,
                        'isPure': false,
                        'lValueRequested': false,
                        'nodeType': 'IndexAccess',
                        'src': '2604:21:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_struct$_Account_$232_storage',
                          'typeString': 'struct MBFToken.Account storage ref'
                        }
                      },
                      'id': 401,
                      'isConstant': false,
                      'isLValue': true,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'settled',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 231,
                      'src': '2604:29:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '2589:44:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'falseBody': null,
                  'id': 406,
                  'nodeType': 'IfStatement',
                  'src': '2585:83:1',
                  'trueBody': {
                    'id': 405,
                    'nodeType': 'Block',
                    'src': '2635:33:1',
                    'statements': [
                      {
                        'expression': {
                          'argumentTypes': null,
                          'hexValue': '30',
                          'id': 403,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': true,
                          'kind': 'number',
                          'lValueRequested': false,
                          'nodeType': 'Literal',
                          'src': '2656:1:1',
                          'subdenomination': null,
                          'typeDescriptions': {
                            'typeIdentifier': 't_rational_0_by_1',
                            'typeString': 'int_const 0'
                          },
                          'value': '0'
                        },
                        'functionReturnParameters': 396,
                        'id': 404,
                        'nodeType': 'Return',
                        'src': '2649:8:1'
                      }
                    ]
                  }
                },
                {
                  'assignments': [
                    408
                  ],
                  'declarations': [
                    {
                      'constant': false,
                      'id': 408,
                      'name': 'toSettle',
                      'nodeType': 'VariableDeclaration',
                      'scope': 427,
                      'src': '2677:16:1',
                      'stateVariable': false,
                      'storageLocation': 'default',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      },
                      'typeName': {
                        'id': 407,
                        'name': 'uint256',
                        'nodeType': 'ElementaryTypeName',
                        'src': '2677:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      'value': null,
                      'visibility': 'internal'
                    }
                  ],
                  'id': 416,
                  'initialValue': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'expression': {
                          'argumentTypes': null,
                          'baseExpression': {
                            'argumentTypes': null,
                            'id': 411,
                            'name': 'accounts',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 225,
                            'src': '2712:8:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_mapping$_t_address_$_t_struct$_Account_$232_storage_$',
                              'typeString': 'mapping(address => struct MBFToken.Account storage ref)'
                            }
                          },
                          'id': 413,
                          'indexExpression': {
                            'argumentTypes': null,
                            'id': 412,
                            'name': 'beneficiary',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 392,
                            'src': '2721:11:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          'isConstant': false,
                          'isLValue': true,
                          'isPure': false,
                          'lValueRequested': false,
                          'nodeType': 'IndexAccess',
                          'src': '2712:21:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_struct$_Account_$232_storage',
                            'typeString': 'struct MBFToken.Account storage ref'
                          }
                        },
                        'id': 414,
                        'isConstant': false,
                        'isLValue': true,
                        'isPure': false,
                        'lValueRequested': false,
                        'memberName': 'settled',
                        'nodeType': 'MemberAccess',
                        'referencedDeclaration': 231,
                        'src': '2712:29:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'expression': {
                        'argumentTypes': null,
                        'id': 409,
                        'name': 'totalProfit',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 215,
                        'src': '2696:11:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      'id': 410,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'sub',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 1454,
                      'src': '2696:15:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$',
                        'typeString': 'function (uint256,uint256) pure returns (uint256)'
                      }
                    },
                    'id': 415,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '2696:46:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'nodeType': 'VariableDeclarationStatement',
                  'src': '2677:65:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 424,
                        'name': 'maxSupply',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 209,
                        'src': '2802:9:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'expression': {
                        'argumentTypes': null,
                        'arguments': [
                          {
                            'argumentTypes': null,
                            'baseExpression': {
                              'argumentTypes': null,
                              'id': 419,
                              'name': 'balanceOf',
                              'nodeType': 'Identifier',
                              'overloadedDeclarations': [],
                              'referencedDeclaration': 14,
                              'src': '2773:9:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_mapping$_t_address_$_t_uint256_$',
                                'typeString': 'mapping(address => uint256)'
                              }
                            },
                            'id': 421,
                            'indexExpression': {
                              'argumentTypes': null,
                              'id': 420,
                              'name': 'beneficiary',
                              'nodeType': 'Identifier',
                              'overloadedDeclarations': [],
                              'referencedDeclaration': 392,
                              'src': '2783:11:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_address',
                                'typeString': 'address'
                              }
                            },
                            'isConstant': false,
                            'isLValue': true,
                            'isPure': false,
                            'lValueRequested': false,
                            'nodeType': 'IndexAccess',
                            'src': '2773:22:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          }
                        ],
                        'expression': {
                          'argumentTypes': [
                            {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          ],
                          'expression': {
                            'argumentTypes': null,
                            'id': 417,
                            'name': 'toSettle',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 408,
                            'src': '2759:8:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'id': 418,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'memberName': 'wmul',
                          'nodeType': 'MemberAccess',
                          'referencedDeclaration': 1574,
                          'src': '2759:13:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$',
                            'typeString': 'function (uint256,uint256) pure returns (uint256)'
                          }
                        },
                        'id': 422,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'functionCall',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '2759:37:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      'id': 423,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'wdiv',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 1600,
                      'src': '2759:42:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$',
                        'typeString': 'function (uint256,uint256) pure returns (uint256)'
                      }
                    },
                    'id': 425,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '2759:53:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'functionReturnParameters': 396,
                  'id': 426,
                  'nodeType': 'Return',
                  'src': '2752:60:1'
                }
              ]
            },
            'documentation': null,
            'id': 428,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'unsettledProfitOf',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 393,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 392,
                  'name': 'beneficiary',
                  'nodeType': 'VariableDeclaration',
                  'scope': 428,
                  'src': '2496:19:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 391,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2496:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '2495:21:1'
            },
            'returnParameters': {
              'id': 396,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 395,
                  'name': '',
                  'nodeType': 'VariableDeclaration',
                  'scope': 428,
                  'src': '2562:7:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 394,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2562:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '2561:9:1'
            },
            'scope': 674,
            'src': '2469:350:1',
            'stateMutability': 'view',
            'superFunction': null,
            'visibility': 'public'
          },
          {
            'body': {
              'id': 444,
              'nodeType': 'Block',
              'src': '2922:165:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'commonType': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    },
                    'id': 442,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftExpression': {
                      'argumentTypes': null,
                      'arguments': [
                        {
                          'argumentTypes': null,
                          'id': 436,
                          'name': 'beneficiary',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 430,
                          'src': '3037:11:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          }
                        }
                      ],
                      'expression': {
                        'argumentTypes': [
                          {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          }
                        ],
                        'id': 435,
                        'name': 'unsettledProfitOf',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 428,
                        'src': '3019:17:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_function_internal_view$_t_address_$returns$_t_uint256_$',
                          'typeString': 'function (address) view returns (uint256)'
                        }
                      },
                      'id': 437,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'kind': 'functionCall',
                      'lValueRequested': false,
                      'names': [],
                      'nodeType': 'FunctionCall',
                      'src': '3019:30:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'BinaryOperation',
                    'operator': '+',
                    'rightExpression': {
                      'argumentTypes': null,
                      'expression': {
                        'argumentTypes': null,
                        'baseExpression': {
                          'argumentTypes': null,
                          'id': 438,
                          'name': 'accounts',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 225,
                          'src': '3052:8:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_mapping$_t_address_$_t_struct$_Account_$232_storage_$',
                            'typeString': 'mapping(address => struct MBFToken.Account storage ref)'
                          }
                        },
                        'id': 440,
                        'indexExpression': {
                          'argumentTypes': null,
                          'id': 439,
                          'name': 'beneficiary',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 430,
                          'src': '3061:11:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          }
                        },
                        'isConstant': false,
                        'isLValue': true,
                        'isPure': false,
                        'lValueRequested': false,
                        'nodeType': 'IndexAccess',
                        'src': '3052:21:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_struct$_Account_$232_storage',
                          'typeString': 'struct MBFToken.Account storage ref'
                        }
                      },
                      'id': 441,
                      'isConstant': false,
                      'isLValue': true,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'profit',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 227,
                      'src': '3052:28:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '3019:61:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'functionReturnParameters': 434,
                  'id': 443,
                  'nodeType': 'Return',
                  'src': '3012:68:1'
                }
              ]
            },
            'documentation': null,
            'id': 445,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'profitOf',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 431,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 430,
                  'name': 'beneficiary',
                  'nodeType': 'VariableDeclaration',
                  'scope': 445,
                  'src': '2843:19:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 429,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2843:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '2842:21:1'
            },
            'returnParameters': {
              'id': 434,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 433,
                  'name': '',
                  'nodeType': 'VariableDeclaration',
                  'scope': 445,
                  'src': '2909:7:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 432,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2909:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '2908:9:1'
            },
            'scope': 674,
            'src': '2825:262:1',
            'stateMutability': 'view',
            'superFunction': null,
            'visibility': 'public'
          },
          {
            'body': {
              'id': 462,
              'nodeType': 'Block',
              'src': '3195:78:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'arguments': [
                          {
                            'argumentTypes': null,
                            'id': 458,
                            'name': 'beneficiary',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 447,
                            'src': '3253:11:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          }
                        ],
                        'expression': {
                          'argumentTypes': [
                            {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          ],
                          'id': 457,
                          'name': 'profitOf',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 445,
                          'src': '3244:8:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_function_internal_view$_t_address_$returns$_t_uint256_$',
                            'typeString': 'function (address) view returns (uint256)'
                          }
                        },
                        'id': 459,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'functionCall',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '3244:21:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'expression': {
                        'argumentTypes': null,
                        'expression': {
                          'argumentTypes': null,
                          'baseExpression': {
                            'argumentTypes': null,
                            'id': 452,
                            'name': 'accounts',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 225,
                            'src': '3212:8:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_mapping$_t_address_$_t_struct$_Account_$232_storage_$',
                              'typeString': 'mapping(address => struct MBFToken.Account storage ref)'
                            }
                          },
                          'id': 454,
                          'indexExpression': {
                            'argumentTypes': null,
                            'id': 453,
                            'name': 'beneficiary',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 447,
                            'src': '3221:11:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          'isConstant': false,
                          'isLValue': true,
                          'isPure': false,
                          'lValueRequested': false,
                          'nodeType': 'IndexAccess',
                          'src': '3212:21:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_struct$_Account_$232_storage',
                            'typeString': 'struct MBFToken.Account storage ref'
                          }
                        },
                        'id': 455,
                        'isConstant': false,
                        'isLValue': true,
                        'isPure': false,
                        'lValueRequested': false,
                        'memberName': 'taken',
                        'nodeType': 'MemberAccess',
                        'referencedDeclaration': 229,
                        'src': '3212:27:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      'id': 456,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'add',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 1429,
                      'src': '3212:31:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$',
                        'typeString': 'function (uint256,uint256) pure returns (uint256)'
                      }
                    },
                    'id': 460,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '3212:54:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'functionReturnParameters': 451,
                  'id': 461,
                  'nodeType': 'Return',
                  'src': '3205:61:1'
                }
              ]
            },
            'documentation': null,
            'id': 463,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'totalProfitOf',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 448,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 447,
                  'name': 'beneficiary',
                  'nodeType': 'VariableDeclaration',
                  'scope': 463,
                  'src': '3116:19:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 446,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3116:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '3115:21:1'
            },
            'returnParameters': {
              'id': 451,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 450,
                  'name': '',
                  'nodeType': 'VariableDeclaration',
                  'scope': 463,
                  'src': '3182:7:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 449,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3182:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '3181:9:1'
            },
            'scope': 674,
            'src': '3093:180:1',
            'stateMutability': 'view',
            'superFunction': null,
            'visibility': 'public'
          },
          {
            'body': {
              'id': 493,
              'nodeType': 'Block',
              'src': '3343:212:1',
              'statements': [
                {
                  'condition': {
                    'argumentTypes': null,
                    'commonType': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    },
                    'id': 473,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftExpression': {
                      'argumentTypes': null,
                      'expression': {
                        'argumentTypes': null,
                        'baseExpression': {
                          'argumentTypes': null,
                          'id': 468,
                          'name': 'accounts',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 225,
                          'src': '3357:8:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_mapping$_t_address_$_t_struct$_Account_$232_storage_$',
                            'typeString': 'mapping(address => struct MBFToken.Account storage ref)'
                          }
                        },
                        'id': 470,
                        'indexExpression': {
                          'argumentTypes': null,
                          'id': 469,
                          'name': 'beneficiary',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 465,
                          'src': '3366:11:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          }
                        },
                        'isConstant': false,
                        'isLValue': true,
                        'isPure': false,
                        'lValueRequested': false,
                        'nodeType': 'IndexAccess',
                        'src': '3357:21:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_struct$_Account_$232_storage',
                          'typeString': 'struct MBFToken.Account storage ref'
                        }
                      },
                      'id': 471,
                      'isConstant': false,
                      'isLValue': true,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'settled',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 231,
                      'src': '3357:29:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'BinaryOperation',
                    'operator': '==',
                    'rightExpression': {
                      'argumentTypes': null,
                      'id': 472,
                      'name': 'totalProfit',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 215,
                      'src': '3390:11:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '3357:44:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'falseBody': null,
                  'id': 476,
                  'nodeType': 'IfStatement',
                  'src': '3353:81:1',
                  'trueBody': {
                    'id': 475,
                    'nodeType': 'Block',
                    'src': '3403:31:1',
                    'statements': [
                      {
                        'expression': null,
                        'functionReturnParameters': 467,
                        'id': 474,
                        'nodeType': 'Return',
                        'src': '3417:7:1'
                      }
                    ]
                  }
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 484,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'expression': {
                        'argumentTypes': null,
                        'baseExpression': {
                          'argumentTypes': null,
                          'id': 477,
                          'name': 'accounts',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 225,
                          'src': '3443:8:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_mapping$_t_address_$_t_struct$_Account_$232_storage_$',
                            'typeString': 'mapping(address => struct MBFToken.Account storage ref)'
                          }
                        },
                        'id': 479,
                        'indexExpression': {
                          'argumentTypes': null,
                          'id': 478,
                          'name': 'beneficiary',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 465,
                          'src': '3452:11:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          }
                        },
                        'isConstant': false,
                        'isLValue': true,
                        'isPure': false,
                        'lValueRequested': false,
                        'nodeType': 'IndexAccess',
                        'src': '3443:21:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_struct$_Account_$232_storage',
                          'typeString': 'struct MBFToken.Account storage ref'
                        }
                      },
                      'id': 480,
                      'isConstant': false,
                      'isLValue': true,
                      'isPure': false,
                      'lValueRequested': true,
                      'memberName': 'profit',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 227,
                      'src': '3443:28:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'arguments': [
                        {
                          'argumentTypes': null,
                          'id': 482,
                          'name': 'beneficiary',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 465,
                          'src': '3483:11:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          }
                        }
                      ],
                      'expression': {
                        'argumentTypes': [
                          {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          }
                        ],
                        'id': 481,
                        'name': 'profitOf',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 445,
                        'src': '3474:8:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_function_internal_view$_t_address_$returns$_t_uint256_$',
                          'typeString': 'function (address) view returns (uint256)'
                        }
                      },
                      'id': 483,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'kind': 'functionCall',
                      'lValueRequested': false,
                      'names': [],
                      'nodeType': 'FunctionCall',
                      'src': '3474:21:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '3443:52:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'id': 485,
                  'nodeType': 'ExpressionStatement',
                  'src': '3443:52:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 491,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'expression': {
                        'argumentTypes': null,
                        'baseExpression': {
                          'argumentTypes': null,
                          'id': 486,
                          'name': 'accounts',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 225,
                          'src': '3505:8:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_mapping$_t_address_$_t_struct$_Account_$232_storage_$',
                            'typeString': 'mapping(address => struct MBFToken.Account storage ref)'
                          }
                        },
                        'id': 488,
                        'indexExpression': {
                          'argumentTypes': null,
                          'id': 487,
                          'name': 'beneficiary',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 465,
                          'src': '3514:11:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          }
                        },
                        'isConstant': false,
                        'isLValue': true,
                        'isPure': false,
                        'lValueRequested': false,
                        'nodeType': 'IndexAccess',
                        'src': '3505:21:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_struct$_Account_$232_storage',
                          'typeString': 'struct MBFToken.Account storage ref'
                        }
                      },
                      'id': 489,
                      'isConstant': false,
                      'isLValue': true,
                      'isPure': false,
                      'lValueRequested': true,
                      'memberName': 'settled',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 231,
                      'src': '3505:29:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'id': 490,
                      'name': 'totalProfit',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 215,
                      'src': '3537:11:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '3505:43:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'id': 492,
                  'nodeType': 'ExpressionStatement',
                  'src': '3505:43:1'
                }
              ]
            },
            'documentation': null,
            'id': 494,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'adjustProfit',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 466,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 465,
                  'name': 'beneficiary',
                  'nodeType': 'VariableDeclaration',
                  'scope': 494,
                  'src': '3301:19:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 464,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3301:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '3300:21:1'
            },
            'returnParameters': {
              'id': 467,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '3343:0:1'
            },
            'scope': 674,
            'src': '3279:276:1',
            'stateMutability': 'nonpayable',
            'superFunction': null,
            'visibility': 'internal'
          },
          {
            'body': {
              'id': 570,
              'nodeType': 'Block',
              'src': '3600:462:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        },
                        'id': 503,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'expression': {
                            'argumentTypes': null,
                            'id': 498,
                            'name': 'msg',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 1668,
                            'src': '3618:3:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_magic_message',
                              'typeString': 'msg'
                            }
                          },
                          'id': 499,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'memberName': 'sender',
                          'nodeType': 'MemberAccess',
                          'referencedDeclaration': null,
                          'src': '3618:10:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address_payable',
                            'typeString': 'address payable'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '!=',
                        'rightExpression': {
                          'argumentTypes': null,
                          'arguments': [
                            {
                              'argumentTypes': null,
                              'hexValue': '30',
                              'id': 501,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': true,
                              'kind': 'number',
                              'lValueRequested': false,
                              'nodeType': 'Literal',
                              'src': '3640:1:1',
                              'subdenomination': null,
                              'typeDescriptions': {
                                'typeIdentifier': 't_rational_0_by_1',
                                'typeString': 'int_const 0'
                              },
                              'value': '0'
                            }
                          ],
                          'expression': {
                            'argumentTypes': [
                              {
                                'typeIdentifier': 't_rational_0_by_1',
                                'typeString': 'int_const 0'
                              }
                            ],
                            'id': 500,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': true,
                            'lValueRequested': false,
                            'nodeType': 'ElementaryTypeNameExpression',
                            'src': '3632:7:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_type$_t_address_$',
                              'typeString': 'type(address)'
                            },
                            'typeName': 'address'
                          },
                          'id': 502,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': true,
                          'kind': 'typeConversion',
                          'lValueRequested': false,
                          'names': [],
                          'nodeType': 'FunctionCall',
                          'src': '3632:10:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address_payable',
                            'typeString': 'address payable'
                          }
                        },
                        'src': '3618:24:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '494e56414c49445f41444452455353',
                        'id': 504,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '3644:17:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_0c9aa80f6df0d7d66f29f9faed5ce34d8bae3d216a4ab057cfd7af24bdab39cb',
                          'typeString': 'literal_string \'INVALID_ADDRESS\''
                        },
                        'value': 'INVALID_ADDRESS'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_0c9aa80f6df0d7d66f29f9faed5ce34d8bae3d216a4ab057cfd7af24bdab39cb',
                          'typeString': 'literal_string \'INVALID_ADDRESS\''
                        }
                      ],
                      'id': 497,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1671,
                        1672
                      ],
                      'referencedDeclaration': 1672,
                      'src': '3610:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 505,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '3610:52:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 506,
                  'nodeType': 'ExpressionStatement',
                  'src': '3610:52:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'expression': {
                          'argumentTypes': null,
                          'id': 508,
                          'name': 'msg',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 1668,
                          'src': '3686:3:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_magic_message',
                            'typeString': 'msg'
                          }
                        },
                        'id': 509,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'memberName': 'sender',
                        'nodeType': 'MemberAccess',
                        'referencedDeclaration': null,
                        'src': '3686:10:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        }
                      ],
                      'id': 507,
                      'name': 'adjustProfit',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 494,
                      'src': '3673:12:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_nonpayable$_t_address_$returns$__$',
                        'typeString': 'function (address)'
                      }
                    },
                    'id': 510,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '3673:24:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 511,
                  'nodeType': 'ExpressionStatement',
                  'src': '3673:24:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        'id': 519,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'expression': {
                            'argumentTypes': null,
                            'baseExpression': {
                              'argumentTypes': null,
                              'id': 513,
                              'name': 'accounts',
                              'nodeType': 'Identifier',
                              'overloadedDeclarations': [],
                              'referencedDeclaration': 225,
                              'src': '3715:8:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_mapping$_t_address_$_t_struct$_Account_$232_storage_$',
                                'typeString': 'mapping(address => struct MBFToken.Account storage ref)'
                              }
                            },
                            'id': 516,
                            'indexExpression': {
                              'argumentTypes': null,
                              'expression': {
                                'argumentTypes': null,
                                'id': 514,
                                'name': 'msg',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 1668,
                                'src': '3724:3:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_magic_message',
                                  'typeString': 'msg'
                                }
                              },
                              'id': 515,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': false,
                              'lValueRequested': false,
                              'memberName': 'sender',
                              'nodeType': 'MemberAccess',
                              'referencedDeclaration': null,
                              'src': '3724:10:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_address_payable',
                                'typeString': 'address payable'
                              }
                            },
                            'isConstant': false,
                            'isLValue': true,
                            'isPure': false,
                            'lValueRequested': false,
                            'nodeType': 'IndexAccess',
                            'src': '3715:20:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_struct$_Account_$232_storage',
                              'typeString': 'struct MBFToken.Account storage ref'
                            }
                          },
                          'id': 517,
                          'isConstant': false,
                          'isLValue': true,
                          'isPure': false,
                          'lValueRequested': false,
                          'memberName': 'profit',
                          'nodeType': 'MemberAccess',
                          'referencedDeclaration': 227,
                          'src': '3715:27:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '>',
                        'rightExpression': {
                          'argumentTypes': null,
                          'hexValue': '30',
                          'id': 518,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': true,
                          'kind': 'number',
                          'lValueRequested': false,
                          'nodeType': 'Literal',
                          'src': '3745:1:1',
                          'subdenomination': null,
                          'typeDescriptions': {
                            'typeIdentifier': 't_rational_0_by_1',
                            'typeString': 'int_const 0'
                          },
                          'value': '0'
                        },
                        'src': '3715:31:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '4e4f5f50524f464954',
                        'id': 520,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '3748:11:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_48ea8ab8e558d530eea13661d188f03f34cadf63f4b95e37a791128ec32947dc',
                          'typeString': 'literal_string \'NO_PROFIT\''
                        },
                        'value': 'NO_PROFIT'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_48ea8ab8e558d530eea13661d188f03f34cadf63f4b95e37a791128ec32947dc',
                          'typeString': 'literal_string \'NO_PROFIT\''
                        }
                      ],
                      'id': 512,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1671,
                        1672
                      ],
                      'referencedDeclaration': 1672,
                      'src': '3707:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 521,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '3707:53:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 522,
                  'nodeType': 'ExpressionStatement',
                  'src': '3707:53:1'
                },
                {
                  'assignments': [
                    524
                  ],
                  'declarations': [
                    {
                      'constant': false,
                      'id': 524,
                      'name': 'available',
                      'nodeType': 'VariableDeclaration',
                      'scope': 570,
                      'src': '3771:17:1',
                      'stateVariable': false,
                      'storageLocation': 'default',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      },
                      'typeName': {
                        'id': 523,
                        'name': 'uint256',
                        'nodeType': 'ElementaryTypeName',
                        'src': '3771:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      'value': null,
                      'visibility': 'internal'
                    }
                  ],
                  'id': 530,
                  'initialValue': {
                    'argumentTypes': null,
                    'expression': {
                      'argumentTypes': null,
                      'baseExpression': {
                        'argumentTypes': null,
                        'id': 525,
                        'name': 'accounts',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 225,
                        'src': '3791:8:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_mapping$_t_address_$_t_struct$_Account_$232_storage_$',
                          'typeString': 'mapping(address => struct MBFToken.Account storage ref)'
                        }
                      },
                      'id': 528,
                      'indexExpression': {
                        'argumentTypes': null,
                        'expression': {
                          'argumentTypes': null,
                          'id': 526,
                          'name': 'msg',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 1668,
                          'src': '3800:3:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_magic_message',
                            'typeString': 'msg'
                          }
                        },
                        'id': 527,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'memberName': 'sender',
                        'nodeType': 'MemberAccess',
                        'referencedDeclaration': null,
                        'src': '3800:10:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        }
                      },
                      'isConstant': false,
                      'isLValue': true,
                      'isPure': false,
                      'lValueRequested': false,
                      'nodeType': 'IndexAccess',
                      'src': '3791:20:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_struct$_Account_$232_storage',
                        'typeString': 'struct MBFToken.Account storage ref'
                      }
                    },
                    'id': 529,
                    'isConstant': false,
                    'isLValue': true,
                    'isPure': false,
                    'lValueRequested': false,
                    'memberName': 'profit',
                    'nodeType': 'MemberAccess',
                    'referencedDeclaration': 227,
                    'src': '3791:27:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'nodeType': 'VariableDeclarationStatement',
                  'src': '3771:47:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 537,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'expression': {
                        'argumentTypes': null,
                        'baseExpression': {
                          'argumentTypes': null,
                          'id': 531,
                          'name': 'accounts',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 225,
                          'src': '3828:8:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_mapping$_t_address_$_t_struct$_Account_$232_storage_$',
                            'typeString': 'mapping(address => struct MBFToken.Account storage ref)'
                          }
                        },
                        'id': 534,
                        'indexExpression': {
                          'argumentTypes': null,
                          'expression': {
                            'argumentTypes': null,
                            'id': 532,
                            'name': 'msg',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 1668,
                            'src': '3837:3:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_magic_message',
                              'typeString': 'msg'
                            }
                          },
                          'id': 533,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'memberName': 'sender',
                          'nodeType': 'MemberAccess',
                          'referencedDeclaration': null,
                          'src': '3837:10:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address_payable',
                            'typeString': 'address payable'
                          }
                        },
                        'isConstant': false,
                        'isLValue': true,
                        'isPure': false,
                        'lValueRequested': false,
                        'nodeType': 'IndexAccess',
                        'src': '3828:20:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_struct$_Account_$232_storage',
                          'typeString': 'struct MBFToken.Account storage ref'
                        }
                      },
                      'id': 535,
                      'isConstant': false,
                      'isLValue': true,
                      'isPure': false,
                      'lValueRequested': true,
                      'memberName': 'profit',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 227,
                      'src': '3828:27:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'hexValue': '30',
                      'id': 536,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': true,
                      'kind': 'number',
                      'lValueRequested': false,
                      'nodeType': 'Literal',
                      'src': '3858:1:1',
                      'subdenomination': null,
                      'typeDescriptions': {
                        'typeIdentifier': 't_rational_0_by_1',
                        'typeString': 'int_const 0'
                      },
                      'value': '0'
                    },
                    'src': '3828:31:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'id': 538,
                  'nodeType': 'ExpressionStatement',
                  'src': '3828:31:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 552,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'expression': {
                        'argumentTypes': null,
                        'baseExpression': {
                          'argumentTypes': null,
                          'id': 539,
                          'name': 'accounts',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 225,
                          'src': '3869:8:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_mapping$_t_address_$_t_struct$_Account_$232_storage_$',
                            'typeString': 'mapping(address => struct MBFToken.Account storage ref)'
                          }
                        },
                        'id': 542,
                        'indexExpression': {
                          'argumentTypes': null,
                          'expression': {
                            'argumentTypes': null,
                            'id': 540,
                            'name': 'msg',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 1668,
                            'src': '3878:3:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_magic_message',
                              'typeString': 'msg'
                            }
                          },
                          'id': 541,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'memberName': 'sender',
                          'nodeType': 'MemberAccess',
                          'referencedDeclaration': null,
                          'src': '3878:10:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address_payable',
                            'typeString': 'address payable'
                          }
                        },
                        'isConstant': false,
                        'isLValue': true,
                        'isPure': false,
                        'lValueRequested': false,
                        'nodeType': 'IndexAccess',
                        'src': '3869:20:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_struct$_Account_$232_storage',
                          'typeString': 'struct MBFToken.Account storage ref'
                        }
                      },
                      'id': 543,
                      'isConstant': false,
                      'isLValue': true,
                      'isPure': false,
                      'lValueRequested': true,
                      'memberName': 'taken',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 229,
                      'src': '3869:26:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'arguments': [
                        {
                          'argumentTypes': null,
                          'id': 550,
                          'name': 'available',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 524,
                          'src': '3929:9:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        }
                      ],
                      'expression': {
                        'argumentTypes': [
                          {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        ],
                        'expression': {
                          'argumentTypes': null,
                          'expression': {
                            'argumentTypes': null,
                            'baseExpression': {
                              'argumentTypes': null,
                              'id': 544,
                              'name': 'accounts',
                              'nodeType': 'Identifier',
                              'overloadedDeclarations': [],
                              'referencedDeclaration': 225,
                              'src': '3898:8:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_mapping$_t_address_$_t_struct$_Account_$232_storage_$',
                                'typeString': 'mapping(address => struct MBFToken.Account storage ref)'
                              }
                            },
                            'id': 547,
                            'indexExpression': {
                              'argumentTypes': null,
                              'expression': {
                                'argumentTypes': null,
                                'id': 545,
                                'name': 'msg',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 1668,
                                'src': '3907:3:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_magic_message',
                                  'typeString': 'msg'
                                }
                              },
                              'id': 546,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': false,
                              'lValueRequested': false,
                              'memberName': 'sender',
                              'nodeType': 'MemberAccess',
                              'referencedDeclaration': null,
                              'src': '3907:10:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_address_payable',
                                'typeString': 'address payable'
                              }
                            },
                            'isConstant': false,
                            'isLValue': true,
                            'isPure': false,
                            'lValueRequested': false,
                            'nodeType': 'IndexAccess',
                            'src': '3898:20:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_struct$_Account_$232_storage',
                              'typeString': 'struct MBFToken.Account storage ref'
                            }
                          },
                          'id': 548,
                          'isConstant': false,
                          'isLValue': true,
                          'isPure': false,
                          'lValueRequested': false,
                          'memberName': 'taken',
                          'nodeType': 'MemberAccess',
                          'referencedDeclaration': 229,
                          'src': '3898:26:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        },
                        'id': 549,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'memberName': 'add',
                        'nodeType': 'MemberAccess',
                        'referencedDeclaration': 1429,
                        'src': '3898:30:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$',
                          'typeString': 'function (uint256,uint256) pure returns (uint256)'
                        }
                      },
                      'id': 551,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'kind': 'functionCall',
                      'lValueRequested': false,
                      'names': [],
                      'nodeType': 'FunctionCall',
                      'src': '3898:41:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '3869:70:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'id': 553,
                  'nodeType': 'ExpressionStatement',
                  'src': '3869:70:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'arguments': [],
                        'expression': {
                          'argumentTypes': [],
                          'id': 557,
                          'name': 'owner',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 906,
                          'src': '3977:5:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_function_internal_view$__$returns$_t_address_$',
                            'typeString': 'function () view returns (address)'
                          }
                        },
                        'id': 558,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'functionCall',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '3977:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'expression': {
                          'argumentTypes': null,
                          'id': 559,
                          'name': 'msg',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 1668,
                          'src': '3986:3:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_magic_message',
                            'typeString': 'msg'
                          }
                        },
                        'id': 560,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'memberName': 'sender',
                        'nodeType': 'MemberAccess',
                        'referencedDeclaration': null,
                        'src': '3986:10:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 561,
                        'name': 'available',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 524,
                        'src': '3998:9:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'expression': {
                        'argumentTypes': null,
                        'id': 554,
                        'name': 'collateral',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 207,
                        'src': '3949:10:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_contract$_IERC20Token_$1121',
                          'typeString': 'contract IERC20Token'
                        }
                      },
                      'id': 556,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'safeTransferFrom',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 1241,
                      'src': '3949:27:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_nonpayable$_t_contract$_IERC20Token_$1121_$_t_address_$_t_address_$_t_uint256_$returns$__$bound_to$_t_contract$_IERC20Token_$1121_$',
                        'typeString': 'function (contract IERC20Token,address,address,uint256)'
                      }
                    },
                    'id': 562,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '3949:59:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 563,
                  'nodeType': 'ExpressionStatement',
                  'src': '3949:59:1'
                },
                {
                  'eventCall': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'expression': {
                          'argumentTypes': null,
                          'id': 565,
                          'name': 'msg',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 1668,
                          'src': '4033:3:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_magic_message',
                            'typeString': 'msg'
                          }
                        },
                        'id': 566,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'memberName': 'sender',
                        'nodeType': 'MemberAccess',
                        'referencedDeclaration': null,
                        'src': '4033:10:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 567,
                        'name': 'available',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 524,
                        'src': '4045:9:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'id': 564,
                      'name': 'Withdraw',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 250,
                      'src': '4024:8:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$',
                        'typeString': 'function (address,uint256)'
                      }
                    },
                    'id': 568,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '4024:31:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 569,
                  'nodeType': 'EmitStatement',
                  'src': '4019:36:1'
                }
              ]
            },
            'documentation': null,
            'id': 571,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'withdraw',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 495,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '3578:2:1'
            },
            'returnParameters': {
              'id': 496,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '3600:0:1'
            },
            'scope': 674,
            'src': '3561:501:1',
            'stateMutability': 'nonpayable',
            'superFunction': null,
            'visibility': 'public'
          },
          {
            'body': {
              'id': 612,
              'nodeType': 'Block',
              'src': '4171:226:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 583,
                        'name': 'src',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 573,
                        'src': '4194:3:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      ],
                      'id': 582,
                      'name': 'adjustProfit',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 494,
                      'src': '4181:12:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_nonpayable$_t_address_$returns$__$',
                        'typeString': 'function (address)'
                      }
                    },
                    'id': 584,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '4181:17:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 585,
                  'nodeType': 'ExpressionStatement',
                  'src': '4181:17:1'
                },
                {
                  'condition': {
                    'argumentTypes': null,
                    'commonType': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    },
                    'id': 590,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftExpression': {
                      'argumentTypes': null,
                      'baseExpression': {
                        'argumentTypes': null,
                        'id': 586,
                        'name': 'balanceOf',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 14,
                        'src': '4212:9:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_mapping$_t_address_$_t_uint256_$',
                          'typeString': 'mapping(address => uint256)'
                        }
                      },
                      'id': 588,
                      'indexExpression': {
                        'argumentTypes': null,
                        'id': 587,
                        'name': 'dst',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 575,
                        'src': '4222:3:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      'isConstant': false,
                      'isLValue': true,
                      'isPure': false,
                      'lValueRequested': false,
                      'nodeType': 'IndexAccess',
                      'src': '4212:14:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'BinaryOperation',
                    'operator': '==',
                    'rightExpression': {
                      'argumentTypes': null,
                      'hexValue': '30',
                      'id': 589,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': true,
                      'kind': 'number',
                      'lValueRequested': false,
                      'nodeType': 'Literal',
                      'src': '4230:1:1',
                      'subdenomination': null,
                      'typeDescriptions': {
                        'typeIdentifier': 't_rational_0_by_1',
                        'typeString': 'int_const 0'
                      },
                      'value': '0'
                    },
                    'src': '4212:19:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'falseBody': {
                    'id': 603,
                    'nodeType': 'Block',
                    'src': '4299:42:1',
                    'statements': [
                      {
                        'expression': {
                          'argumentTypes': null,
                          'arguments': [
                            {
                              'argumentTypes': null,
                              'id': 600,
                              'name': 'dst',
                              'nodeType': 'Identifier',
                              'overloadedDeclarations': [],
                              'referencedDeclaration': 575,
                              'src': '4326:3:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_address',
                                'typeString': 'address'
                              }
                            }
                          ],
                          'expression': {
                            'argumentTypes': [
                              {
                                'typeIdentifier': 't_address',
                                'typeString': 'address'
                              }
                            ],
                            'id': 599,
                            'name': 'adjustProfit',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 494,
                            'src': '4313:12:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_function_internal_nonpayable$_t_address_$returns$__$',
                              'typeString': 'function (address)'
                            }
                          },
                          'id': 601,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'kind': 'functionCall',
                          'lValueRequested': false,
                          'names': [],
                          'nodeType': 'FunctionCall',
                          'src': '4313:17:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_tuple$__$',
                            'typeString': 'tuple()'
                          }
                        },
                        'id': 602,
                        'nodeType': 'ExpressionStatement',
                        'src': '4313:17:1'
                      }
                    ]
                  },
                  'id': 604,
                  'nodeType': 'IfStatement',
                  'src': '4208:133:1',
                  'trueBody': {
                    'id': 598,
                    'nodeType': 'Block',
                    'src': '4233:60:1',
                    'statements': [
                      {
                        'expression': {
                          'argumentTypes': null,
                          'id': 596,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftHandSide': {
                            'argumentTypes': null,
                            'expression': {
                              'argumentTypes': null,
                              'baseExpression': {
                                'argumentTypes': null,
                                'id': 591,
                                'name': 'accounts',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 225,
                                'src': '4247:8:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_mapping$_t_address_$_t_struct$_Account_$232_storage_$',
                                  'typeString': 'mapping(address => struct MBFToken.Account storage ref)'
                                }
                              },
                              'id': 593,
                              'indexExpression': {
                                'argumentTypes': null,
                                'id': 592,
                                'name': 'dst',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 575,
                                'src': '4256:3:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_address',
                                  'typeString': 'address'
                                }
                              },
                              'isConstant': false,
                              'isLValue': true,
                              'isPure': false,
                              'lValueRequested': false,
                              'nodeType': 'IndexAccess',
                              'src': '4247:13:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_struct$_Account_$232_storage',
                                'typeString': 'struct MBFToken.Account storage ref'
                              }
                            },
                            'id': 594,
                            'isConstant': false,
                            'isLValue': true,
                            'isPure': false,
                            'lValueRequested': true,
                            'memberName': 'settled',
                            'nodeType': 'MemberAccess',
                            'referencedDeclaration': 231,
                            'src': '4247:21:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'nodeType': 'Assignment',
                          'operator': '=',
                          'rightHandSide': {
                            'argumentTypes': null,
                            'id': 595,
                            'name': 'totalProfit',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 215,
                            'src': '4271:11:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'src': '4247:35:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        },
                        'id': 597,
                        'nodeType': 'ExpressionStatement',
                        'src': '4247:35:1'
                      }
                    ]
                  }
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 607,
                        'name': 'src',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 573,
                        'src': '4376:3:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 608,
                        'name': 'dst',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 575,
                        'src': '4381:3:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 609,
                        'name': 'wad',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 577,
                        'src': '4386:3:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'expression': {
                        'argumentTypes': null,
                        'id': 605,
                        'name': 'super',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 1701,
                        'src': '4357:5:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_super$_MBFToken_$674',
                          'typeString': 'contract super MBFToken'
                        }
                      },
                      'id': 606,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'transferFrom',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 177,
                      'src': '4357:18:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$',
                        'typeString': 'function (address,address,uint256) returns (bool)'
                      }
                    },
                    'id': 610,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '4357:33:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'functionReturnParameters': 581,
                  'id': 611,
                  'nodeType': 'Return',
                  'src': '4350:40:1'
                }
              ]
            },
            'documentation': null,
            'id': 613,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'transferFrom',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 578,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 573,
                  'name': 'src',
                  'nodeType': 'VariableDeclaration',
                  'scope': 613,
                  'src': '4090:11:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 572,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '4090:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 575,
                  'name': 'dst',
                  'nodeType': 'VariableDeclaration',
                  'scope': 613,
                  'src': '4103:11:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 574,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '4103:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 577,
                  'name': 'wad',
                  'nodeType': 'VariableDeclaration',
                  'scope': 613,
                  'src': '4116:11:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 576,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '4116:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '4089:39:1'
            },
            'returnParameters': {
              'id': 581,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 580,
                  'name': '',
                  'nodeType': 'VariableDeclaration',
                  'scope': 613,
                  'src': '4161:4:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bool',
                    'typeString': 'bool'
                  },
                  'typeName': {
                    'id': 579,
                    'name': 'bool',
                    'nodeType': 'ElementaryTypeName',
                    'src': '4161:4:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '4160:6:1'
            },
            'scope': 674,
            'src': '4068:329:1',
            'stateMutability': 'nonpayable',
            'superFunction': 177,
            'visibility': 'public'
          },
          {
            'body': {
              'id': 672,
              'nodeType': 'Block',
              'src': '4495:334:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        'id': 625,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'id': 623,
                          'name': 'targetPrice',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 213,
                          'src': '4513:11:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '>',
                        'rightExpression': {
                          'argumentTypes': null,
                          'hexValue': '30',
                          'id': 624,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': true,
                          'kind': 'number',
                          'lValueRequested': false,
                          'nodeType': 'Literal',
                          'src': '4527:1:1',
                          'subdenomination': null,
                          'typeDescriptions': {
                            'typeIdentifier': 't_rational_0_by_1',
                            'typeString': 'int_const 0'
                          },
                          'value': '0'
                        },
                        'src': '4513:15:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '50524943455f4e4f545f494e4954',
                        'id': 626,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '4530:16:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_823b2a7079681c4332e5846c0c8eb28b9ad225811a6290cf9dd0adfe2da1e068',
                          'typeString': 'literal_string \'PRICE_NOT_INIT\''
                        },
                        'value': 'PRICE_NOT_INIT'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_823b2a7079681c4332e5846c0c8eb28b9ad225811a6290cf9dd0adfe2da1e068',
                          'typeString': 'literal_string \'PRICE_NOT_INIT\''
                        }
                      ],
                      'id': 622,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1671,
                        1672
                      ],
                      'referencedDeclaration': 1672,
                      'src': '4505:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 627,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '4505:42:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 628,
                  'nodeType': 'ExpressionStatement',
                  'src': '4505:42:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        'id': 639,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          },
                          'id': 632,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 630,
                            'name': 'wad',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 615,
                            'src': '4565:3:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '>',
                          'rightExpression': {
                            'argumentTypes': null,
                            'hexValue': '30',
                            'id': 631,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': true,
                            'kind': 'number',
                            'lValueRequested': false,
                            'nodeType': 'Literal',
                            'src': '4571:1:1',
                            'subdenomination': null,
                            'typeDescriptions': {
                              'typeIdentifier': 't_rational_0_by_1',
                              'typeString': 'int_const 0'
                            },
                            'value': '0'
                          },
                          'src': '4565:7:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '&&',
                        'rightExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          },
                          'id': 638,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 633,
                            'name': 'wad',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 615,
                            'src': '4576:3:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '<=',
                          'rightExpression': {
                            'argumentTypes': null,
                            'arguments': [
                              {
                                'argumentTypes': null,
                                'id': 636,
                                'name': 'totalSupply',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 10,
                                'src': '4597:11:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_uint256',
                                  'typeString': 'uint256'
                                }
                              }
                            ],
                            'expression': {
                              'argumentTypes': [
                                {
                                  'typeIdentifier': 't_uint256',
                                  'typeString': 'uint256'
                                }
                              ],
                              'expression': {
                                'argumentTypes': null,
                                'id': 634,
                                'name': 'maxSupply',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 209,
                                'src': '4583:9:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_uint256',
                                  'typeString': 'uint256'
                                }
                              },
                              'id': 635,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': false,
                              'lValueRequested': false,
                              'memberName': 'sub',
                              'nodeType': 'MemberAccess',
                              'referencedDeclaration': 1454,
                              'src': '4583:13:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$',
                                'typeString': 'function (uint256,uint256) pure returns (uint256)'
                              }
                            },
                            'id': 637,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': false,
                            'kind': 'functionCall',
                            'lValueRequested': false,
                            'names': [],
                            'nodeType': 'FunctionCall',
                            'src': '4583:26:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'src': '4576:33:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'src': '4565:44:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '455843454544535f4d41585f535550504c59',
                        'id': 640,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '4611:20:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_7c6956820ebfeef31350d60be2dc78df829b8fcea767fdfe2b9f03d273e88c9c',
                          'typeString': 'literal_string \'EXCEEDS_MAX_SUPPLY\''
                        },
                        'value': 'EXCEEDS_MAX_SUPPLY'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_7c6956820ebfeef31350d60be2dc78df829b8fcea767fdfe2b9f03d273e88c9c',
                          'typeString': 'literal_string \'EXCEEDS_MAX_SUPPLY\''
                        }
                      ],
                      'id': 629,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1671,
                        1672
                      ],
                      'referencedDeclaration': 1672,
                      'src': '4557:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 641,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '4557:75:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 642,
                  'nodeType': 'ExpressionStatement',
                  'src': '4557:75:1'
                },
                {
                  'assignments': [
                    644
                  ],
                  'declarations': [
                    {
                      'constant': false,
                      'id': 644,
                      'name': 'joinPrice',
                      'nodeType': 'VariableDeclaration',
                      'scope': 672,
                      'src': '4643:17:1',
                      'stateVariable': false,
                      'storageLocation': 'default',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      },
                      'typeName': {
                        'id': 643,
                        'name': 'uint256',
                        'nodeType': 'ElementaryTypeName',
                        'src': '4643:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      'value': null,
                      'visibility': 'internal'
                    }
                  ],
                  'id': 649,
                  'initialValue': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 647,
                        'name': 'targetPrice',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 213,
                        'src': '4672:11:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'expression': {
                        'argumentTypes': null,
                        'id': 645,
                        'name': 'wad',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 615,
                        'src': '4663:3:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      'id': 646,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'wmul',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 1574,
                      'src': '4663:8:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$',
                        'typeString': 'function (uint256,uint256) pure returns (uint256)'
                      }
                    },
                    'id': 648,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '4663:21:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'nodeType': 'VariableDeclarationStatement',
                  'src': '4643:41:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'expression': {
                          'argumentTypes': null,
                          'id': 653,
                          'name': 'msg',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 1668,
                          'src': '4722:3:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_magic_message',
                            'typeString': 'msg'
                          }
                        },
                        'id': 654,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'memberName': 'sender',
                        'nodeType': 'MemberAccess',
                        'referencedDeclaration': null,
                        'src': '4722:10:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'arguments': [],
                        'expression': {
                          'argumentTypes': [],
                          'id': 655,
                          'name': 'owner',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 906,
                          'src': '4734:5:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_function_internal_view$__$returns$_t_address_$',
                            'typeString': 'function () view returns (address)'
                          }
                        },
                        'id': 656,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'functionCall',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '4734:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 657,
                        'name': 'joinPrice',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 644,
                        'src': '4743:9:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'expression': {
                        'argumentTypes': null,
                        'id': 650,
                        'name': 'collateral',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 207,
                        'src': '4694:10:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_contract$_IERC20Token_$1121',
                          'typeString': 'contract IERC20Token'
                        }
                      },
                      'id': 652,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'safeTransferFrom',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 1241,
                      'src': '4694:27:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_nonpayable$_t_contract$_IERC20Token_$1121_$_t_address_$_t_address_$_t_uint256_$returns$__$bound_to$_t_contract$_IERC20Token_$1121_$',
                        'typeString': 'function (contract IERC20Token,address,address,uint256)'
                      }
                    },
                    'id': 658,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '4694:59:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 659,
                  'nodeType': 'ExpressionStatement',
                  'src': '4694:59:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'expression': {
                          'argumentTypes': null,
                          'id': 661,
                          'name': 'msg',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 1668,
                          'src': '4769:3:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_magic_message',
                            'typeString': 'msg'
                          }
                        },
                        'id': 662,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'memberName': 'sender',
                        'nodeType': 'MemberAccess',
                        'referencedDeclaration': null,
                        'src': '4769:10:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 663,
                        'name': 'wad',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 615,
                        'src': '4781:3:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'id': 660,
                      'name': '_mint',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 837,
                      'src': '4763:5:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$',
                        'typeString': 'function (address,uint256)'
                      }
                    },
                    'id': 664,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '4763:22:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 665,
                  'nodeType': 'ExpressionStatement',
                  'src': '4763:22:1'
                },
                {
                  'eventCall': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'expression': {
                          'argumentTypes': null,
                          'id': 667,
                          'name': 'msg',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 1668,
                          'src': '4806:3:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_magic_message',
                            'typeString': 'msg'
                          }
                        },
                        'id': 668,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'memberName': 'sender',
                        'nodeType': 'MemberAccess',
                        'referencedDeclaration': null,
                        'src': '4806:10:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 669,
                        'name': 'wad',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 615,
                        'src': '4818:3:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'id': 666,
                      'name': 'Mint',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 238,
                      'src': '4801:4:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$',
                        'typeString': 'function (address,uint256)'
                      }
                    },
                    'id': 670,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '4801:21:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 671,
                  'nodeType': 'EmitStatement',
                  'src': '4796:26:1'
                }
              ]
            },
            'documentation': null,
            'id': 673,
            'implemented': true,
            'kind': 'function',
            'modifiers': [
              {
                'arguments': null,
                'id': 618,
                'modifierName': {
                  'argumentTypes': null,
                  'id': 617,
                  'name': 'whitelistOnly',
                  'nodeType': 'Identifier',
                  'overloadedDeclarations': [],
                  'referencedDeclaration': 1008,
                  'src': '4453:13:1',
                  'typeDescriptions': {
                    'typeIdentifier': 't_modifier$__$',
                    'typeString': 'modifier ()'
                  }
                },
                'nodeType': 'ModifierInvocation',
                'src': '4453:13:1'
              },
              {
                'arguments': null,
                'id': 620,
                'modifierName': {
                  'argumentTypes': null,
                  'id': 619,
                  'name': 'beforeFinalized',
                  'nodeType': 'Identifier',
                  'overloadedDeclarations': [],
                  'referencedDeclaration': 327,
                  'src': '4475:15:1',
                  'typeDescriptions': {
                    'typeIdentifier': 't_modifier$__$',
                    'typeString': 'modifier ()'
                  }
                },
                'nodeType': 'ModifierInvocation',
                'src': '4475:15:1'
              }
            ],
            'name': 'join',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 616,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 615,
                  'name': 'wad',
                  'nodeType': 'VariableDeclaration',
                  'scope': 673,
                  'src': '4417:11:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 614,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '4417:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '4416:13:1'
            },
            'returnParameters': {
              'id': 621,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '4495:0:1'
            },
            'scope': 674,
            'src': '4403:426:1',
            'stateMutability': 'nonpayable',
            'superFunction': null,
            'visibility': 'public'
          }
        ],
        'scope': 675,
        'src': '265:4566:1'
      }
    ],
    'src': '0:4831:1'
  },
  'legacyAST': {
    'absolutePath': '/Users/yangzhao/WorkSpace/contract-fund-p106-1/contracts/MBFToken.sol',
    'exportedSymbols': {
      'MBFToken': [
        674
      ]
    },
    'id': 675,
    'nodeType': 'SourceUnit',
    'nodes': [
      {
        'id': 180,
        'literals': [
          'solidity',
          '^',
          '0.5',
          '.10'
        ],
        'nodeType': 'PragmaDirective',
        'src': '0:24:1'
      },
      {
        'absolutePath': '/Users/yangzhao/WorkSpace/contract-fund-p106-1/contracts/components/Ownable.sol',
        'file': './components/Ownable.sol',
        'id': 181,
        'nodeType': 'ImportDirective',
        'scope': 675,
        'sourceUnit': 984,
        'src': '26:34:1',
        'symbolAliases': [],
        'unitAlias': ''
      },
      {
        'absolutePath': '/Users/yangzhao/WorkSpace/contract-fund-p106-1/contracts/components/Whitelist.sol',
        'file': './components/Whitelist.sol',
        'id': 182,
        'nodeType': 'ImportDirective',
        'scope': 675,
        'sourceUnit': 1053,
        'src': '61:36:1',
        'symbolAliases': [],
        'unitAlias': ''
      },
      {
        'absolutePath': '/Users/yangzhao/WorkSpace/contract-fund-p106-1/contracts/interfaces/IERC20Token.sol',
        'file': './interfaces/IERC20Token.sol',
        'id': 183,
        'nodeType': 'ImportDirective',
        'scope': 675,
        'sourceUnit': 1122,
        'src': '98:38:1',
        'symbolAliases': [],
        'unitAlias': ''
      },
      {
        'absolutePath': '/Users/yangzhao/WorkSpace/contract-fund-p106-1/contracts/MintableERC20Token.sol',
        'file': './MintableERC20Token.sol',
        'id': 184,
        'nodeType': 'ImportDirective',
        'scope': 675,
        'sourceUnit': 873,
        'src': '137:34:1',
        'symbolAliases': [],
        'unitAlias': ''
      },
      {
        'absolutePath': '/Users/yangzhao/WorkSpace/contract-fund-p106-1/contracts/lib/SafeMath.sol',
        'file': './lib/SafeMath.sol',
        'id': 185,
        'nodeType': 'ImportDirective',
        'scope': 675,
        'sourceUnit': 1536,
        'src': '172:28:1',
        'symbolAliases': [],
        'unitAlias': ''
      },
      {
        'absolutePath': '/Users/yangzhao/WorkSpace/contract-fund-p106-1/contracts/lib/WadMath.sol',
        'file': './lib/WadMath.sol',
        'id': 186,
        'nodeType': 'ImportDirective',
        'scope': 675,
        'sourceUnit': 1654,
        'src': '201:27:1',
        'symbolAliases': [],
        'unitAlias': ''
      },
      {
        'absolutePath': '/Users/yangzhao/WorkSpace/contract-fund-p106-1/contracts/lib/SafeERC20Token.sol',
        'file': './lib/SafeERC20Token.sol',
        'id': 187,
        'nodeType': 'ImportDirective',
        'scope': 675,
        'sourceUnit': 1403,
        'src': '229:34:1',
        'symbolAliases': [],
        'unitAlias': ''
      },
      {
        'baseContracts': [
          {
            'arguments': null,
            'baseName': {
              'contractScope': null,
              'id': 188,
              'name': 'MintableERC20Token',
              'nodeType': 'UserDefinedTypeName',
              'referencedDeclaration': 872,
              'src': '290:18:1',
              'typeDescriptions': {
                'typeIdentifier': 't_contract$_MintableERC20Token_$872',
                'typeString': 'contract MintableERC20Token'
              }
            },
            'id': 189,
            'nodeType': 'InheritanceSpecifier',
            'src': '290:18:1'
          },
          {
            'arguments': null,
            'baseName': {
              'contractScope': null,
              'id': 190,
              'name': 'Ownable',
              'nodeType': 'UserDefinedTypeName',
              'referencedDeclaration': 983,
              'src': '314:7:1',
              'typeDescriptions': {
                'typeIdentifier': 't_contract$_Ownable_$983',
                'typeString': 'contract Ownable'
              }
            },
            'id': 191,
            'nodeType': 'InheritanceSpecifier',
            'src': '314:7:1'
          },
          {
            'arguments': null,
            'baseName': {
              'contractScope': null,
              'id': 192,
              'name': 'Whitelist',
              'nodeType': 'UserDefinedTypeName',
              'referencedDeclaration': 1052,
              'src': '327:9:1',
              'typeDescriptions': {
                'typeIdentifier': 't_contract$_Whitelist_$1052',
                'typeString': 'contract Whitelist'
              }
            },
            'id': 193,
            'nodeType': 'InheritanceSpecifier',
            'src': '327:9:1'
          }
        ],
        'contractDependencies': [
          178,
          872,
          983,
          1052
        ],
        'contractKind': 'contract',
        'documentation': null,
        'fullyImplemented': true,
        'id': 674,
        'linearizedBaseContracts': [
          674,
          1052,
          983,
          872,
          178
        ],
        'name': 'MBFToken',
        'nodeType': 'ContractDefinition',
        'nodes': [
          {
            'id': 196,
            'libraryName': {
              'contractScope': null,
              'id': 194,
              'name': 'SafeMath',
              'nodeType': 'UserDefinedTypeName',
              'referencedDeclaration': 1535,
              'src': '349:8:1',
              'typeDescriptions': {
                'typeIdentifier': 't_contract$_SafeMath_$1535',
                'typeString': 'library SafeMath'
              }
            },
            'nodeType': 'UsingForDirective',
            'src': '343:27:1',
            'typeName': {
              'id': 195,
              'name': 'uint256',
              'nodeType': 'ElementaryTypeName',
              'src': '362:7:1',
              'typeDescriptions': {
                'typeIdentifier': 't_uint256',
                'typeString': 'uint256'
              }
            }
          },
          {
            'id': 199,
            'libraryName': {
              'contractScope': null,
              'id': 197,
              'name': 'WadMath',
              'nodeType': 'UserDefinedTypeName',
              'referencedDeclaration': 1653,
              'src': '381:7:1',
              'typeDescriptions': {
                'typeIdentifier': 't_contract$_WadMath_$1653',
                'typeString': 'library WadMath'
              }
            },
            'nodeType': 'UsingForDirective',
            'src': '375:26:1',
            'typeName': {
              'id': 198,
              'name': 'uint256',
              'nodeType': 'ElementaryTypeName',
              'src': '393:7:1',
              'typeDescriptions': {
                'typeIdentifier': 't_uint256',
                'typeString': 'uint256'
              }
            }
          },
          {
            'id': 202,
            'libraryName': {
              'contractScope': null,
              'id': 200,
              'name': 'SafeERC20',
              'nodeType': 'UserDefinedTypeName',
              'referencedDeclaration': 1402,
              'src': '412:9:1',
              'typeDescriptions': {
                'typeIdentifier': 't_contract$_SafeERC20_$1402',
                'typeString': 'library SafeERC20'
              }
            },
            'nodeType': 'UsingForDirective',
            'src': '406:32:1',
            'typeName': {
              'contractScope': null,
              'id': 201,
              'name': 'IERC20Token',
              'nodeType': 'UserDefinedTypeName',
              'referencedDeclaration': 1121,
              'src': '426:11:1',
              'typeDescriptions': {
                'typeIdentifier': 't_contract$_IERC20Token_$1121',
                'typeString': 'contract IERC20Token'
              }
            }
          },
          {
            'constant': true,
            'id': 205,
            'name': 'globalDecimals',
            'nodeType': 'VariableDeclaration',
            'scope': 674,
            'src': '462:57:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_uint256',
              'typeString': 'uint256'
            },
            'typeName': {
              'id': 203,
              'name': 'uint256',
              'nodeType': 'ElementaryTypeName',
              'src': '462:7:1',
              'typeDescriptions': {
                'typeIdentifier': 't_uint256',
                'typeString': 'uint256'
              }
            },
            'value': {
              'argumentTypes': null,
              'hexValue': '3138',
              'id': 204,
              'isConstant': false,
              'isLValue': false,
              'isPure': true,
              'kind': 'number',
              'lValueRequested': false,
              'nodeType': 'Literal',
              'src': '517:2:1',
              'subdenomination': null,
              'typeDescriptions': {
                'typeIdentifier': 't_rational_18_by_1',
                'typeString': 'int_const 18'
              },
              'value': '18'
            },
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 207,
            'name': 'collateral',
            'nodeType': 'VariableDeclaration',
            'scope': 674,
            'src': '525:48:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_contract$_IERC20Token_$1121',
              'typeString': 'contract IERC20Token'
            },
            'typeName': {
              'contractScope': null,
              'id': 206,
              'name': 'IERC20Token',
              'nodeType': 'UserDefinedTypeName',
              'referencedDeclaration': 1121,
              'src': '525:11:1',
              'typeDescriptions': {
                'typeIdentifier': 't_contract$_IERC20Token_$1121',
                'typeString': 'contract IERC20Token'
              }
            },
            'value': null,
            'visibility': 'internal'
          },
          {
            'constant': false,
            'id': 209,
            'name': 'maxSupply',
            'nodeType': 'VariableDeclaration',
            'scope': 674,
            'src': '579:47:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_uint256',
              'typeString': 'uint256'
            },
            'typeName': {
              'id': 208,
              'name': 'uint256',
              'nodeType': 'ElementaryTypeName',
              'src': '579:7:1',
              'typeDescriptions': {
                'typeIdentifier': 't_uint256',
                'typeString': 'uint256'
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 211,
            'name': 'finalized',
            'nodeType': 'VariableDeclaration',
            'scope': 674,
            'src': '633:47:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_bool',
              'typeString': 'bool'
            },
            'typeName': {
              'id': 210,
              'name': 'bool',
              'nodeType': 'ElementaryTypeName',
              'src': '633:4:1',
              'typeDescriptions': {
                'typeIdentifier': 't_bool',
                'typeString': 'bool'
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 213,
            'name': 'targetPrice',
            'nodeType': 'VariableDeclaration',
            'scope': 674,
            'src': '686:49:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_uint256',
              'typeString': 'uint256'
            },
            'typeName': {
              'id': 212,
              'name': 'uint256',
              'nodeType': 'ElementaryTypeName',
              'src': '686:7:1',
              'typeDescriptions': {
                'typeIdentifier': 't_uint256',
                'typeString': 'uint256'
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 215,
            'name': 'totalProfit',
            'nodeType': 'VariableDeclaration',
            'scope': 674,
            'src': '741:49:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_uint256',
              'typeString': 'uint256'
            },
            'typeName': {
              'id': 214,
              'name': 'uint256',
              'nodeType': 'ElementaryTypeName',
              'src': '741:7:1',
              'typeDescriptions': {
                'typeIdentifier': 't_uint256',
                'typeString': 'uint256'
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 218,
            'name': 'historyProfits',
            'nodeType': 'VariableDeclaration',
            'scope': 674,
            'src': '796:52:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_array$_t_uint256_$dyn_storage',
              'typeString': 'uint256[]'
            },
            'typeName': {
              'baseType': {
                'id': 216,
                'name': 'uint256',
                'nodeType': 'ElementaryTypeName',
                'src': '796:7:1',
                'typeDescriptions': {
                  'typeIdentifier': 't_uint256',
                  'typeString': 'uint256'
                }
              },
              'id': 217,
              'length': null,
              'nodeType': 'ArrayTypeName',
              'src': '796:9:1',
              'typeDescriptions': {
                'typeIdentifier': 't_array$_t_uint256_$dyn_storage_ptr',
                'typeString': 'uint256[]'
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 221,
            'name': 'historyTime',
            'nodeType': 'VariableDeclaration',
            'scope': 674,
            'src': '854:49:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_array$_t_uint256_$dyn_storage',
              'typeString': 'uint256[]'
            },
            'typeName': {
              'baseType': {
                'id': 219,
                'name': 'uint256',
                'nodeType': 'ElementaryTypeName',
                'src': '854:7:1',
                'typeDescriptions': {
                  'typeIdentifier': 't_uint256',
                  'typeString': 'uint256'
                }
              },
              'id': 220,
              'length': null,
              'nodeType': 'ArrayTypeName',
              'src': '854:9:1',
              'typeDescriptions': {
                'typeIdentifier': 't_array$_t_uint256_$dyn_storage_ptr',
                'typeString': 'uint256[]'
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'constant': false,
            'id': 225,
            'name': 'accounts',
            'nodeType': 'VariableDeclaration',
            'scope': 674,
            'src': '909:46:1',
            'stateVariable': true,
            'storageLocation': 'default',
            'typeDescriptions': {
              'typeIdentifier': 't_mapping$_t_address_$_t_struct$_Account_$232_storage_$',
              'typeString': 'mapping(address => struct MBFToken.Account)'
            },
            'typeName': {
              'id': 224,
              'keyType': {
                'id': 222,
                'name': 'address',
                'nodeType': 'ElementaryTypeName',
                'src': '918:7:1',
                'typeDescriptions': {
                  'typeIdentifier': 't_address',
                  'typeString': 'address'
                }
              },
              'nodeType': 'Mapping',
              'src': '909:28:1',
              'typeDescriptions': {
                'typeIdentifier': 't_mapping$_t_address_$_t_struct$_Account_$232_storage_$',
                'typeString': 'mapping(address => struct MBFToken.Account)'
              },
              'valueType': {
                'contractScope': null,
                'id': 223,
                'name': 'Account',
                'nodeType': 'UserDefinedTypeName',
                'referencedDeclaration': 232,
                'src': '929:7:1',
                'typeDescriptions': {
                  'typeIdentifier': 't_struct$_Account_$232_storage_ptr',
                  'typeString': 'struct MBFToken.Account'
                }
              }
            },
            'value': null,
            'visibility': 'public'
          },
          {
            'canonicalName': 'MBFToken.Account',
            'id': 232,
            'members': [
              {
                'constant': false,
                'id': 227,
                'name': 'profit',
                'nodeType': 'VariableDeclaration',
                'scope': 232,
                'src': '1009:14:1',
                'stateVariable': false,
                'storageLocation': 'default',
                'typeDescriptions': {
                  'typeIdentifier': 't_uint256',
                  'typeString': 'uint256'
                },
                'typeName': {
                  'id': 226,
                  'name': 'uint256',
                  'nodeType': 'ElementaryTypeName',
                  'src': '1009:7:1',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  }
                },
                'value': null,
                'visibility': 'internal'
              },
              {
                'constant': false,
                'id': 229,
                'name': 'taken',
                'nodeType': 'VariableDeclaration',
                'scope': 232,
                'src': '1033:13:1',
                'stateVariable': false,
                'storageLocation': 'default',
                'typeDescriptions': {
                  'typeIdentifier': 't_uint256',
                  'typeString': 'uint256'
                },
                'typeName': {
                  'id': 228,
                  'name': 'uint256',
                  'nodeType': 'ElementaryTypeName',
                  'src': '1033:7:1',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  }
                },
                'value': null,
                'visibility': 'internal'
              },
              {
                'constant': false,
                'id': 231,
                'name': 'settled',
                'nodeType': 'VariableDeclaration',
                'scope': 232,
                'src': '1056:15:1',
                'stateVariable': false,
                'storageLocation': 'default',
                'typeDescriptions': {
                  'typeIdentifier': 't_uint256',
                  'typeString': 'uint256'
                },
                'typeName': {
                  'id': 230,
                  'name': 'uint256',
                  'nodeType': 'ElementaryTypeName',
                  'src': '1056:7:1',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  }
                },
                'value': null,
                'visibility': 'internal'
              }
            ],
            'name': 'Account',
            'nodeType': 'StructDefinition',
            'scope': 674,
            'src': '984:94:1',
            'visibility': 'public'
          },
          {
            'anonymous': false,
            'documentation': null,
            'id': 238,
            'name': 'Mint',
            'nodeType': 'EventDefinition',
            'parameters': {
              'id': 237,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 234,
                  'indexed': true,
                  'name': '_owner',
                  'nodeType': 'VariableDeclaration',
                  'scope': 238,
                  'src': '1109:22:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 233,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '1109:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 236,
                  'indexed': false,
                  'name': '_value',
                  'nodeType': 'VariableDeclaration',
                  'scope': 238,
                  'src': '1133:14:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 235,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '1133:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '1108:40:1'
            },
            'src': '1098:51:1'
          },
          {
            'anonymous': false,
            'documentation': null,
            'id': 244,
            'name': 'Burn',
            'nodeType': 'EventDefinition',
            'parameters': {
              'id': 243,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 240,
                  'indexed': true,
                  'name': '_owner',
                  'nodeType': 'VariableDeclaration',
                  'scope': 244,
                  'src': '1165:22:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 239,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '1165:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 242,
                  'indexed': false,
                  'name': '_value',
                  'nodeType': 'VariableDeclaration',
                  'scope': 244,
                  'src': '1189:14:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 241,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '1189:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '1164:40:1'
            },
            'src': '1154:51:1'
          },
          {
            'anonymous': false,
            'documentation': null,
            'id': 250,
            'name': 'Withdraw',
            'nodeType': 'EventDefinition',
            'parameters': {
              'id': 249,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 246,
                  'indexed': true,
                  'name': '_owner',
                  'nodeType': 'VariableDeclaration',
                  'scope': 250,
                  'src': '1225:22:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 245,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '1225:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 248,
                  'indexed': false,
                  'name': '_value',
                  'nodeType': 'VariableDeclaration',
                  'scope': 250,
                  'src': '1249:14:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 247,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '1249:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '1224:40:1'
            },
            'src': '1210:55:1'
          },
          {
            'anonymous': false,
            'documentation': null,
            'id': 254,
            'name': 'Pay',
            'nodeType': 'EventDefinition',
            'parameters': {
              'id': 253,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 252,
                  'indexed': false,
                  'name': '_value',
                  'nodeType': 'VariableDeclaration',
                  'scope': 254,
                  'src': '1280:14:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 251,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '1280:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '1279:16:1'
            },
            'src': '1270:26:1'
          },
          {
            'body': {
              'id': 279,
              'nodeType': 'Block',
              'src': '1452:120:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 269,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'id': 265,
                      'name': 'collateral',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 207,
                      'src': '1462:10:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_contract$_IERC20Token_$1121',
                        'typeString': 'contract IERC20Token'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'arguments': [
                        {
                          'argumentTypes': null,
                          'id': 267,
                          'name': '_collateralAddress',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 256,
                          'src': '1487:18:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          }
                        }
                      ],
                      'expression': {
                        'argumentTypes': [
                          {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          }
                        ],
                        'id': 266,
                        'name': 'IERC20Token',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 1121,
                        'src': '1475:11:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_type$_t_contract$_IERC20Token_$1121_$',
                          'typeString': 'type(contract IERC20Token)'
                        }
                      },
                      'id': 268,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'kind': 'typeConversion',
                      'lValueRequested': false,
                      'names': [],
                      'nodeType': 'FunctionCall',
                      'src': '1475:31:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_contract$_IERC20Token_$1121',
                        'typeString': 'contract IERC20Token'
                      }
                    },
                    'src': '1462:44:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_contract$_IERC20Token_$1121',
                      'typeString': 'contract IERC20Token'
                    }
                  },
                  'id': 270,
                  'nodeType': 'ExpressionStatement',
                  'src': '1462:44:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 273,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'id': 271,
                      'name': 'maxSupply',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 209,
                      'src': '1516:9:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'id': 272,
                      'name': '_maxSupply',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 258,
                      'src': '1528:10:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '1516:22:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'id': 274,
                  'nodeType': 'ExpressionStatement',
                  'src': '1516:22:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 277,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'id': 275,
                      'name': 'finalized',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 211,
                      'src': '1548:9:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_bool',
                        'typeString': 'bool'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'hexValue': '66616c7365',
                      'id': 276,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': true,
                      'kind': 'bool',
                      'lValueRequested': false,
                      'nodeType': 'Literal',
                      'src': '1560:5:1',
                      'subdenomination': null,
                      'typeDescriptions': {
                        'typeIdentifier': 't_bool',
                        'typeString': 'bool'
                      },
                      'value': 'false'
                    },
                    'src': '1548:17:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'id': 278,
                  'nodeType': 'ExpressionStatement',
                  'src': '1548:17:1'
                }
              ]
            },
            'documentation': null,
            'id': 280,
            'implemented': true,
            'kind': 'constructor',
            'modifiers': [
              {
                'arguments': [
                  {
                    'argumentTypes': null,
                    'hexValue': '5031303620546f6b656e',
                    'id': 261,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': true,
                    'kind': 'string',
                    'lValueRequested': false,
                    'nodeType': 'Literal',
                    'src': '1426:12:1',
                    'subdenomination': null,
                    'typeDescriptions': {
                      'typeIdentifier': 't_stringliteral_211383fd76fbbdd33886daedf90f675cb678f3f61ed4a6aa412b97ebbd5e4df3',
                      'typeString': 'literal_string \'P106 Token\''
                    },
                    'value': 'P106 Token'
                  },
                  {
                    'argumentTypes': null,
                    'hexValue': '50313036',
                    'id': 262,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': true,
                    'kind': 'string',
                    'lValueRequested': false,
                    'nodeType': 'Literal',
                    'src': '1440:6:1',
                    'subdenomination': null,
                    'typeDescriptions': {
                      'typeIdentifier': 't_stringliteral_e04deb9009a1b2e47b491ccc3afffa77b3513632672a45b1f38f997a4c833193',
                      'typeString': 'literal_string \'P106\''
                    },
                    'value': 'P106'
                  }
                ],
                'id': 263,
                'modifierName': {
                  'argumentTypes': null,
                  'id': 260,
                  'name': 'MintableERC20Token',
                  'nodeType': 'Identifier',
                  'overloadedDeclarations': [],
                  'referencedDeclaration': 872,
                  'src': '1407:18:1',
                  'typeDescriptions': {
                    'typeIdentifier': 't_type$_t_contract$_MintableERC20Token_$872_$',
                    'typeString': 'type(contract MintableERC20Token)'
                  }
                },
                'nodeType': 'ModifierInvocation',
                'src': '1407:40:1'
              }
            ],
            'name': '',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 259,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 256,
                  'name': '_collateralAddress',
                  'nodeType': 'VariableDeclaration',
                  'scope': 280,
                  'src': '1323:26:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 255,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '1323:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 258,
                  'name': '_maxSupply',
                  'nodeType': 'VariableDeclaration',
                  'scope': 280,
                  'src': '1359:18:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 257,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '1359:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '1313:70:1'
            },
            'returnParameters': {
              'id': 264,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '1452:0:1'
            },
            'scope': 674,
            'src': '1302:270:1',
            'stateMutability': 'nonpayable',
            'superFunction': null,
            'visibility': 'public'
          },
          {
            'body': {
              'id': 315,
              'nodeType': 'Block',
              'src': '1635:227:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        'id': 288,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'id': 286,
                          'name': 'finalized',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 211,
                          'src': '1653:9:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '==',
                        'rightExpression': {
                          'argumentTypes': null,
                          'hexValue': '66616c7365',
                          'id': 287,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': true,
                          'kind': 'bool',
                          'lValueRequested': false,
                          'nodeType': 'Literal',
                          'src': '1666:5:1',
                          'subdenomination': null,
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          },
                          'value': 'false'
                        },
                        'src': '1653:18:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '43414e5f4f4e4c595f46494e414c495a455f4f4e4345',
                        'id': 289,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '1673:24:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_1beb00a07bd198ba7d37618d3c3476879b9c1385d999c210dcdf6cc0dddcbe67',
                          'typeString': 'literal_string \'CAN_ONLY_FINALIZE_ONCE\''
                        },
                        'value': 'CAN_ONLY_FINALIZE_ONCE'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_1beb00a07bd198ba7d37618d3c3476879b9c1385d999c210dcdf6cc0dddcbe67',
                          'typeString': 'literal_string \'CAN_ONLY_FINALIZE_ONCE\''
                        }
                      ],
                      'id': 285,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1671,
                        1672
                      ],
                      'referencedDeclaration': 1672,
                      'src': '1645:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 290,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '1645:53:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 291,
                  'nodeType': 'ExpressionStatement',
                  'src': '1645:53:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 294,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'id': 292,
                      'name': 'finalized',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 211,
                      'src': '1708:9:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_bool',
                        'typeString': 'bool'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'hexValue': '74727565',
                      'id': 293,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': true,
                      'kind': 'bool',
                      'lValueRequested': false,
                      'nodeType': 'Literal',
                      'src': '1720:4:1',
                      'subdenomination': null,
                      'typeDescriptions': {
                        'typeIdentifier': 't_bool',
                        'typeString': 'bool'
                      },
                      'value': 'true'
                    },
                    'src': '1708:16:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'id': 295,
                  'nodeType': 'ExpressionStatement',
                  'src': '1708:16:1'
                },
                {
                  'assignments': [
                    297
                  ],
                  'declarations': [
                    {
                      'constant': false,
                      'id': 297,
                      'name': 'remaining',
                      'nodeType': 'VariableDeclaration',
                      'scope': 315,
                      'src': '1734:17:1',
                      'stateVariable': false,
                      'storageLocation': 'default',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      },
                      'typeName': {
                        'id': 296,
                        'name': 'uint256',
                        'nodeType': 'ElementaryTypeName',
                        'src': '1734:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      'value': null,
                      'visibility': 'internal'
                    }
                  ],
                  'id': 302,
                  'initialValue': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 300,
                        'name': 'totalSupply',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 10,
                        'src': '1768:11:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'expression': {
                        'argumentTypes': null,
                        'id': 298,
                        'name': 'maxSupply',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 209,
                        'src': '1754:9:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      'id': 299,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'sub',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 1454,
                      'src': '1754:13:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$',
                        'typeString': 'function (uint256,uint256) pure returns (uint256)'
                      }
                    },
                    'id': 301,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '1754:26:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'nodeType': 'VariableDeclarationStatement',
                  'src': '1734:46:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'arguments': [],
                        'expression': {
                          'argumentTypes': [],
                          'id': 304,
                          'name': 'owner',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 906,
                          'src': '1796:5:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_function_internal_view$__$returns$_t_address_$',
                            'typeString': 'function () view returns (address)'
                          }
                        },
                        'id': 305,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'functionCall',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '1796:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 306,
                        'name': 'remaining',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 297,
                        'src': '1805:9:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'id': 303,
                      'name': '_mint',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 837,
                      'src': '1790:5:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$',
                        'typeString': 'function (address,uint256)'
                      }
                    },
                    'id': 307,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '1790:25:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 308,
                  'nodeType': 'ExpressionStatement',
                  'src': '1790:25:1'
                },
                {
                  'eventCall': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'arguments': [],
                        'expression': {
                          'argumentTypes': [],
                          'id': 310,
                          'name': 'owner',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 906,
                          'src': '1836:5:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_function_internal_view$__$returns$_t_address_$',
                            'typeString': 'function () view returns (address)'
                          }
                        },
                        'id': 311,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'functionCall',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '1836:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 312,
                        'name': 'remaining',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 297,
                        'src': '1845:9:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'id': 309,
                      'name': 'Mint',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 238,
                      'src': '1831:4:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$',
                        'typeString': 'function (address,uint256)'
                      }
                    },
                    'id': 313,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '1831:24:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 314,
                  'nodeType': 'EmitStatement',
                  'src': '1826:29:1'
                }
              ]
            },
            'documentation': null,
            'id': 316,
            'implemented': true,
            'kind': 'function',
            'modifiers': [
              {
                'arguments': null,
                'id': 283,
                'modifierName': {
                  'argumentTypes': null,
                  'id': 282,
                  'name': 'onlyOwner',
                  'nodeType': 'Identifier',
                  'overloadedDeclarations': [],
                  'referencedDeclaration': 916,
                  'src': '1621:9:1',
                  'typeDescriptions': {
                    'typeIdentifier': 't_modifier$__$',
                    'typeString': 'modifier ()'
                  }
                },
                'nodeType': 'ModifierInvocation',
                'src': '1621:9:1'
              }
            ],
            'name': 'finalize',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 281,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '1595:2:1'
            },
            'returnParameters': {
              'id': 284,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '1635:0:1'
            },
            'scope': 674,
            'src': '1578:284:1',
            'stateMutability': 'nonpayable',
            'superFunction': null,
            'visibility': 'public'
          },
          {
            'body': {
              'id': 326,
              'nodeType': 'Block',
              'src': '1893:76:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        'id': 321,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'id': 319,
                          'name': 'finalized',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 211,
                          'src': '1911:9:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '==',
                        'rightExpression': {
                          'argumentTypes': null,
                          'hexValue': '66616c7365',
                          'id': 320,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': true,
                          'kind': 'bool',
                          'lValueRequested': false,
                          'nodeType': 'Literal',
                          'src': '1924:5:1',
                          'subdenomination': null,
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          },
                          'value': 'false'
                        },
                        'src': '1911:18:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '414c52454144595f46494e414c495a4544',
                        'id': 322,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '1931:19:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_a84b963af821bd2b41d802daa2c7840123c5cf834cde12aa10bdce75ff0df2d9',
                          'typeString': 'literal_string \'ALREADY_FINALIZED\''
                        },
                        'value': 'ALREADY_FINALIZED'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_a84b963af821bd2b41d802daa2c7840123c5cf834cde12aa10bdce75ff0df2d9',
                          'typeString': 'literal_string \'ALREADY_FINALIZED\''
                        }
                      ],
                      'id': 318,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1671,
                        1672
                      ],
                      'referencedDeclaration': 1672,
                      'src': '1903:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 323,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '1903:48:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 324,
                  'nodeType': 'ExpressionStatement',
                  'src': '1903:48:1'
                },
                {
                  'id': 325,
                  'nodeType': 'PlaceholderStatement',
                  'src': '1961:1:1'
                }
              ]
            },
            'documentation': null,
            'id': 327,
            'name': 'beforeFinalized',
            'nodeType': 'ModifierDefinition',
            'parameters': {
              'id': 317,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '1893:0:1'
            },
            'src': '1868:101:1',
            'visibility': 'internal'
          },
          {
            'body': {
              'id': 337,
              'nodeType': 'Block',
              'src': '1999:71:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        'id': 332,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'id': 330,
                          'name': 'finalized',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 211,
                          'src': '2017:9:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '==',
                        'rightExpression': {
                          'argumentTypes': null,
                          'hexValue': '74727565',
                          'id': 331,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': true,
                          'kind': 'bool',
                          'lValueRequested': false,
                          'nodeType': 'Literal',
                          'src': '2030:4:1',
                          'subdenomination': null,
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          },
                          'value': 'true'
                        },
                        'src': '2017:17:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '4e4f545f46494e414c495a4544',
                        'id': 333,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '2036:15:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_c52b4ebd065593469a3c7d1425274a5bc8f1f01ff55e53236e5ea4b4745c5e01',
                          'typeString': 'literal_string \'NOT_FINALIZED\''
                        },
                        'value': 'NOT_FINALIZED'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_c52b4ebd065593469a3c7d1425274a5bc8f1f01ff55e53236e5ea4b4745c5e01',
                          'typeString': 'literal_string \'NOT_FINALIZED\''
                        }
                      ],
                      'id': 329,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1671,
                        1672
                      ],
                      'referencedDeclaration': 1672,
                      'src': '2009:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 334,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '2009:43:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 335,
                  'nodeType': 'ExpressionStatement',
                  'src': '2009:43:1'
                },
                {
                  'id': 336,
                  'nodeType': 'PlaceholderStatement',
                  'src': '2062:1:1'
                }
              ]
            },
            'documentation': null,
            'id': 338,
            'name': 'afterFinalized',
            'nodeType': 'ModifierDefinition',
            'parameters': {
              'id': 328,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '1999:0:1'
            },
            'src': '1975:95:1',
            'visibility': 'internal'
          },
          {
            'body': {
              'id': 356,
              'nodeType': 'Block',
              'src': '2150:81:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        'id': 348,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'id': 346,
                          'name': 'wad',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 340,
                          'src': '2168:3:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '>',
                        'rightExpression': {
                          'argumentTypes': null,
                          'hexValue': '30',
                          'id': 347,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': true,
                          'kind': 'number',
                          'lValueRequested': false,
                          'nodeType': 'Literal',
                          'src': '2174:1:1',
                          'subdenomination': null,
                          'typeDescriptions': {
                            'typeIdentifier': 't_rational_0_by_1',
                            'typeString': 'int_const 0'
                          },
                          'value': '0'
                        },
                        'src': '2168:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '494e56414c49445f5249475f5052494345',
                        'id': 349,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '2177:19:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_c2be6ad850ec57d2efd82e6cd8ec69a9a91db37db712f510c51ca115199cd30d',
                          'typeString': 'literal_string \'INVALID_RIG_PRICE\''
                        },
                        'value': 'INVALID_RIG_PRICE'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_c2be6ad850ec57d2efd82e6cd8ec69a9a91db37db712f510c51ca115199cd30d',
                          'typeString': 'literal_string \'INVALID_RIG_PRICE\''
                        }
                      ],
                      'id': 345,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1671,
                        1672
                      ],
                      'referencedDeclaration': 1672,
                      'src': '2160:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 350,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '2160:37:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 351,
                  'nodeType': 'ExpressionStatement',
                  'src': '2160:37:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 354,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'id': 352,
                      'name': 'targetPrice',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 213,
                      'src': '2207:11:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'id': 353,
                      'name': 'wad',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 340,
                      'src': '2221:3:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '2207:17:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'id': 355,
                  'nodeType': 'ExpressionStatement',
                  'src': '2207:17:1'
                }
              ]
            },
            'documentation': null,
            'id': 357,
            'implemented': true,
            'kind': 'function',
            'modifiers': [
              {
                'arguments': null,
                'id': 343,
                'modifierName': {
                  'argumentTypes': null,
                  'id': 342,
                  'name': 'onlyOwner',
                  'nodeType': 'Identifier',
                  'overloadedDeclarations': [],
                  'referencedDeclaration': 916,
                  'src': '2136:9:1',
                  'typeDescriptions': {
                    'typeIdentifier': 't_modifier$__$',
                    'typeString': 'modifier ()'
                  }
                },
                'nodeType': 'ModifierInvocation',
                'src': '2136:9:1'
              }
            ],
            'name': 'setTargetPrice',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 341,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 340,
                  'name': 'wad',
                  'nodeType': 'VariableDeclaration',
                  'scope': 357,
                  'src': '2100:11:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 339,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2100:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '2099:13:1'
            },
            'returnParameters': {
              'id': 344,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '2150:0:1'
            },
            'scope': 674,
            'src': '2076:155:1',
            'stateMutability': 'nonpayable',
            'superFunction': null,
            'visibility': 'public'
          },
          {
            'body': {
              'id': 389,
              'nodeType': 'Block',
              'src': '2323:140:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 371,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'id': 366,
                      'name': 'totalProfit',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 215,
                      'src': '2333:11:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'arguments': [
                        {
                          'argumentTypes': null,
                          'id': 369,
                          'name': 'wad',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 359,
                          'src': '2363:3:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        }
                      ],
                      'expression': {
                        'argumentTypes': [
                          {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        ],
                        'expression': {
                          'argumentTypes': null,
                          'id': 367,
                          'name': 'totalProfit',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 215,
                          'src': '2347:11:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        },
                        'id': 368,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'memberName': 'add',
                        'nodeType': 'MemberAccess',
                        'referencedDeclaration': 1429,
                        'src': '2347:15:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$',
                          'typeString': 'function (uint256,uint256) pure returns (uint256)'
                        }
                      },
                      'id': 370,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'kind': 'functionCall',
                      'lValueRequested': false,
                      'names': [],
                      'nodeType': 'FunctionCall',
                      'src': '2347:20:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '2333:34:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'id': 372,
                  'nodeType': 'ExpressionStatement',
                  'src': '2333:34:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 376,
                        'name': 'wad',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 359,
                        'src': '2397:3:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'expression': {
                        'argumentTypes': null,
                        'id': 373,
                        'name': 'historyProfits',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 218,
                        'src': '2377:14:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_array$_t_uint256_$dyn_storage',
                          'typeString': 'uint256[] storage ref'
                        }
                      },
                      'id': 375,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'push',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': null,
                      'src': '2377:19:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$',
                        'typeString': 'function (uint256) returns (uint256)'
                      }
                    },
                    'id': 377,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '2377:24:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'id': 378,
                  'nodeType': 'ExpressionStatement',
                  'src': '2377:24:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 382,
                        'name': 'now',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 1670,
                        'src': '2428:3:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'expression': {
                        'argumentTypes': null,
                        'id': 379,
                        'name': 'historyTime',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 221,
                        'src': '2411:11:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_array$_t_uint256_$dyn_storage',
                          'typeString': 'uint256[] storage ref'
                        }
                      },
                      'id': 381,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'push',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': null,
                      'src': '2411:16:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_arraypush_nonpayable$_t_uint256_$returns$_t_uint256_$',
                        'typeString': 'function (uint256) returns (uint256)'
                      }
                    },
                    'id': 383,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '2411:21:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'id': 384,
                  'nodeType': 'ExpressionStatement',
                  'src': '2411:21:1'
                },
                {
                  'eventCall': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 386,
                        'name': 'wad',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 359,
                        'src': '2452:3:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'id': 385,
                      'name': 'Pay',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 254,
                      'src': '2448:3:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_event_nonpayable$_t_uint256_$returns$__$',
                        'typeString': 'function (uint256)'
                      }
                    },
                    'id': 387,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '2448:8:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 388,
                  'nodeType': 'EmitStatement',
                  'src': '2443:13:1'
                }
              ]
            },
            'documentation': null,
            'id': 390,
            'implemented': true,
            'kind': 'function',
            'modifiers': [
              {
                'arguments': null,
                'id': 362,
                'modifierName': {
                  'argumentTypes': null,
                  'id': 361,
                  'name': 'onlyOwner',
                  'nodeType': 'Identifier',
                  'overloadedDeclarations': [],
                  'referencedDeclaration': 916,
                  'src': '2286:9:1',
                  'typeDescriptions': {
                    'typeIdentifier': 't_modifier$__$',
                    'typeString': 'modifier ()'
                  }
                },
                'nodeType': 'ModifierInvocation',
                'src': '2286:9:1'
              },
              {
                'arguments': null,
                'id': 364,
                'modifierName': {
                  'argumentTypes': null,
                  'id': 363,
                  'name': 'afterFinalized',
                  'nodeType': 'Identifier',
                  'overloadedDeclarations': [],
                  'referencedDeclaration': 338,
                  'src': '2304:14:1',
                  'typeDescriptions': {
                    'typeIdentifier': 't_modifier$__$',
                    'typeString': 'modifier ()'
                  }
                },
                'nodeType': 'ModifierInvocation',
                'src': '2304:14:1'
              }
            ],
            'name': 'pay',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 360,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 359,
                  'name': 'wad',
                  'nodeType': 'VariableDeclaration',
                  'scope': 390,
                  'src': '2250:11:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 358,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2250:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '2249:13:1'
            },
            'returnParameters': {
              'id': 365,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '2323:0:1'
            },
            'scope': 674,
            'src': '2237:226:1',
            'stateMutability': 'nonpayable',
            'superFunction': null,
            'visibility': 'public'
          },
          {
            'body': {
              'id': 427,
              'nodeType': 'Block',
              'src': '2575:244:1',
              'statements': [
                {
                  'condition': {
                    'argumentTypes': null,
                    'commonType': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    },
                    'id': 402,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftExpression': {
                      'argumentTypes': null,
                      'id': 397,
                      'name': 'totalProfit',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 215,
                      'src': '2589:11:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'BinaryOperation',
                    'operator': '==',
                    'rightExpression': {
                      'argumentTypes': null,
                      'expression': {
                        'argumentTypes': null,
                        'baseExpression': {
                          'argumentTypes': null,
                          'id': 398,
                          'name': 'accounts',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 225,
                          'src': '2604:8:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_mapping$_t_address_$_t_struct$_Account_$232_storage_$',
                            'typeString': 'mapping(address => struct MBFToken.Account storage ref)'
                          }
                        },
                        'id': 400,
                        'indexExpression': {
                          'argumentTypes': null,
                          'id': 399,
                          'name': 'beneficiary',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 392,
                          'src': '2613:11:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          }
                        },
                        'isConstant': false,
                        'isLValue': true,
                        'isPure': false,
                        'lValueRequested': false,
                        'nodeType': 'IndexAccess',
                        'src': '2604:21:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_struct$_Account_$232_storage',
                          'typeString': 'struct MBFToken.Account storage ref'
                        }
                      },
                      'id': 401,
                      'isConstant': false,
                      'isLValue': true,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'settled',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 231,
                      'src': '2604:29:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '2589:44:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'falseBody': null,
                  'id': 406,
                  'nodeType': 'IfStatement',
                  'src': '2585:83:1',
                  'trueBody': {
                    'id': 405,
                    'nodeType': 'Block',
                    'src': '2635:33:1',
                    'statements': [
                      {
                        'expression': {
                          'argumentTypes': null,
                          'hexValue': '30',
                          'id': 403,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': true,
                          'kind': 'number',
                          'lValueRequested': false,
                          'nodeType': 'Literal',
                          'src': '2656:1:1',
                          'subdenomination': null,
                          'typeDescriptions': {
                            'typeIdentifier': 't_rational_0_by_1',
                            'typeString': 'int_const 0'
                          },
                          'value': '0'
                        },
                        'functionReturnParameters': 396,
                        'id': 404,
                        'nodeType': 'Return',
                        'src': '2649:8:1'
                      }
                    ]
                  }
                },
                {
                  'assignments': [
                    408
                  ],
                  'declarations': [
                    {
                      'constant': false,
                      'id': 408,
                      'name': 'toSettle',
                      'nodeType': 'VariableDeclaration',
                      'scope': 427,
                      'src': '2677:16:1',
                      'stateVariable': false,
                      'storageLocation': 'default',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      },
                      'typeName': {
                        'id': 407,
                        'name': 'uint256',
                        'nodeType': 'ElementaryTypeName',
                        'src': '2677:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      'value': null,
                      'visibility': 'internal'
                    }
                  ],
                  'id': 416,
                  'initialValue': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'expression': {
                          'argumentTypes': null,
                          'baseExpression': {
                            'argumentTypes': null,
                            'id': 411,
                            'name': 'accounts',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 225,
                            'src': '2712:8:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_mapping$_t_address_$_t_struct$_Account_$232_storage_$',
                              'typeString': 'mapping(address => struct MBFToken.Account storage ref)'
                            }
                          },
                          'id': 413,
                          'indexExpression': {
                            'argumentTypes': null,
                            'id': 412,
                            'name': 'beneficiary',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 392,
                            'src': '2721:11:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          'isConstant': false,
                          'isLValue': true,
                          'isPure': false,
                          'lValueRequested': false,
                          'nodeType': 'IndexAccess',
                          'src': '2712:21:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_struct$_Account_$232_storage',
                            'typeString': 'struct MBFToken.Account storage ref'
                          }
                        },
                        'id': 414,
                        'isConstant': false,
                        'isLValue': true,
                        'isPure': false,
                        'lValueRequested': false,
                        'memberName': 'settled',
                        'nodeType': 'MemberAccess',
                        'referencedDeclaration': 231,
                        'src': '2712:29:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'expression': {
                        'argumentTypes': null,
                        'id': 409,
                        'name': 'totalProfit',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 215,
                        'src': '2696:11:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      'id': 410,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'sub',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 1454,
                      'src': '2696:15:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$',
                        'typeString': 'function (uint256,uint256) pure returns (uint256)'
                      }
                    },
                    'id': 415,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '2696:46:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'nodeType': 'VariableDeclarationStatement',
                  'src': '2677:65:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 424,
                        'name': 'maxSupply',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 209,
                        'src': '2802:9:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'expression': {
                        'argumentTypes': null,
                        'arguments': [
                          {
                            'argumentTypes': null,
                            'baseExpression': {
                              'argumentTypes': null,
                              'id': 419,
                              'name': 'balanceOf',
                              'nodeType': 'Identifier',
                              'overloadedDeclarations': [],
                              'referencedDeclaration': 14,
                              'src': '2773:9:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_mapping$_t_address_$_t_uint256_$',
                                'typeString': 'mapping(address => uint256)'
                              }
                            },
                            'id': 421,
                            'indexExpression': {
                              'argumentTypes': null,
                              'id': 420,
                              'name': 'beneficiary',
                              'nodeType': 'Identifier',
                              'overloadedDeclarations': [],
                              'referencedDeclaration': 392,
                              'src': '2783:11:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_address',
                                'typeString': 'address'
                              }
                            },
                            'isConstant': false,
                            'isLValue': true,
                            'isPure': false,
                            'lValueRequested': false,
                            'nodeType': 'IndexAccess',
                            'src': '2773:22:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          }
                        ],
                        'expression': {
                          'argumentTypes': [
                            {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          ],
                          'expression': {
                            'argumentTypes': null,
                            'id': 417,
                            'name': 'toSettle',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 408,
                            'src': '2759:8:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'id': 418,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'memberName': 'wmul',
                          'nodeType': 'MemberAccess',
                          'referencedDeclaration': 1574,
                          'src': '2759:13:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$',
                            'typeString': 'function (uint256,uint256) pure returns (uint256)'
                          }
                        },
                        'id': 422,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'functionCall',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '2759:37:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      'id': 423,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'wdiv',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 1600,
                      'src': '2759:42:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$',
                        'typeString': 'function (uint256,uint256) pure returns (uint256)'
                      }
                    },
                    'id': 425,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '2759:53:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'functionReturnParameters': 396,
                  'id': 426,
                  'nodeType': 'Return',
                  'src': '2752:60:1'
                }
              ]
            },
            'documentation': null,
            'id': 428,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'unsettledProfitOf',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 393,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 392,
                  'name': 'beneficiary',
                  'nodeType': 'VariableDeclaration',
                  'scope': 428,
                  'src': '2496:19:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 391,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2496:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '2495:21:1'
            },
            'returnParameters': {
              'id': 396,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 395,
                  'name': '',
                  'nodeType': 'VariableDeclaration',
                  'scope': 428,
                  'src': '2562:7:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 394,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2562:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '2561:9:1'
            },
            'scope': 674,
            'src': '2469:350:1',
            'stateMutability': 'view',
            'superFunction': null,
            'visibility': 'public'
          },
          {
            'body': {
              'id': 444,
              'nodeType': 'Block',
              'src': '2922:165:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'commonType': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    },
                    'id': 442,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftExpression': {
                      'argumentTypes': null,
                      'arguments': [
                        {
                          'argumentTypes': null,
                          'id': 436,
                          'name': 'beneficiary',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 430,
                          'src': '3037:11:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          }
                        }
                      ],
                      'expression': {
                        'argumentTypes': [
                          {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          }
                        ],
                        'id': 435,
                        'name': 'unsettledProfitOf',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 428,
                        'src': '3019:17:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_function_internal_view$_t_address_$returns$_t_uint256_$',
                          'typeString': 'function (address) view returns (uint256)'
                        }
                      },
                      'id': 437,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'kind': 'functionCall',
                      'lValueRequested': false,
                      'names': [],
                      'nodeType': 'FunctionCall',
                      'src': '3019:30:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'BinaryOperation',
                    'operator': '+',
                    'rightExpression': {
                      'argumentTypes': null,
                      'expression': {
                        'argumentTypes': null,
                        'baseExpression': {
                          'argumentTypes': null,
                          'id': 438,
                          'name': 'accounts',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 225,
                          'src': '3052:8:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_mapping$_t_address_$_t_struct$_Account_$232_storage_$',
                            'typeString': 'mapping(address => struct MBFToken.Account storage ref)'
                          }
                        },
                        'id': 440,
                        'indexExpression': {
                          'argumentTypes': null,
                          'id': 439,
                          'name': 'beneficiary',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 430,
                          'src': '3061:11:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          }
                        },
                        'isConstant': false,
                        'isLValue': true,
                        'isPure': false,
                        'lValueRequested': false,
                        'nodeType': 'IndexAccess',
                        'src': '3052:21:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_struct$_Account_$232_storage',
                          'typeString': 'struct MBFToken.Account storage ref'
                        }
                      },
                      'id': 441,
                      'isConstant': false,
                      'isLValue': true,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'profit',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 227,
                      'src': '3052:28:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '3019:61:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'functionReturnParameters': 434,
                  'id': 443,
                  'nodeType': 'Return',
                  'src': '3012:68:1'
                }
              ]
            },
            'documentation': null,
            'id': 445,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'profitOf',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 431,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 430,
                  'name': 'beneficiary',
                  'nodeType': 'VariableDeclaration',
                  'scope': 445,
                  'src': '2843:19:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 429,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2843:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '2842:21:1'
            },
            'returnParameters': {
              'id': 434,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 433,
                  'name': '',
                  'nodeType': 'VariableDeclaration',
                  'scope': 445,
                  'src': '2909:7:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 432,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '2909:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '2908:9:1'
            },
            'scope': 674,
            'src': '2825:262:1',
            'stateMutability': 'view',
            'superFunction': null,
            'visibility': 'public'
          },
          {
            'body': {
              'id': 462,
              'nodeType': 'Block',
              'src': '3195:78:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'arguments': [
                          {
                            'argumentTypes': null,
                            'id': 458,
                            'name': 'beneficiary',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 447,
                            'src': '3253:11:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          }
                        ],
                        'expression': {
                          'argumentTypes': [
                            {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          ],
                          'id': 457,
                          'name': 'profitOf',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 445,
                          'src': '3244:8:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_function_internal_view$_t_address_$returns$_t_uint256_$',
                            'typeString': 'function (address) view returns (uint256)'
                          }
                        },
                        'id': 459,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'functionCall',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '3244:21:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'expression': {
                        'argumentTypes': null,
                        'expression': {
                          'argumentTypes': null,
                          'baseExpression': {
                            'argumentTypes': null,
                            'id': 452,
                            'name': 'accounts',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 225,
                            'src': '3212:8:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_mapping$_t_address_$_t_struct$_Account_$232_storage_$',
                              'typeString': 'mapping(address => struct MBFToken.Account storage ref)'
                            }
                          },
                          'id': 454,
                          'indexExpression': {
                            'argumentTypes': null,
                            'id': 453,
                            'name': 'beneficiary',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 447,
                            'src': '3221:11:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_address',
                              'typeString': 'address'
                            }
                          },
                          'isConstant': false,
                          'isLValue': true,
                          'isPure': false,
                          'lValueRequested': false,
                          'nodeType': 'IndexAccess',
                          'src': '3212:21:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_struct$_Account_$232_storage',
                            'typeString': 'struct MBFToken.Account storage ref'
                          }
                        },
                        'id': 455,
                        'isConstant': false,
                        'isLValue': true,
                        'isPure': false,
                        'lValueRequested': false,
                        'memberName': 'taken',
                        'nodeType': 'MemberAccess',
                        'referencedDeclaration': 229,
                        'src': '3212:27:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      'id': 456,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'add',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 1429,
                      'src': '3212:31:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$',
                        'typeString': 'function (uint256,uint256) pure returns (uint256)'
                      }
                    },
                    'id': 460,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '3212:54:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'functionReturnParameters': 451,
                  'id': 461,
                  'nodeType': 'Return',
                  'src': '3205:61:1'
                }
              ]
            },
            'documentation': null,
            'id': 463,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'totalProfitOf',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 448,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 447,
                  'name': 'beneficiary',
                  'nodeType': 'VariableDeclaration',
                  'scope': 463,
                  'src': '3116:19:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 446,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3116:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '3115:21:1'
            },
            'returnParameters': {
              'id': 451,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 450,
                  'name': '',
                  'nodeType': 'VariableDeclaration',
                  'scope': 463,
                  'src': '3182:7:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 449,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3182:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '3181:9:1'
            },
            'scope': 674,
            'src': '3093:180:1',
            'stateMutability': 'view',
            'superFunction': null,
            'visibility': 'public'
          },
          {
            'body': {
              'id': 493,
              'nodeType': 'Block',
              'src': '3343:212:1',
              'statements': [
                {
                  'condition': {
                    'argumentTypes': null,
                    'commonType': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    },
                    'id': 473,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftExpression': {
                      'argumentTypes': null,
                      'expression': {
                        'argumentTypes': null,
                        'baseExpression': {
                          'argumentTypes': null,
                          'id': 468,
                          'name': 'accounts',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 225,
                          'src': '3357:8:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_mapping$_t_address_$_t_struct$_Account_$232_storage_$',
                            'typeString': 'mapping(address => struct MBFToken.Account storage ref)'
                          }
                        },
                        'id': 470,
                        'indexExpression': {
                          'argumentTypes': null,
                          'id': 469,
                          'name': 'beneficiary',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 465,
                          'src': '3366:11:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          }
                        },
                        'isConstant': false,
                        'isLValue': true,
                        'isPure': false,
                        'lValueRequested': false,
                        'nodeType': 'IndexAccess',
                        'src': '3357:21:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_struct$_Account_$232_storage',
                          'typeString': 'struct MBFToken.Account storage ref'
                        }
                      },
                      'id': 471,
                      'isConstant': false,
                      'isLValue': true,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'settled',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 231,
                      'src': '3357:29:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'BinaryOperation',
                    'operator': '==',
                    'rightExpression': {
                      'argumentTypes': null,
                      'id': 472,
                      'name': 'totalProfit',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 215,
                      'src': '3390:11:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '3357:44:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'falseBody': null,
                  'id': 476,
                  'nodeType': 'IfStatement',
                  'src': '3353:81:1',
                  'trueBody': {
                    'id': 475,
                    'nodeType': 'Block',
                    'src': '3403:31:1',
                    'statements': [
                      {
                        'expression': null,
                        'functionReturnParameters': 467,
                        'id': 474,
                        'nodeType': 'Return',
                        'src': '3417:7:1'
                      }
                    ]
                  }
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 484,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'expression': {
                        'argumentTypes': null,
                        'baseExpression': {
                          'argumentTypes': null,
                          'id': 477,
                          'name': 'accounts',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 225,
                          'src': '3443:8:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_mapping$_t_address_$_t_struct$_Account_$232_storage_$',
                            'typeString': 'mapping(address => struct MBFToken.Account storage ref)'
                          }
                        },
                        'id': 479,
                        'indexExpression': {
                          'argumentTypes': null,
                          'id': 478,
                          'name': 'beneficiary',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 465,
                          'src': '3452:11:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          }
                        },
                        'isConstant': false,
                        'isLValue': true,
                        'isPure': false,
                        'lValueRequested': false,
                        'nodeType': 'IndexAccess',
                        'src': '3443:21:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_struct$_Account_$232_storage',
                          'typeString': 'struct MBFToken.Account storage ref'
                        }
                      },
                      'id': 480,
                      'isConstant': false,
                      'isLValue': true,
                      'isPure': false,
                      'lValueRequested': true,
                      'memberName': 'profit',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 227,
                      'src': '3443:28:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'arguments': [
                        {
                          'argumentTypes': null,
                          'id': 482,
                          'name': 'beneficiary',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 465,
                          'src': '3483:11:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          }
                        }
                      ],
                      'expression': {
                        'argumentTypes': [
                          {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          }
                        ],
                        'id': 481,
                        'name': 'profitOf',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 445,
                        'src': '3474:8:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_function_internal_view$_t_address_$returns$_t_uint256_$',
                          'typeString': 'function (address) view returns (uint256)'
                        }
                      },
                      'id': 483,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'kind': 'functionCall',
                      'lValueRequested': false,
                      'names': [],
                      'nodeType': 'FunctionCall',
                      'src': '3474:21:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '3443:52:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'id': 485,
                  'nodeType': 'ExpressionStatement',
                  'src': '3443:52:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 491,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'expression': {
                        'argumentTypes': null,
                        'baseExpression': {
                          'argumentTypes': null,
                          'id': 486,
                          'name': 'accounts',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 225,
                          'src': '3505:8:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_mapping$_t_address_$_t_struct$_Account_$232_storage_$',
                            'typeString': 'mapping(address => struct MBFToken.Account storage ref)'
                          }
                        },
                        'id': 488,
                        'indexExpression': {
                          'argumentTypes': null,
                          'id': 487,
                          'name': 'beneficiary',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 465,
                          'src': '3514:11:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address',
                            'typeString': 'address'
                          }
                        },
                        'isConstant': false,
                        'isLValue': true,
                        'isPure': false,
                        'lValueRequested': false,
                        'nodeType': 'IndexAccess',
                        'src': '3505:21:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_struct$_Account_$232_storage',
                          'typeString': 'struct MBFToken.Account storage ref'
                        }
                      },
                      'id': 489,
                      'isConstant': false,
                      'isLValue': true,
                      'isPure': false,
                      'lValueRequested': true,
                      'memberName': 'settled',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 231,
                      'src': '3505:29:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'id': 490,
                      'name': 'totalProfit',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 215,
                      'src': '3537:11:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '3505:43:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'id': 492,
                  'nodeType': 'ExpressionStatement',
                  'src': '3505:43:1'
                }
              ]
            },
            'documentation': null,
            'id': 494,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'adjustProfit',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 466,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 465,
                  'name': 'beneficiary',
                  'nodeType': 'VariableDeclaration',
                  'scope': 494,
                  'src': '3301:19:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 464,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '3301:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '3300:21:1'
            },
            'returnParameters': {
              'id': 467,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '3343:0:1'
            },
            'scope': 674,
            'src': '3279:276:1',
            'stateMutability': 'nonpayable',
            'superFunction': null,
            'visibility': 'internal'
          },
          {
            'body': {
              'id': 570,
              'nodeType': 'Block',
              'src': '3600:462:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        },
                        'id': 503,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'expression': {
                            'argumentTypes': null,
                            'id': 498,
                            'name': 'msg',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 1668,
                            'src': '3618:3:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_magic_message',
                              'typeString': 'msg'
                            }
                          },
                          'id': 499,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'memberName': 'sender',
                          'nodeType': 'MemberAccess',
                          'referencedDeclaration': null,
                          'src': '3618:10:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address_payable',
                            'typeString': 'address payable'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '!=',
                        'rightExpression': {
                          'argumentTypes': null,
                          'arguments': [
                            {
                              'argumentTypes': null,
                              'hexValue': '30',
                              'id': 501,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': true,
                              'kind': 'number',
                              'lValueRequested': false,
                              'nodeType': 'Literal',
                              'src': '3640:1:1',
                              'subdenomination': null,
                              'typeDescriptions': {
                                'typeIdentifier': 't_rational_0_by_1',
                                'typeString': 'int_const 0'
                              },
                              'value': '0'
                            }
                          ],
                          'expression': {
                            'argumentTypes': [
                              {
                                'typeIdentifier': 't_rational_0_by_1',
                                'typeString': 'int_const 0'
                              }
                            ],
                            'id': 500,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': true,
                            'lValueRequested': false,
                            'nodeType': 'ElementaryTypeNameExpression',
                            'src': '3632:7:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_type$_t_address_$',
                              'typeString': 'type(address)'
                            },
                            'typeName': 'address'
                          },
                          'id': 502,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': true,
                          'kind': 'typeConversion',
                          'lValueRequested': false,
                          'names': [],
                          'nodeType': 'FunctionCall',
                          'src': '3632:10:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address_payable',
                            'typeString': 'address payable'
                          }
                        },
                        'src': '3618:24:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '494e56414c49445f41444452455353',
                        'id': 504,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '3644:17:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_0c9aa80f6df0d7d66f29f9faed5ce34d8bae3d216a4ab057cfd7af24bdab39cb',
                          'typeString': 'literal_string \'INVALID_ADDRESS\''
                        },
                        'value': 'INVALID_ADDRESS'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_0c9aa80f6df0d7d66f29f9faed5ce34d8bae3d216a4ab057cfd7af24bdab39cb',
                          'typeString': 'literal_string \'INVALID_ADDRESS\''
                        }
                      ],
                      'id': 497,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1671,
                        1672
                      ],
                      'referencedDeclaration': 1672,
                      'src': '3610:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 505,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '3610:52:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 506,
                  'nodeType': 'ExpressionStatement',
                  'src': '3610:52:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'expression': {
                          'argumentTypes': null,
                          'id': 508,
                          'name': 'msg',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 1668,
                          'src': '3686:3:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_magic_message',
                            'typeString': 'msg'
                          }
                        },
                        'id': 509,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'memberName': 'sender',
                        'nodeType': 'MemberAccess',
                        'referencedDeclaration': null,
                        'src': '3686:10:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        }
                      ],
                      'id': 507,
                      'name': 'adjustProfit',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 494,
                      'src': '3673:12:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_nonpayable$_t_address_$returns$__$',
                        'typeString': 'function (address)'
                      }
                    },
                    'id': 510,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '3673:24:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 511,
                  'nodeType': 'ExpressionStatement',
                  'src': '3673:24:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        'id': 519,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'expression': {
                            'argumentTypes': null,
                            'baseExpression': {
                              'argumentTypes': null,
                              'id': 513,
                              'name': 'accounts',
                              'nodeType': 'Identifier',
                              'overloadedDeclarations': [],
                              'referencedDeclaration': 225,
                              'src': '3715:8:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_mapping$_t_address_$_t_struct$_Account_$232_storage_$',
                                'typeString': 'mapping(address => struct MBFToken.Account storage ref)'
                              }
                            },
                            'id': 516,
                            'indexExpression': {
                              'argumentTypes': null,
                              'expression': {
                                'argumentTypes': null,
                                'id': 514,
                                'name': 'msg',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 1668,
                                'src': '3724:3:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_magic_message',
                                  'typeString': 'msg'
                                }
                              },
                              'id': 515,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': false,
                              'lValueRequested': false,
                              'memberName': 'sender',
                              'nodeType': 'MemberAccess',
                              'referencedDeclaration': null,
                              'src': '3724:10:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_address_payable',
                                'typeString': 'address payable'
                              }
                            },
                            'isConstant': false,
                            'isLValue': true,
                            'isPure': false,
                            'lValueRequested': false,
                            'nodeType': 'IndexAccess',
                            'src': '3715:20:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_struct$_Account_$232_storage',
                              'typeString': 'struct MBFToken.Account storage ref'
                            }
                          },
                          'id': 517,
                          'isConstant': false,
                          'isLValue': true,
                          'isPure': false,
                          'lValueRequested': false,
                          'memberName': 'profit',
                          'nodeType': 'MemberAccess',
                          'referencedDeclaration': 227,
                          'src': '3715:27:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '>',
                        'rightExpression': {
                          'argumentTypes': null,
                          'hexValue': '30',
                          'id': 518,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': true,
                          'kind': 'number',
                          'lValueRequested': false,
                          'nodeType': 'Literal',
                          'src': '3745:1:1',
                          'subdenomination': null,
                          'typeDescriptions': {
                            'typeIdentifier': 't_rational_0_by_1',
                            'typeString': 'int_const 0'
                          },
                          'value': '0'
                        },
                        'src': '3715:31:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '4e4f5f50524f464954',
                        'id': 520,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '3748:11:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_48ea8ab8e558d530eea13661d188f03f34cadf63f4b95e37a791128ec32947dc',
                          'typeString': 'literal_string \'NO_PROFIT\''
                        },
                        'value': 'NO_PROFIT'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_48ea8ab8e558d530eea13661d188f03f34cadf63f4b95e37a791128ec32947dc',
                          'typeString': 'literal_string \'NO_PROFIT\''
                        }
                      ],
                      'id': 512,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1671,
                        1672
                      ],
                      'referencedDeclaration': 1672,
                      'src': '3707:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 521,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '3707:53:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 522,
                  'nodeType': 'ExpressionStatement',
                  'src': '3707:53:1'
                },
                {
                  'assignments': [
                    524
                  ],
                  'declarations': [
                    {
                      'constant': false,
                      'id': 524,
                      'name': 'available',
                      'nodeType': 'VariableDeclaration',
                      'scope': 570,
                      'src': '3771:17:1',
                      'stateVariable': false,
                      'storageLocation': 'default',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      },
                      'typeName': {
                        'id': 523,
                        'name': 'uint256',
                        'nodeType': 'ElementaryTypeName',
                        'src': '3771:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      'value': null,
                      'visibility': 'internal'
                    }
                  ],
                  'id': 530,
                  'initialValue': {
                    'argumentTypes': null,
                    'expression': {
                      'argumentTypes': null,
                      'baseExpression': {
                        'argumentTypes': null,
                        'id': 525,
                        'name': 'accounts',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 225,
                        'src': '3791:8:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_mapping$_t_address_$_t_struct$_Account_$232_storage_$',
                          'typeString': 'mapping(address => struct MBFToken.Account storage ref)'
                        }
                      },
                      'id': 528,
                      'indexExpression': {
                        'argumentTypes': null,
                        'expression': {
                          'argumentTypes': null,
                          'id': 526,
                          'name': 'msg',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 1668,
                          'src': '3800:3:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_magic_message',
                            'typeString': 'msg'
                          }
                        },
                        'id': 527,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'memberName': 'sender',
                        'nodeType': 'MemberAccess',
                        'referencedDeclaration': null,
                        'src': '3800:10:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        }
                      },
                      'isConstant': false,
                      'isLValue': true,
                      'isPure': false,
                      'lValueRequested': false,
                      'nodeType': 'IndexAccess',
                      'src': '3791:20:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_struct$_Account_$232_storage',
                        'typeString': 'struct MBFToken.Account storage ref'
                      }
                    },
                    'id': 529,
                    'isConstant': false,
                    'isLValue': true,
                    'isPure': false,
                    'lValueRequested': false,
                    'memberName': 'profit',
                    'nodeType': 'MemberAccess',
                    'referencedDeclaration': 227,
                    'src': '3791:27:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'nodeType': 'VariableDeclarationStatement',
                  'src': '3771:47:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 537,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'expression': {
                        'argumentTypes': null,
                        'baseExpression': {
                          'argumentTypes': null,
                          'id': 531,
                          'name': 'accounts',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 225,
                          'src': '3828:8:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_mapping$_t_address_$_t_struct$_Account_$232_storage_$',
                            'typeString': 'mapping(address => struct MBFToken.Account storage ref)'
                          }
                        },
                        'id': 534,
                        'indexExpression': {
                          'argumentTypes': null,
                          'expression': {
                            'argumentTypes': null,
                            'id': 532,
                            'name': 'msg',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 1668,
                            'src': '3837:3:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_magic_message',
                              'typeString': 'msg'
                            }
                          },
                          'id': 533,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'memberName': 'sender',
                          'nodeType': 'MemberAccess',
                          'referencedDeclaration': null,
                          'src': '3837:10:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address_payable',
                            'typeString': 'address payable'
                          }
                        },
                        'isConstant': false,
                        'isLValue': true,
                        'isPure': false,
                        'lValueRequested': false,
                        'nodeType': 'IndexAccess',
                        'src': '3828:20:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_struct$_Account_$232_storage',
                          'typeString': 'struct MBFToken.Account storage ref'
                        }
                      },
                      'id': 535,
                      'isConstant': false,
                      'isLValue': true,
                      'isPure': false,
                      'lValueRequested': true,
                      'memberName': 'profit',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 227,
                      'src': '3828:27:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'hexValue': '30',
                      'id': 536,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': true,
                      'kind': 'number',
                      'lValueRequested': false,
                      'nodeType': 'Literal',
                      'src': '3858:1:1',
                      'subdenomination': null,
                      'typeDescriptions': {
                        'typeIdentifier': 't_rational_0_by_1',
                        'typeString': 'int_const 0'
                      },
                      'value': '0'
                    },
                    'src': '3828:31:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'id': 538,
                  'nodeType': 'ExpressionStatement',
                  'src': '3828:31:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'id': 552,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftHandSide': {
                      'argumentTypes': null,
                      'expression': {
                        'argumentTypes': null,
                        'baseExpression': {
                          'argumentTypes': null,
                          'id': 539,
                          'name': 'accounts',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 225,
                          'src': '3869:8:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_mapping$_t_address_$_t_struct$_Account_$232_storage_$',
                            'typeString': 'mapping(address => struct MBFToken.Account storage ref)'
                          }
                        },
                        'id': 542,
                        'indexExpression': {
                          'argumentTypes': null,
                          'expression': {
                            'argumentTypes': null,
                            'id': 540,
                            'name': 'msg',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 1668,
                            'src': '3878:3:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_magic_message',
                              'typeString': 'msg'
                            }
                          },
                          'id': 541,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'memberName': 'sender',
                          'nodeType': 'MemberAccess',
                          'referencedDeclaration': null,
                          'src': '3878:10:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_address_payable',
                            'typeString': 'address payable'
                          }
                        },
                        'isConstant': false,
                        'isLValue': true,
                        'isPure': false,
                        'lValueRequested': false,
                        'nodeType': 'IndexAccess',
                        'src': '3869:20:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_struct$_Account_$232_storage',
                          'typeString': 'struct MBFToken.Account storage ref'
                        }
                      },
                      'id': 543,
                      'isConstant': false,
                      'isLValue': true,
                      'isPure': false,
                      'lValueRequested': true,
                      'memberName': 'taken',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 229,
                      'src': '3869:26:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'Assignment',
                    'operator': '=',
                    'rightHandSide': {
                      'argumentTypes': null,
                      'arguments': [
                        {
                          'argumentTypes': null,
                          'id': 550,
                          'name': 'available',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 524,
                          'src': '3929:9:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        }
                      ],
                      'expression': {
                        'argumentTypes': [
                          {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        ],
                        'expression': {
                          'argumentTypes': null,
                          'expression': {
                            'argumentTypes': null,
                            'baseExpression': {
                              'argumentTypes': null,
                              'id': 544,
                              'name': 'accounts',
                              'nodeType': 'Identifier',
                              'overloadedDeclarations': [],
                              'referencedDeclaration': 225,
                              'src': '3898:8:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_mapping$_t_address_$_t_struct$_Account_$232_storage_$',
                                'typeString': 'mapping(address => struct MBFToken.Account storage ref)'
                              }
                            },
                            'id': 547,
                            'indexExpression': {
                              'argumentTypes': null,
                              'expression': {
                                'argumentTypes': null,
                                'id': 545,
                                'name': 'msg',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 1668,
                                'src': '3907:3:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_magic_message',
                                  'typeString': 'msg'
                                }
                              },
                              'id': 546,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': false,
                              'lValueRequested': false,
                              'memberName': 'sender',
                              'nodeType': 'MemberAccess',
                              'referencedDeclaration': null,
                              'src': '3907:10:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_address_payable',
                                'typeString': 'address payable'
                              }
                            },
                            'isConstant': false,
                            'isLValue': true,
                            'isPure': false,
                            'lValueRequested': false,
                            'nodeType': 'IndexAccess',
                            'src': '3898:20:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_struct$_Account_$232_storage',
                              'typeString': 'struct MBFToken.Account storage ref'
                            }
                          },
                          'id': 548,
                          'isConstant': false,
                          'isLValue': true,
                          'isPure': false,
                          'lValueRequested': false,
                          'memberName': 'taken',
                          'nodeType': 'MemberAccess',
                          'referencedDeclaration': 229,
                          'src': '3898:26:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        },
                        'id': 549,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'memberName': 'add',
                        'nodeType': 'MemberAccess',
                        'referencedDeclaration': 1429,
                        'src': '3898:30:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$',
                          'typeString': 'function (uint256,uint256) pure returns (uint256)'
                        }
                      },
                      'id': 551,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'kind': 'functionCall',
                      'lValueRequested': false,
                      'names': [],
                      'nodeType': 'FunctionCall',
                      'src': '3898:41:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'src': '3869:70:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'id': 553,
                  'nodeType': 'ExpressionStatement',
                  'src': '3869:70:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'arguments': [],
                        'expression': {
                          'argumentTypes': [],
                          'id': 557,
                          'name': 'owner',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 906,
                          'src': '3977:5:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_function_internal_view$__$returns$_t_address_$',
                            'typeString': 'function () view returns (address)'
                          }
                        },
                        'id': 558,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'functionCall',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '3977:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'expression': {
                          'argumentTypes': null,
                          'id': 559,
                          'name': 'msg',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 1668,
                          'src': '3986:3:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_magic_message',
                            'typeString': 'msg'
                          }
                        },
                        'id': 560,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'memberName': 'sender',
                        'nodeType': 'MemberAccess',
                        'referencedDeclaration': null,
                        'src': '3986:10:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 561,
                        'name': 'available',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 524,
                        'src': '3998:9:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'expression': {
                        'argumentTypes': null,
                        'id': 554,
                        'name': 'collateral',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 207,
                        'src': '3949:10:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_contract$_IERC20Token_$1121',
                          'typeString': 'contract IERC20Token'
                        }
                      },
                      'id': 556,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'safeTransferFrom',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 1241,
                      'src': '3949:27:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_nonpayable$_t_contract$_IERC20Token_$1121_$_t_address_$_t_address_$_t_uint256_$returns$__$bound_to$_t_contract$_IERC20Token_$1121_$',
                        'typeString': 'function (contract IERC20Token,address,address,uint256)'
                      }
                    },
                    'id': 562,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '3949:59:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 563,
                  'nodeType': 'ExpressionStatement',
                  'src': '3949:59:1'
                },
                {
                  'eventCall': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'expression': {
                          'argumentTypes': null,
                          'id': 565,
                          'name': 'msg',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 1668,
                          'src': '4033:3:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_magic_message',
                            'typeString': 'msg'
                          }
                        },
                        'id': 566,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'memberName': 'sender',
                        'nodeType': 'MemberAccess',
                        'referencedDeclaration': null,
                        'src': '4033:10:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 567,
                        'name': 'available',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 524,
                        'src': '4045:9:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'id': 564,
                      'name': 'Withdraw',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 250,
                      'src': '4024:8:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$',
                        'typeString': 'function (address,uint256)'
                      }
                    },
                    'id': 568,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '4024:31:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 569,
                  'nodeType': 'EmitStatement',
                  'src': '4019:36:1'
                }
              ]
            },
            'documentation': null,
            'id': 571,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'withdraw',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 495,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '3578:2:1'
            },
            'returnParameters': {
              'id': 496,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '3600:0:1'
            },
            'scope': 674,
            'src': '3561:501:1',
            'stateMutability': 'nonpayable',
            'superFunction': null,
            'visibility': 'public'
          },
          {
            'body': {
              'id': 612,
              'nodeType': 'Block',
              'src': '4171:226:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 583,
                        'name': 'src',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 573,
                        'src': '4194:3:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      ],
                      'id': 582,
                      'name': 'adjustProfit',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 494,
                      'src': '4181:12:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_nonpayable$_t_address_$returns$__$',
                        'typeString': 'function (address)'
                      }
                    },
                    'id': 584,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '4181:17:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 585,
                  'nodeType': 'ExpressionStatement',
                  'src': '4181:17:1'
                },
                {
                  'condition': {
                    'argumentTypes': null,
                    'commonType': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    },
                    'id': 590,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'lValueRequested': false,
                    'leftExpression': {
                      'argumentTypes': null,
                      'baseExpression': {
                        'argumentTypes': null,
                        'id': 586,
                        'name': 'balanceOf',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 14,
                        'src': '4212:9:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_mapping$_t_address_$_t_uint256_$',
                          'typeString': 'mapping(address => uint256)'
                        }
                      },
                      'id': 588,
                      'indexExpression': {
                        'argumentTypes': null,
                        'id': 587,
                        'name': 'dst',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 575,
                        'src': '4222:3:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      'isConstant': false,
                      'isLValue': true,
                      'isPure': false,
                      'lValueRequested': false,
                      'nodeType': 'IndexAccess',
                      'src': '4212:14:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      }
                    },
                    'nodeType': 'BinaryOperation',
                    'operator': '==',
                    'rightExpression': {
                      'argumentTypes': null,
                      'hexValue': '30',
                      'id': 589,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': true,
                      'kind': 'number',
                      'lValueRequested': false,
                      'nodeType': 'Literal',
                      'src': '4230:1:1',
                      'subdenomination': null,
                      'typeDescriptions': {
                        'typeIdentifier': 't_rational_0_by_1',
                        'typeString': 'int_const 0'
                      },
                      'value': '0'
                    },
                    'src': '4212:19:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'falseBody': {
                    'id': 603,
                    'nodeType': 'Block',
                    'src': '4299:42:1',
                    'statements': [
                      {
                        'expression': {
                          'argumentTypes': null,
                          'arguments': [
                            {
                              'argumentTypes': null,
                              'id': 600,
                              'name': 'dst',
                              'nodeType': 'Identifier',
                              'overloadedDeclarations': [],
                              'referencedDeclaration': 575,
                              'src': '4326:3:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_address',
                                'typeString': 'address'
                              }
                            }
                          ],
                          'expression': {
                            'argumentTypes': [
                              {
                                'typeIdentifier': 't_address',
                                'typeString': 'address'
                              }
                            ],
                            'id': 599,
                            'name': 'adjustProfit',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 494,
                            'src': '4313:12:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_function_internal_nonpayable$_t_address_$returns$__$',
                              'typeString': 'function (address)'
                            }
                          },
                          'id': 601,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'kind': 'functionCall',
                          'lValueRequested': false,
                          'names': [],
                          'nodeType': 'FunctionCall',
                          'src': '4313:17:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_tuple$__$',
                            'typeString': 'tuple()'
                          }
                        },
                        'id': 602,
                        'nodeType': 'ExpressionStatement',
                        'src': '4313:17:1'
                      }
                    ]
                  },
                  'id': 604,
                  'nodeType': 'IfStatement',
                  'src': '4208:133:1',
                  'trueBody': {
                    'id': 598,
                    'nodeType': 'Block',
                    'src': '4233:60:1',
                    'statements': [
                      {
                        'expression': {
                          'argumentTypes': null,
                          'id': 596,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftHandSide': {
                            'argumentTypes': null,
                            'expression': {
                              'argumentTypes': null,
                              'baseExpression': {
                                'argumentTypes': null,
                                'id': 591,
                                'name': 'accounts',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 225,
                                'src': '4247:8:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_mapping$_t_address_$_t_struct$_Account_$232_storage_$',
                                  'typeString': 'mapping(address => struct MBFToken.Account storage ref)'
                                }
                              },
                              'id': 593,
                              'indexExpression': {
                                'argumentTypes': null,
                                'id': 592,
                                'name': 'dst',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 575,
                                'src': '4256:3:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_address',
                                  'typeString': 'address'
                                }
                              },
                              'isConstant': false,
                              'isLValue': true,
                              'isPure': false,
                              'lValueRequested': false,
                              'nodeType': 'IndexAccess',
                              'src': '4247:13:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_struct$_Account_$232_storage',
                                'typeString': 'struct MBFToken.Account storage ref'
                              }
                            },
                            'id': 594,
                            'isConstant': false,
                            'isLValue': true,
                            'isPure': false,
                            'lValueRequested': true,
                            'memberName': 'settled',
                            'nodeType': 'MemberAccess',
                            'referencedDeclaration': 231,
                            'src': '4247:21:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'nodeType': 'Assignment',
                          'operator': '=',
                          'rightHandSide': {
                            'argumentTypes': null,
                            'id': 595,
                            'name': 'totalProfit',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 215,
                            'src': '4271:11:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'src': '4247:35:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        },
                        'id': 597,
                        'nodeType': 'ExpressionStatement',
                        'src': '4247:35:1'
                      }
                    ]
                  }
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 607,
                        'name': 'src',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 573,
                        'src': '4376:3:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 608,
                        'name': 'dst',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 575,
                        'src': '4381:3:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 609,
                        'name': 'wad',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 577,
                        'src': '4386:3:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'expression': {
                        'argumentTypes': null,
                        'id': 605,
                        'name': 'super',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 1701,
                        'src': '4357:5:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_super$_MBFToken_$674',
                          'typeString': 'contract super MBFToken'
                        }
                      },
                      'id': 606,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'transferFrom',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 177,
                      'src': '4357:18:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$',
                        'typeString': 'function (address,address,uint256) returns (bool)'
                      }
                    },
                    'id': 610,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '4357:33:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'functionReturnParameters': 581,
                  'id': 611,
                  'nodeType': 'Return',
                  'src': '4350:40:1'
                }
              ]
            },
            'documentation': null,
            'id': 613,
            'implemented': true,
            'kind': 'function',
            'modifiers': [],
            'name': 'transferFrom',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 578,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 573,
                  'name': 'src',
                  'nodeType': 'VariableDeclaration',
                  'scope': 613,
                  'src': '4090:11:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 572,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '4090:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 575,
                  'name': 'dst',
                  'nodeType': 'VariableDeclaration',
                  'scope': 613,
                  'src': '4103:11:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_address',
                    'typeString': 'address'
                  },
                  'typeName': {
                    'id': 574,
                    'name': 'address',
                    'nodeType': 'ElementaryTypeName',
                    'src': '4103:7:1',
                    'stateMutability': 'nonpayable',
                    'typeDescriptions': {
                      'typeIdentifier': 't_address',
                      'typeString': 'address'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                },
                {
                  'constant': false,
                  'id': 577,
                  'name': 'wad',
                  'nodeType': 'VariableDeclaration',
                  'scope': 613,
                  'src': '4116:11:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 576,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '4116:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '4089:39:1'
            },
            'returnParameters': {
              'id': 581,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 580,
                  'name': '',
                  'nodeType': 'VariableDeclaration',
                  'scope': 613,
                  'src': '4161:4:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_bool',
                    'typeString': 'bool'
                  },
                  'typeName': {
                    'id': 579,
                    'name': 'bool',
                    'nodeType': 'ElementaryTypeName',
                    'src': '4161:4:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_bool',
                      'typeString': 'bool'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '4160:6:1'
            },
            'scope': 674,
            'src': '4068:329:1',
            'stateMutability': 'nonpayable',
            'superFunction': 177,
            'visibility': 'public'
          },
          {
            'body': {
              'id': 672,
              'nodeType': 'Block',
              'src': '4495:334:1',
              'statements': [
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        },
                        'id': 625,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'id': 623,
                          'name': 'targetPrice',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 213,
                          'src': '4513:11:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '>',
                        'rightExpression': {
                          'argumentTypes': null,
                          'hexValue': '30',
                          'id': 624,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': true,
                          'kind': 'number',
                          'lValueRequested': false,
                          'nodeType': 'Literal',
                          'src': '4527:1:1',
                          'subdenomination': null,
                          'typeDescriptions': {
                            'typeIdentifier': 't_rational_0_by_1',
                            'typeString': 'int_const 0'
                          },
                          'value': '0'
                        },
                        'src': '4513:15:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '50524943455f4e4f545f494e4954',
                        'id': 626,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '4530:16:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_823b2a7079681c4332e5846c0c8eb28b9ad225811a6290cf9dd0adfe2da1e068',
                          'typeString': 'literal_string \'PRICE_NOT_INIT\''
                        },
                        'value': 'PRICE_NOT_INIT'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_823b2a7079681c4332e5846c0c8eb28b9ad225811a6290cf9dd0adfe2da1e068',
                          'typeString': 'literal_string \'PRICE_NOT_INIT\''
                        }
                      ],
                      'id': 622,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1671,
                        1672
                      ],
                      'referencedDeclaration': 1672,
                      'src': '4505:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 627,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '4505:42:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 628,
                  'nodeType': 'ExpressionStatement',
                  'src': '4505:42:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'commonType': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        'id': 639,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'leftExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          },
                          'id': 632,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 630,
                            'name': 'wad',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 615,
                            'src': '4565:3:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '>',
                          'rightExpression': {
                            'argumentTypes': null,
                            'hexValue': '30',
                            'id': 631,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': true,
                            'kind': 'number',
                            'lValueRequested': false,
                            'nodeType': 'Literal',
                            'src': '4571:1:1',
                            'subdenomination': null,
                            'typeDescriptions': {
                              'typeIdentifier': 't_rational_0_by_1',
                              'typeString': 'int_const 0'
                            },
                            'value': '0'
                          },
                          'src': '4565:7:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'nodeType': 'BinaryOperation',
                        'operator': '&&',
                        'rightExpression': {
                          'argumentTypes': null,
                          'commonType': {
                            'typeIdentifier': 't_uint256',
                            'typeString': 'uint256'
                          },
                          'id': 638,
                          'isConstant': false,
                          'isLValue': false,
                          'isPure': false,
                          'lValueRequested': false,
                          'leftExpression': {
                            'argumentTypes': null,
                            'id': 633,
                            'name': 'wad',
                            'nodeType': 'Identifier',
                            'overloadedDeclarations': [],
                            'referencedDeclaration': 615,
                            'src': '4576:3:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'nodeType': 'BinaryOperation',
                          'operator': '<=',
                          'rightExpression': {
                            'argumentTypes': null,
                            'arguments': [
                              {
                                'argumentTypes': null,
                                'id': 636,
                                'name': 'totalSupply',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 10,
                                'src': '4597:11:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_uint256',
                                  'typeString': 'uint256'
                                }
                              }
                            ],
                            'expression': {
                              'argumentTypes': [
                                {
                                  'typeIdentifier': 't_uint256',
                                  'typeString': 'uint256'
                                }
                              ],
                              'expression': {
                                'argumentTypes': null,
                                'id': 634,
                                'name': 'maxSupply',
                                'nodeType': 'Identifier',
                                'overloadedDeclarations': [],
                                'referencedDeclaration': 209,
                                'src': '4583:9:1',
                                'typeDescriptions': {
                                  'typeIdentifier': 't_uint256',
                                  'typeString': 'uint256'
                                }
                              },
                              'id': 635,
                              'isConstant': false,
                              'isLValue': false,
                              'isPure': false,
                              'lValueRequested': false,
                              'memberName': 'sub',
                              'nodeType': 'MemberAccess',
                              'referencedDeclaration': 1454,
                              'src': '4583:13:1',
                              'typeDescriptions': {
                                'typeIdentifier': 't_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$',
                                'typeString': 'function (uint256,uint256) pure returns (uint256)'
                              }
                            },
                            'id': 637,
                            'isConstant': false,
                            'isLValue': false,
                            'isPure': false,
                            'kind': 'functionCall',
                            'lValueRequested': false,
                            'names': [],
                            'nodeType': 'FunctionCall',
                            'src': '4583:26:1',
                            'typeDescriptions': {
                              'typeIdentifier': 't_uint256',
                              'typeString': 'uint256'
                            }
                          },
                          'src': '4576:33:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_bool',
                            'typeString': 'bool'
                          }
                        },
                        'src': '4565:44:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'hexValue': '455843454544535f4d41585f535550504c59',
                        'id': 640,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': true,
                        'kind': 'string',
                        'lValueRequested': false,
                        'nodeType': 'Literal',
                        'src': '4611:20:1',
                        'subdenomination': null,
                        'typeDescriptions': {
                          'typeIdentifier': 't_stringliteral_7c6956820ebfeef31350d60be2dc78df829b8fcea767fdfe2b9f03d273e88c9c',
                          'typeString': 'literal_string \'EXCEEDS_MAX_SUPPLY\''
                        },
                        'value': 'EXCEEDS_MAX_SUPPLY'
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_bool',
                          'typeString': 'bool'
                        },
                        {
                          'typeIdentifier': 't_stringliteral_7c6956820ebfeef31350d60be2dc78df829b8fcea767fdfe2b9f03d273e88c9c',
                          'typeString': 'literal_string \'EXCEEDS_MAX_SUPPLY\''
                        }
                      ],
                      'id': 629,
                      'name': 'require',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [
                        1671,
                        1672
                      ],
                      'referencedDeclaration': 1672,
                      'src': '4557:7:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        'typeString': 'function (bool,string memory) pure'
                      }
                    },
                    'id': 641,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '4557:75:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 642,
                  'nodeType': 'ExpressionStatement',
                  'src': '4557:75:1'
                },
                {
                  'assignments': [
                    644
                  ],
                  'declarations': [
                    {
                      'constant': false,
                      'id': 644,
                      'name': 'joinPrice',
                      'nodeType': 'VariableDeclaration',
                      'scope': 672,
                      'src': '4643:17:1',
                      'stateVariable': false,
                      'storageLocation': 'default',
                      'typeDescriptions': {
                        'typeIdentifier': 't_uint256',
                        'typeString': 'uint256'
                      },
                      'typeName': {
                        'id': 643,
                        'name': 'uint256',
                        'nodeType': 'ElementaryTypeName',
                        'src': '4643:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      'value': null,
                      'visibility': 'internal'
                    }
                  ],
                  'id': 649,
                  'initialValue': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'id': 647,
                        'name': 'targetPrice',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 213,
                        'src': '4672:11:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'expression': {
                        'argumentTypes': null,
                        'id': 645,
                        'name': 'wad',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 615,
                        'src': '4663:3:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      },
                      'id': 646,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'wmul',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 1574,
                      'src': '4663:8:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$',
                        'typeString': 'function (uint256,uint256) pure returns (uint256)'
                      }
                    },
                    'id': 648,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '4663:21:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'nodeType': 'VariableDeclarationStatement',
                  'src': '4643:41:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'expression': {
                          'argumentTypes': null,
                          'id': 653,
                          'name': 'msg',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 1668,
                          'src': '4722:3:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_magic_message',
                            'typeString': 'msg'
                          }
                        },
                        'id': 654,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'memberName': 'sender',
                        'nodeType': 'MemberAccess',
                        'referencedDeclaration': null,
                        'src': '4722:10:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'arguments': [],
                        'expression': {
                          'argumentTypes': [],
                          'id': 655,
                          'name': 'owner',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 906,
                          'src': '4734:5:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_function_internal_view$__$returns$_t_address_$',
                            'typeString': 'function () view returns (address)'
                          }
                        },
                        'id': 656,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'kind': 'functionCall',
                        'lValueRequested': false,
                        'names': [],
                        'nodeType': 'FunctionCall',
                        'src': '4734:7:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 657,
                        'name': 'joinPrice',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 644,
                        'src': '4743:9:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        },
                        {
                          'typeIdentifier': 't_address',
                          'typeString': 'address'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'expression': {
                        'argumentTypes': null,
                        'id': 650,
                        'name': 'collateral',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 207,
                        'src': '4694:10:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_contract$_IERC20Token_$1121',
                          'typeString': 'contract IERC20Token'
                        }
                      },
                      'id': 652,
                      'isConstant': false,
                      'isLValue': false,
                      'isPure': false,
                      'lValueRequested': false,
                      'memberName': 'safeTransferFrom',
                      'nodeType': 'MemberAccess',
                      'referencedDeclaration': 1241,
                      'src': '4694:27:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_nonpayable$_t_contract$_IERC20Token_$1121_$_t_address_$_t_address_$_t_uint256_$returns$__$bound_to$_t_contract$_IERC20Token_$1121_$',
                        'typeString': 'function (contract IERC20Token,address,address,uint256)'
                      }
                    },
                    'id': 658,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '4694:59:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 659,
                  'nodeType': 'ExpressionStatement',
                  'src': '4694:59:1'
                },
                {
                  'expression': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'expression': {
                          'argumentTypes': null,
                          'id': 661,
                          'name': 'msg',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 1668,
                          'src': '4769:3:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_magic_message',
                            'typeString': 'msg'
                          }
                        },
                        'id': 662,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'memberName': 'sender',
                        'nodeType': 'MemberAccess',
                        'referencedDeclaration': null,
                        'src': '4769:10:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 663,
                        'name': 'wad',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 615,
                        'src': '4781:3:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'id': 660,
                      'name': '_mint',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 837,
                      'src': '4763:5:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$',
                        'typeString': 'function (address,uint256)'
                      }
                    },
                    'id': 664,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '4763:22:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 665,
                  'nodeType': 'ExpressionStatement',
                  'src': '4763:22:1'
                },
                {
                  'eventCall': {
                    'argumentTypes': null,
                    'arguments': [
                      {
                        'argumentTypes': null,
                        'expression': {
                          'argumentTypes': null,
                          'id': 667,
                          'name': 'msg',
                          'nodeType': 'Identifier',
                          'overloadedDeclarations': [],
                          'referencedDeclaration': 1668,
                          'src': '4806:3:1',
                          'typeDescriptions': {
                            'typeIdentifier': 't_magic_message',
                            'typeString': 'msg'
                          }
                        },
                        'id': 668,
                        'isConstant': false,
                        'isLValue': false,
                        'isPure': false,
                        'lValueRequested': false,
                        'memberName': 'sender',
                        'nodeType': 'MemberAccess',
                        'referencedDeclaration': null,
                        'src': '4806:10:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        }
                      },
                      {
                        'argumentTypes': null,
                        'id': 669,
                        'name': 'wad',
                        'nodeType': 'Identifier',
                        'overloadedDeclarations': [],
                        'referencedDeclaration': 615,
                        'src': '4818:3:1',
                        'typeDescriptions': {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      }
                    ],
                    'expression': {
                      'argumentTypes': [
                        {
                          'typeIdentifier': 't_address_payable',
                          'typeString': 'address payable'
                        },
                        {
                          'typeIdentifier': 't_uint256',
                          'typeString': 'uint256'
                        }
                      ],
                      'id': 666,
                      'name': 'Mint',
                      'nodeType': 'Identifier',
                      'overloadedDeclarations': [],
                      'referencedDeclaration': 238,
                      'src': '4801:4:1',
                      'typeDescriptions': {
                        'typeIdentifier': 't_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$',
                        'typeString': 'function (address,uint256)'
                      }
                    },
                    'id': 670,
                    'isConstant': false,
                    'isLValue': false,
                    'isPure': false,
                    'kind': 'functionCall',
                    'lValueRequested': false,
                    'names': [],
                    'nodeType': 'FunctionCall',
                    'src': '4801:21:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_tuple$__$',
                      'typeString': 'tuple()'
                    }
                  },
                  'id': 671,
                  'nodeType': 'EmitStatement',
                  'src': '4796:26:1'
                }
              ]
            },
            'documentation': null,
            'id': 673,
            'implemented': true,
            'kind': 'function',
            'modifiers': [
              {
                'arguments': null,
                'id': 618,
                'modifierName': {
                  'argumentTypes': null,
                  'id': 617,
                  'name': 'whitelistOnly',
                  'nodeType': 'Identifier',
                  'overloadedDeclarations': [],
                  'referencedDeclaration': 1008,
                  'src': '4453:13:1',
                  'typeDescriptions': {
                    'typeIdentifier': 't_modifier$__$',
                    'typeString': 'modifier ()'
                  }
                },
                'nodeType': 'ModifierInvocation',
                'src': '4453:13:1'
              },
              {
                'arguments': null,
                'id': 620,
                'modifierName': {
                  'argumentTypes': null,
                  'id': 619,
                  'name': 'beforeFinalized',
                  'nodeType': 'Identifier',
                  'overloadedDeclarations': [],
                  'referencedDeclaration': 327,
                  'src': '4475:15:1',
                  'typeDescriptions': {
                    'typeIdentifier': 't_modifier$__$',
                    'typeString': 'modifier ()'
                  }
                },
                'nodeType': 'ModifierInvocation',
                'src': '4475:15:1'
              }
            ],
            'name': 'join',
            'nodeType': 'FunctionDefinition',
            'parameters': {
              'id': 616,
              'nodeType': 'ParameterList',
              'parameters': [
                {
                  'constant': false,
                  'id': 615,
                  'name': 'wad',
                  'nodeType': 'VariableDeclaration',
                  'scope': 673,
                  'src': '4417:11:1',
                  'stateVariable': false,
                  'storageLocation': 'default',
                  'typeDescriptions': {
                    'typeIdentifier': 't_uint256',
                    'typeString': 'uint256'
                  },
                  'typeName': {
                    'id': 614,
                    'name': 'uint256',
                    'nodeType': 'ElementaryTypeName',
                    'src': '4417:7:1',
                    'typeDescriptions': {
                      'typeIdentifier': 't_uint256',
                      'typeString': 'uint256'
                    }
                  },
                  'value': null,
                  'visibility': 'internal'
                }
              ],
              'src': '4416:13:1'
            },
            'returnParameters': {
              'id': 621,
              'nodeType': 'ParameterList',
              'parameters': [],
              'src': '4495:0:1'
            },
            'scope': 674,
            'src': '4403:426:1',
            'stateMutability': 'nonpayable',
            'superFunction': null,
            'visibility': 'public'
          }
        ],
        'scope': 675,
        'src': '265:4566:1'
      }
    ],
    'src': '0:4831:1'
  },
  'compiler': {
    'name': 'solc',
    'version': '0.5.10+commit.5a6ea5b1.Emscripten.clang'
  },
  'networks': {
    '3': {
      'events': {},
      'links': {},
      'address': '0xC668AEf12fE3A351993Bd6cD4c92Bc6008C7310F',
      'transactionHash': '0xa8d4e5a21a7de91439746a49134125fdfea56e574c6770dd9d1965c3db59cf19'
    }
  },
  'schemaVersion': '3.0.11',
  'updatedAt': '2019-08-01T06:36:02.238Z',
  'devdoc': {
    'methods': {
      'isOwner()': {
        'details': 'Returns true if the caller is the current owner.'
      },
      'owner()': {
        'details': 'Returns the address of the current owner.'
      },
      'renounceOwnership()': {
        'details': 'Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.'
      },
      'transferOwnership(address)': {
        'details': 'Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.'
      }
    }
  },
  'userdoc': {
    'methods': {}
  }
}
