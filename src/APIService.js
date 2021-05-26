
export default class APIService {
    static UpdateArticle(article_id,body) {

        return fetch(`http://localhost:8000/api/articles/${article_id}/`,{
            'method':'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':'Token 59cab6ceacf782aa93e4219b9c5d11e92f7af4a0'
            },
            body:JSON.stringify(body)
        }).then (resp => resp.json())
    }
}