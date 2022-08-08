
import { ReactMediaRecorder } from "react-media-recorder";
import { Button } from "@mui/material";

const RecordView = () => (
  <div>
    <ReactMediaRecorder
      audio
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
        <div className="RecordingDiv">
          <p>{status}</p>
          <audio src={mediaBlobUrl} controls /><br />
          <Button variant="contained" onClick={startRecording}>Start Recording</Button>
          <Button variant="contained" onClick={stopRecording}>Stop Recording</Button>
        </div>
      )}
    />
  </div>
);
export default RecordView;