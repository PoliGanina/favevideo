import { Component } from 'react';

import './App.scss';
import Header from '../header/header';
import Filter from '../filter/filter';
import SearchPanel from '../search-panel/search-panel';
import ListArea from '../list-area/list-area';
import AddForm from '../add-form/add-form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [
              {name: 'Classic music for children', url: 'https://youtu.be/Pz3q2gr9mek', watched: false, id: 1},
              {name: 'Music from soviet cartoons', url: 'https://youtu.be/gz8MuVSD6pc', watched: false, id: 2},
              {name: 'Los pollitos dicen',url: 'https://youtu.be/qcOiqtMsjes',watched: false, id: 3}
              ],
        term: '',
        filter: 'all',
        urlToPlay: 'https://youtu.be/Pz3q2gr9mek'
    }
    this.maxId = 4;
  }

  componentDidMount = () => {
    if (localStorage.length !== 0) {
      let stateData = [];
      for(let i = 0; i < localStorage.length-1; i++) {
        let elem = JSON.parse(localStorage.getItem(`${i}`));
        stateData[i] = elem;
      }
    this.setState(({data: stateData}));
    }
  }

  saveState = () => {
    const {data,urlToPlay} = this.state;
    localStorage.clear();
    for (let i=0; i < data.length; i++) {
      let objectValue = JSON.stringify(data[i]);
      localStorage.setItem(`${i}`, objectValue);
    }

    localStorage.setItem('urlToPlay', urlToPlay);
  }

  deleteItem = (id) => {
      this.setState(({data}) => {
          return {
              data: data.filter(item => item.id !== id)
          }
      }, () => this.saveState())
  }

  addItem = (name, url) => {
    const newItem = {
        name, 
        url,
        watched: false,
        id: this.maxId++
    }
    this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
            data: newArr
        }
    }, () => this.saveState());
  }

  searchEmp = (items, term) => {
    if (term.length === 0) {
        return items;
    }

    return items.filter(item => {
        return item.name.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term});
  } 

  onToggleWatched = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      const old = data[index];
      const newItem = {...old, watched: !old.watched};
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];

      return {
        data: newArr
      }
    }, () => this.saveState())
  }

  onPlay = (id) => {
    let index = this.state.data.findIndex(elem => elem.id === id);
    let videoToPlay = this.state.data[index].url;
    this.setState(({urlToPlay: videoToPlay}))
  }

  filterPost = (items, filter) => {
    switch (filter) {
        case 'w':
            return items.filter(item => item.watched === true);
        case 'tbw':
            return items.filter(item => item.watched === false);
        default:
            return items
    }
  }

  onFilterSelect = (filter) => {
    this.setState({filter});
  }

  render () {

    const {data,term, filter, urlToPlay} = this.state;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);

    return (

      <div className="App">
        <Header/>
        <nav className="navbar">
          <Filter 
            filter={filter} 
            onFilterSelect={this.onFilterSelect}/>
          <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
        </nav>
        <ListArea 
            data={data} 
            visibleData={visibleData} 
            onDelete={this.deleteItem} 
            onToggleWatched={this.onToggleWatched}
            urlToPlay={urlToPlay}
            onPlay={this.onPlay}/>
        <AddForm 
            onAdd={this.addItem}/>
        <footer> 
          <h3>© Design and web-development by Polina Ganina</h3>
          <a className="footer__link" href="mailto:poliganina@gmail.com">poliganina@gmail.com</a>
        </footer>
      </div>
    )
  }
}

export default App;
