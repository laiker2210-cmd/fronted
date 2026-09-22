import { useEffect } from 'react';
import './Modal.css';

function Modal(props) {
    const { onClose, children } = props;

    useEffect(() => {
        const handleKey = (event) => {
            if (event.key === 'Escape') onClose();
        };

        document.addEventListener('keydown', handleKey);
        document.body.style.overflow = 'hidden'; //блокк фона

        //уборка при закрытии
        return () => {
            document.removeEventListener('keydown', handleKey);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    return (
        <div className="modal__overlay" onClick={onClose}>
            <div className="modal" onClick={(event) => event.stopPropagation()}>
                <button className="modal__close" onClick={onClose} aria-label="Закрыть">×</button>
                {children}
            </div>
        </div>
    );
}

export default Modal;