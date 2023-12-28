function option({value, content, identifier}){
    return (
            <option value={value} className={identifier}>{content} </option>
    )
}


export default option