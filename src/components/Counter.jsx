import React from "react";
import { useState } from "react";

const Counter = () => {

    const [users, setUsers] = useState(0);

    const increment = () => {
        setUsers(users + 1);
   };

   const decrement = () => {
    setUsers(users - 1);
};

    return (
        <div>
            <h1> Считаем пользователей: {users}</h1>
            <button onClick={increment}>Увеличиваю счетчик</button>
            <button onClick={decrement}>Уменьшаю счетчик</button>
        </div>
    );
};

export default Counter;