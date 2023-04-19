
import styles from '@/styles/signup.module.css'
import Image from 'next/image'
import Img from '../../public/img/welcome-user.png'
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import axios from 'axios';



export default function signup_page (props){

    const [user, setUser] = useState({
        email: '',
        phone: '',
        password: '',
        password_two: '',
        role: 'member',
    });

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };  
    const [errors, setErrors] = useState({});



    const onSubmit = async (e) => {
        e.preventDefault();
        let errors = {};
        
        if (!user.email || !/\S+@\S+\.\S+/.test(user.email)) {
            errors.email = 'Invalid email format';
        }
        if (!user.phone || !/^[0-9]{11}$/.test(user.phone)) {
            errors.phone = 'Invalid phone number format';
        }
        if (!user.password || user.password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
        }
        if (user.password !== user.password_two) {
            errors.password_two = 'Passwords do not match';
        }   
        
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }
        
        console.log("checking if email already exists");
        
        try {
            const response = await axios.get(`http://localhost:8000/users?email=${user.email}`);
            const existingUser = response.data[0];
            
            if (existingUser) {
                setErrors({ email: 'This email is already in use' });
                return;
            }
            
            console.log("creating a new user");
            
            const createUserResponse = await axios.post('http://localhost:8000/users/add', user);
            
            setUser({
                email: '',
                phone: '',
                password: '',
                password_two: '',
                role: '',
            });
            
            console.log("finish");
        } catch (error) {
            console.log('Error in creating user!', error);
        }
    };
    


    return(

        <div className={styles.main}> 
            <div className={styles.img_welcome}>
                <Image src={Img} alt="error"  width={150} height={150} />
            </div> 

            <form className={styles.login_form} onSubmit={onSubmit} method='POST'>
                
                <h1 className={styles.sign}>أنشئ حساباً و ابدأ رحلة الأرباح  </h1>

                <input className={styles.the_input}
                    type='email' 
                    placeholder='البريد اللإلكتروني' 
                    name='email'
                    onChange={onChange}
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                    />
                {errors.email && <div className={styles.error}>{errors.email}</div>}

                <input className={styles.the_input} 
                    type='tel' 
                    placeholder='رقم الهاتف'
                    maxLength={11}
                    minLength={11}
                    name="phone"
                    onChange={onChange}
                    pattern="[0-1]{2}[0-5]{1}[0-9]{3}[0-9]{5}"
                    />

                {errors.phone && <div className={styles.error}>{errors.phone}</div>}

                <input className={styles.the_input} 
                    type='password' 
                    placeholder='كلمه المرور' 
                    name='password'
                    onChange={onChange}
                    />

                {errors.password && <div className={styles.error}>{errors.password}</div>}


                                
                <input className={styles.the_input} 
                    type='password' 
                    name='password_two'
                    placeholder='تأكيد كلمه المرور' 
                    onChange={onChange}
                    /> 
                {errors.password_two && <div className={styles.error}>{errors.password_two}</div>}


                
                <input
                type='submit'
                className={styles.btn_signup}
            />
                
                <p className={styles.second1}>لدي حساب بالفعل !
                <Link className={styles.second2} href='/login'> تسجيل دخول</Link>
                </p>
            
            </form>

        </div>
    )
}



