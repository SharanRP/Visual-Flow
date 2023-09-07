// mport logo from './logo.svg';
import './App.css';
//import pokemon from "./pokemon.json"
import PropTypes from 'prop-types';
import React, { useState } from "react";
import styled from '@emotion/styled'
import Button from '@mui/material/Button';
// import Button from '@mui/material-next/Button';

const Title = styled.h1`
text-align: center;
`;

const TwoColLayout = styled.div`
display:grid ;
grid-template-columns:70% 30% ;
grid-column:1rem ;
`;

const Container = styled.div`
text-align : center;
margin-left: 300px;
width: 900px ;
padding-top : 1rem; 
`;

const Input = styled.input`
  margin-left: 25px;
  width: 90%;
  font-size: large;
  padding : 0.2rem;
`; 

const PokInfo = styled.div`s
margin:auto;
`

const PokemonRow = ({pokemon , Onselect}) => (
          <tr >
          <td>{pokemon.name.english}</td>  
          <td>{pokemon.type.join(" , ")}</td> 
          <td>
            <Button disabled={false} variant="filled" onClick={()=>Onselect(pokemon)}>Select</Button>
          </td>
          </tr>
)

PokemonRow.propTypes = {
  pokemon : PropTypes.shape({
    name : PropTypes.shape({
      english : PropTypes.string.isRequired
    }),
    type : PropTypes.arrayOf(PropTypes.string)
  }),
  Onselect : PropTypes.func.isRequired
}

const PokemonType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.shape({
    english: PropTypes.string.isRequired,
    // chinese: PropTypes.string.isRequired,
    // japanese: PropTypes.string.isRequired,
    // french: PropTypes.string.isRequired,
  }),
  type: PropTypes.arrayOf(PropTypes.string.isRequired),
  base: PropTypes.shape({
    HP: PropTypes.number.isRequired,
    Attack: PropTypes.number.isRequired,
    Defense: PropTypes.number.isRequired,
    "Sp. Attack": PropTypes.number.isRequired,
    "Sp. Defense": PropTypes.number.isRequired,
    Speed: PropTypes.number.isRequired,
  }),
});

const PokemonInfo = ({name , base}) => 
(
  <div>
    <h1>{name.english}</h1>
    <table class='table table-striped'>
      {Object.keys(base).map(key => (
        <tr key = {key}>
          <td>{key}</td>
          <td>{base[key]}</td>
        </tr>
      ))}
    </table>
  </div> 
)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter : " ",
      pokemon : [],
      selectedItem : null,
    }
  }

  componentDidMount() {
    fetch("https://gist.githubusercontent.com/jherr/23ae3f96cf5ac341c98cd9aa164d2fe3/raw/f8d792f5b2cf97eaaf9f0c2119918f333e348823/pokemon.json")
    .then((resp) => resp.json())
    .then((data) => this.setState({...this.state , pokemon : data}));  
  }

  render(){

    return (
      <Container>
       <Title>Pokemon search app</Title>
       <Input value = {this.setState.filter}  onChange={(e) => (this.setState({...this.state , filter : e.target.value}))}  />
       <TwoColLayout>
  
       <div>
  
       <table width= "100%" >
        <thead>
          <th>Pokemon name</th>
          <th>Type</th>
        </thead>
        <tbody>
        {this.state.pokemon.filter((pokemon) => (pokemon.name.english.toLowerCase().includes(this.state.filter.toLowerCase()))).slice(0,20).map((pokemon) => (
          <PokemonRow pokemon = {pokemon} key ={pokemon.id} Onselect={(pokemon) => ( this.setState({...this.state , selectedItem: pokemon,}))}/>
        ))}
        </tbody>
       </table>
       </div>
       {this.state.selectedItem && <PokemonInfo {...this.state.selectedItem} /> }
  
       </TwoColLayout>
      </Container>
    );

  }
}
export default App;

  // return (
  //   <Container>
  //    <Title>Pokemon search app</Title>
  //    <Input value = {filter}  onChange={(e) => (filterSet(e.target.value))}  />
  //    <TwoColLayout>

  //    <div>

  //    <table width= "100%" >
  //     <thead>
  //       <th>Pokemon name</th>
  //       <th>Type</th>
  //     </thead>
  //     <tbody>
  //     {pokemon.filter((pokemon) => (pokemon.name.english.toLowerCase().includes(filter.toLowerCase()))).map((pokemon) => (
  //       <PokemonRow pokemon = {pokemon} key ={pokemon.id} Onselect={(pokemon) => (selectedItemSet(pokemon))}/>
  //     ))}
  //     </tbody>
  //    </table>
  //    </div>
  //    {selectedItem && <PokemonInfo {...selectedItem} /> }

  //    </TwoColLayout>
  //   </Container>
  // );


// React.useEffect(() => {fetch("https://gist.githubusercontent.com/jherr/23ae3f96cf5ac341c98cd9aa164d2fe3/raw/f8d792f5b2cf97eaaf9f0c2119918f333e348823/pokemon.json").then(resp => resp.json().then(data => pokemonSet(data)))} , [])


