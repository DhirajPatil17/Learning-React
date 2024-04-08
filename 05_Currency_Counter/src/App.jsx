import { useState } from 'react'
import Input from './Components/input';
// import Select from './Components/select.jsx';
import useCurrency from './hooks/useCurrency.js';

function App() {
  // const [data,setData]=useCurrency('inr'); 
  const [amount,setAmount]=useState(0);
  const [from,setFrom]=useState('USD');
  const [to,setTo]=useState('INR');
  const [convertedAmount,setConvertedAmount]=useState(0);
  const conversion_rates={
    "USD":1,
    "AED":3.6725,
    "AFN":71.1403,
    "ALL":95.5109,
    "AMD":391.2509,
    "ANG":1.7900,
    "AOA":843.8401,
    "ARS":857.4200,
    "AUD":1.5358,
    "AWG":1.7900,
    "AZN":1.6991,
    "BAM":1.8175,
    "BBD":2.0000,
    "BDT":109.7484,
    "BGN":1.8177,
    "BHD":0.3760,
    "BIF":2861.0719,
    "BMD":1.0000,
    "BND":1.3521,
    "BOB":6.9326,
    "BRL":5.0568,
    "BSD":1.0000,
    "BTN":83.3847,
    "BWP":13.7265,
    "BYN":3.2685,
    "BZD":2.0000,
    "CAD":1.3566,
    "CDF":2745.3757,
    "CHF":0.9078,
    "CLP":985.0366,
    "CNY":7.2464,
    "COP":3851.0580,
    "CRC":503.1999,
    "CUP":24.0000,
    "CVE":102.4659,
    "CZK":23.5399,
    "DJF":177.7210,
    "DKK":6.9304,
    "DOP":59.1248,
    "DZD":134.7456,
    "EGP":47.1529,
    "ERN":15.0000,
    "ETB":56.7513,
    "EUR":0.9293,
    "FJD":2.2555,
    "FKP":0.7954,
    "FOK":6.9313,
    "GBP":0.7954,
    "GEL":2.6810,
    "GGP":0.7954,
    "GHS":13.3776,
    "GIP":0.7954,
    "GMD":65.6878,
    "GNF":8573.7940,
    "GTQ":7.7930,
    "GYD":209.3903,
    "HKD":7.8285,
    "HNL":24.6763,
    "HRK":7.0016,
    "HTG":132.6231,
    "HUF":366.9452,
    "IDR":15927.4467,
    "ILS":3.7130,
    "IMP":0.7954,
    "INR":83.3793,
    "IQD":1308.9098,
    "IRR":42021.0246,
    "ISK":139.8827,
    "JEP":0.7954,
    "JMD":154.2101,
    "JOD":0.7090,
    "JPY":151.5779,
    "KES":131.0661,
    "KGS":89.4594,
    "KHR":4047.2512,
    "KID":1.5355,
    "KMF":457.1705,
    "KRW":1350.7629,
    "KWD":0.3076,
    "KYD":0.8333,
    "KZT":447.5680,
    "LAK":20822.8440,
    "LBP":89500.0000,
    "LKR":299.6526,
    "LRD":193.7211,
    "LSL":18.7849,
    "LYD":4.8429,
    "MAD":10.0796,
    "MDL":17.6797,
    "MGA":4353.4467,
    "MKD":57.1607,
    "MMK":2100.8671,
    "MNT":3386.9582,
    "MOP":8.0635,
    "MRU":39.6466,
    "MUR":46.4893,
    "MVR":15.4548,
    "MWK":1730.9294,
    "MXN":16.5741,
    "MYR":4.7536,
    "MZN":63.8959,
    "NAD":18.7849,
    "NGN":1306.1926,
    "NIO":36.7720,
    "NOK":10.8520,
    "NPR":133.4155,
    "NZD":1.6761,
    "OMR":0.3845,
    "PAB":1.0000,
    "PEN":3.7165,
    "PGK":3.7860,
    "PHP":56.3019,
    "PKR":277.8231,
    "PLN":3.9880,
    "PYG":7363.0560,
    "QAR":3.6400,
    "RON":4.6215,
    "RSD":108.9095,
    "RUB":92.3906,
    "RWF":1299.9526,
    "SAR":3.7500,
    "SBD":8.5093,
    "SCR":13.5694,
    "SDG":449.4778,
    "SEK":10.7408,
    "SGD":1.3521,
    "SHP":0.7954,
    "SLE":22.7128,
    "SLL":22712.7751,
    "SOS":571.7304,
    "SRD":35.3221,
    "SSP":1586.2041,
    "STN":22.7671,
    "SYP":12900.2612,
    "SZL":18.7849,
    "THB":36.6217,
    "TJS":10.9484,
    "TMT":3.4999,
    "TND":3.1343,
    "TOP":2.3379,
    "TRY":32.0726,
    "TTD":6.7418,
    "TVD":1.5355,
    "TWD":32.0558,
    "TZS":2566.8029,
    "UAH":39.3556,
    "UGX":3883.9194,
    "UYU":37.5747,
    "UZS":12621.0200,
    "VES":36.2860,
    "VND":24904.9163,
    "VUV":120.3033,
    "WST":2.7611,
    "XAF":609.5606,
    "XCD":2.7000,
    "XDR":0.7590,
    "XOF":609.5606,
    "XPF":110.8915,
    "YER":250.1773,
    "ZAR":18.7813,
    "ZMW":24.9413,
    "ZWL":22393.7653
   }
  
  // const useCurr=useCurrency(from);
  var options=Object.keys(conversion_rates);

  var swap=()=>
  {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert=()=>
  {
    setConvertedAmount(amount*conversion_rates[to]);
    console.log(convertedAmount)
    console.log(conversion_rates[to])
    console.log(amount);
    // console.log("Currency: ",currency)
  }

  return (
    <div className='bg-gray-800 w-full h-screen flex flex-col flex justify-center'>
      <div className='w-full flex justify-center p-4'>
        <h1 className='font-bold text-4xl text-white p-2'>Currency App</h1>
      </div>
      <form onSubmit={(e)=>
      {
        e.preventDefault();
        convert();
      }}>
      <div className='w-2/5 h-96 bg-gray-100 container  flex flex-col  flex justify-center mx-auto px-4 py-8 my-3 rounded-2xl gap-3 '>
        <Input
        label="from"
        amount={amount}
        currencyOption={options}
        CurrencyChange={(currency)=>{
          setAmount(amount); 
          setFrom(currency);
          console.log(currency)
        }}
        selectCurrency={from}
        amountChange={(amount)=>
        {
          setAmount(amount);
          console.log(from);
        }}/>
        <div className='w-full flex justify-center '>
          <button className='bg-red-400 font-bold text-white p-2 rounded-xl w-24 my-4 mx-2'
          onClick={swap}>Swap</button>
       </div>
        <div className='w-full flex justify-center'>
          <Input
          label="to"
          amount={convertedAmount}
          currencyOption={options}
          CurrencyChange={(currency)=>setTo(currency)}
          selectCurrency={to}
          amountDisabled/>

        </div>
        <div className='w-full flex justify-center' >
          <button className='bg-green-500 p-4 w-fit rounded-xl m-4 font-bold text-l text-white'
          >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
        </div>

      </div>
      
      </form>
    </div>
  )
}

export default App
