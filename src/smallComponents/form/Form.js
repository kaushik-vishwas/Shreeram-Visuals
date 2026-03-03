import React, { useState } from 'react'
import styles from './form.module.css'
import { Insta, Location, Mail, Phone, Reddit, Twitter } from '../../components/Svg'
import { useFormik } from 'formik';
import * as yup from "yup";
import Toastify from '../../utils/Toastify';
import axios from 'axios';

const Form = () => {
    const [loading, setLoading] = useState(false);

    const schema = yup.object().shape({
        firstName: yup.string().required("First name is required"),
        phone: yup.string().required("Phone number is required"),
        message: yup.string().required("Message is required"),
    })

    const {
        errors,
        values,
        handleChange,
        touched,
        handleBlur,
        handleSubmit,
        resetForm
    } = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: ""
        },
        validationSchema: schema,
        onSubmit: async (values) => {
            try {
                setLoading(true)
                const { data, status } = await axios.post("https://send-mail-theta.vercel.app/srv-mail", values)

                if (status === 200) {
                    setLoading(false)
                    Toastify.success("Thank you for the contacting Shriram Visuals.", "Our representative will contact you shortly.")
                    resetForm();
                }
            } catch (err) {
                setLoading(false)
                Toastify.error("Some error occured")
            }
        }
    })

    return (
        <div className={styles.container}>
            <div className={styles.right}>
                <div>
                    <h2 className={styles.heading}>Contact Information</h2>
                    <h4>Share your contact details and requirement in detail for our representative to contact for more information. </h4>
                </div>
                <div>
                    <span>
                        <Phone />
                        <p>+919986793055</p>    
                    </span>
                    <span>
                        <Mail />
                        <p>  support@shriramvisuals.com {/* shriramvisuals3535@gmail.com */}</p>
                    </span>
                    <span>
                        <Location />
                        <p style={{ width: '80%' }}>                                        #107/V J.K.Pura Main Road,
                            Near R.K.School, Vinayaknagar,
                            Bangalore – 560030</p>
                    </span>
                </div>
                {/*   <span><Twitter /><Insta /><Reddit /></span> */}
            </div>
            <div className={styles.left}>
                <div className={styles.form}>
                    <div className={styles.inputBox}>
                        <label>First name*</label>
                        <input type="text" placeholder='John' name='firstName' value={values.firstName} onChange={handleChange} onBlur={handleBlur} />
                        {
                            errors.firstName && touched.firstName && <p style={{ color: "red", fontSize: "12px", textAlign: "left" }}>{errors.firstName}</p>
                        }
                    </div>
                    <div className={styles.inputBox}>
                        <label>Last name</label>
                        <input type="text" placeholder='Doe' name='lastName' value={values.lastName} onChange={handleChange} onBlur={handleBlur} />
                    </div>
                    <div className={styles.inputBox}>
                        <label>Email</label>
                        <input type="email" placeholder='demo@gmail.com' name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                    </div>
                    <div className={styles.inputBox}>
                        <label>Phone Number*</label>
                        <input type="number" placeholder='+1 012 3456 789' name='phone' value={values.phone} onChange={handleChange} onBlur={handleBlur} />
                        {
                            errors.phone && touched.phone && <p style={{ color: "red", fontSize: "12px", textAlign: "left" }}>{errors.phone}</p>
                        }
                    </div>
                </div>
                <div className={`${styles.textarea} ${styles.inputBox}`}>
                    <label>Message*</label>
                    {/* < type="text" placeholder='Message ...' /> */}
                    <textarea id="" placeholder='Write your message..' name='message' value={values.message} onChange={handleChange} onBlur={handleBlur} cols="30" rows="6"></textarea>
                    {
                        errors.message && touched.message && <p style={{ color: "red", fontSize: "12px", textAlign: "left" }}>{errors.message}</p>
                    }
                </div>
                <div className={styles.button}>
                    <button onClick={handleSubmit} disabled={loading}>
                        {
                            loading ? "Sending..." : "Send Message"
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Form
