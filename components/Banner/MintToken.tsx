import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
interface MintTokenProps {
    show: boolean;
    handleClose: () => void;
}

export default function MintToken({ show, handleClose }: MintTokenProps) {
    
    return (
        <>
            {show ? (
                <div className="absolute inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
                    <div className="bg-white w-2/3 xl:w-1/3 xl:h-96 rounded-3xl shadow-lg flex flex-col items-end p-4">
                        <FontAwesomeIcon className="hover-spin text-3xl" icon={faXmark} onClick={handleClose} />
                        <div className="flex flex-col grid-cols-1 justify-center p-10 bg-bluish w-full gap-3">
                            <div className="grid grid-cols-2">
                                <p>Current Chain : Sepolia</p>
                                <p>Sepolia Faucet : 100 Eth</p>
                                <p>Test Token Balance : 100 TST</p>
                            </div>
                            <br/>
                            <div className="grid grid-cols-3 items-center">
                                <label className='pl-3.5'>Mint Test Token:</label>
                                <input
                                className="p-3 rounded-xl input-animate"
                                type="number"
                                placeholder="Amount"
                                min="0"
                                />
                                <MintButton />
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    )
}

export  function MintButton() {
 return(
    <div className="card example-1">
      <div className="inner">
        Mint
      </div>
    </div>
 )   
}