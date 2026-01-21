
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const success = await login(formData.email, formData.password);
      if (success) {
        toast({
          title: "Login realizado com sucesso!",
          description: "Bem-vinda de volta!",
        });
        navigate('/admin');
      } else {
        toast({
          title: "Erro no login",
          description: "Email ou senha incorretos.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Erro no login",
        description: "Ocorreu um erro inesperado.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-primary flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <img 
            src="/lovable-uploads/abec6e81-764b-405a-8047-9926aaef0f4e.png" 
            alt="Instituto Mulheres V8"
            className="h-16 w-auto mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold text-white mb-2">
            Bem-vinda de volta!
          </h1>
          <p className="text-gray-100">
            Acesse sua conta e continue acelerando sua carreira.
          </p>
          <div className="mt-4 p-4 bg-white/10 rounded-lg">
            <p className="text-sm text-white/90 mb-2">Dados para teste:</p>
            <p className="text-xs text-white/80">Email: admin@mulheresv8.com</p>
            <p className="text-xs text-white/80">Senha: admin123</p>
          </div>
        </div>

        <Card className="shadow-2xl border-0">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl text-brand-primary">
              Fazer Login
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="seu@email.com"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Senha
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    placeholder="Sua senha"
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-brand-primary hover:bg-brand-dark text-white font-medium"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? 'Entrando...' : 'Entrar'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>

            <div className="text-center mt-8">
              <Link to="/" className="text-brand-primary hover:underline">
                ← Voltar para o site
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
