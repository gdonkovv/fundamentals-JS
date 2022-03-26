function movies(arr) {

    let moviesArr = [];

    for (let movie of arr) {
        if (movie.includes("addMovie")) {
            let currTitle = movie.split("addMovie ")[1];
            moviesArr.push({ name: currTitle });
        } else if (movie.includes("directedBy")) {
            let currMovie = movie.split(" directedBy ");
            let currTitle = currMovie[0];
            let director = currMovie[1];
            let existingMovie = moviesArr.find((movieObj) => movieObj.name === currTitle);
            if (existingMovie) {
                existingMovie.director = director;
            }
        } else if (movie.includes("onDate")) {
            let currMovie = movie.split(" onDate ");
            let currTitle = currMovie[0];
            let date = currMovie[1];
            let existingMovie = moviesArr.find((movieObj) => movieObj.name === currTitle);
            if (existingMovie) {
                existingMovie.date = date;
            }
        }
    }

    for(let movie of moviesArr){
        if(movie.name && movie.director && movie.date){
            console.log(JSON.stringify(movie));
        }
    }

}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);