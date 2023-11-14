import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
// import Hero from "./components/Hero";
// import Register from "./components/Auth/Register";
// import Login from "./components/Auth/Login";
// import ReduxPractice from "./pages/ReduxPractice";
// import Dashboard from "./pages/Dashboard";
// import { Provider } from "react-redux";
// import store from "./redux/store";
import store from "./redux/store";
import Rensponsive from "./pages/Rensponsive";
import Deployment from "./pages/Deployment";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Deployment />} />
            <Route path="/responsive" element={<Rensponsive />} />
            {/* <Hero /> */}
            {/* <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> */}
          </Routes>
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App;
