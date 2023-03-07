import "./styles.css";


export const Register = (props) => {
    const { onClose, children } = props;
    return (
        <div className="modal">
            {children}
        </div>
      );
};

export default Register;
