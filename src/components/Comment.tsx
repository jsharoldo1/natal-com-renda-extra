"use client";

import { useState } from "react";
import { ThumbsUp, ThumbsDown, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export type CommentType = {
  id: number;
  author: string;
  avatarId: string;
  avatarHint?: string;
  date: string;
  text: string;
  likes: number;
  dislikes: number;
  replies?: CommentType[];
};

type CommentProps = {
  comment: CommentType;
};

const Comment = ({ comment }: CommentProps) => {
  const [liked, setLiked] = useState<boolean | null>(null);
  const [likes, setLikes] = useState(comment.likes);
  const [dislikes, setDislikes] = useState(comment.dislikes);

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
    return name.substring(0, 1);
  }

  return (
    <div className="flex items-start gap-3">
      <Avatar className="w-10 h-10 border bg-gray-200 rounded-full">
        <AvatarImage src={comment.avatarId} alt={comment.author} data-ai-hint={comment.avatarHint} className="rounded-full" />
        <AvatarFallback className="bg-primary/20 text-primary font-bold">{getInitials(comment.author)}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <p className="font-semibold text-gray-800 text-sm">{comment.author}</p>
          <p className="text-xs text-gray-500">{comment.date}</p>
          <button className="text-xs text-gray-400 hover:underline">Reportar</button>
        </div>
        <p className="text-sm text-gray-700 mt-1">{comment.text}</p>
        <div className="flex items-center gap-4 text-xs text-gray-500 mt-2">
           <div className="flex items-center gap-2">
            <button onClick={handleLike} className="flex items-center gap-1.5 text-gray-500 hover:text-primary">
                <ThumbsUp className={cn("w-4 h-4", liked === true && "text-primary")} />
            </button>
            <span className="font-medium text-gray-600">{likes}</span>
            <button onClick={handleDislike} className="flex items-center gap-1.5 text-gray-500 hover:text-red-500">
                <ThumbsDown className={cn("w-4 h-4", liked === false && "text-red-500")} />
            </button>
            <span className="font-medium text-gray-600">{dislikes}</span>
           </div>
          <button className="font-semibold text-primary hover:underline">Responder</button>
        </div>
        {comment.replies && comment.replies.length > 0 && (
          <div className="mt-3 ml-4 pl-4 border-l-2">
            {comment.replies.map(reply => <Comment key={reply.id} comment={reply} />)}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
