

const MessagePost = ({onPostBtn} ) =>{

  
  return(
    <>
    <h1 className="message">Create a new post here</h1>
    <button type="button" className="post-btn btn btn-outline-primary" onClick={onPostBtn}>Get Creat a post</button>
    </>
  )
}
export default MessagePost;