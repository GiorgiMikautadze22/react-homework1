import "./App.css";
import UserDetails from "./Text";
import ProfileImg from "./profileImage";

const usersArray = [
  {
    id: 1,
    name: "John",
    age: 25,
    profileImage: "https://via.placeholder.com/150/92c952",
  },
  {
    id: 2,
    name: "Jane",
    age: 24,
    profileImage: "https://via.placeholder.com/150/771796",
  },
  {
    id: 3,
    name: "Bob",
    age: 30,
    profileImage: "https://via.placeholder.com/150/24f355",
  },
  {
    id: 4,
    name: "Mary",
    age: 28,
    profileImage: "https://via.placeholder.com/150/d32776",
  },
];
function App() {
  return (
    <div className="App">
      {usersArray.map((el) => (
        <>
          <ProfileImg key={el.id} image={el.profileImage} />
          <UserDetails key={el.id} userName={el.name} userAge={el.age} />
        </>
      ))}
    </div>
  );
}

export default App;
