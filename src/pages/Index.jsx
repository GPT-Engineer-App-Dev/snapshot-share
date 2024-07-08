import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2 } from "lucide-react";

const Index = () => {
  const posts = [
    {
      id: 1,
      username: "john_doe",
      avatar: "/placeholder.svg",
      photo: "/placeholder.svg",
      caption: "A beautiful sunset!",
    },
    {
      id: 2,
      username: "jane_smith",
      avatar: "/placeholder.svg",
      photo: "/placeholder.svg",
      caption: "Enjoying the beach.",
    },
  ];

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Card key={post.id} className="mx-auto max-w-md">
          <CardHeader className="flex items-center space-x-4">
            <Avatar src={post.avatar} alt={`${post.username}'s avatar`} className="w-10 h-10" />
            <CardTitle>{post.username}</CardTitle>
          </CardHeader>
          <CardContent>
            <img src={post.photo} alt="Post" className="mx-auto object-cover w-full h-[400px]" />
            <p className="mt-2">{post.caption}</p>
            <div className="flex justify-around mt-4">
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <MessageCircle className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Index;