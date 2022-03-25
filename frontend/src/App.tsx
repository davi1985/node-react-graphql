import { gql, useQuery } from "@apollo/client";
import { NewUserForm } from "./components/NewUserForm";

export const GET_USER = gql`
  query {
    users {
      id
      name
    }
  }
`;

type User = {
  id: string;
  name: string;
};

function App() {
  const { data, loading } = useQuery<{ users: User[] }>(GET_USER);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="app">
      <h1>Request API with GraphQL</h1>
      <NewUserForm />

      <ul>
        {data?.users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
