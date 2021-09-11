import { API_HOST, API_KEY } from '../general'

const axios = require('axios').default

// How to fetch
// const [data, setData] = useState([])
// useEffect(() => {
//     async function fetchInit() {
//         setData(await GetSearchRecipeAsync(41712))
//     }
//
//     fetchInit()
// }, [])

export function GetSearchRecipeAsync(id) {
    const option = {
        method: 'GET',
        url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`,
        headers: {
            'x-rapidapi-host': API_HOST,
            'x-rapidapi-key': API_KEY
        }
    }
    return axios
        .request(option)
        .then(response => {
            return response.data
        }
        ).catch(error => console.error(error))
}

/**
 * 
 * @param {string} type 'jokes', 'trivia', 'recipes'
 * @returns {object} object
 */
export function GetRandomAsync(type) {
    const option = {
        method: 'GET',
        url: type === 'recipe' ? 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random' : `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/${type}/random`,
        headers: {
            'x-rapidapi-host': API_HOST,
            'x-rapidapi-key': API_KEY
        }
    }
    return axios
        .request(option)
        .then(response => {
            return response.data
        }
        ).catch(error => console.error(error))
}
