
/*
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
*/
//-------------------------------------------------------
/*
class Elem extends React.Component {
    render() {
        return (
            <div>
                <h1>Game name {this.props.name}</h1>
                <h2>Age {this.props.age} </h2>
            </div>
        )
    }
}

const place = document.getElementById('example');

ReactDOM.render (
    <div>
        <Elem name='food' age='0+' />
        <Elem name='rice' age='2+' />
        <Elem name='beer' age='18+' />
    </div>,
    place
)
*/
//----------------------------------------------------------

class Elem extends React.Component {
    edit() {
        alert('Редактировать');
    };

    remove() {
        alert('Удалить');
    };

    render() {
        return (
            <div className='box'>
                <div className='text'>{this.props.children}</div>
                <button onClick={this.edit} className='btn light' >Редактировать</button>
                <button onClick={this.remove} className='btn red' >Удалить</button>

            </div>
        )
    }

}
const place = document.getElementById('example');

ReactDOM.render (
    <div className='field'>
        <Elem>Hey, it is my</Elem>
        <Elem>Number 5</Elem>
        <Elem>Hello World</Elem>
    </div>,
    place
);
