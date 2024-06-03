import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

interface MintTokenProps {
    show: boolean;
    handleClose: () => void;
}

export default function MintToken({ show, handleClose }: MintTokenProps) {
    return (
        <>
            {show ? (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                    <div className="cyberpunk-container w-full max-w-md mx-4 sm:mx-6 lg:mx-auto rounded-3xl shadow-lg flex flex-col items-end">
                        <div className="cyberpunk-inner w-full h-full rounded-3xl p-4 flex flex-col items-end">
                            <FontAwesomeIcon className="hover-spin text-white hover:text-red-500 text-2xl sm:text-3xl cursor-pointer" icon={faXmark} onClick={handleClose} />
                            <div className="flex flex-col justify-center p-4 sm:p-10 w-full gap-3">
                                <div className="grid grid-cols-1 sm:grid-cols-2 text-white gap-2 sm:gap-3">
                                    <p>Current Chain: Sepolia</p>
                                    <p>Sepolia Faucet: 100 Eth</p>
                                    <p>Test Token Balance: 100 TST</p>
                                </div>
                                <br />
                                <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-2 sm:gap-3">
                                    <label className='pl-3.5 text-white'>Mint Test Token:</label>
                                    <input
                                        className="p-3 rounded-xl bg-gray-800 text-black cyberpunk-input"
                                        type="number"
                                        placeholder="Amount"
                                        min="0"
                                    />
                                    <MintButton />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}

export function MintButton() {
    return (
        <button className="cyberpunk-button text-white px-4 py-2 rounded-xl transition duration-300 w-full sm:w-auto">
            Mint
        </button>
    );
}
