import React from 'react';

class Request extends React.Component{
  render(props){
    return (
      <tr>
        <td>
            <div class="m-r-10"><img src="assets/images/dropbox.png" alt="user" width="35"></img></div>
        </td>
        <td>{props.name}</td>
        
        <td>3,50,000 / 4,50,000</td>
        <td>70%</td>
        <td>22 Aug,2018</td>
        <td>
            <button class="btn btn-primary">Track payment</button>
        </td>
    </tr>
    );
  }
}
class appReact extends Component {
  render() {
    return (
      <div>
        <Request name="Alico"></Request>
        <Request name="EgyMed"></Request>
        <Request name="EgyCare"></Request>
        <Request name="GlobeMed"></Request>
      </div>
    )
  }
}


ReactDOM.render(<Request />, document.getElementById("table-ahmed"));