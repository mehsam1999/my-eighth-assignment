/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';

const PurchaseModal = ({ isOpen, onClose, totalCost,clearCart }) => {
    const navigate = useNavigate();

    const handleClose = () => {
        
        onClose(); 
        navigate('/'); 
        clearCart();
    };

    if (!isOpen) return null;

    return (
        <dialog id="my_modal_1" open className="modal">
            <div className="modal-box flex flex-col items-center">
                <div className='w-20 h-20'>
                    <img src="https://i.ibb.co.com/FszJkYZ/Group.png" alt="" />
                </div>
                <h3 className="font-bold text-2xl text-center pb-4 border-b my-2">Payment Successfully</h3>
                <div className='space-y-2 mt-3'>
                    <p className='text-center text-gray-500 text-lg font-semibold'>Thanks for purchasing.</p>
                    <p className='text-center text-gray-500 text-lg font-semibold'>Total Cost: ${totalCost}</p>
                </div>
                <div className="flex flex-col w-full my-4">
                    <button className="btn" onClick={handleClose}>Close</button>
                </div>
            </div>
        </dialog>
    );
};

export default PurchaseModal;
