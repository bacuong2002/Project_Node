import { BrowserRouter, Routes, Route } from "react-router-dom";

import { routes } from "@router/router.routes";
import { MainLayout } from "@components/layout";
import { NotFoundPage } from "@pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          // eslint-disable-next-line react/jsx-key
          <Route
            path={route.path}
            element={<MainLayout>{route.element}</MainLayout>}
          />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
