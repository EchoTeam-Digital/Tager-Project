


import Navbar_admin from '../../compenents/page_admin/navbar_admin'
import Slidebar_admin from '../../compenents/page_admin/slidebar_admin'
import styles from '@/styles/dashboard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoins ,faUserGroup,faCartShopping } from '@fortawesome/free-solid-svg-icons'

import Card from 'react-bootstrap/Card';
import Image from 'next/image'
import dollor from '../../public/img/dollar.png'
import Link from 'next/link'





export default function page_admin (){
    return(

        <div>
            <Navbar_admin/>
            <div className={styles.father}>
                <Slidebar_admin/>

                <div className={styles.page_products}>
                    <div className='row'>

                        <div className='col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6'>
                            <div className={styles.card}>
                                <div className={styles.profit}>
                                    <Link href='/signup'>
                                        <FontAwesomeIcon icon={faCoins} className={styles.icon_pounds} /> 
                                    </Link>

                                    <Link href='/signup' className={styles.name_profit}>الارباح</Link>
                                </div>

                                <div className={styles.profit2}>
                                    <p><Link href='/signup' className={styles.price_profit2}>$ 2655</Link></p>
                                    <Link href='/signup' className={styles.name_profit2}>اجمالي الارباح</Link>
                                </div>
                            </div>
                        </div>

                        <div className='col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6'>
                            <div className={styles.card}>
                                <div className={styles.profit}>
                                    <Link href='/signup'>
                                        <FontAwesomeIcon icon={faUserGroup} className={styles.icon_pounds} /> 
                                    </Link>

                                    <Link href='/signup' className={styles.name_profit}>مندوبي التسويق</Link>
                                </div>

                                <div className={styles.profit2}>
                                <p><Link href='/signup' className={styles.price_profit2}>122</Link></p>
                                    <Link href='/signup' className={styles.name_profit2}>عدد مندوبي التسويق</Link>
                                </div>
                            </div>
                        </div>

                        <div className='col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6'>
                            <div className={styles.card}>
                                <div className={styles.profit}>
                                    <Link href='/signup'>
                                        <FontAwesomeIcon icon={faCartShopping} className={styles.icon_pounds} /> 
                                    </Link>

                                    <Link href='/signup' className={styles.name_profit}>المخزن</Link>
                                </div>

                                <div className={styles.profit2}>
                                <p><Link href='/signup' className={styles.price_profit2}>1303</Link></p>
                                    <Link href='/signup' className={styles.name_profit2}>عدد المنتجات المتوفره</Link>                                </div>
                            </div>
                        </div>


                        <div className='col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6'>
                            <div className={styles.card}>
                                <div className={styles.profit}>
                                    <Link href='/signup'>
                                        <FontAwesomeIcon icon={faCartShopping} className={styles.icon_pounds} /> 
                                    </Link>

                                    <Link href='/signup' className={styles.name_profit}>الفواتير</Link>
                                </div>

                                <div className={styles.profit2}>
                                <p><Link href='/signup' className={styles.price_profit2}>199</Link></p>
                                    <Link href='/signup' className={styles.name_profit2}>اجمالي الطلبات</Link>                                </div>
                            </div>
                        </div>










                    </div>

                </div>






                

            </div>    
        </div>
        
    )
}





