import styles from "./VideoSection.module.css";

export function VideoSection() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>Assista ao vídeo</h2>

        <div className={styles.videoWrapper}>
          <iframe
            src="https://www.youtube.com/embed/I_dTi0mTzvg"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
