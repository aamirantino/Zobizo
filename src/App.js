import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Calendar from "./pages/Calendar/Calendar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Job from "./pages/Jobs/Job";
import OpenJobs from "./pages/Jobs/OpenJobs/Openjobs"
import AcceptedJobs from "./pages/Jobs/AcceptedJobs/Acceptedjobs"

import Layout from "./pages/Layout/Layout";
import Reports from "./pages/Reports/Reports";
import ShiftLogs from "./pages/ShiftLogs/ShiftLogs";
import User from "./pages/Users/User";
const route=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
     {
      path:"/",
      element:<Dashboard/>
     },
     {
      path:"/jobs",
      children:[
        {
          path:"/jobs",
          element:<OpenJobs/>,

        },
        {
          path:"/jobs/accepted_jobs",
          element:<AcceptedJobs/>,

        }, {
          path:"/jobs/ongoing_jobs",
          element:<Job/>,

        }, {
          path:"/jobs/open_jobs",
          element:<Job/>,

        },
        {
          path:"/jobs/Cancelled_jobs",
          element:<Job/>,

        },
        {
          path:"/jobs/shift_logs",
          element:<Job/>,

        },
        {
          path:"/jobs/reports",
          element:<Job/>,

        }
      ]
     },
     {
      path:"/shift-logs",
      element:<ShiftLogs/>
     },
     {
      path:"/calendar",
      element:<Calendar/>
     },
     {
      path:"/users",
      element:<User/>
     },
     {
      path:"/reports",
      element:<Reports/>
     }

    ]
  },
  {
    // path:"/login",
    // element:<Login/>
  },
  {
    // path:"/register",
    // element:<Register/>
  }
])

function App() {
  return (
      <>
    <RouterProvider router={route}/>
    </>
    
  );
}

export default App;
