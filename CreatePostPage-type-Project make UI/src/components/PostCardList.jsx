import { useContext } from "react";
import PostCard from "./PostCard";
import MessagePost from "./MessagePost";
import { PostListContext } from "../store/social-media-context";

const PostCardList = ({ onPostBtn }) =>{


  const { postList } = useContext(PostListContext)
  console.log(postList)

  return(
    <>
    { postList.length === 0 && <MessagePost onPostBtn={onPostBtn} ></MessagePost>}
    {postList.map((post) =>(
      <PostCard key={post.id} post={post}></PostCard>
    ))};
    </>

  )
  
};
export default PostCardList;