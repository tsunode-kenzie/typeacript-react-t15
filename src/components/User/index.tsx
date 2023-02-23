export interface IUser {
  id: number;
  name: string;
  email: string;
  age: number;
  nickname?: string;
  role: "admin" | "user" | "manager";
}

interface IUserProps {
  user: IUser;
  isAdmin: boolean;
}

export const User = ({ user }: IUserProps) => {
  return (
    <li>
      {user.name} - {user.role}
    </li>
  );
};
