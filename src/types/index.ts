import { ComponentPropsWithoutRef, Dispatch, SetStateAction } from "react";

export type User = {
  name: string;
  accId: string;
};

export type Guest = Omit<User, "accId">;

export type URL = string;

// ts: interface can only be used to write types of an object
// interface URL {
//     url: string
// }

// ts: Destructuring props, way: 1

export type Color = "red" | "green" | "blue";
type ButtonProps = {
  //   backgroundColor: Color;
  //   textColor: string;
  //   fontSize: number;
  //   pillShape?: boolean; //optional
  //   padding: [number, number, number, number];
  style: React.CSSProperties;
  borderRadius: Record<string, number>; // ts: an object with string as a key, and number as a value
  onClick: (test: string) => void;
  children: React.ReactNode;
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  type: ComponentPropsWithoutRef<"button">["type"];
};

// type SuperButtonProps = ButtonProps & {
//     variant: "primary" | "secondary"
// }

export interface SuperButtonProps<T> extends ButtonProps {
  variant: "primary" | "secondary";
  countValue: T;
  countHistory: T[];
}