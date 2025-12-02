import { PlaceHolderImages } from "@/lib/placeholder-images";
import Comment from "./Comment";

const comments = [
  {
    id: 1,
    author: "MariaDosBolos",
    avatarId: "maria-dos-bolos-avatar",
    text: "Gente, eu achava que era difícil, mas segui o passo a passo do vídeo e vendi 10 unidades só hoje de manhã no grupo do condomínio! O Natal tá salvo!",
    time: "5m",
    likes: 12,
  },
  {
    id: 2,
    author: "ChefCarla",
    avatarId: "chef-carla-avatar",
    text: "Já trabalho com confeitaria há 5 anos e nunca tinha visto essa técnica de precificação que ele ensina. Só com a dica da embalagem eu já paguei o curso.",
    time: "15m",
    likes: 28,
  },
  {
    id: 3,
    author: "JaqueViana",
    avatarId: "jaque-viana-avatar",
    text: "Fiz ontem pra testar. O cheiro invadiu a casa e o vizinho veio comprar antes de eu oferecer kkkk. Muito bom!",
    time: "30m",
    likes: 41,
  }
];

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
        <div className="space-y-6">
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
    </div>
  );
};

export default CommentSection;
