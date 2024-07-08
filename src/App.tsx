import { useState } from "react";
import Button from "./button";
import { User } from "./types";





function App() {
  const [count, setCount] = useState<number>(0);
  const [user, setUser] = useState<User | null>({ name: "Andra", accId: "1234" });

  console.log('hello', user?.name)



  const handleClick = (test: string) => {
    console.log(test);
  };

  return (
    <>
      <div className="min-h-screen w-full flex justify-center items-center">
        <Button
        countValue={'5'}
        countHistory={['1', '2', '3', '4', '5']}
        variant="primary"
        type="submit"
          count={count}
          setCount={setCount}
          borderRadius={{
            topLeft: 10,
            topRight: 20,
            bottomLeft: 30,
            bottomRight: 40,
          }}
          onClick={handleClick}
          style={{
            backgroundColor: "cyan",
            fontSize: 20,
            padding: "10px 20px 30px 20px",
            color: "white",
          }}
        >
          Click Me
        </Button>
      </div>
    </>
  );
}

export default App;
