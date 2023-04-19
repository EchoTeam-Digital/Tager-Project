


import styles from '@/styles/nav_add_product.module.css'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faSearch} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';





export default function Nav_add_product (){
    return(

        <div>
            <Navbar expand="lg"  className={styles.page_product} >
                <div className={styles.div_input_search_product}>
                    <FontAwesomeIcon className={styles.icon_search} icon={faSearch} />

                        <form className={styles.form_search}>
                            <div>                                   
                                <input className={styles.input_search_product} type='search' placeholder='بحث عن منتج'/>
                            </div>
                        </form>
                </div>

                <div  className={styles.add}>
                    <Link href='/dashboard/products/add_products'>
                        <Button  className={styles.add_montog} >
                            <FontAwesomeIcon icon={faPlus} /> إضافه منتج   
                        </Button>
                    </Link>
                </div>        
            </Navbar>
        </div>
       

    )
}





