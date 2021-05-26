import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import ArticleList from './Components/ArticleList';
import Form from './Components/Form';

function App() {
  const [articles, setArticle] = useState([])
  const [editArticle, setEditArticle] = useState(null)

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

  const editBtn = (article) => {
    setEditArticle(article)
  }

  //reflect updated data in without refresh quickly
  const UpdateInformation = (article) =>{
    const new_article = articles.map(myarticle =>{
      if (myarticle.id === article.id){
        return article;
      }else {
        return myarticle;
      }
    })
    setArticle(new_article)

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Django and ReactJS Blog App</h1>
        <br/>
        <br/>

        <ArticleList articles={articles} editBtn={editBtn} />
        {editArticle ? <Form article={editArticle} UpdateInformation={UpdateInformation} /> : null}
        
        
      </header>
    </div>
  );
}

export default App;
