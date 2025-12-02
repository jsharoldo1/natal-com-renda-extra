import { PlaceHolderImages } from "@/lib/placeholder-images";
import Comment from "./Comment";

const comments = [
  {
    id: 1,
    author: "Michael Turner",
    avatarId: "michael-turner-avatar",
    text: "I always thought the 'law of attraction' was nonsense, but I was so desperate with debt that I decided to give it a try. Two days after hearing this chant, an old client who hadn't called me in years closed a $48,000 contract. I can't explain it, I just know it works. Thank you, Daniel.",
    time: "5m",
    likes: 12,
  },
  {
    id: 2,
    author: "Jennifer Adams",
    avatarId: "jennifer-adams-avatar",
    text: "I came here for the money, but what happened was an even bigger miracle. My severe arthritis in my knees, which had tormented me for 6 years, simply disappeared. For the first time in years, I walked up the stairs without pain. It seems this frequency heals the body and soul.",
    time: "15m",
    likes: 28,
  },
  {
    id: 3,
    author: "Linda Roberts",
    avatarId: "linda-roberts-avatar",
    text: "Folks, this is real. My boss was going to fire me. The same week I started listening to the 60-word chant, the company received an unexpected investment. Instead of being fired, I was promoted with a raise! My faith has been restored.",
    time: "30m",
    likes: 41,
  },
  {
    id: 4,
    author: "David Johnson",
    avatarId: "david-johnson-avatar",
    text: "I was the biggest skeptic. Pure coincidence, I thought. Three days of listening to this, I met an investor at the airport by chance. He worked in my field and we closed a project that changed my life. I don't believe in coincidences anymore. There is something powerful here.",
    time: "1h",
    likes: 19,
  },
  {
    id: 5,
    author: "Maria S.",
    avatarId: "maria-s-avatar",
    text: "We were about to lose our house. Daniel's story in the presentation sounded like ours. We decided to take a chance. A month later, my husband received a tax refund we didn't even know existed, and it covered all our overdue debts. We are crying with relief. Don't ignore this message, it is an answer to your prayers.",
    time: "2h",
    likes: 56,
  },
    {
    id: 6,
    author: "Margy Peet",
    avatarId: "margy-peet-avatar",
    text: "I thought this was a scam, but it actually made my outlook on life so much better? Incredible, thank you my Jesus!!!",
    time: "47m",
    likes: 9,
  },
  {
    id: 7,
    author: "Michael Miller",
    avatarId: "michael-miller-avatar",
    text: "I tried this 'chanting' trick everyone is talking about, and it's working for my mom's finances! I'm going to recommend it to all my friends and family.",
    time: "1h",
    likes: 10,
  },
  {
    id: 8,
    author: "Jen McConnell",
    avatarId: "jen-mcconnell-avatar",
    text: "@LisaKernan, this is what I was telling you about, it worked for my dad. He seems so much happier and opportunities are just flowing to him.",
    time: "1h",
    likes: 4,
  }
];

const CommentSection = () => {
  return (
    <div className="mt-8">
        <div className="text-sm text-gray-600 mb-4 font-semibold">Showing 16 of 552 comments</div>
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
        <p className="text-center text-sm text-muted-foreground mt-8 font-semibold p-4 rounded-lg">
            This post no longer receives comments!
        </p>
    </div>
  );
};

export default CommentSection;
