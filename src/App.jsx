import { useState,useCallback,useEffect,useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [characterAllowed,setCharacterAllowed]=useState(false);
  const [password,setPassword]=useState("");
  const passwordRef=useRef(null);
  const [isHovered, setIsHovered] = useState(false);


  const passwordGenerator=useCallback(()=>{
    let pass='';
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if(numberAllowed){
      str += "0123456789";
    }
    if(characterAllowed){
      str += "{}[]!@#$%^&*()<>?/_-+";
    }

    for (let index = 0; index <length; index++) {
      let char=Math.floor(Math.random()*str.length+1);
      pass += str.charAt(char);
      
    }
    setPassword(pass);
  },[length,numberAllowed,characterAllowed,setPassword]);

  
const copyPasswordToClipBoard = useCallback((e)=>{
  passwordRef.current?.select(); // select all password
 // passwordRef.current?.setSelectionRange(0,3); select 3 characters from range 0 to 3
  window.navigator.clipboard.writeText(password)
},[password])

useEffect(()=>{
  passwordGenerator();
},[length,numberAllowed,characterAllowed,  passwordGenerator])

const handleMouseEnter = () => {
  setIsHovered((prev)=>(!prev));
};

const handleMouseLeave = () => {
  setIsHovered((prev)=>(!prev));
};

const hoverStyles = {
  backgroundColor: isHovered ? 'red' : 'blue',
  
};


  return (
    <>
  
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500  bg-gray-700'>  
        <h1 className=' text-center my-3 text-white xs:text-lg sm:text-lg md:text-xl lg:text-2xl'>Password Generator</h1> 

      <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
        <input type="text"
              value={password}
              placeholder='password'
              ref={passwordRef}
              readOnly
              className='outline-none  py-0.5 px-3 rounded-md flex-grow-2 w-full'
                />
        <button className='outline-none  bg-blue-700 text-white px-3 py-0.5 shrink-0 ' 
                onClick={copyPasswordToClipBoard}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={hoverStyles}
                >COPY</button>
      </div>

      <div className='hidden sm:flex sm:flex-row sm:justify-between sm:py-2 xs:flex xs:flex-row xs:justify-between xs:py-2'>     
          
                <input type="range"
                  min={6}
                  max={100}
                  id="rangeInput"
                  value={length}
                  onChange={(e)=>(setLength(e.target.value))}
                  className='cursor-pointer' />
                <label htmlFor="rangeInput">Length : {length}</label>         
           
              <input type="checkbox" 
                  id='numberInput' 
                  name='number' 
                  defaultChecked={numberAllowed} 
                  onChange={()=> (
                    setNumberAllowed((prev)=>(!prev))
                    )}/>
              <label htmlFor="numberInput">Number</label>         
           
              <input type="checkbox" 
                  id='charInput'
                  name='charInput'
                  defaultChecked={characterAllowed} 
                  onChange={()=> (
                  setCharacterAllowed((prev)=>(!prev))
                  )}/>
              <label htmlFor="charInput">Character</label>
         
              </div> 
              
              <div className='hidden  xxs:flex xxs:flex-col '>     
                <div className='flex flex-row justify-start gap-x-1'>
                <input type="range"
                  min={6}
                  max={100}
                  id="rangeInput"
                  value={length}
                  onChange={(e)=>(setLength(e.target.value))}
                  className='cursor-pointer' />
                <label htmlFor="rangeInput">Length : {length}</label>
                </div>
                <div className='flex flex-row justify-start gap-x-1'>
              <input type="checkbox" 
                  id='numberInput' 
                  name='number' 
                  defaultChecked={numberAllowed} 
                  onChange={()=> (
                    setNumberAllowed((prev)=>(!prev))
                    )}/>
              <label htmlFor="numberInput">Number</label>
              </div>
              <div className='flex flex-row justify-start gap-x-1'>
              <input type="checkbox" 
                    id='charInput'
                    name='charInput'
                    defaultChecked={characterAllowed} 
                    onChange={()=> (
                    setCharacterAllowed((prev)=>(!prev))
                      )}/>
              <label htmlFor="charInput">Character</label>
              </div>
              </div>                 
        </div> 
    </>
  )
}

export default App
