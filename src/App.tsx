import './App.css';
import TextField from './TextField';

const App: React.FC = () => {
  return (
    <div className="h-screen mx-10 my-10">
      <div className='text-3xl font-bold underline'>Testing</div>
      <TextField text='some string' 
        handleChange={e => 
          console.log(e)
        }
        person={{firstName: 'Matt', lastName: 'Lese'}} />
    </div>
  );
}

export default App;
