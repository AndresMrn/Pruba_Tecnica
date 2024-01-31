import { User } from ".";

export interface AuthContextProps {
    singUp: (values: User) => Promise<void>;
    user: User | null;
    authenticated: boolean
    singIn : (user : User) => Promise<void>
    loadData,
}
  