import {useState} from "react"

function Home (){
    return(
            <div>
                <h1> Full Alexandre </h1>
                <Contador/>
            </div>
        ) 
    }


function Contador(){
    const [contador,setContador] = useState(1);


    function adicionarCount(){
        setContador(contador + 1)
    }

    return(
        <div>
            <div>{contador}</div>
            <button onClick={adicionarCount}>Here</button>
        </div>
    )
}



export default Home
