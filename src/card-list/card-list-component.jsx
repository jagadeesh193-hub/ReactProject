
import Card from './card-list-component.jsx';
import './card-list-styles.css';
const CardList =({monsters})=>(
    <div className='card-list'>
           {monsters.map((monster)=>{
            return<card monster={monster}/>;
           })}
           
            </div>
);
    

export default CardList; 