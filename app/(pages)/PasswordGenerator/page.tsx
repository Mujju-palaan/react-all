"use client";
import { useState, useCallback, useEffect, useRef } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState<number>(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef<HTMLInputElement>(null);

  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (character) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * str.length);
      pass += str[index];
    }

    setPassword(pass);
  }, [length, number, character, setPassword]); // ⬅ removed setPassword (not needed)

  const copyPasswordToClipboard = useCallback(() => {
    const input = passwordRef.current;
    if (!input) return;

    input.select();
    input.setSelectionRange(0, 999); // optional

    navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passGenerator();
  }, [passGenerator]); // clean

  return (
    <div className="bg-black w-full h-screen text-white flex justify-center items-center">
      <div className="bg-gray-800 rounded p-6 w-1/2">
        <h1 className="font-bold text-3xl">Password Generator</h1>

        <div className="flex mt-6">
          <input
            className="bg-white rounded w-full h-8 text-black border-none"
            type="text"
            value={password} // ⬅ show password
            readOnly
            ref={passwordRef}
          />
          <button
            className="rounded bg-blue-600 px-2 cursor-pointer"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>

        <div className="m-4 flex gap-6">
          <div className="flex gap-2">
            <input
              type="range"
              min={8}
              max={50}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex gap-2">
            <input
              type="checkbox"
              onChange={() => setNumber((prev) => !prev)}
            />
            <label>Number</label>
          </div>

          <div className="flex gap-2">
            <input
              type="checkbox"
              onChange={() => setCharacter((prev) => !prev)}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
