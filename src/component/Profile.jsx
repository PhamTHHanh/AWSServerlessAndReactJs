import avatar from "../assets/avatar.jpeg";

function Avatar({ person, size, children }) {
  return (
    <>
      <img
        className="avatar"
        src={person.image}
        alt={person.name}
        width={size}
        height={size}
      />
      {children}
    </>
  );
}

export default function Profile(props) {
  console.log(props);
  return (
    <>
      <Avatar person={{ name: "Lin Lanying", image: avatar }} size={500}>
        <h2>Hello everyone, nice to meet you</h2>
      </Avatar>
      <h3>
        {props.profile.lastName && props.profile.firstName
          ? `My name is ${props.profile.lastName} ${props.profile.firstName}. `
          : ""}
        <span>
          {props.profile.email ? `My email is ${props.profile.email}` : ""}
        </span>
      </h3>
    </>
  );
}
