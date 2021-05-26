import React, {useState} from 'react'
import APIService from '../APIService';

function Form(props) {
    const [title,setTitle]= useState(props.article.title)
    const [description,setDescription]= useState(props.article.description)

    const updateArticle = () => {

        APIService.UpdateArticle(props.article.id,{title,description})
        .then(resp => console.log(resp))
        
    }

    return (
        <div>
            {props.article ? (
                <div className="mb-3">
                    <label className="form-label" htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" placeholder="Please enter title"
                        value={title} onChange={e => setTitle(e.target.value)} />

                    <label className="form-label" htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" rows="5" placeholder="Please enter description"
                    
                    value={description} onChange={e => setDescription(e.target.value)}></textarea>
                    <button onClick={updateArticle} className="btn btn-success">Update Article</button>

                </div>
            ) : null}
        </div>
    )
}

export default Form
