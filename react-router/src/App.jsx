import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import People from "./pages/People";
import Path from "./pages/Paths";
import StartIt from "./pages/StartIt";
import NotFound from "./pages/NotFound";
import PersonDetail from "./pages/PersonDetail";
import Fagskole from "./pages/Fagskole";
import Login from "./pages/Login";
import PrivateRouter from "./pages/PrivateRouter";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="people" element={<People />}>
            <Route path=":id" element={<PrivateRouter />}>
              <Route path="" element={<PersonDetail />} />
            </Route>
          </Route>

          <Route path="/contact" element={<Contact />} />
          <Route path="/paths" element={<Path />}>
            <Route path="startIT" element={<StartIt />} />
            <Route path="fagskole" element={<Fagskole />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
