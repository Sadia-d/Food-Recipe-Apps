
import { createBrowserRouter } from "react-router";
import Rootlayout from "./Rootlayout";
import Categories from "./Categories";
import MealDetails from "./MealDetails";
import Home from "./Home";

 export const router =createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout></Rootlayout>,
    children:[
        {
        path:'/',
        element:<Home></Home>,
        loader : ()=> fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
      },
      {
        path:'/category',
        element:<Categories></Categories>,
      },
      {
        path:'/details',
        element:<MealDetails></MealDetails>,
      },
    ]
  },
]);

