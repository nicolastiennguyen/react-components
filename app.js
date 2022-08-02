var App = () => (
  <div>
    <h1>Get these groceries:</h1>
    <GroceryList list = {['bananas', 'apples']}/>
  </div>
)

var GroceryList = (props) => (
  <ul>
    {props.list.map(item => <GroceryListItem item = {item}/>)}
  </ul>
)

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      hover: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  onListItemHover() {
    this.setState({
      hover: !this.state.hover
    });
    // item.target.style.fontWeight = 'bold';
  }

  render() {

    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };

    // var hoverStyle = {
    //   fontWeight: this.state.hover ? 'bold' : 'normal'
    // }

    return (
      <li
      style={style}
      onClick={this.onListItemClick.bind(this)}
      onMouseEnter={this.onListItemHover.bind(this)}
      onMouseLeave={this.onListItemHover.bind(this)}
      >
        {this.props.item}
      </li>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"))