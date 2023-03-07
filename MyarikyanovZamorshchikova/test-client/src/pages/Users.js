import "./styles.css";


export const Users = (props) => {
    const { onClose, children } = props;
    return (
        <div className="modal">
            {children}
        </div>
      );
};

export default Users;
