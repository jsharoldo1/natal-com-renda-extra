import { PlaceHolderImages } from "@/lib/placeholder-images";
import Comment, { CommentType } from "./Comment";

const commentsData: Omit<CommentType, 'avatarId' | 'avatarHint'>[] = [
  {
    id: 1,
    author: "Cláudia Martins",
    date: "02/12/2025",
    text: "Meninas, podem comprar sem medo! Eu sempre tive prejuízo porque não sabia cobrar. Só as tabelas de precificação que vêm no Guia já salvaram meu Natal. Já estou com R$ 2.800 de encomendas só pra semana que vem segui o passo a passo certinho.",
    likes: 42,
    dislikes: 0,
  },
  {
    id: 2,
    author: "Renata Soares",
    date: "01/12/2025",
    text: "Alguém sabe se serve pra quem nunca fez doce pra vender? Sou totalmente iniciante.",
    likes: 5,
    dislikes: 0,
    replies: [
      {
        id: 101,
        author: "Bia Confeitaria",
        date: "01/12/2025",
        text: "Renata, serve sim! O guia ensina do zero. Comecei semana passada fazendo os Bombomtones que ela ensina no vídeo e já vendi 30 unidades aqui no condomínio. É muito fácil.",
        likes: 18,
        dislikes: 0,
      },
    ],
  },
  {
    id: 3,
    author: "Juliana Paiva",
    date: "30/11/2025",
    text: "Gente, eu estava desconfiada com esse negócio de faturar 5 mil, mas o método funciona mesmo. O segredo está nas Taças Recheadas que o guia ensina, a margem de lucro é absurda! Obrigada por compartilhar esse material.",
    likes: 27,
    dislikes: 0,
  },
  {
    id: 4,
    author: "Marcos Paulo",
    date: "29/11/2025",
    text: "Comprei para minha esposa e estamos trabalhando juntos. A planilha de custos ajuda demais, a gente sabe exatamente quanto vai ganhar em cada venda. Já tiramos o valor do guia no primeiro dia de vendas.",
    likes: 15,
    dislikes: 0,
  },
  {
    id: 5,
    author: "Silvana Gomes",
    date: "28/11/2025",
    text: "Só uma palavra: GRATIDÃO! Esse Natal com Renda Extra mudou meu fim de ano. As receitas são econômicas mesmo e vendem rápido. Fiz os biscoitos decorados e não sobrou um pra contar história kkkk",
    likes: 9,
    dislikes: 0,
  },
  {
    id: 6,
    author: "Lúcia Ferraz",
    date: "28/11/2025",
    text: "Achei muito prático. Eu não tinha tempo de ficar calculando preço, e no guia já vem o preço sugerido. Foi só copiar e anunciar no Instagram. Recomendo!",
    likes: 11,
    dislikes: 0,
  },
];

const mapComments = (comments: Omit<CommentType, 'avatarId' | 'avatarHint'>[]): CommentType[] => {
  return comments.map(comment => {
    const avatar = PlaceHolderImages.find(p => p.id === `${comment.author.toLowerCase().replace(/[^a-z0-9]/g, '-')}-avatar`);
    const newComment: CommentType = {
      ...comment,
      avatarId: avatar?.imageUrl ?? '',
      avatarHint: avatar?.imageHint ?? '',
    };
    if (comment.replies) {
      newComment.replies = mapComments(comment.replies);
    }
    return newComment;
  });
};

const comments = mapComments(commentsData);

const CommentSection = () => {
  return (
    <div className="mt-12 border-t pt-8">
        <h2 className="text-xl font-bold mb-4">Comentários mais relevantes</h2>
        <div className="flex justify-between items-center mb-6 border-b pb-2">
            <p className="text-gray-600 text-sm">Mostrando 6 de 213 comentários</p>
            <div className="flex gap-4 text-sm">
                <button className="font-bold text-primary border-b-2 border-primary pb-1">Recentes</button>
                <button className="text-gray-500">Populares</button>
            </div>
        </div>
        <div className="space-y-8">
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
            />
          ))}
        </div>
    </div>
  );
};

export default CommentSection;
