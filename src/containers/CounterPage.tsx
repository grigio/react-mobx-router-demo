import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import { Button } from "@blueprintjs/core";
import { observer } from 'mobx-react';
import { counterStore, routingStore } from '../stores'

const CounterPage = observer(() => (
  <div>
    <Button onClick={() => {
      counterStore.increment()
      routingStore.replace(`/counter/${counterStore.counter.toString()}`)
    }} >Counter: {counterStore.counter}
    </Button>
  </div>
))

export default CounterPage