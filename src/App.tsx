
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Institucional from "./pages/Institucional";
import Cursos from "./pages/Cursos";
import Mentorias from "./pages/Mentorias";
import Agenda from "./pages/Agenda";
import Comunidade from "./pages/Comunidade";
import Galeria from "./pages/Galeria";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import AdminAgenda from "./pages/AdminAgenda";
import AdminGaleria from "./pages/AdminGaleria";
import AdminCursos from "./pages/AdminCursos";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/institucional" element={<Institucional />} />
                  <Route path="/cursos" element={<Cursos />} />
                  <Route path="/mentorias" element={<Mentorias />} />
                  <Route path="/agenda" element={<Agenda />} />
                  <Route path="/comunidade" element={<Comunidade />} />
                  <Route path="/galeria" element={<Galeria />} />
                  <Route path="/admin" element={<Admin />} />
                  <Route path="/admin/agenda" element={<AdminAgenda />} />
                  <Route path="/admin/galeria" element={<AdminGaleria />} />
                  <Route path="/admin/cursos" element={<AdminCursos />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Layout>
            } />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
