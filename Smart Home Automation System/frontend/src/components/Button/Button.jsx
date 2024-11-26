import './Button.css'

function Button({ btnName, onClick }) {
    return(
        <button className="button" onClick={onClick}>{btnName}</button>
    )
}

export default Button