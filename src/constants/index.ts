// a list of tokens by chain

import { ChainId } from './enums'

// export const DAI = new Token(ChainId.BSC, '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3', 18, 'DAI', 'Dai Stablecoin')
// export const BUSD = new Token(ChainId.BSC, '0xe9e7cea3dedca5984780bafc599bd69add087d56', 18, 'BUSD', 'Binance USD')
// export const USDT = new Token(ChainId.BSC, '0x55d398326f99059ff775485246999027b3197955', 18, 'USDT', 'Tether USD')
// export const UST = new Token(ChainId.BSC, '0x23396cf899ca06c4472205fc903bdb4de249d6fc', 18, 'UST', 'Wrapped UST Token')

// const WETH_ONLY: ChainTokenList = {
//   [ChainId.BSC]: [WNATIVE[ChainId.BSC]],
//   [ChainId.BSC_TESTNET]: [WNATIVE[ChainId.BSC_TESTNET]],
//   [ChainId.MATIC]: [WNATIVE[ChainId.MATIC]],
//   [ChainId.MATIC_TESTNET]: [WNATIVE[ChainId.MATIC_TESTNET]],
// }

// used to construct intermediary pairs for trading
// export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
//   ...WETH_ONLY,
//   [ChainId.BSC]: [...WETH_ONLY[ChainId.BSC], DAI, BUSD, USDT, UST],
// }

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
// export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
//   [ChainId.BSC]: {},
// }

// used for display in the default list when adding liquidity
// export const SUGGESTED_BASES: ChainTokenList = {
//   ...WETH_ONLY,
//   [ChainId.BSC]: [...WETH_ONLY[ChainId.BSC], DAI, BUSD, USDT],
// }

// used to construct the list of all pairs we consider by default in the frontend
// export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
//   ...WETH_ONLY,
//   [ChainId.BSC]: [...WETH_ONLY[ChainId.BSC], DAI, BUSD, USDT],
// }

// export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
//   [ChainId.BSC]: [
//     [
//       new Token(ChainId.BSC, '0x43bd1Db5b882b081cCbA03CA26311e3Fa9f69924', 18, 'BSCS', 'BSCSswap-Test Token'),
//       new Token(ChainId.BSC, '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', 18, 'WBNB', 'Wrapped BNB'),
//     ],
//     [BUSD, USDT],
//     [DAI, USDT],
//   ],
// }

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 80
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

// one basis point
// export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
// export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
// export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
// export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
// export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
// export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
// export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much ETH so they end up with <.01
// export const MIN_ETH: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 ETH

export const RPC_URLS: {
  [chainId in ChainId]?: string[]
} = {
  [ChainId.RINKEBY]: ['https://rinkeby.infura.io/v3/05dea8bed7fb40759b1fcc154e5e0dbd'],
  [ChainId.BSC]: [
    'https://bsc-dataseed.binance.org/',
    'https://bsc-dataseed1.defibit.io/',
    'https://bsc-dataseed1.ninicoin.io/',
  ],
  [ChainId.BSC_TESTNET]: [
    // 'https://data-seed-prebsc-2-s3.binance.org:8545/',
    // 'https://speedy-nodes-nyc.moralis.io/5ba923ae20cc2c0509504eaa/bsc/testnet',
    // 'https://data-seed-prebsc-1-s2.binance.org:8545/',
    'https://data-seed-prebsc-2-s2.binance.org:8545/',
    // 'https://data-seed-prebsc-1-s3.binance.org:8545/',
    // 'https://speedy-nodes-nyc.moralis.io/5ba923ae20cc2c0509504eaa/bsc/testnet',
    // 'https://data-seed-prebsc-1-s1.binance.org:8545',
  ],
}

export const BLOCK_EXPLORER_URLS: {
  [chainId in ChainId]?: string[]
} = {
  [ChainId.RINKEBY]: ['https://rinkeby.etherscan.io/'],
  [ChainId.BSC]: ['https://bscscan.com'],
  [ChainId.BSC_TESTNET]: ['https://testnet.bscscan.com/'],
}

export const SCAN_SITES: {
  [chainId in ChainId]?: string
} = {
  [ChainId.BSC]: 'bscscan',
  [ChainId.BSC_TESTNET]: 'bscscan',
}

export const NETWORKS: {
  [chainId in ChainId]?: any
} = {
  [ChainId.BSC]: {
    chainId: `0x${ChainId.BSC.toString(16)}`,
    chainName: 'Binance Smart Chain Mainnet',
    nativeCurrency: {
      name: 'BNB',
      symbol: 'bnb',
      decimals: 18,
    },
    rpcUrls: RPC_URLS[ChainId.BSC],
    blockExplorerUrls: BLOCK_EXPLORER_URLS[ChainId.BSC],
  },
  [ChainId.BSC_TESTNET]: {
    chainId: `0x${ChainId.BSC_TESTNET.toString(16)}`,
    chainName: 'Binance Smart Chain Testnet',
    nativeCurrency: {
      name: 'BNB',
      symbol: 'bnb',
      decimals: 18,
    },
    rpcUrls: RPC_URLS[ChainId.BSC_TESTNET],
    blockExplorerUrls: BLOCK_EXPLORER_URLS[ChainId.BSC_TESTNET],
  },
}

export const ALL_SUPPORTED_CHAIN_IDS: ChainId[] = [ChainId.BSC_TESTNET, ChainId.RINKEBY] // Todo: supported chainId

export const HERO_STATUS = {
  ON_INVENTORY: 0,
  ON_SALE: 1,
}
export const HERO_STATUSES = Object.values(HERO_STATUS)

export const TRANSACTION_STATUS = {
  BOUGHT: 'BOUGHT',
  SOLD: 'SOLD',
  CANCEL: 'CANCEL',
  SELL: 'SELL',
  MINT: 'MINT',
}
export const TRANSACTION_STATUSES = Object.values(TRANSACTION_STATUS)

export const FILTER_OPTION = {
  SEARCH: 'search',
  RARITY: 'rarity',
  TYPE: 'type',
  MINT_SLOT: 'mintSlot',
  PRICE: 'price',
  LEVEL: 'level',
  NFT_TYPE: 'nftType',
}

export const SORT_OPTION = {
  NEWEST: 'newest',
  LOWEST_PRICE: 'lowestPrice',
}

export const MAX_DURABILITY = 100

export const MAX_MINTED_SLOTS = 6
