const Input = ({type, placeholder, name, onChange, value, style, checked, onClick}) =>{
    return (
    <>
        <input type={type} style= {style}

        className="my-2" placeholder={ placeholder}

        name={name} onChange={onChange} value={value} 

        checked={checked} onClick={onClick} 
/>
    </>
    )
}
export default Input;