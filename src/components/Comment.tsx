"use client";

import { useState } from "react";
import { ThumbsUp } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

type CommentProps = {
  author: string;
  avatarUrl: string;
  avatarHint: string;
  text: string;
  time: string;
  initialLikes: number;
};

const Comment = ({ author, avatarUrl, avatarHint, text, time, initialLikes }: CommentProps) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  const getInitials = (name: string) => {
    const names = name.split(' ');
    if (names.length > 1) {
      return `${names[0][0]}${names[names.length - 1][0]}`;
    }
    return name.substring(0, 2);
  }

  return (
    <div className="flex items-start gap-3 sm:gap-4">
      <Avatar className="w-10 h-10 border">
        <AvatarImage src={avatarUrl} alt={author} data-ai-hint={avatarHint} />
        <AvatarFallback>{getInitials(author)}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="bg-secondary p-3 rounded-xl rounded-tl-sm">
          <p className="font-semibold text-secondary-foreground text-sm">{author}</p>
          <p className="text-sm text-secondary-foreground/90">{text}</p>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1 px-2">
          <button onClick={handleLike} className={cn("font-semibold hover:underline", liked && "text-primary")}>
            Curtir
          </button>
          <span>·</span>
          <button className="font-semibold hover:underline">Responder</button>
          <span>·</span>
          <span>{time}</span>
          <div className="ml-auto flex items-center gap-1.5">
            <ThumbsUp className={cn("w-4 h-4", liked ? "text-primary fill-primary/20" : "text-muted-foreground")} />
            <span className="font-medium">{likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
