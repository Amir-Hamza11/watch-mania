const BASE_URL = 'https://api.themoviedb.org/3/'
const API_KEY = '5fa2dec95501a8c9bae60e633ed8005e'

// https://api.themoviedb.org/3/trending/all/day?api_key=5fa2dec95501a8c9bae60e633ed8005e

export async function ApiGetTrending(query_string, page=1) {
    const response = await
        fetch(`${BASE_URL}${query_string}?api_key=${API_KEY}&page=${page}`)
            .then((r) => r.json())
    return response;
}

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=5fa2dec95501a8c9bae60e633ed8005e&language=en-US

export async function ApiGetMedia(query_string) {
    const response = await
        fetch(`${BASE_URL}${query_string}?api_key=${API_KEY}&language=en-US`)
            .then((r) => r.json())
    return response;
}

//https://www.youtube.com/embed/8SWhBsbxmpk - Youtube
//https://api.themoviedb.org/3/movie/937278/videos?api_key=5fa2dec95501a8c9bae60e633ed8005e&language=en-US
// https://api.themoviedb.org/3/movie/297762?api_key=5fa2dec95501a8c9bae60e633ed8005e&append_to_response=videos

export async function ApiGetVideos(query_string) {
    const response = await
        fetch(`${BASE_URL}${query_string}/videos?api_key=${API_KEY}&language=en-US`)
            .then((r) => r.json())
    return response;
}

// https://api.themoviedb.org/3/search/multi?api_key=5fa2dec95501a8c9bae60e633ed8005e&language=en-US&query=hello&page=1&include_adult=false

export async function ApiGetSearch(query_string) {
    const response = await
        fetch(`${BASE_URL}search/multi?api_key=${API_KEY}&language=en-US&query=${query_string}&page=1&include_adult=false`)
            .then((r) => r.json())
    return response;
}


//https://api.themoviedb.org/3/movie/1429/images?api_key=5fa2dec95501a8c9bae60e633ed8005e&include_image_language=en

export async function ApiGetImages(query_string) {
    const response = await
        fetch(`${BASE_URL}${query_string}/images?api_key=${API_KEY}&include_image_language=en`)
            .then((r) => r.json())
    return response;
}

