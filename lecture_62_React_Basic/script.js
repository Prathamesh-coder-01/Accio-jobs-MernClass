import { add ,subtract } from "./calculate.js";
import print from "./print.js";

print ("Addation" , add(2,3));
print ("subtraction" , subtract(12,3));

axios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then((result) => {
    console.log(result.data);
  });

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}


export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
