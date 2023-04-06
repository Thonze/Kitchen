import styles from '../../styles/Ninjas.module.css'
import Link from 'next/dist/client/link';

const Menu = () => {
    return ( 
        < >
        <h3 className={styles.title}>Make an Order</h3>
        <ul>
            <li>Rice + Beans + <select><option>meat</option><option>fish</option><option>None</option></select> <Link href="/ninjas/order/"><a className={styles.order}>Order Now &#8594;</a></Link></li>
            <li >Pounded Yam +<select><option>okro soup</option><option>eguisi soup</option></select>+ <select><option>meat</option><option>meat</option><option>None</option></select> <Link href="/ninjas/order/"><a className={styles.order}>Order Now &#8594;</a></Link></li>
            <li>Yam porridge<Link href="/ninjas/order/"><a className={styles.order}>Order Now &#8594;</a></Link></li>
            <li>Beans porridge <Link href="/ninjas/order/"><a className={styles.order}>Order Now &#8594;</a></Link></li>
            <li>Noodles and egg <Link href="/ninjas/order/"><a className={styles.order}>Order Now &#8594;</a></Link></li>
        </ul>
        </   >

     );
}
 
export default Menu;