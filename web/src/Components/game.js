import Dice from "react-dice-roll";

export default function game({
  betType,
  setBetType,
  onChangeBetAmount,
  onClickBet,
}) {
  return (
    <main className="flex-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-center items-center h-full bg-gray-50">
        <div className="w-11/12 h-5/6 rounded overflow-hidden shadow-lg flex justify-center items-center bg-white">
          <div>
            <div className="flex justify-center items-center mb-10">
              <div id="dice-wrapper">
                <Dice cheatValue={betType === "hi" ? 2 : 5} size={80} />
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
    </main>
  );
}
