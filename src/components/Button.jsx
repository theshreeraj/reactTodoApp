const Button = ({ onClick, style, name }) => {
    return (
        <>
            <button className="btn btn-dark my-2"
                style={style}
                onClick={onClick}>
                {name}
            </button>
        </>
    )
}
export default Button;