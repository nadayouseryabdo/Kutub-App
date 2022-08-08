import "./audioprofile.scss";
import DragDrop from "../audio/audiopage";
import photo1 from "../../assets/imgs/book2.jpg";
import RecordView from "../../components/record/record";

function AudioProfile({ photo, title }) {
  return (
    <div className="AudioProfileContainer">
      <div>
        <img src={photo ? photo : photo1} alt="" />
        <p>{title ? title : "Gosten"}</p>
      </div>
      <div>
        <div className="dragAndDropDiv">
          <DragDrop />
        </div>
        <div className="recordAudioDiv">
          <RecordView />
        </div>
      </div>
    </div>
  );
}

export default AudioProfile;
