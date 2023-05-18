export default function UserCard(props) {
  const { user } = props;
  return (
    <div>
      <p>UserCard</p>
      <div>
        <p>{user.id}</p>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.role}</p>
        <p>{user.createdAt}</p>
        <br />
      </div>
    </div>
  );
}
