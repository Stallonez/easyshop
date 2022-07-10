import './ModalDialog.css';

const ModalDialog = ({ children, ...props }) => {
    return <div className={props.toggle ? 'openModal' : 'closeModal'}>
        <button onClick={() => props.getState(false)}>closeModal</button>
        {children}
    </div>
}

export default ModalDialog;