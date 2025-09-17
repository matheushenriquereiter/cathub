"use client";
import { useState, useEffect } from "react";

export default function Requests() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = async event => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "An unknown error occurred");
      }

      console.log("Criado com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={createUser}>
        <input
          name="username"
          type="text"
          placeholder="username"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />

        <input
          name="email"
          type="text"
          placeholder="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <input
          name="password"
          type="password"
          placeholder="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
