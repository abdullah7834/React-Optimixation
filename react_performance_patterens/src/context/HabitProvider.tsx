import { Children, createContext, type ReactNode } from "react";

type Context = {
  name: string;
};

type HabitProviderProps = {
  children: ReactNode;
};
const HabitContext = createContext<null | Context>(null);
function HabitProvider({ children }: HabitProviderProps) {
  <HabitContext value={{ name: "key" }}>{children}</HabitContext>;
}

export default HabitProvider;
