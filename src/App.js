import logo from './logo.svg';
import './App.css';

function App() {
 
  let etudiant = [   
  {
    nom : "jack",
    prenom : "belmond",
    image : "logo192.png"
  },

  {
    nom : "jack",
    prenom : "belmond"
  },
  {
    nom : "jack",
    prenom : "belmond"
  },
  {
    nom : "jack",
    prenom : "belmond"
  },
  {
    nom : "jack",
    prenom : "belmond"
  },
  {
    nom : "jack",
    prenom : "belmond"
  },
  {
    nom : "jack",
    prenom : "belmond"
  },
  {
    nom : "jack",
    prenom : "belmond"
  },






] 

  return (
    <div className='App'> 
    {
  etudiant.map( (item,index) =>(
    <div key={index}>
  <h4>{item.nom}</h4>
      <h4>{item.prenom}</h4>
      <img src={logo}/> 
      </div>     
      ))


    }


    </div>


  )
    

}

export default App;
