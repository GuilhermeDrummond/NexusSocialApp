import styles from "./styles.module.css"

export default function() {
    return (
        <nav className={styles.nav}>
        <h2>NexusApp </h2>
            <div>
                <label>Feed</label>
                <label>Chat</label>
            </div>
        </nav>
    )
}