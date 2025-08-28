import { useState, useCallback, useEffect, useRef} from "react";

function App() {
  const [length, setLength] = useState(8);
  const [num, setNum] = useState(false);
  const [charAllowed, setChar] = useState(false);
  const [pass, setPass] = useState();


  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let passWord = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (num) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_-{}[]~`/";

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      passWord += str.charAt(char);
    }

    setPass(passWord);
  }, [length, num, charAllowed, setPass]);



  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 49)
    window.navigator.clipboard.writeText(pass)
  },[pass])



  useEffect(() => {
    passwordGenerator()
  },[length, num, charAllowed, passwordGenerator])





  return (
    <>
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-1/2 shadow-md rounded-lg px-6 py-4 my-8 text-white bg-gray-700">
          <h1 className="text-lg font-semibold mb-4">Password Generator</h1>
          <div className="flex items-center shadow mb-4 space-x-2">
            <input
              type="text"
              value={pass}
              className="outline-none w-full px-4 py-3 bg-gray-900 text-gray-300 rounded-lg"
              placeholder="password"
              readOnly
              ref={passwordRef}
            />
            <button className="px-6 py-3 text-base font-semibold rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            onClick={copyPasswordToClipboard}>
              Copy
            </button>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={6}
                max={50}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label>Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={num}
                id="numberInput"
                onChange={() => {
                  setNum((prev) => !prev);
                }}
              />
              <label>Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="numberInput"
                onChange={() => {
                  setChar((prev) => !prev);
                }}
              />
              <label>Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
