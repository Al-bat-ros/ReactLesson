

class Elem extends React.Component {
   render() {
       return (
           <div>
               Hello, {this.props.name}
           </div>
       );
   } 
}

ReactDOM.render (
    <Elem name='Saha' />,
    document.getElementById('example')
);