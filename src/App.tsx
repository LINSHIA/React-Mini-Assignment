import * as React from "react";

export interface IAppProps {}

interface IState {
  changeColor: any;
}

export default class App extends React.Component<IAppProps, IState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = { changeColor: "" };
  }
  componentDidMount() {
    this.setState({ changeColor: "Blue" });
  }

  public changeColor = () => {
    this.setState({ changeColor: "Green" });
  };

  public render() {
    return (
      <div style={{ backgroundColor: this.state.changeColor }}>
        <h1>{this.state.changeColor}</h1>
        <button onClick={this.changeColor}> Click me </button>
      </div>
    );
  }
}
