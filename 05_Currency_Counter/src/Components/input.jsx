import React  from 'react';
import {useId} from 'react';

function Input({
    label,
    amount,
    amountChange,
    currencyChange,
    currencyOption=[],
    selectCurrency='usd',
    amountDisabled=false,
    currencyDisabled=false
})
{
    let amountID=useId();
    return (
        <div className='bg-white w-full flex flex-col flex justify-center rounded-xl'>
            <div className="w-full flex flex-row px-4 py-2 text-gray-500 text-m">
                <label  htmlFor={amountID} className='w-2/3 '>{label}</label>
                <label  className='w-1/4  flex justify-end'>Currency type</label>
            </div>
            <div>
                <input  id={amountID} className="w-2/3 h-10 outline-none px-4 rounded-l"type="number" value={amount} 
                    disabled={amountDisabled} 
                    onChange={(e)=>amountChange && amountChange(Number(e.target.value))} 
                    placeholder='Enter the Amount'/>     
                <select className="p-1 w-1/4 h-12" 
                    value={selectCurrency} 
                    onChange={(e)=>currencyChange&& currencyChange(e.target.value)}
                    disabled={currencyDisabled}>
                        {
                            currencyOption.map((currency)=>(
                                <option key={currency} value={currency}>{currency}</option>
                            ))
                        }
                </select>
            </div>
        </div>
    )
}

export default Input