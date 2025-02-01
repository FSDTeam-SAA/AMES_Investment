const ALPACA_API_KEY = "PKT6MY4BOAFLCBHYSA8K"
const ALPACA_SECRET_KEY = "5jFVkCTGpfnNMhpCcmoCxMVr5XaDFPSjVqAy2Tk9"
const ALPACA_API_URL = "https://paper-api.alpaca.markets"


async function getPositions() {
  const response = await fetch(`${ALPACA_API_URL}/v2/positions`, {
    headers: {
      "APCA-API-KEY-ID": ALPACA_API_KEY,
      "APCA-API-SECRET-KEY": ALPACA_SECRET_KEY,
    },
  });
  return response.json();
}

async function getPortfolioHistory() {
  const response = await fetch(
    `${ALPACA_API_URL}/v2/account/portfolio/history?period=1M&timeframe=1D`,
    {
      headers: {
        "APCA-API-KEY-ID": ALPACA_API_KEY,
        "APCA-API-SECRET-KEY": ALPACA_SECRET_KEY,
      },
    }
  );
  return response.json();
}

async function getAccount() {
  const response = await fetch(`${ALPACA_API_URL}/v2/account`, {
    headers: {
      "APCA-API-KEY-ID": ALPACA_API_KEY,
      "APCA-API-SECRET-KEY": ALPACA_SECRET_KEY,
    },
  });
  return response.json();
}

export { getPositions, getPortfolioHistory, getAccount };
