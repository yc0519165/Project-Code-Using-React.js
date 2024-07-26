import { createContext, useReducer } from "react"


export const PostListContext = createContext([])

const PostListReaducer = (currentPostList, action) =>{
  let newPostList = currentPostList
  if(action.type === 'DELETE_POST'){
    newPostList= currentPostList.filter((post) => post.id !== action.payload.postId)
  }else if (action.type === 'ADD_POST'){
    newPostList = [action.payload, ...currentPostList]
  }
  return newPostList
};

const PostListProvider = ({ children }) =>{

  const [postList, dispatchPostList] = useReducer(PostListReaducer, DEFAULT_LIST_POST )

  const addPost = (userId, title, postBody, reactions, tags) =>{
    dispatchPostList({
      type : 'ADD_POST',
      payload :{
        id : '4',
        title : title,
        body : postBody,
        reactions : reactions,
        userId : userId,
        tags : tags

      },
    })
  };
  const deletePost =(postId) =>{
    dispatchPostList({
      type : 'DELETE_POST',
      payload:{
        postId
      },
    })
  };

  return <PostListContext.Provider value={{postList, addPost, deletePost}}>{children}</PostListContext.Provider>
  
};

const DEFAULT_LIST_POST = [{
  id : '1',
  title : 'Ram Krisha Hari',
  body : 'Ok so say all of Hare Ram Hare Ram Ram Ram Hare Hare || Hare Krishna Hare Krishna Krishna Krishna Hare Hare...',
  reactions : '1B Views',
  userId : 'user-10',
  tags: ['RAM', 'KRISHNA', 'Hare']

},
{
  id : '2',
  title : 'Jay Ram Jay Ram',
  body : 'Ok so say all of Hare Ram Hare Ram Ram Ram Hare Hare || Hare Krishna Hare Krishna Krishna Krishna Hare Hare...',
  reactions : '1B Views',
  userId : 'user 12',
  tags: ['RAM', 'KRISHNA', 'Hare']

}
]


export default PostListProvider;