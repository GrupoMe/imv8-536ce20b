import React from "react";
import { Clock, Users, Star, ArrowRight, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface CursoFormation {
  id: number;
  title: string;
  category: string;
  duration: string;
  participants: number;
  rating: number;
  price: string;
  description: string;
  modules: string[];
  checkout_link: string;
}

interface CursoModalProps {
  curso: CursoFormation | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CursoModal = ({ curso, open, onOpenChange }: CursoModalProps) => {
  if (!curso) return null;

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      curso: "bg-blue-500/20 text-blue-600",
      programa: "bg-green-500/20 text-green-600",
    };
    return colors[category] || "bg-gray-500/20 text-gray-600";
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <Badge className={getCategoryColor(curso.category)}>
              {curso.category.charAt(0).toUpperCase() + curso.category.slice(1)}
            </Badge>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-brand-yellow fill-brand-yellow" />
              <span className="text-sm font-medium">{curso.rating}</span>
            </div>
          </div>
          <DialogTitle className="text-2xl text-primary-900">{curso.title}</DialogTitle>
          <DialogDescription className="text-base text-primary-700 mt-2">
            {curso.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          <div className="flex flex-wrap gap-6 text-sm text-primary-600">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-brand-primary" />
              <span>{curso.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-brand-primary" />
              <span>{curso.participants} alunas</span>
            </div>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-primary-900 mb-3">
              <BookOpen className="w-5 h-5 text-brand-primary" />
              Conteúdo do Curso
            </h3>
            <ul className="space-y-2">
              {curso.modules.map((module, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-primary-700 bg-primary-50 rounded-lg px-4 py-2"
                >
                  <span className="font-semibold text-brand-primary min-w-[28px]">
                    {String(idx + 1).padStart(2, "0")}.
                  </span>
                  {module}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-primary-200">
            <span className="text-3xl font-bold text-brand-yellow">{curso.price}</span>
            <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-dark">
              <a href={curso.checkout_link} target="_blank" rel="noopener noreferrer">
                Inscrever-se <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CursoModal;
