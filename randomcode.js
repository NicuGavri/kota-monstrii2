render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {this.state.string}
        </p>
        <button onClick={() => this.setState({string: 'ej ok handicapatule'})}>Change Text</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>



export const CardList = (props) => {
  return (
      <div className='card-list'>
      {props.monser.map(mons => ( <h1 key={mons.id}>{mons.name}</h1>) ) }
      {/* this.state.monsters.map() = props.monser.map */}
      </div>
  )}

  <input type='search' placeholder='search monsters' onChange={ e => console.log(e.target.value)}/>

  render() {
    return (
      <div className="App">
      <CardList monseer={this.state.monster}/>
    </div>
    )
  }

  <input type='search' 
      placeholder='search monsters'
        onChange={e => {
          this.setState({searchField: e.target.value});
          console.log(this.state);
          }}


          //setstate memba
          render() {
    return (
      <div className="App">
      <input type='search' 
      placeholder='search monsters'
        onChange={e => {
          this.setState({searchField: e.target.value}, () => console.log(this.state));
          }}