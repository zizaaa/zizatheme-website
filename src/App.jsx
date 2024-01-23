
function App() {


  return (
    <main className="bg-[#1d2433] h-screen overflow-auto">
      <section className="flex flex-col items-center gap-10 py-10">
        <div className="flex flex-col items-center gap-10">
          <h1 className="text-4xl font-semibold text-[#ffae57]">
            Ziza theme
          </h1>
          <p className="text-[#8695b7] font-thin text-xl text-center">
            A minimal dark blue theme for VS code.
          </p>
        </div>

        <div className="w-[90%] rounded-lg drop-shadow-lg">
          <img src="/pic.jpg" className="object-cover drop-shadow-lg rounded-lg"/>
        </div>

      <div className="flex flex-col items-center p-2 gap-5">
        <a 
          href="https://marketplace.visualstudio.com/items?itemName=ziza.ziza-dark-theme" 
          className="bg-[#ffae57] text-white px-5 py-2 rounded-md flex items-center gap-2"
        >
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" 
            className="h-5 w-5"
          />
            Download
        </a>

          <span className="text-white">or</span>

        <div className="flex flex-col items-center text-[#8695b7] font-sans">
          <h1 className="font-medium text-white text-lg">Install via VS Code</h1>
            <ul className="flex flex-col gap-2 items-center mt-2 text-center">
              <li className="flex items-center gap-2">
              <span>&#8226;</span>
                Open Extensions sidebar panel in VS Code. View → Extensions
              </li>
              <li className="flex items-center gap-2">
                <span>&#8226;</span>
                Search for <span className="bg-[#2f3b54] px-2">Ziza theme</span>
              </li>
              <li className="flex items-center gap-2">
                <span>&#8226;</span>
                Click Install to install it
              </li>
              <li className="flex items-center gap-2">
                <span>&#8226;</span>
                Click Reload to reload the editor
              </li>
              <li className="flex items-center gap-2">
                <span>&#8226;</span>
                Code {'>'} Preferences {'>'} Color Theme {'>'} <span className="bg-[#2f3b54] px-2">ziza theme</span>
              </li>
            </ul>
        </div>
      </div>

      <div className="flex flex-col items-center p-2 my-10">
        <h1 className="text-2xl text-white ">Color Palletes</h1>
        <div className="flex flex-wrap gap-5 mt-5">
          <div className="bg-[#171c28] h-10 w-10 drop-shadow-md rounded-full"></div>
          <div className="bg-[#27305e] h-10 w-10 drop-shadow-md rounded-full"></div>
          <div className="bg-[#2f3b54] h-10 w-10 drop-shadow-md rounded-full"></div>
          <div className="bg-[#3C7BA5f0] h-10 w-10 drop-shadow-md rounded-full"></div>
          <div className="bg-[#5ccfe6ef] h-10 w-10 drop-shadow-md rounded-full"></div>
          <div className="bg-[#c3a6ff] h-10 w-10 drop-shadow-md rounded-full"></div>
          <div className="bg-[#F78C6C] h-10 w-10 drop-shadow-md rounded-full"></div>
          <div className="bg-[#bae67e] h-10 w-10 drop-shadow-md rounded-full"></div>
          <div className="bg-[#d7dce2] h-10 w-10 drop-shadow-md rounded-full"></div>
        </div>
      </div>

      <a href="#" className="bg-[#2f3b54] mt-10 px-5 py-2 rounded-sm">
        <h1 className="text-white text-sm font-thin">Made by ziza</h1>
      </a>
      </section>
    </main>
  )
}

export default App
