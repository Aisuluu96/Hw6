
const Avatar = (props) => {

  return (
    <div className="avatar">
      <img className="kitty" src={props.author.avatarUrl} alt={props.author.name} />
      <p>{props.author.name}</p>
    </div>
  );
};

export default Avatar;
