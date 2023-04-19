


import styles from '@/styles/page_products_admin.module.css'
import Navbar_admin from '../../../compenents/page_admin/navbar_admin'
import Slidebar_admin from '../../../compenents/page_admin/slidebar_admin'
import Nav_add_product from '../../../compenents/page_admin/nav_add_product'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'next/image'
import product1 from '../../../public/img/product1.png'
import product2 from '../../../public/img/product2.png'
import product3 from '../../../public/img/product3.png'
import product4 from '../../../public/img/product4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faPen,faTrash,faSearch} from '@fortawesome/free-solid-svg-icons'




export default function Page_reports_admin (){
    return(

        <div>
            <Navbar_admin/>
            <div className={styles.father}>
                <Slidebar_admin/>

                <div className={styles.page_report}>
                   
                      <Nav_add_product/>
                      <div className='container'>
                        <div className='row'>
                            <div className='col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6'>
                                <Card className={styles.card_product}>
                                    <div className={styles.div_card}>
                                        <Image className={styles.image_card} src={product1} alt="error"  />
                                    </div>
                                    <Card.Body>
                                    <Card.Title className={styles.text_card}>راديو المصحف الإلكتروني الناطق </Card.Title>
                                    
                                    <div>
                                        <div className={styles.div_text_card} >
                                            <h4 className={styles.text_card2}>200ج.م</h4>
                                            <p className={styles.text_card1} > سعر المنتج</p>
                                        </div>

                                        <div className={styles.div_btn_edit}>
                                            <Button variant="danger">
                                                <FontAwesomeIcon  icon={faTrash} className={styles.name}/>
                                                <span className={styles.name}>حذف المنتج</span>
                                            </Button>
                                            
                                            <Button variant="primary"  > 
                                                <FontAwesomeIcon  icon={faPen} className={styles.name}/>
                                                <span className={styles.name}>تعديل المنتج</span>
                                            </Button> 
                                        </div>
                                    </div>
                                   
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className='col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6'>
                                <Card className={styles.card_product}>
                                    <div className={styles.div_card}>
                                        <Image className={styles.image_card} src={product1} alt="error"  />
                                    </div>
                                    <Card.Body>
                                    <Card.Title className={styles.text_card}>راديو المصحف الإلكتروني الناطق </Card.Title>
                                    
                                    <div>
                                        <div className={styles.div_text_card} >
                                            <h4 className={styles.text_card2}>200ج.م</h4>
                                            <p className={styles.text_card1} > سعر المنتج</p>
                                        </div>

                                        <div className={styles.div_btn_edit}>
                                            <Button variant="danger">
                                                <FontAwesomeIcon  icon={faTrash} className={styles.name}/>
                                                <span className={styles.name}>حذف المنتج</span>
                                            </Button>
                                            
                                            <Button variant="primary"  > 
                                                <FontAwesomeIcon  icon={faPen} className={styles.name}/>
                                                <span className={styles.name}>تعديل المنتج</span>
                                            </Button> 
                                        </div>
                                    </div>
                                   
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className='col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6'>
                                <Card className={styles.card_product}>
                                    <div className={styles.div_card}>
                                        <Image className={styles.image_card} src={product1} alt="error"  />
                                    </div>
                                    <Card.Body>
                                    <Card.Title className={styles.text_card}>راديو المصحف الإلكتروني الناطق </Card.Title>
                                    
                                    <div>
                                        <div className={styles.div_text_card} >
                                            <h4 className={styles.text_card2}>200ج.م</h4>
                                            <p className={styles.text_card1} > سعر المنتج</p>
                                        </div>

                                        <div className={styles.div_btn_edit}>
                                            <Button variant="danger">
                                                <FontAwesomeIcon  icon={faTrash} className={styles.name}/>
                                                <span className={styles.name}>حذف المنتج</span>
                                            </Button>
                                            
                                            <Button variant="primary"  > 
                                                <FontAwesomeIcon  icon={faPen} className={styles.name}/>
                                                <span className={styles.name}>تعديل المنتج</span>
                                            </Button> 
                                        </div>
                                    </div>
                                   
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className='col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6'>
                                <Card className={styles.card_product}>
                                    <div className={styles.div_card}>
                                        <Image className={styles.image_card} src={product1} alt="error"  />
                                    </div>
                                    <Card.Body>
                                    <Card.Title className={styles.text_card}>راديو المصحف الإلكتروني الناطق </Card.Title>
                                    
                                    <div>
                                        <div className={styles.div_text_card} >
                                            <h4 className={styles.text_card2}>200ج.م</h4>
                                            <p className={styles.text_card1} > سعر المنتج</p>
                                        </div>

                                        <div className={styles.div_btn_edit}>
                                            <Button variant="danger">
                                                <FontAwesomeIcon  icon={faTrash} className={styles.name}/>
                                                <span className={styles.name}>حذف المنتج</span>
                                            </Button>
                                            
                                            <Button variant="primary"  > 
                                                <FontAwesomeIcon  icon={faPen} className={styles.name}/>
                                                <span className={styles.name}>تعديل المنتج</span>
                                            </Button> 
                                        </div>
                                    </div>
                                   
                                    </Card.Body>
                                </Card>
                            </div>

                            
  


                        </div>
                        </div>   

                  
                    

                </div>

            </div>    

        </div>
       

    )
}





