import { Children } from "react";

function button({children, styles, action}){ 
return(
    <button className={styles} onClick={action}> 
        {children}
    </button>
)
}


export default button