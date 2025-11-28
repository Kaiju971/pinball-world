// import React, { lazy, Suspense, useState, useEffect } from "react";
// import { Routes as Router, Route, Navigate } from "react-router-dom"; // ← IMPORTANT
// import { Routes } from "./routes";

// const Intro = lazy(() => import("../intro"));
// const Accueil = lazy(() => import("../accueil"));
// const Pinball = lazy(() => import("../pinball/GameContainer"));

// export const AppRoutes: React.FC = () => {
//   const [introSeen, setIntroSeen] = useState(false);

//   useEffect(() => {
//     const status = localStorage.getItem("introSeen");
//     if (status === "true") setIntroSeen(true);
//   }, []);

//   const handleIntroComplete = () => {
//     setIntroSeen(true);
//     localStorage.setItem("introSeen", "true");
//   };

//   return (
//     <Suspense fallback={<div>Chargement...</div>}>
//       <Router>
//         <Route
//           path="/"
//           element={
//             introSeen ? (
//               <Navigate to={Routes.accueil} replace />
//             ) : (
//               <Navigate to={Routes.intro} replace />
//             )
//           }
//         />

//         <Route
//           path={Routes.intro}
//           element={<Intro onComplete={handleIntroComplete} />}
//         />

//         <Route path={Routes.accueil} element={<Accueil />} />

//         <Route path={Routes.pinball} element={<Pinball />} />
//       </Router>
//     </Suspense>
//   );
// };


// src/app/AppRoutes.tsx
import React, { lazy, Suspense, useState } from "react";
import { Routes as Router, Route, Navigate } from "react-router-dom";
import { Routes } from "./routes";

const Intro = lazy(() => import("../intro/Intro"));
const Accueil = lazy(() => import("../accueil"));
const Pinball = lazy(() => import("../pinball/GameContainer"));

export const AppRoutes: React.FC = () => {
  // Toujours false pour forcer l'intro
  const [introSeen, setIntroSeen] = useState(false);

  const handleIntroComplete = () => {
    setIntroSeen(true);
    localStorage.setItem("introSeen", "true"); // optionnel
  };

  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <Router>
        {/* Page racine : si introSeen false → Intro, sinon accueil */}
        <Route
          path="/"
          element={
            introSeen ? (
              <Navigate to={Routes.accueil} replace />
            ) : (
              <Navigate to={Routes.intro} replace />
            )
          }
        />

        {/* Intro */}
        <Route
          path={Routes.intro}
          element={<Intro onComplete={handleIntroComplete} />}
        />

        {/* Page accueil */}
        <Route path={Routes.accueil} element={<Accueil />} />

        {/* Pinball */}
        <Route path={Routes.pinball} element={<Pinball />} />
      </Router>
    </Suspense>
  );
};
