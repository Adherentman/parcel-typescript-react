import * as React from 'react';

interface AppStateType {}

interface AppPropsType {}

export default class App extends React.Component<AppPropsType, AppStateType> {
  render() {
    return (
      <div style={{width:'300px', height:'200px',background:'#E0FFFF'}}>
        <div className="text-gradient">
          <div>Hello Friend!</div>
          <div>Welcome my Github!</div>
          <div>Try using parcel!!</div>
        </div>
      </div>
    );
  }
}
