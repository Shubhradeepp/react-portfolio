import { useEffect, useRef, useState } from "react";
import photos from "../../data/gallery.json";
import styles from "./Gallery.module.css";

// Photos open in a native <dialog>: focus is trapped, Escape closes it, and it works without extra libraries.
export const Gallery = () => {
  const [index, setIndex] = useState(null);
  const dialogRef = useRef(null);
  const total = photos.length;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index !== null && !dialog.open) dialog.showModal?.();
    if (index === null && dialog.open) dialog.close();
  }, [index]);

  const step = (delta) => setIndex((i) => (i === null ? i : (i + delta + total) % total));

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  };

  const current = index === null ? null : photos[index];

  return (
    <div className={styles.wrap}>
      <h3 className={styles.title}>Snapshots</h3>
      <p className={styles.hint}>Tap a photo to see it larger.</p>

      <ul className={styles.grid}>
        {photos.map((p, i) => (
          <li key={p.src} className={styles.item}>
            <button
              type="button"
              className={styles.polaroid}
              onClick={() => setIndex(i)}
              aria-label={`Open photo: ${p.caption}`}
            >
              <img src={p.src} alt={p.alt} width="400" height="500" loading="lazy" />
              <span className={styles.cap}>{p.caption}</span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-label="Photo viewer"
        onClose={() => setIndex(null)}
        onKeyDown={onKeyDown}
        onClick={(e) => e.target === dialogRef.current && setIndex(null)}
      >
        {current && (
          <figure className={styles.viewer}>
            <img src={current.src} alt={current.alt} />
            <figcaption>
              {current.caption}
              <span className={styles.count}>
                {index + 1} of {total}
              </span>
            </figcaption>
          </figure>
        )}
        <div className={styles.controls}>
          <button type="button" className="btn btn-secondary" onClick={() => step(-1)}>
            Previous
          </button>
          <button type="button" className="btn btn-secondary" onClick={() => step(1)}>
            Next
          </button>
          <button type="button" className="btn btn-primary" onClick={() => setIndex(null)}>
            Close
          </button>
        </div>
      </dialog>
    </div>
  );
};
