import Styles from './Display.module.css';

const Display = ({screen}) =>{
  return(
    <input className={Styles.search} type="text" placeholder='Search your cites' onKeyDown={screen} />
  )
}
export default Display