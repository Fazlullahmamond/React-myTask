import PropTypes from 'prop-types';

const Button = ({color, text, onClick}) => {
    return <button 
                style={{ backgroundColor:color }} 
                className="btn"
                onClick={onClick}
                >{text}
            </button>
}
//default values for props
Button.defaultProps = {
    color: "steelblue",
    text: "Add"
}
//types for props
Button.propTypes = {
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}
export default Button
