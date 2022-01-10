export default function navbar({ balance, onConnectWallet, isConnected }) {
  return (
    <div class="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div class="flex justify-between items-center">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span class="sr-only">Workflow</span>
              <p className="text-xl text-gray-900 font-extrabold">KASUNO</p>
            </a>
          </div>
          <div class="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span class="sr-only">Open menu</span>

              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav class="hidden md:flex space-x-10">
            <a href="#" class="text-gray-900 text-base font-medium">
              Hi Lo
            </a>
            <a
              href="#"
              class="text-gray-300 hover:text-gray-900 text-base font-medium"
            >
              Lottery
            </a>
          </nav>
          <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <p className="text-base font-bold text-indigo-700">
              Balance {balance}
            </p>
            {!isConnected && (
              <a
                href="#"
                onClick={onConnectWallet}
                class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Connect Wallet
              </a>
            )}
          </div>
        </div>

        <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div class="pt-5 pb-6 px-5">
              <div class="flex items-center justify-between">
                <div>
                  <p className="text-xl text-gray-900 font-extrabold">KASUNO</p>
                </div>
                <div class="-mr-2">
                  <button
                    type="button"
                    class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span class="sr-only">Close menu</span>

                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="mt-6">
                <nav class="grid gap-y-8">
                  <a
                    href="#"
                    class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 bg-indigo-600"
                  >
                    <svg
                      class="flex-shrink-0 h-6 w-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                      />
                    </svg>
                    <span class="ml-3 text-base font-medium text-white">
                      Hi Lo
                    </span>
                  </a>
                  <a
                    href="#"
                    class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <svg
                      class="flex-shrink-0 h-6 w-6 text-indigo-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                    <span class="ml-3 text-base font-medium text-gray-900">
                      Lottery
                    </span>
                  </a>
                </nav>
              </div>
            </div>
            <div class="py-6 px-5 space-y-6">
              <div className="flex items-center">
                <p className="text-base font-bold text-indigo-700">
                  Balance {balance}
                </p>
                <a
                  href="#"
                  class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Connect Wallet
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
