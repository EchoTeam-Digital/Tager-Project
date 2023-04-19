


import styles from '@/styles/add_products.module.css'
import Navbar_admin from '../../../../compenents/page_admin/navbar_admin'
import Slidebar_admin from '../../../../compenents/page_admin/slidebar_admin'
import Nav_add_product from '../../../../compenents/page_admin/nav_add_product'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faImage,faComment,faFile} from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';





export default function Page_reports_admin (){
    const [photo,setphoto] = useState("");
    const [nameproduct,setnameproduct] = useState("");
    const [minprice,setminprice] = useState("");
    const [minprice2,setminprice2] = useState("");
    const [des,setdes] = useState("");
    const [accept,setAccept] = useState(false);
 

    function submit (e){
        e.preventDefault();
        setAccept(true);
    }


    return(

        <div>
            <Navbar_admin/>
            <div className={styles.father}>
                <Slidebar_admin/>
                
                <div className={styles.page_report}>
                    <Nav_add_product/>
                    <div className={styles.card_add_product1}>
                        <div className={styles.card_add_product}>
                            
                            <form className={styles.form} onSubmit={submit}>

                                <div className={styles.div_add_photo}>
                                    <h1 className={styles.text_add_photo}> 
                                    <FontAwesomeIcon className={styles.icon_photo} icon={faImage} />
                                    الصوره
                                    </h1>
                                </div>

                                <div className={styles.form_control_upload}>

                                    <input 
                                        type="file" 
                                        id='input_file'
                                        value={photo}
                                        onChange={(e)=> setphoto(e.target.value)}
                                        className='d-none ' 
                                    />

                                    <label for='input_file'>
                                        <FontAwesomeIcon className={styles.input_photo} title='اختر الصوره' icon={faFile} />
                                    </label>

    
                                </div>                                
                                {photo == '' && accept && (
                                    <p className={styles.wrongpass}> اختر صوره</p>
                                )}

                                <div className={styles.name_price_products}>
                                    <input 
                                    type='search' 
                                    placeholder='إسم المنتج'
                                    value={nameproduct}
                                    onChange={(e)=> setnameproduct(e.target.value)}
                                    className={styles.input_pr} 
                                    />
                                </div>
                                {nameproduct == '' && accept && (
                                    <p className={styles.wrongpass}>  اكتب اسم المنتج</p>
                                )}


                                <div className={styles.name_price_products}>
                                    <input className={styles.input_pr} type='number' value={minprice} onChange={(e)=> setminprice(e.target.value)} placeholder='اقل ربح للمسوق' ></input>
                                    <input className={styles.input_pr} type='number' value={minprice2} onChange={(e)=> setminprice2(e.target.value)} placeholder='اقل سعر للبيع'></input>
                                </div>
                                <div className={styles.div_wrongpass}>
                                    {minprice == '' && accept && (
                                        <p className={styles.wrongpass2}>ادخل اقل ربح للمسوق</p>
                                    )}

                                    {minprice2 == '' && accept && (
                                        <p className={styles.wrongpass}>ادخل اقل سعر للبيع</p>
                                    )}
                                </div>

                                <div className={styles.div_add_photo}>
                                    <h1 className={styles.text_add_photo}>
                                        <FontAwesomeIcon className={styles.icon_photo} icon={faComment} />
                                        الوصف
                                    </h1>


                                    <textarea value={des} onChange={(e)=> setdes(e.target.value)} className={styles.input_des} type='search' ></textarea>
                                </div>

                                
                                {des === '' && accept && (
                                    <p className={styles.wrongpass}>  أدخل وصف للمنتج</p>
                                )}

                                <input  type='submit' className={styles.send_products} value='إضافه المنتج'></input>



                            </form>
                            
                        </div>
                    </div>

                </div>


            </div>   
                

        </div>
       

    )
}






