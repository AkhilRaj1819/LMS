export default function ProcessedContent() {
  return (
    <main className="relative flex w-full flex-1 flex-col bg-background md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow overflow-hidden">
      <header className="flex lg:hidden h-16 shrink-0 items-center gap-2 border-b px-4 w-full sf-hidden"></header>
      <div className="h-screen bg-background flex flex-col p-4 lg:p-8 bg-[url('/livebooks/livebooks_home_page_bg.svg')] dark:bg-none bg-repeat overflow-y-auto">
        <div className="w-full lg:contents">
          <div className="flex flex-col h-full">
            <div className="fixed inset-0 z-50 bg-white">
              <button className="absolute top-6 right-2 md:right-4 xl:right-6 p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer" aria-label="Close modal">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" color="currentColor" className="text-gray-600">
                  <path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                </svg>
              </button>
              <div className="h-full overflow-auto">
                <div className="h-screen bg-[#F5F5F5] flex flex-col">
                  <div className="shrink-0 flex justify-center">
                    <div className="w-[1040px] pt-6 px-8 xl:px-0">
                      <div className="flex items-center gap-3 xl:gap-4">
                        <div className="relative w-[80%] md:w-[90%] xl:w-full h-6">
                          <div className="absolute top-1/2 left-0 w-full h-3 bg-gray-200 rounded-full -translate-y-1/2"></div>
                          <div className="absolute top-3 left-1 h-2 bg-[#FCD34D] rounded-full -translate-y-1/2 transition-all duration-300" style={{ width: '0%' }}></div>
                          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-300 z-50 rounded-full min-w-6 min-h-6 flex justify-center items-center" style={{ left: '0%' }}></div>
                          <div className="relative z-10 flex justify-between items-center w-full px-1">
                            <button type="button" title="Getting Started with OS" className="relative w-2.5 h-2.5 mt-[7px] rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer shadow-md">
                              <span className="block rounded-full w-2 h-2 bg-[#F18E0A]"></span>
                            </button>
                            <button type="button" title="Test" className="relative w-2.5 h-2.5 mt-[7px] rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer bg-transparent">
                              <span className="block rounded-full w-2.5 h-2.5 bg-gray-300"></span>
                            </button>
                          </div>
                        </div>
                        <button type="button" className="shrink-0 p-2 bg-white rounded-full hover:bg-gray-100 border-2 border-gray transition-colors cursor-pointer" title="Test">
                          <img alt="brain" loading="lazy" width={12} height={12} decoding="async" data-nimg={1} src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swXzE4MV85ODIzOTMiIHN0eWxlPSJtYXNrLXR5cGU6bHVtaW5hbmNlIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiPgo8cGF0aCBkPSJNMCA5LjUzNjc0ZS0wN0gxNlYxNkgwVjkuNTM2NzRlLTA3WiIgZmlsbD0id2hpdGUiLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2swXzE4MV85ODIzOTMpIj4KPHBhdGggZD0iTTMuODMzOTEgMTAuMDg5M0MzLjkxNTY2IDExLjQ4MjEgNS4wNzU2MyAxMi41ODU5IDYuNDg4ODggMTIuNTg1OUM3LjAwNjUxIDEyLjU4NTkgNy40ODk1MSAxMi40Mzc4IDcuODk3ODUgMTIuMTgxN0w5LjAyMTQ0IDE0LjMzMDFDOS4xODc4MiAxNC42NDgzIDkuNTE3MTMgMTQuODQ3NyA5Ljg3NjE2IDE0Ljg0NzdDMTAuNDA4OCAxNC44NDc3IDEwLjg0MDcgMTQuNDE1OCAxMC44NDA3IDEzLjg4MzFWMTIuNTI1OUMxMi4wNTc3IDEyLjUwNTYgMTMuMDc1NCAxMS42NjY0IDEzLjM2NjggMTAuNTM1NkwxMy4zNTM4IDEwLjUyNDJIMTMuMzUzNUMxMy4zNTM1IDEwLjUyNDEgMTMuMzUzNiAxMC41MjQxIDEzLjM1MzYgMTAuNTI0TDEzLjM1MzggMTAuNTI0MkMxNC42NjI1IDEwLjQwMzcgMTUuNjg3NSA5LjMwMzQxIDE1LjY4NzUgNy45NjMyNUMxNS42ODc1IDYuODk3NzUgMTUuMDI0MiA1Ljk4MDM0IDE0LjEwMDkgNS41ODk4NEMxNC4xNjA2IDUuMzUzMDYgMTQuMTg3NSA1LjEwMDA5IDE0LjE3NjQgNC44NDIzNUMxNC4xMjA0IDMuNTQyNjYgMTMuMDg1MyAyLjQ3OTUgMTEuNzg3NSAyLjM4OTkxQzExLjM3ODQgMi4zNjE2NiAxMC45ODg2IDIuNDMwMDkgMTAuNjM3MSAyLjU3MzI1TDExLjA1MTcgMi4zMTY4MUMxMC41ODc3IDEuNjE4MjIgOS43OTM2OSAxLjE1NzY5IDguODkyMTkgMS4xNTc2OUM4LjIwMyAxLjE1NzY5IDcuNTc2NjkgMS40MjY4OCA3LjExMjU3IDEuODY1NzhDNi42NjQxNiAxLjQ5NDE5IDYuMDg4NTEgMS4yNzA4OCA1LjQ2MDY2IDEuMjcwODhDNC40MzY4OCAxLjI3MDg4IDMuNTUxNzkgMS44NjQ3MiAzLjEzMTEzIDIuNzI2NzJDMS43MzczMiAyLjc2ODkxIDAuNjIwMzQ5IDMuOTEyMDMgMC42MjAzNDkgNS4zMTYwOUMwLjYyMDM0OSA1LjU5NjU5IDAuNjY1NTA2IDUuODY3MDkgMC43NDc5NzQgNi4xMjAwNkMwLjQ2MzQxMiA2LjU1MjE2IDAuMzAyMjU2IDcuMDcyNjkgMC4zMTMwMDYgNy42MzExOUMwLjM0MDU2OCA5LjA2MjQ3IDEuNTE4MjIgMTAuMjI0NCAyLjk0OTc2IDEwLjIzMzhDMy4yNTk1MSAxMC4yMzU4IDMuNTU3MDcgMTAuMTg0OCAzLjgzMzkxIDEwLjA4OTNaIiBmaWxsPSIjRkY5RkIzIi8+CjxwYXRoIGQ9Ik04LjAwNDU2IDguNTU4NTlDNy43NDU2OSA4LjU1ODU5IDcuNTM1ODEgOC4zNDg3MiA3LjUzNTgxIDguMDg5ODRWNy41MDM3NUM3LjUzNTgxIDcuMTA1OTEgNy44MDQwOSA2Ljc1NDQ0IDguMTg4MTkgNi42NDkwM0M4LjUwNTcyIDYuNTYxODQgOC43MTg3NSA2LjI1ODkxIDguNjk0NzIgNS45Mjg3MkM4LjY2OTg0IDUuNTg3NSA4LjM5MzU2IDUuMzEzMzQgOC4wNTIwOSA1LjI5MUM3LjY5MDYyIDUuMjY3MzQgNy4zNjg5MSA1LjUyOCA3LjMxOTE5IDUuODg0MzhDNy4zMTQ3NSA1LjkxNjIyIDcuMzEyNSA1Ljk0ODkxIDcuMzEyNSA1Ljk4MTVDNy4zMTI1IDYuMjQwMzggNy4xMDI2MyA2LjQ1MDI1IDYuODQzNzUgNi40NTAyNUM2LjU4NDg0IDYuNDUwMjUgNi4zNzUgNi4yNDAzOCA2LjM3NSA1Ljk4MTVDNi4zNzUgNS45MDU2OSA2LjM4MDI1IDUuODI5NDEgNi4zOTA2OSA1Ljc1NDc4QzYuNTA3OTEgNC45MTQ1OSA3LjI2NDI1IDQuMjk5ODggOC4xMTMzNCA0LjM1NTVDOC45MTkxMyA0LjQwODIyIDkuNTcxMDMgNS4wNTUyOCA5LjYyOTcyIDUuODYwNTZDOS42ODUzMSA2LjYyMzA2IDkuMjAwODEgNy4zMjQxMyA4LjQ3MzMxIDcuNTQyNDRWOC4wODk4NEM4LjQ3MzMxIDguMzQ4NzIgOC4yNjM0NCA4LjU1ODU5IDguMDA0NTYgOC41NTg1OVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik04LjQ3MjgxIDkuNjgzNTNDOC40NzI4MSA5LjQyNDU5IDguMjYyOTEgOS4yMTQ2OSA4LjAwNCA5LjIxNDY5QzcuNzQ1MDYgOS4yMTQ2OSA3LjUzNTE2IDkuNDI0NTkgNy41MzUxNiA5LjY4MzUzQzcuNTM1MTYgOS45NDI0NCA3Ljc0NTA2IDEwLjE1MjMgOC4wMDQgMTAuMTUyM0M4LjI2MjkxIDEwLjE1MjMgOC40NzI4MSA5Ljk0MjQ0IDguNDcyODEgOS42ODM1M1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMC44NTQgOS4xOTI2M0MxMS4yOTAyIDkuOTkyNSAxMi4xMzg3IDEwLjUzNTIgMTMuMTEzOSAxMC41MzUyQzE0LjUzNDYgMTAuNTM1MiAxNS42ODYyIDkuMzgzNDcgMTUuNjg2MiA3Ljk2MjgxQzE1LjY4NjIgNi44OTczNCAxNS4wMjI5IDUuOTc5OTEgMTQuMDk5NyA1LjU4OTQxQzE0LjE1MDUgNS4zODc2MyAxNC4xNzc2IDUuMTczMTYgMTQuMTc3NiA0Ljk1NTU2QzE0LjE3NzYgMy41MzQ5MSAxMy4wMjU5IDIuMzgzMjUgMTEuNjA1MiAyLjM4MzI1QzEwLjk1NDEgMi4zODMyNSAxMC4zNTk0IDIuNjI1MTkgOS45MDYyNSAzLjAyNDA2IiBzdHJva2U9IiNGRjVEN0YiIHN0cm9rZS13aWR0aD0iMC42MjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMS4wNTE3IDIuMzEzNDFDMTAuNTg3NyAxLjYxNDgxIDkuNzkzNzIgMS4xNTQyOCA4Ljg5MjE5IDEuMTU0MjhDOC4yMDMgMS4xNTQyOCA3LjU3NjY5IDEuNDIzNDQgNy4xMTI1NiAxLjg2MjM0QzYuNjY0MTkgMS40OTA3OCA2LjA4ODUzIDEuMjY3NDQgNS40NjA2NiAxLjI2NzQ0QzQuNDM2ODcgMS4yNjc0NCAzLjU1MTc4IDEuODYxMjggMy4xMzExMiAyLjcyMzMxQzEuNzM3MzEgMi43NjU1IDAuNjIwMzQzIDMuOTA4NjMgMC42MjAzNDMgNS4zMTI2OUMwLjYyMDM0MyA1LjU5MzE5IDAuNjY1NSA1Ljg2MzY2IDAuNzQ3OTY5IDYuMTE2NjZDMC40NzIzMTIgNi41MzUyMiAwLjMxMjUgNy4wMzY3OCAwLjMxMjUgNy41NzU0NEMwLjMxMjUgOS4wNDE3OCAxLjUwMTE5IDEwLjIzMDUgMi45Njc1MyAxMC4yMzA1QzMuMjcwOTEgMTAuMjMwNSAzLjU2MjM3IDEwLjE3OTYgMy44MzM5MSAxMC4wODU5IiBzdHJva2U9IiNGRjVEN0YiIHN0cm9rZS13aWR0aD0iMC42MjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMC40NTMxIDcuNjYwMTZDMTAuNzAzOCA3LjA2NzUzIDExLjI5MDYgNi42NTE2OSAxMS45NzQ1IDYuNjUxNjlDMTIuNDEwOCA2LjY1MTY5IDEyLjgwNzUgNi44MjA5MSAxMy4xMDI3IDcuMDk3MjIiIHN0cm9rZT0iI0ZGNUQ3RiIgc3Ryb2tlLXdpZHRoPSIwLjYyNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTUuMDU0OTcgNS43NTM5MUM0LjQxNjMxIDUuMTE1MjUgMy4zODA4NCA1LjExNTI1IDIuNzQyMTkgNS43NTM5MSIgc3Ryb2tlPSIjRkY1RDdGIiBzdHJva2Utd2lkdGg9IjAuNjI1IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNC42NjQ2MyA4LjAwMzgxQzQuMTMzODIgOC41MDcwNiAzLjgxMDc2IDkuMjI3MjIgMy44Mzc0OCAxMC4wMjI0QzMuODg0MTYgMTEuNDEyOCA1LjAxNTQ4IDEyLjU0MTIgNi40MDU5NSAxMi41ODQ2QzYuOTU1NjYgMTIuNjAxOCA3LjQ2OTMyIDEyLjQ1MTggNy44OTk5MSAxMi4xODE3TDkuMDIzNTEgMTQuMzMwMUM5LjE4OTg4IDE0LjY0ODIgOS41MTkxOSAxNC44NDc3IDkuODc4MTkgMTQuODQ3N0MxMC40MTA5IDE0Ljg0NzcgMTAuODQyNyAxNC40MTU4IDEwLjg0MjcgMTMuODgzMVYxMi41MjU4VjEyLjUyNTlDMTIuMDU5NyAxMi41MDU2IDEzLjA3NzQgMTEuNjY2NCAxMy4zNjg4IDEwLjUzNTYiIHN0cm9rZT0iI0ZGNUQ3RiIgc3Ryb2tlLXdpZHRoPSIwLjYyNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9nPgo8L3N2Zz4K" style={{ color: 'transparent' }} />
                        </button>
                      </div>
                      <div className="flex items-center justify-between w-[78%] md:w-[88%] xl:w-[1040px] absolute">
                        <div className="flex items-center gap-2 min-w-0 flex-1">
                          <div className="border border-[#737373] bg-[#65A30D] border-[#3F6212] text-white rounded-none w-4 h-4 flex-shrink-0"></div>
                          <img alt="dot" loading="lazy" width={3} height={3} decoding="async" data-nimg={1} className="flex-shrink-0" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMyIgaGVpZ2h0PSI0IiB2aWV3Qm94PSIwIDAgMyA0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8Y2lyY2xlIGN4PSIxLjUiIGN5PSIyIiByPSIxLjUiIGZpbGw9IiNEOUQ5RDkiLz4KPC9zdmc+Cg==" style={{ color: 'transparent' }} />
                          <h2 className="text-[12px] text-[#737373] font-normal leading-4 truncate">1.1 Getting Started with OS</h2>
                        </div>
                        <h1 className="text-[12px] text-[#737373] font-normal leading-4 whitespace-nowrap ml-4 mr-12">Completed!</h1>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 mt-10 overflow-y-auto">
                    <div className="lg:w-[1040px] mx-auto px-6 md:px-10 xl:px-2 py-8">
                      <div className="border text-card-foreground shadow-none p-0 bg-[#F5F5F5] rounded-none border-none">
                        <div className="space-y-12 p-0">
                          <div id="lesson-0">
                            <div className="flex flex-col md:flex-row items-start md:items-center mb-8 gap-4 md:gap-0">
                              <div className="w-10 h-10 border flex items-center justify-center text-sm font-normal bg-[#65A30D] border-[#3F6212] text-white rounded-none mr-6">1.1</div>
                              <div className="flex-1 text-left md:text-center">
                                <h1 id="lu-8066cf39-293f-4807-9666-30dc9bdbffab-lesson-0-title" className="text-3xl font-bold text-black">Getting Started with OS</h1>
                              </div>
                              <button className="cursor-pointer whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground px-3 shadow-none w-3 h-6 justify-center border-dashed rounded-xl flex items-center gap-2 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" color="currentColor" className="h-4 w-4 text-gray-600">
                                  <path d="M5.0249 21C5.04385 19.2643 5.04366 17.5541 5.0366 15.9209M5.0366 15.9209C5.01301 10.4614 4.91276 5.86186 5.19475 4.04271C5.5611 1.67939 9.39301 3.82993 13.9703 5.59842L16.0328 6.48729C17.5508 7.1415 19.7187 8.30352 18.7662 9.66084C18.3738 10.22 17.56 10.8596 16.0575 11.567L5.0366 15.9209Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                                </svg>
                              </button>
                            </div>
                            <div className="mdx-content">
                              <div>
                                <p>Content placeholder</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
