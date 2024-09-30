import { Container, SectionTitle } from 'components';
import { todoAPI } from 'config';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import css from './APITest.module.css';

export default function APITest() {
  const [array, setArray] = useState([]);
  useEffect(() => {
    todoAPI
      .getTodos()
        .then(({ data }) => {
            const arr = [];
            for (let i = 0; i < 20; i++){
                arr[i] = data[i];
            }

            setArray(arr);
        })
      .catch(console.error);
  }, [array]);
  return (
    <Container type="section">
      <Container>
        <SectionTitle>API test</SectionTitle>
        <Container type="flex">
          {array.map(({ userId, id, title, completed }) => {
            return (
              <li
                className={`${css['item']} ${
                  completed ? css['completed'] : ''
                }`}
                key={nanoid()}
              >
                <p>{userId}</p>
                <p>{id}</p>
                <p>{title}</p>
                <p>{completed.toString()}</p>
              </li>
            );
          })}
        </Container>
      </Container>
    </Container>
  );
}
