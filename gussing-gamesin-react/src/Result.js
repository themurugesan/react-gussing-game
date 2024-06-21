import React from "react";
function Result({secureNum,term}){
    let result;
    if(term){
        if(term>secureNum){
        result="Higer";
    }else if(term<secureNum){
        result='Lower';
    }else if(term==secureNum){
        result='Yippee!! Correct'
    }
    else{
        result='Enter valid input'
    }
    }
    
    return <h3>
        You Guessed: {result}
    </h3>
}
export default Result;