
import styles from '@/styles/navbar_admin.module.css'
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import Img from '../../public/img/logo.svg'
import Img1 from '../../public/img/man.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUsers,faBell} from '@fortawesome/free-solid-svg-icons'


export default function Navbar_admin (){
    return(

        <div>
            <Navbar className={styles.nav}>
                    <Navbar.Brand href="#" className={styles.logo}>
                        <Image src={Img} alt="error"  width={30} />
                        <p className={styles.name_store}>store</p>
                    </Navbar.Brand>
                   
                    <Navbar.Brand href="#" className={styles.search}>
                        
                    </Navbar.Brand>
                    
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end align-items-center">
                        
                        <Navbar.Brand className={styles.items_nav1}> <FontAwesomeIcon icon={faUsers} title='الأعضاء' /> </Navbar.Brand>
                        <Navbar.Brand className={styles.items_nav2}> <FontAwesomeIcon icon={faBell} title='الإشعارات' /> </Navbar.Brand>
                        <Navbar.Brand className={styles.items_nav3}> <Image className={styles.items_nav3} src={Img1} alt="error"  width={35}/></Navbar.Brand>
            
                    </Navbar.Collapse>
            </Navbar>
        </div>
        
    )
}





