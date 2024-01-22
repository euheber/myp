function Button({children, styles, action}){ 
return(
    <button className={styles} onClick={action}> 
        {children}
    </button>
)
}


export default Button