import React from "react";

class App extends React.Component{
  state = {
    isLoading : true
  };
  getMovies = async() =>{
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json")
  }
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const {isLoading} = this.state;
    return <div>{this.state.isLoading ? "Loading":"We are ready"}</div>
  }
}

export default App;
