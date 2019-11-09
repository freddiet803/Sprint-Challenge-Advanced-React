import React, {useState, useEffect} from 'react';



export const useDarkMode = (initialvalue)=>{

    const [dark, setDark] = useState(initialvalue);

    useEffect(()=>{
    if(dark){
        //console.log('dark mode should be on')
        document.body.classList.add('dark-mode')
    }else{
        //console.log('dark mode should be off')
        document.body.classList.remove('dark-mode')
    }
},[dark])

    return [dark, setDark]
};



