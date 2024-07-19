import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { MainCanvas } from "./components/MainCanvas";

function App() {
  return (
    <Suspense>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainCanvas />
            </>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default App;
