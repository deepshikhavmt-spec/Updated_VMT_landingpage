import { useEffect } from "react";
import "./VideoModal.css";

export default function VideoModal({ open, onClose }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => (document.body.style.overflow = "");
  }, [open]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (open) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="video-overlay" onClick={onClose}>
      <div
        className="video-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="video-close"
          type="button"
          onClick={onClose}
          aria-label="Close video"
        >
          ×
        </button>

        <iframe
          src="https://player.cloudinary.com/embed/?cloud_name=dl5dfdwc2&public_id=Sfurti-Sahare_owzj4r&autoplay=true&muted=true"
          allow="autoplay; fullscreen; encrypted-media"
          allowFullScreen
          title="Sfurti Sahare Video"
        />
      </div>
    </div>
  );
}
