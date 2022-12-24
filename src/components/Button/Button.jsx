import { PropTypes } from "prop-types";
import "./Button.css";

const Button = ({children, version, isDisabled, type}) => {
    return (  
        <div className="button-wrapper">
            <button disabled={isDisabled} type={type} className={`button-${version}`}>
                {children}
            </button>
        </div>
    );
}
    Button.defaultProps = {
        version: "dick",
        type: "submit",
        isDisabled: true,
    }

    Button.propTypes = {
        children: PropTypes.node.isRequired,
        version: PropTypes.string,
        type: PropTypes.string,
        isDisabled: PropTypes.bool,
    }
export default Button;