import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import './App.css'
import React from 'react'
import Home from "./Pages/Home";

function App() {
  const queryClient = new QueryClient()
  return (
    <>
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </React.StrictMode>


    </>
  )
}

export default App
