import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title, onAdd, showAddTask}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAddTask ? "red": "black"} text={showAddTask ? "Close": "Add"} onClick={onAdd} />
        </header>
    )
}

//default values for props
Header.defaultProps = {
    title: "My Tasks",
}
//types for props
Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header
