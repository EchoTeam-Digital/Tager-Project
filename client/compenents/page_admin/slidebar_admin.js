
import styles from '@/styles/slidebar_admin.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers,faLock,faGear,faCircleUser,faHandshakeAngle,faPause,faCoins  } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';


export default function Slidebar_admin (){
    return(

    
        <div className={styles.slidebar_father}>

            <div className={styles.slidebar}> 

                <Link className={styles.items_slide} href='/dashboard'> 
                    <div className={styles.div_items_slide}>

                        <FontAwesomeIcon icon={faUsers} className={styles.item_icon} /> 

                        <Dropdown as={ButtonGroup} className={styles.drobdown_impru} >
                            <Button className={styles.bottom_impru}>التقارير</Button>
                            <Dropdown.Toggle split className={styles.bottom_toogle} />

                            <Dropdown.Menu className={styles.drob_menu} >
                                <Dropdown.Item className={styles.drob_menu_coohse} href="#/action-1">
                                    <FontAwesomeIcon icon={faCoins} className={styles.item_icon} /> 
                                     الأرباح
                                </Dropdown.Item>
                                <Dropdown.Item className={styles.drob_menu_coohse} href="#/action-2">
                                    <FontAwesomeIcon icon={faUsers} className={styles.item_icon} />
                                    المسوقين
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    </div>
                </Link>

                <Link className={styles.items_slide} href='#'> 
                    <div className={styles.div_items_slide}>

                        <FontAwesomeIcon icon={faUsers} className={styles.item_icon} /> 

                        <Dropdown as={ButtonGroup} className={styles.drobdown_impru} >
                            <Button className={styles.bottom_impru}>الموظفين</Button>
                            <Dropdown.Toggle split className={styles.bottom_toogle} />

                            <Dropdown.Menu className={styles.drob_menu} >
                                <Dropdown.Item className={styles.drob_menu_coohse} href="#/action-1">
                                    <FontAwesomeIcon icon={faHandshakeAngle} className={styles.item_icon} /> 
                                    مسوقين جدد
                                </Dropdown.Item>
                                <Dropdown.Item className={styles.drob_menu_coohse} href="#/action-2">
                                    <FontAwesomeIcon icon={faPause} className={styles.item_icon} />
                                    طلبات بإنتظار الموافقه
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    </div>
                </Link>

                <Link className={styles.items_slide} href='/dashboard/page_products_admin'>
                    <div className={styles.div_items_slide}>
                        <FontAwesomeIcon icon={faLock} className={styles.item_icon}/> 
                        <p className={styles.name_items_slide} >المنتجات</p>
                    </div>
                </Link>

                <Link className={styles.items_slide} href=''> 
                    <div className={styles.div_items_slide}>
                        <FontAwesomeIcon icon={faGear} className={styles.item_icon}/>
                        <p className={styles.name_items_slide} >الاعدادات</p>
                    </div>
                </Link>
                
                <Link className={styles.items_slide} href=''> 
                    <div className={styles.div_items_slide}>
                        <FontAwesomeIcon icon={faCircleUser} className={styles.item_icon}/> 
                        <p className={styles.name_items_slide} >الحساب</p>
                    </div>
                </Link>
                <hr/>
                
            </div>

        </div>




        
    )
}





