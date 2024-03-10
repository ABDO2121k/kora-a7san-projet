import { Button } from "@mui/material";

const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>{" "}
      <Button  className="group relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
        Contained
      </Button>
      <Button sx={{backgroundColor:'red',color:'white'}}>hello2</Button>
      <button style={{background:'red'}} className="bg-red-900">hello</button>
    </div>
  );
};

export default App;
