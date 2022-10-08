//import logo from './logo.svg';
import Card from './Card';
import './App.css';

//creating function for the boxes to display
function App() {
  return (
    <div className="App">
      
      <Card

        info= "Title 1"
        subtitle= "Sub Title 1"
        description= "Hello World 1"
        bgcolor= "red"
        width="200px"

      />

      <Card 

        info= "Title 2"
        subtitle= "Sub Title 2"
        description= "Hello World 2"
        bgcolor= "orange"
        width= "200px"

      />

      <Card 

        info= "Title 3"
        subtitle= "Sub Title 3"
        description= "Hello World 3"
        bgcolor= "yellow"
        width= "200px"

      />

      <Card

        info= "Title 4"
        subtitle= "Sub Title 4"
        description= "Hello World 4"
        bgcolor= "green"
        width= "200px"

      />

    </div>
  );
}

export default App;
