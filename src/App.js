import Header from './components/Header';
import { useState } from 'react';
import TextInput from './components/TextInput';
import DateInput from './components/DateInput';

export default function App() {
  const [name, setName] = useState('Cleison');
  const [aniversario, setAniversaro] = useState('2000-25-07');

  function handleChangeName(newName) {
    setName(newName);
  }

  function handleBirthDateChange(newDate) {
    setAniversaro(newDate);
  }

  return (
    <>
      <Header />

      <main className="flex flex-col my-4 w-80 p-4 bg-slate-100 border">
        <TextInput
          labelDescription="Digite o seu nome:"
          inputValue={name}
          onInputChange={handleChangeName}
        />

        <DateInput
          labelDescription="Digite a sua data de nascimento:"
          inputValue={aniversario}
          onInputChange={handleBirthDateChange}
        />

        <p>
          Your name is: {name} e faço aniversario em {aniversario}
        </p>
      </main>
    </>
  );
}
