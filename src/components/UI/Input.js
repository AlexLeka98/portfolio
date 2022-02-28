import React, { Fragment } from 'react'
import styles from './Input.module.scss';


const Input = React.forwardRef((props,ref) => {
    return (
        <Fragment>
            <div className={styles.inputContainer}>
                {props.type === 'textarea' ?
                    <div className={styles.textareaStyle}>
                        <textarea
                            type={props.type}
                            name={props.name}
                            rows={props.rows}
                            cols={props.cols}
                            ref={ref}
                            required={props.required ? props.required : "false"}
                        />
                        <label htmlFor={props.name} className={styles.label_name}>
                            <span className={styles.content_name}>{props.name}</span>
                        </label>
                    </div>
                    :
                    <div className={styles.inputStyle}>
                        <input 
                            type={props.type}
                            name={props.name}
                            autoComplete='off'
                            ref={ref}
                            required={props.required ? props.required : "false"}
                        />
                        <label htmlFor={props.name} className={styles.label_name}>
                            <span className={styles.content_name}>{props.name}</span>
                        </label>
                    </div>
                }
            </div>
        </Fragment>
    )
})

export default Input




{/* <input className={styles.inputStyle} 
            type={props.type} 
            name={props.name} 
            autoComplete='off'
            required={props.required ? props.required : "false"}
            />
            <label htmlFor={props.name} className={styles.label_name}>
                <span className={styles.content_name}>{props.name}</span>
            </label> */}