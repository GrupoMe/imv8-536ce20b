
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projetos from "./pages/Projetos";
import Blog from "./pages/Blog";
import Agenda from "./pages/Agenda";
import Clube from "./pages/Clube";
import QuemSomos from "./pages/QuemSomos";
import Comunidade from "./pages/Comunidade";
import Parceiros from "./pages/Parceiros";
import Contatos from "./pages/Contatos";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
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
                <Route path="/quem-somos" element={<QuemSomos />} />
                <Route path="/agenda" element={<Agenda />} />
                <Route path="/comunidade" element={<Comunidade />} />
                <Route path="/clube" element={<Clube />} />
                <Route path="/parceiros" element={<Parceiros />} />
                <Route path="/contatos" element={<Contatos />} />
                <Route path="/projetos" element={<Projetos />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/admin" element={<Admin />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
