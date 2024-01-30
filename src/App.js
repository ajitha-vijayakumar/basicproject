import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './List.css';

function Item({ value }) {
  return (
    <div className="item-container">
      <Button className="item-count" variant="warning">
        {value}
      </Button>
    </div>
  );
}

function Increment({ onBtnClick }) {
  return (
    <Button style={{ marginRight: '5px' }}variant="secondary" className="increment" onClick={onBtnClick}>
      +
    </Button>
  );
}

function Decrement({ onBtnClick }) {
  return (
    <Button style={{ marginRight: '5px' }}variant="info" className="decrement" onClick={onBtnClick}>
      -
    </Button>
  );
}

function Delete({ onBtnClick }) {
  return (
    <Button variant="danger" className="delete" onClick={onBtnClick}>
      X
    </Button>
  );
}

export default function List() {
  const [count, setCount] = useState(Array(3).fill(0));

  function handleIncrement(i) {
    const dummy = count.slice();
    dummy[i] = count[i] + 1;
    setCount(dummy);
  }

  function handleDecrement(i) {
    if (count[i] > 0) {
      const dummy = count.slice();
      dummy[i] = count[i] - 1;
      setCount(dummy);
    }
  }

  function handleAdd() {
    setCount([...count, 0]);
  }

  function handleReset() {
    const dummy = Array(count.length).fill(0);
    setCount(dummy);
  }

  function handleDelete(i) {
    const dummy = count.slice();
    dummy.splice(i, 1);
    setCount(dummy);
  }

  return (
    <div className="list-container">
      <Button variant="info" className="count-button">
        {count.length}
      </Button>
      {count.map((value, index) => (
        <div key={index} className="list-item">
          <Item value={value} />
          <Increment onBtnClick={() => handleIncrement(index)} />
          <Decrement onBtnClick={() => handleDecrement(index)} />
          <Delete onBtnClick={() => handleDelete(index)} />
        </div>
      ))}
      <Button variant="primary" className="add-button" onClick={handleAdd}>
        Add
      </Button><span/>
      <Button variant="info" className="reset-button" onClick={handleReset}>
        Reset
      </Button>
    </div>
  );
}
