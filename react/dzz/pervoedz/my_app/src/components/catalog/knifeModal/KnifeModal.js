import Modal from '../../modal/Modal';
import './KnifeModal.css';

function KnifeModal(props) {
    const { knife, onClose } = props;

    return (
        <Modal onClose={onClose}>
            <img className="knife-modal__image" src={knife.image} alt={`Нож «${knife.name}»`} />
            <h2 className="knife-modal__name">{knife.name}</h2>
            <p className="knife-modal__meta">{knife.status} · {knife.price}</p>
            <p className="knife-modal__description">{knife.description}</p>
            {/*тут будет Связаться*/}
            <button className="knife-modal__cta">Узнать подробнее</button>
        </Modal>
    );
}

export default KnifeModal;