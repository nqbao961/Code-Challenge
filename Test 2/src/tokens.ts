export interface Token {
  symbol: string;
  price: number;
}

export const TOKENS: Token[] = [
  { symbol: 'BLUR', price: 0.20811525423728813 },
  { symbol: 'bNEO', price: 7.1282679 },
  { symbol: 'BUSD', price: 0.9998782611186441 },
  { symbol: 'USD', price: 1 },
  { symbol: 'ETH', price: 1645.9337373737374 },
  { symbol: 'GMX', price: 36.345114372881355 },
  { symbol: 'STEVMOS', price: 0.07276706779661017 },
  { symbol: 'LUNA', price: 0.40955638983050846 },
  { symbol: 'RATOM', price: 10.250918915254237 },
  { symbol: 'STRD', price: 0.7386553389830508 },
  { symbol: 'EVMOS', price: 0.06246181355932203 },
  { symbol: 'IBCX', price: 41.26811355932203 },
  { symbol: 'IRIS', price: 0.0177095593220339 },
  { symbol: 'ampLUNA', price: 0.49548589830508477 },
  { symbol: 'KUJI', price: 0.675 },
  { symbol: 'STOSMO', price: 0.431318 },
  { symbol: 'USDC', price: 0.9998782611186441 },
  { symbol: 'axlUSDC', price: 0.989832 },
  { symbol: 'ATOM', price: 7.186657333333334 },
  { symbol: 'STATOM', price: 8.512162050847458 },
  { symbol: 'OSMO', price: 0.3772974333333333 },
  { symbol: 'rSWTH', price: 0.00408771 },
  { symbol: 'STLUNA', price: 0.44232210169491526 },
  { symbol: 'LSI', price: 67.69661525423729 },
  { symbol: 'OKB', price: 42.97562059322034 },
  { symbol: 'OKT', price: 13.561577966101694 },
  { symbol: 'SWTH', price: 0.004039850455012084 },
  { symbol: 'USC', price: 0.994 },
  { symbol: 'WBTC', price: 26002.82202020202 },
  { symbol: 'wstETH', price: 1872.2579742372882 },
  { symbol: 'YieldUSD', price: 1.0290847966101695 },
  { symbol: 'ZIL', price: 0.01651813559322034 },
].sort((a, b) => a.symbol.localeCompare(b.symbol));

export const TOKEN_MAP: Record<string, Token> = Object.fromEntries(
  TOKENS.map((token) => [token.symbol, token])
);
