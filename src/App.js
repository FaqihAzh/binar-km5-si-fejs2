import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import Hero from "./components/Hero";
// import Register from "./components/Auth/Register";
// import Login from "./components/Auth/Login";
import { Route, Routes } from "react-router-dom";
import ReduxPractice from "./pages/ReduxPractice";
import { Provider } from "react-redux";
import store from "./redux/store";
// import Dashboard from "./pages/Dashboard";
// import { Provider } from "react-redux";
// import store from "./redux/store";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<ReduxPractice />} />
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
