function option({value, content, defaultInfo}){
    return (
            <option value={value} defaultValue={defaultInfo}>{content}</option>
    )
}


export default option