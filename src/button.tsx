import { useEffect, useRef } from "react";
import { Color, SuperButtonProps, URL } from "./types";

const buttonText = [
  "you click me",
  "you click me again",
  "you click me again more",
] as const;

let url: URL = "https://www.google.com";

// url = string ts: we dont have to define the type of the variable,
// its automatically inferred to string, but for testing we would do it

function convertCurrency(amount: number, currency: string): string {
  // return amount * 2 ts: the function returns type is a string so we need to return a string

  return `${amount} ${currency}`;
}

// convertCurrency(100, 400) ts: it would be an error to pass a number to a string

// ts: Destructuring props, way: 2

// export default function Button({
//   backgroundColor,
//   fontSize,
//   pillShape,
// }: {
//   backgroundColor: string;
//   fontSize: number;
//   pillShape: boolean;
// }) {

// ts: Destructuring props, way: 3
// const { backgroundColor } = props;

// writing css properties, way 1
// export default function Button({
//   backgroundColor,
//   fontSize,
//   pillShape,
//   textColor,
//   padding
// }: ButtonProps): JSX.Element {
//   return (
//     <button className="px-8 py-4 bg-blue-300 rounded-md text-white" style={{
//         backgroundColor: backgroundColor,
//         fontSize: fontSize,
//         borderRadius: pillShape ? "9999px" : "0px",
//         color: textColor,
//         padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
//     }}>
//       Click Me
//     </button>
//   );
// }

// writing css properties, way 2

// T is a generic type, which will be used to infer the type of the props and not hardcoded the type of the props
export default function Button<T>({
  style,
  borderRadius,
  onClick,
  children,
  count,
  setCount,
  type,
  ...props
}: SuperButtonProps<T>): JSX.Element {
  const ref = useRef<HTMLButtonElement>(null);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    onClick("test");
    setCount(count + 1);
  };

  //   const convertToArray = <T,>(value: T): T[] => {
  //    return [value]
  //   }

  function convertToArray<T>(value: T): T[] {
    return [value];
  }

  convertToArray("test");
  convertToArray(100);

  const color = localStorage.getItem("buttonColor") as Color;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data: unknown) => {
        
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <button
      ref={ref}
      onClick={(e) => handleClick(e)}
      className="px-8 py-4 bg-blue-300 rounded-md text-white"
      style={style}
    >
      {/* {buttonText.map((text) => {
        return <div key={text}>{text}</div>;
      })}  ts: using the variable as the readonly, and defining its types */}
      You&nbsp;{children}&nbsp;{count}&nbsp;times
    </button>
  );
}
