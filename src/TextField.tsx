import React, { ChangeEvent, ChangeEventHandler, useRef, useState } from 'react';

interface Person {
  firstName: string
  lastName: string
}

interface Props {
  text: string
  ok?: boolean
  i?: number
  fn?: (bob: string) => string
  person: Person
  handleChange: (e: ChangeEvent) => void
}

const TextField: React.FC<Props> = ({handleChange}) => {

  const [count, setCount] = useState<number | null>(5)
  const inputRef = useRef<HTMLInputElement>(null)
  const divRef = useRef<HTMLDivElement>(null)
  
  return <div ref={divRef}>
    <input ref={inputRef} 
      onChange={handleChange}
      className='border-2 border-black'/>
  </div>;
};

export default TextField;
