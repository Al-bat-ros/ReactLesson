

class Elem extends React.Component {
   render() {
       const num = 20;
       return (
           <div>
               <h3>Hello, {this.props.name}</h3>
               <p>Good {3+num}</p>
           </div>
       );
   } 
}
const place = document.getElementById('example');

ReactDOM.render (
    <div>
        <Elem name='Saha' />
        <Elem name='Saha' />
    </div>,
    place
);