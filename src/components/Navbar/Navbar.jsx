import classes from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'


const Navbar = (props)=>{
    return(
        <header className={classes.header}>
        <h4>Barberia Don Jose</h4>
        <nav>
        <a className={`${classes.link} btn btn-primary`}>{props.texto1}</a>
        <a  className={`${classes.link} btn btn-primary`} >{props.texto2}</a>
        <a  className={`${classes.link} btn btn-primary`}>{props.texto3}</a>
        </nav>

        
        <CartWidget/>

        </header>
    )
}

export default Navbar