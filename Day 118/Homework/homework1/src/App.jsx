import React, { useState } from 'react';
import Counter from './Components/Counter';
import Toggle from './Components/Toggle';
import ShowHide from './Components/ShowHide';
import ChangeBack from './Components/ChangeBack';
import ListOfItems from './Components/ListOfItems';
import Submission from './Components/Submission';
import Like from './Components/Like';
import ShowPass from './Components/ShowPass';
import Disabled from './Components/Disabled';
import Carousel from './Components/Carousel';
import CharCounter from './Components/CharCounter';

function App(){
  return (
    <div>
      <p>1.</p>
      <Counter />
      <p>2.</p>
      <Toggle />
      <p>4.</p>
      <ShowHide />
      <p>5.</p>
      <ChangeBack />
      <p>6.</p>
      <ListOfItems />
      <p>7.</p>
      <Submission />
      <p>8.</p>
      <Like />
      <p>9.</p>
      <ShowPass />
      <p>10.</p>
      <Disabled />
      <p>11.</p>
      <Carousel />
      <p>12.</p>
      <CharCounter />
    </div>
  );
}

export default App;
