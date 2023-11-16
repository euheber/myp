function option({onSelectChange, value, content, name}){
    
    const handleSelect = (event) => { 
        onSelectChange(event)
    }
    return (
        <select onChange={handleSelect}>
            <option value={value}>{content}</option>
            <option value={value}>{content}</option>
        </select>
    )
}


export default option