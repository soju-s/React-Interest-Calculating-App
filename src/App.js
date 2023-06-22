import { Button, Stack } from '@mui/material';
import './App.css';
import TextField from '@mui/material/TextField';
import { useState } from 'react';





function App() {


  const [principle,setPrinciple]=useState(0)
  const [interest,setInterst]=useState(0)
  const [period,setPeriod]=useState(0)
  const [rate,setRate]=useState(0)

  


  const calculateClicked=(e)=>{

    if(principle===0 || period===0 || rate===0){

      alert('Please fill all fields')
    }
    else{
      const  output=principle*period*rate/100
      setInterst(output)
    }
   
  }

  const resetClicked=()=>{
    setInterst(0)
    setRate(0)
    setPeriod(0)
    setPrinciple(0)
  }



  return (
    <>
      <div className='app'>
        <div className='container'>

          <div className='text_heading'>

            <h1>Simple Interest Calculator</h1>
            <p>Calculate your Simple Interest Easily</p>

          </div>

          <div className='total-card'>
            <div className='card-text'>

              <h3 className='total-amount-symbol'>₹ {interest}</h3>
              <p className='total-amount-para'>Total Simple Interest</p>

            </div>

          </div>

          <form action="">

          <div className="input-field">
          <TextField value={principle||''} onChange={e=>setPrinciple(e.target.value)} className="outlined-basic" label="₹ Priciple Amount" variant="outlined" />
          </div>

          <div className="input-field">
          <TextField value={period||''} onChange={e=>setPeriod(e.target.value)} className="outlined-basic" label="Rate of Interest(p.a) %" variant="outlined" />
          </div>

          <div className="input-field">
          <TextField value={rate||''} onChange={e=>setRate(e.target.value)} className="outlined-basic" label="Time Period (yr)" variant="outlined" />
          </div>

          </form>


          <Stack className='btn-group' direction="row" spacing={2}>
  <Button onClick={calculateClicked} style={{backgroundColor:'black'}} className='btn' variant="contained">CALCULATE</Button>
  <Button onClick={resetClicked} color="error"  className='btn' variant="outlined">RESET</Button>
  
</Stack>

        </div>
      </div>
    </>
  )

}
export default App;
