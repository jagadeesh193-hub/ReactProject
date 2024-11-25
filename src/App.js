
import { useState,useEffect } from 'react';
import CardList from './card-list/card-list-component';

import SearchBox from './search-box/search-box.component';
import './App.css';

const App=()=>{

  const[searchField,setSearchField] =useState('a');
  const[monsters,setMonsters]=useState([]);
  const[filteredMonsters,setFilterMonsters]=useState(monsters);
  const[stringField,setStringField]=useState('');

  console.log('rendered');
  useEffect(()=>{
     
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((users)=> setMonsters(users)
   
  );

  },[])
useEffect(()=>{
  const NewFilteredMonsters=monsters.filter((monster)=>{
    return monster.name.toLocaleLowerCase().includes(searchField);

});
setFilterMonsters(NewFilteredMonsters);
  console.log('effect is firing');
},[monsters,searchField]);
  const onSearchChange =(event)=>{
          
      const searchFieldString =event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
   
};
const onStringChange =(event)=>{
  setStringField(event.target.value);
}

console.log(filteredMonsters);
  
  
  

  
  return ( <div className='App'>
    <h1 className="app-title">Monster Rolodex </h1>
    

<SearchBox
className='monsters-search-box'
onChangeHandler={onSearchChange}
placeholder='search monsters' 
/>
<SearchBox

onChangeHandler={onSearchChange}
placeholder='set string ' 
/>
<CardList monsters={filteredMonsters} />
  </div>
  );
};
 //class App extends Components{
    //constructor(){
      //super();
     // this.state={
       // monsters:[],
        //searchField:'',

    //  };
   // } 
  


  /*componentDidMount(){
    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((users)=>
      this.setState(
    () =>{
      return{monsters:users};
    })
  );
}*/

  
  /*
  onSearchChange  =(event)=>{
          
    const searchField=event.target.value.toLocaleLowerCase();
  
  this.setState(()=>{
 return {searchField};
 }
);
}



  render(){
    console.log('render the appJs');
    const{monsters,searchField}= this.state;
    const{onSearchChange }=this;
    const filteredMonsters=monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
  return (
    <div className='App'>
      <h1 className="app-title">Monster Rolodex </h1>
      

<SearchBox
className='monsters-search-box'
 onChangeHandler={onSearchChange}
placeholder='search monsters' 
/>
<CardList monsters={filteredMonsters} />
    </div>
  );
  }
}*/








export default App;
