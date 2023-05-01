const BASE_URL = 'https://api.themoviedb.org/3/'
const API_KEY = '5fa2dec95501a8c9bae60e633ed8005e'

// https://api.themoviedb.org/3/trending/all/day?api_key=5fa2dec95501a8c9bae60e633ed8005e

export async function ApiGetTrending(query_string, page=1) {
    const response = await
        fetch(`${BASE_URL}${query_string}?api_key=${API_KEY}&page=${page}`)
            .then((r) => r.json())
    return response;
}

