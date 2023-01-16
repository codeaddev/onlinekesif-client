import React, { useEffect } from 'react'
import { useState } from 'react'

import "./payment.scss"

import valid from "card-validator"
import useForm from './useForm';
import Cards from "react-credit-cards-2"
import "react-credit-cards-2/es/styles.scss"
import "../detail.scss"

import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css";
import CreditCardForm from './CreditCardForm';
import Topbar from './Topbar';
import Taksit from './Taksit';
import PaymentMethod from './PaymentMethod';
import IbanEft from './IbanEft';
import { PokemonAPI } from '../../apis/productAPI';
import { EsnekAPI } from '../../api/productAPI';

const baseURL = "https://cors-anywhere.herokuapp.com/https://posservice.esnekpos.com/api/services/GetInstallments";



const Payment = () => {
  


  const {handleChange,handleFocus,handleSubmit,values,errors}=useForm()
  
  

  const [apiData,setApiData]=useState("")
  const fetchInstallments=(e)=>{
    e.preventDefault();
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "MERCHANT": "onlinekesif.com",
  "MERCHANT_KEY": "S7i1ax6Rg2GPZTpcR6Nv2XXQJIHoQYyXNGnpXWH7n013xo2VM2LDYg=="
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://posservice.esnekpos.com/api/services/GetInstallments", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
   

  }
  // // useEffect(()=>{
  //   axios("/api",config)
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // },[])
  
  // const [pokemonListLoading, setPokemonListLoading] = useState(false);
  // const [pokemonList, setPokemonList] = useState([]);
  // const [selectedPokemonName, setSelectedPokemonName] = useState();
  // const [selectedPokemon, setSelectedPokemon] = useState();

  // useEffect(() => {
  //   setPokemonListLoading(true);

  //   PokemonAPI.getPaginated({
  //     limit: 20,
  //     offset: 0
  //   })
  //     .then((pokemonList) => {
  //       setPokemonList(pokemonList);
  //       setSelectedPokemonName(pokemonList[0]?.name);
  //     })
  //     .finally(() => {
  //       setPokemonListLoading(false);
  //     });
  // }, []);

  // useEffect(() => {
  //   if (selectedPokemonName) {
  //     // enabling request cancellation
  //     PokemonAPI.get(selectedPokemonName, true).then((pokemon) => {
  //       setSelectedPokemon(pokemon);
  //     });
  //   }
  // }, [selectedPokemonName]);
  // useEffect(() => {
   
  //     // enabling request cancellation
  //     EsnekAPI.get().then((pokemon) => {
  //       console.log(pokemon);
  //     });
   
  // }, []);
  //console.log(pokemonList)
  console.log(apiData)
  //console.log(selectedPokemon)
  const [selected,setSelected]=useState("credit")
  // app.get("/", (req, res) => {
  //   axios(config)
  //   .then(function (response) {
   
  //   //console.log(JSON.stringify(response.data.INSTALLMENTS))
  //   console.log("çalışıyor")
  // })
  //   .catch(error => {
  //         if(error) {
  //             res.json(JSON.stringify(error));
  //         }
  //   })
    
  // });
                                          
  return (
    <div className='page-container'>
      {/* <div className="page-wrapper">
        <div className="payment-page">
            <Topbar selected={selected} setSelected={setSelected}/> 
            {selected==="credit"?
            
            <div className='payment-wrapper'>
              <CreditCardForm/>
              <Taksit/>
            </div>:<IbanEft/>
            }
                      
            
        </div>
      </div> */}
      <button
      onClick={fetchInstallments}
      >Get Taksits</button>
      
    </div>
  )
}

export default Payment