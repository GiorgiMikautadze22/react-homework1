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

function UserDetails() {
  return (
    <>
      <div className="flex">
        {usersArray.map((el) => (
          <>
            <div>
              <p key={el.id}>Name: {el.name}</p>
              <p key={el.id}>Age: {el.age}</p>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default UserDetails;
