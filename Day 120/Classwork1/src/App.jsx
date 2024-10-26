import { useState } from "react";

function App(){
  const [info, setInfo] = useState([]);
  const [friends, setFriends] = useState([]);

  function handleSubmit(e){
    e.preventDefault();
    const name = e.target.name.value;
    const surname = e.target.surname.value;
    const email = e.target.email.value;
    setInfo([...info, {name: name, surname: surname, email: email}]);
  }

  function handleAdd(index){
    const friend = info[index];
    setFriends([...friends, friend]);
  }
  console.log(friends);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name="name" />
        <input type="text" placeholder="Surname" name="surname" />
        <input type="email" placeholder="Email" name="email" />
        <button type="submit">Submit</button>
      </form>

      <div>
        {info.map((person, index) => {
          return (
            <div>
              <p key={index}><b>Name:</b> {person.name} <b>Surname:</b> {person.surname} <b>Email:</b> {person.email} <button type="button" onClick={() => {handleAdd(index)}}>Add Friend</button></p>
            </div>
          )
        })}
        <p>Friends:</p>
        {friends.map((friend, index) => {
          return (
            <div>
              <ul>
                <li key={index}>{friend.name}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default App;