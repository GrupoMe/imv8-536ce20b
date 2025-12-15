
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Institucional from "./pages/Institucional";
import Beneficios from "./pages/Beneficios";
import Formacoes from "./pages/Formacoes";
import Agenda from "./pages/Agenda";
import Comunidade from "./pages/Comunidade";
import Galeria from "./pages/Galeria";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import AdminAgenda from "./pages/AdminAgenda";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/institucional" element={<Institucional />} />
                  <Route path="/beneficios" element={<Beneficios />} />
                  <Route path="/formacoes" element={<Formacoes />} />
                  <Route path="/agenda" element={<Agenda />} />
                  <Route path="/comunidade" element={<Comunidade />} />
                  <Route path="/galeria" element={<Galeria />} />
                  <Route path="/admin" element={<Admin />} />
                  <Route path="/admin/agenda" element={<AdminAgenda />} />
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
