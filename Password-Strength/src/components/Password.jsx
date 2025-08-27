import React, { useState } from "react";

const PasswordStrengthMeter = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("Weak");

  const hasNumber = (str) => /\d/.test(str);
  const hasAlphabet = (str) => /[a-zA-Z]/.test(str);
  const hasSpecialChar = (str) => /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(str);

  const checkStrength = (pass) => {
    let score = 0;
    if (hasNumber(pass)) score++;
    if (hasAlphabet(pass)) score++;
    if (hasSpecialChar(pass)) score++;

    if (pass.length >= 12 && score === 3) {
      setStrength("Superstrong");
    } else if (pass.length >= 8 && score >= 2) {
      setStrength("Strong");
    } else if (score >= 2) {
      setStrength("Good");
    } else {
      setStrength("Weak");
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    checkStrength(value);
  };

  // Tailwind color for strength
  const strengthColor = {
    Weak: "bg-red-500",
    Good: "bg-yellow-400",
    Strong: "bg-blue-500",
    Superstrong: "bg-green-500",
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Password Strength Meter</h2>

      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter password"
        className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <div className="w-full h-4 bg-gray-200 rounded mb-2">
        <div
          className={`h-4 rounded transition-all duration-300 ${strengthColor[strength]}`}
          style={{
            width:
              strength === "Weak"
                ? "25%"
                : strength === "Good"
                ? "50%"
                : strength === "Strong"
                ? "75%"
                : "100%",
          }}
        ></div>
      </div>

      <p className="text-center font-semibold">{strength}</p>
    </div>
  );
};

export default PasswordStrengthMeter;
