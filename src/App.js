import "./App.css";
import SingleComment from "./component/SingleComment";
import guna from "./img/Photo from Gunasekar (1).jpg";
import UserCard from "./component/UserCard";

function App() {
  return (
    <div className="ui comments">
      <UserCard>
        <SingleComment
          name="guna"
          time="3pm"
          profile={guna}
          message="hiibaby"
        />
      </UserCard>
      <UserCard>
        <SingleComment
          name="gunasekar"
          time="1pm"
          profile={guna}
          message="hiibabysound"
        />
      </UserCard>
      <UserCard>
        <SingleComment
          name="sound"
          time="2pm"
          profile={guna}
          message="gunaa hii"
        />
      </UserCard>
    </div>
  );
}

export default App;
