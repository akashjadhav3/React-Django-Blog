import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [articles, setArticle] = useState([])

  useEffect(()=>{
    fetch('http://localhost:8000/api/articles/', {
      'method':'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':'Token 59cab6ceacf782aa93e4219b9c5d11e92f7af4a0'
      }
    })
    .then(resp => resp.json())
    .then(resp => setArticle(resp))
    .catch(error => console.log(error))
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Django and ReactJS Blog App</h1>
        {articles.map(article =>{
          return (
          <div key={article.id}>
              <h2>{article.title}</h2>
              <p>{article.descripition}</p>
          </div>
          )
          
        })}
      </header>
    </div>
  );
}

export default App;
