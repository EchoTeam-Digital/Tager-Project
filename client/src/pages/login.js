
import styles from '@/styles/login.module.css'
import Image from 'next/image'
import Img from '../../public/img/user.png'
import Link from 'next/link'



export default function Login_page (){
    return(
        <div className={styles.main}>  
            <div className={styles.imguser}>
                 <Image  src={Img} alt="error"  width={80} height={80} />
            </div>      

            <form className={styles.login_form} >

                <h1 className={styles.sign}>تسجيل الدخول الي حسابك</h1>
                <input className={styles.the_input}  type='tel' placeholder=' رقم الهاتف'  ></input>
                <input className={styles.the_input} type='password' placeholder='كلمه المرور'></input>
                <a href="#" className={styles.rem_password} >! نسيت كلمه المرور</a>
                <button className={styles.btn_signup}>تسجيل الدخول</button>
                <p className={styles.second1}>ليس لديك حساب؟ 
                    <Link className={styles.second2} href='/signup'> تسجيل دخول</Link>
                </p>
            </form>

        </div>
    )
}





