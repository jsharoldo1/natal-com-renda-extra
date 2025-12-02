import { PlaceHolderImages } from "@/lib/placeholder-images";
import Comment from "./Comment";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

const comments = [
  {
    id: 1,
    author: "Ana Silva",
    avatarId: "ana-silva-avatar",
    text: "Este curso transformou minha paixão por doces em um negócio lucrativo! As receitas são incríveis e fáceis de seguir. Já estou com a agenda lotada para o Natal!",
    time: "5m atrás",
    likes: 27,
  },
  {
    id: 2,
    author: "Carlos Pereira",
    avatarId: "carlos-pereira-avatar",
    text: "Nunca pensei que conseguiria fazer panetones tão perfeitos. O curso é super completo e o suporte é excelente. Recomendo de olhos fechados!",
    time: "15m atrás",
    likes: 42,
  },
  {
    id: 3,
    author: "Juliana Costa",
    avatarId: "juliana-costa-avatar",
    text: "Fiz o curso no ano passado e foi o melhor investimento! Minhas vendas de Natal triplicaram. As técnicas ensinadas são um diferencial enorme.",
    time: "30m atrás",
    likes: 68,
  },
  {
    id: 4,
    author: "Ricardo Mendes",
    avatarId: "ricardo-mendes-avatar",
    text: "Achei que era só mais um curso, mas me surpreendi. A didática é maravilhosa e as receitas são realmente únicas. Meus clientes amaram os novos doces!",
    time: "1h atrás",
    likes: 35,
  },
];

const CommentSection = () => {
  return (
    <div className="mt-8">
      <Card className="bg-white">
        <CardHeader>
          <div className="flex items-center gap-3">
             <MessageCircle className="w-7 h-7 text-primary" />
             <div>
                <CardTitle className="font-headline text-2xl">O Que Nossos Alunos Estão Dizendo</CardTitle>
                <CardDescription>Depoimentos reais de pessoas que transformaram suas vidas.</CardDescription>
             </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {comments.map((comment) => {
              const avatar = PlaceHolderImages.find(p => p.id === comment.avatarId);
              return (
                <Comment
                  key={comment.id}
                  author={comment.author}
                  avatarUrl={avatar?.imageUrl ?? ''}
                  avatarHint={avatar?.imageHint ?? ''}
                  text={comment.text}
                  time={comment.time}
                  initialLikes={comment.likes}
                />
              );
            })}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8 font-semibold p-4 bg-secondary rounded-lg">
            Os comentários foram encerrados. Vagas se esgotando!
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CommentSection;
