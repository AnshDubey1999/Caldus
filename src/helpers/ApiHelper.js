const axios = require('axios').default
const API_KEY = '22d95c216dmshd9c7b0d95bb37d4p1dcd6ejsnb496ab819159'

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
            'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
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
            'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
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