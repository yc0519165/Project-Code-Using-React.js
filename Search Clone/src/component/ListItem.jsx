import styles from './ListItem.module.css'

const ListItem = ({cites, select, onButton}) =>{

  return(
<li key={cites} className={`${styles.list} list-group-item  ${select && 'active'} `}> {cites}
  <button type="button" className={`${styles.btn} btn btn-primary`} onClick={onButton}>Select</button></li>
)
}
export default ListItem