import { PlaceHolderImages } from "@/lib/placeholder-images";
import Comment, { CommentType } from "./Comment";

const commentsData: Omit<CommentType, 'avatarId' | 'avatarHint'>[] = [
  {
    id: 1,
    author: "Patrícia Gomes",
    date: "02/12/2025",
    text: "Gente, estou chocada com o resultado! Fiz ontem a noite só pra testar e levei hoje pro trabalho. Vendi TUDO em 20 minutos. A massa fica super úmida, não tem nada a ver com aqueles secos de mercado. Podem fazer sem medo!",
    likes: 12,
    dislikes: 0,
  },
  {
    id: 2,
    author: "Mariana Siqueira",
    date: "01/12/2025",
    text: "Alguém sabe me dizer se essa receita rende bem mesmo? Estou com pouco dinheiro pra investir nos ingredientes e queria saber se vale a pena.",
    likes: 2,
    dislikes: 0,
    replies: [
      {
        id: 101,
        author: "Carla Viana",
        date: "01/12/2025",
        text: "Mariana, pode fazer! Eu gastei uns 60 reais de material e fiz quase 250 em vendas. O segredo é a embalagem econômica que ele ensina no vídeo. Rende muito!",
        likes: 8,
        dislikes: 0,
      },
    ],
  },
  {
    id: 3,
    author: "Roberto Mendes",
    date: "30/11/2025",
    text: "Receita perfeita. Segui o passo a passo do vídeo e não tem erro. Uma dica pra quem vai fazer: usem o chocolate meio amargo na cobertura como ele fala, fica muito mais chique e não fica enjoativo. Sucesso total aqui em SP.",
    likes: 15,
    dislikes: 0,
  },
  {
    id: 4,
    author: "Fernanda Lins",
    date: "29/11/2025",
    text: "Maravilhoso!!! Meu marido estava desempregado e começamos a fazer juntos semana passada. Já temos encomenda até pro Ano Novo. Agradeço demais por ter encontrado esse vídeo.",
    likes: 34,
    dislikes: 0,
  },
  {
    id: 5,
    author: "Jéssica M.",
    date: "28/11/2025",
    text: "Eu sempre achava que panetone era difícil de fazer, que precisava daquela essência forte... mas essa técnica natural muda tudo. O cheiro invadiu a casa da vizinha e ela veio comprar kkkk amei!",
    likes: 5,
    dislikes: 0,
  },
  {
    id: 6,
    author: "Luiza Costa",
    date: "28/11/2025",
    text: "Fiz a versão no pote e ficou divino.",
    likes: 1,
    dislikes: 0,
  },
  {
    id: 7,
    author: "Sueli Antunes",
    date: "27/11/2025",
    text: "Meninas, uma dúvida... quanto tempo dura fora da geladeira? Quero vender na feira domingo.",
    likes: 0,
    dislikes: 0,
    replies: [
      {
        id: 102,
        author: "Ana Confeiteira",
        date: "27/11/2025",
        text: "Sueli, no vídeo ele explica sobre os conservantes naturais. O meu durou 5 dias super fofinho fora da geladeira, mas vendi tudo antes disso rsrs.",
        likes: 4,
        dislikes: 0,
      },
    ],
  },
  {
    id: 8,
    author: "Douglas Ferreira",
    date: "25/11/2025",
    text: "Melhor investimento que fiz. O pulo do gato é a calda que ele ensina pra molhar a massa, fica igualzinho aqueles de padaria cara. Recomendo.",
    likes: 9,
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
        <h2 className="text-xl font-bold mb-4">Comentários</h2>
        <div className="flex justify-between items-center mb-6 border-b pb-2">
            <p className="text-gray-600 text-sm">213 comentários</p>
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
