import styles from './Message.module.css'
const Message = ({city}) =>{
 
  return(
    city.length === 0 && <h4 className={styles.message} >Select Your City and Enter</h4>

  )
}
export default Message