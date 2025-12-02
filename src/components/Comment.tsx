"use client";

import { useState } from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";
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
  const [liked, setLiked] = useState<boolean | null>(null);
  const [likes, setLikes] = useState(initialLikes);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    if (liked === true) {
      setLikes(likes - 1);
      setLiked(null);
    } else {
      setLikes(likes + 1);
      if (liked === false) {
        setDislikes(dislikes - 1);
      }
      setLiked(true);
    }
  };

  const handleDislike = () => {
    if (liked === false) {
      setDislikes(dislikes - 1);
      setLiked(null);
    } else {
      setDislikes(dislikes + 1);
      if (liked === true) {
        setLikes(likes - 1);
      }
      setLiked(false);
    }
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
      <Avatar className="w-10 h-10 border rounded-full bg-gray-200">
        <AvatarImage src={avatarUrl} alt={author} data-ai-hint={avatarHint} className="rounded-full" />
        <AvatarFallback className="bg-primary/20 text-primary font-bold">{getInitials(author)}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="bg-transparent p-0">
          <p className="font-semibold text-gray-800 text-sm">{author}</p>
          <p className="text-sm text-gray-700 mt-1">{text}</p>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500 mt-2">
           <button onClick={handleLike} className="flex items-center gap-1.5 text-gray-500 hover:text-primary">
              <ThumbsUp className={cn("w-4 h-4", liked === true && "text-primary")} />
              <span className="font-medium">{likes}</span>
          </button>
          <button onClick={handleDislike} className="flex items-center gap-1.5 text-gray-500 hover:text-red-500">
              <ThumbsDown className={cn("w-4 h-4", liked === false && "text-red-500")} />
              <span className="font-medium">{dislikes}</span>
          </button>
          <span className="mx-1">·</span>
          <button className="font-semibold hover:underline">Responder</button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
