import { useState } from 'react';
import { TOKENS, TOKEN_MAP } from './tokens';

function App() {
  const [from, setFrom] = useState('ETH');
  const [to, setTo] = useState('USDC');
  const [amount, setAmount] = useState('');

  const value = Number(amount);
  const rate = TOKEN_MAP[from].price / TOKEN_MAP[to].price;
  const received = value * rate;

  return (
    <main>
      <h1>Currency swap</h1>
      <p>Swap one currency for another using the supplied sample prices.</p>
      <form>
        <fieldset>
          <legend>Swap details</legend>
          <p>
            <label htmlFor="from">From currency </label>
            <select
              id="from"
              value={from}
              onChange={(event) => {
                setFrom(event.target.value);
              }}
            >
              {TOKENS.map((token) => (
                <option key={token.symbol} value={token.symbol}>
                  {token.symbol}
                </option>
              ))}
            </select>
          </p>
          <p>
            <label htmlFor="amount">Amount to swap </label>
            <input
              id="amount"
              type="text"
              inputMode="decimal"
              placeholder="0.00"
              autoComplete="off"
              value={amount}
              required
              onChange={(event) => {
                setAmount(event.target.value);
              }}
            />
          </p>
          <button
            type="button"
            onClick={() => {
              setFrom(to);
              setTo(from);
            }}
          >
            Reverse currencies
          </button>
          <p>
            <label htmlFor="to">To currency </label>
            <select
              id="to"
              value={to}
              onChange={(event) => {
                setTo(event.target.value);
              }}
            >
              {TOKENS.map((token) => (
                <option key={token.symbol} value={token.symbol}>
                  {token.symbol}
                </option>
              ))}
            </select>
          </p>
          <p>
            Exchange rate: 1 {from} = {rate} {to}
          </p>
          <p>
            Estimated receive: <span>{`${received} ${to}`}</span>
          </p>
        </fieldset>
      </form>
    </main>
  );
}

export default App;
