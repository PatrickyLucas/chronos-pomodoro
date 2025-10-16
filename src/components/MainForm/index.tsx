import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import type React from 'react';

export function MainForm() {
  function handleCreatedNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log('DEU CERTO');
  }

  return (
    <form onSubmit={handleCreatedNewTask} className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          labelText='task:'
          id='meuInput'
          type='text'
          placeholder='Digite algo'
        />
      </div>

      <div className='formRow'>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
