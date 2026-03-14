import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Card, CardContent } from "./components/ui/card";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
      
      <Card className="w-[400px] backdrop-blur-xl bg-white/40 shadow-2xl border border-white/30 rounded-2xl">
        <CardContent className="p-8 flex flex-col items-center gap-6">

          <h1 className="text-3xl font-bold">Counter</h1>

          <div className="text-4xl font-semibold">
            {count}
          </div>

          <div className="flex gap-4">
            <Button
              onClick={() => setCount(prev => prev + 1)}
              className="bg-blue-500 hover:bg-blue-600"
            >
              Increase
            </Button>

            <Button
              onClick={() => setCount(prev => Math.max(prev - 1, 0))}
              className="bg-blue-500 hover:bg-blue-600"
            >
              Decrease
            </Button>

            <Button
              onClick={() => setCount(0)}
              variant="destructive"
            >
              Reset
            </Button>
          </div>

          <div className="flex gap-3 w-full">
            <Input
              type="number"
              placeholder="Set counter..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />

            <Button
              onClick={() => {
                setCount(Math.max(Number(inputValue), 0));
                setInputValue("");
              }}
            >
              Set to {inputValue}
            </Button>
          </div>

        </CardContent>
      </Card>

    </div>
  );
}

export default App;