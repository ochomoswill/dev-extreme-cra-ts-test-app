import * as React from 'react';
import List from 'devextreme-react/list';

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

interface IListItemProps {
  text: string;
}

interface IComponentState {
  counter: number;
}

const items: IListItemProps[] = [
  { text: "Item 1" },
  { text: "Item 2" },
  { text: "Item 3" }
];

class Item extends React.Component<IListItemProps, IComponentState> {
  constructor(props: IListItemProps) {
    super(props);
    this.state = {
      counter: 0
    };
    this.addCounter = this.addCounter.bind(this);
  }

  public render() {
    return (
        <div onClick={this.addCounter}>
          {this.props.text} was clicked {this.state.counter} times
        </div>
    );
  }

  private addCounter() {
    this.setState({
      counter: this.state.counter + 1
    });
  }
}

class App extends React.Component {
  render() {
    return (
        <List items={items} itemComponent={Item} />
    );
  }
}

export default App;