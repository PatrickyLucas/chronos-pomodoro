import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Olá mundo
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        voluptas nulla aliquid minima odio ducimus quidem aliquam totam,
        possimus corrupti reprehenderit commodi fugit eius nihil dolorem numquam
        aspernatur maiores quam.
      </p>
    </>
  );
}
