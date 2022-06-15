import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Headers from "./components/Headers";
import ProtectedRoute from "./components/ProtectedRoute";
import RowContainer from "./components/RowContainer";
import CreateItems from "./components/CreateItems";
import { AnimatePresence } from "framer-motion";

import { useStateValue } from "./context/stateProvision";
import { getFoodItems } from "./utils/firebaseFunction";
import { useEffect } from "react";
import { actionType } from "./context/reducer";
import MainContainer from "./components/MainContainer";

const App = () => {
  const [{ foodItems }, dispatch] = useStateValue();
  const fetchdata = async () => {
    await getFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchdata();
  }, []);



  
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col">
        <Headers />

        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route
              path="/main"
              element={
                <ProtectedRoute>
                  <MainContainer/>
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Login />} />
            <Route
              path="/create"
              element={
                <ProtectedRoute>
                  <CreateItems />
                </ProtectedRoute>
              }
            />
            <Route
              path="/container"
              element={
                <ProtectedRoute>
                  <RowContainer />
                </ProtectedRoute>
              }
            />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
