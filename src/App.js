import React, {Component} from 'react';
import './App.css';
import Movie from "./components/Movie";



class App extends Component {

    //상태 선언
    state = {};


    //라이프사이클 함수 선언
    // Render: componentWillMount() -> render() -> componentDidMount()
    // Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

    componentDidMount() { //마운트 되고 나서 실행되는 함수 - 데이터 불러올 때나 토큰 체크를 할때
       this.getMovies()
    }

    //함수선언
    renderMovie = () => {
        const movies = this.state.movies.map(movie => {
            return (
                <Movie poster={"https://image.tmdb.org/t/p/w500" + movie.poster_path} title={movie.title} key={movie.id}/>
            )
        })
        return movies
    }

    getMovies = async () => {
        const movies = await this.callApi()
        this.setState({
            movies
        })
    }

    callApi = () => {
        return fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1")
            .then(potato => potato.json())
            .then(json => json.postInfo)
            .catch(err => console.log(err))
    }



    render() {
        //위의 것들을 다시 재선언 (render 가 된 후에 componentDidMount)
        //this.state 에 movies가 있으면 this.renderMovie()를 실행, 없으면 "Loading"
        const {movies} = this.state
        return (
            <div className={"App"}>
                {movies ? this.renderMovie() : "Loading"}
            </div>

        );
    }
};



export default App;

