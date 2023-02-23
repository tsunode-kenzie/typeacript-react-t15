import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import { Input } from "./components/Input";
import { IUser, User } from "./components/User";

// string, number, boolean

export interface IPetRegister {
  name: string;
  type: "cachorro" | "gato";
  age: number;
}

export const App = () => {
  const { register, handleSubmit } = useForm<IPetRegister>();
  const [teste, setTeste] = useState('')
  const [users, setUsers] = useState<IUser[]>([
    {
      id: 1,
      name: "Tsunode",
      age: 24,
      email: "teste@mail.com",
      role: "admin",
    },
  ]);

  // const addUser = () => {
  //   setUsers([
  //     {
  //       name: "Tsunode",
  //       age: 24,
  //       email: "teste@mail.com",
  //       role: "admin",
  //     },
  //   ]);
  // };

  const registerPet = (data: IPetRegister) => {};

  return (
    <div className="App">
      <ul>
        {users.map((user) => (
          <User key={user.id} user={user} isAdmin={true} />
        ))}
      </ul>

      <form onSubmit={handleSubmit(registerPet)}>
        <Input label="Nome:" id="name" {...register("name")} />
        <input type="text"  />
        <input type="text" {...register("age")} />
        <input type="text" {...register("type")} />
      </form>
    </div>
  );
};
