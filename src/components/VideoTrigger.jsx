import "./VideoTrigger.css";
import poster from "../assets/Sfurti-Sahare-poster.png";

export default function VideoTrigger({ onClick }) {
  return (
    <button
      type="button"                 // 🔥 CRITICAL FIX
      className="video-trigger"
      aria-label="Play video"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
      }}
    >
      <img src={poster} alt="Play video" />
      <span className="play-icon">▶</span>
    </button>
  );
}
