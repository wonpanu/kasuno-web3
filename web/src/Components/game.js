import Dice from "react-dice-roll";

export default function game({
  betType,
  setBetType,
  onChangeBetAmount,
  onClickBet,
  result,
}) {
  return (
    <main className="flex-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-center items-center h-full bg-gray-50">
        <div className="w-11/12 h-5/6 rounded overflow-hidden shadow-lg bg-white flex justify-center items-center">
          <div className="w-4/12">
            <div className="flex justify-end items-center mb-20">
              <div className="text-base text-gray-400 font-medium">History</div>
              <svg
                class="flex-shrink-0 h-5 w-5 text-gray-400 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <div className="flex justify-center items-center mb-10">
                <div id="dice-wrapper">
                  <Dice cheatValue={result} size={80} />
                </div>
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="bet"
                >
                  Bet Amount
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="bet"
                  type="number"
                  placeholder="100 KSN"
                  onChange={onChangeBetAmount}
                />
              </div>

              <div className="flex items-center justify-center">
                <button
                  className={`w-1/2 ${
                    betType === "hi"
                      ? "bg-blue-500 text-white"
                      : "bg-white text-blue-500"
                  } font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                  type="button"
                  onClick={() => setBetType("hi")}
                >
                  Hi
                </button>
                <button
                  className={`w-1/2 ${
                    betType === "lo"
                      ? "bg-blue-500 text-white"
                      : "bg-white text-blue-500"
                  } font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                  type="button"
                  onClick={() => setBetType("lo")}
                >
                  Lo
                </button>
              </div>

              <button
                className="w-full border border-blue-500 bg-white text-blue-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5"
                type="button"
                onClick={onClickBet}
              >
                Bet
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
