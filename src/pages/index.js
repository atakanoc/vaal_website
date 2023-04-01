import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import glowButtonStyles from '@/styles/GlowButton.module.css'


export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Your Website Title</title>
                <meta name="description" content="Your Website Description" />
                <link rel="icon" href="/favicon.ico"/>
                <link rel="stylesheet" href="https://use.typekit.net/ein4tgq.css"/>
            </Head>

            <BackgroundSection backgroundImage={"/landing_background_1.svg"}>
                <div className={styles.roundedBox}>
                    <h1 className={`${styles.heading} ${styles.breakLines}`}>
                        Valorant Andromeda{'\n'}Ascendants League
                    </h1>
                    <h2 className={styles.subheading}>
                        Introducing a new way of play, featuring innovative systems designed to create a more enjoyable
                        and competitive gaming experience. Open to all skill levels.
                    </h2>
                    <div className={styles.buttonGroup}>
                        <GlowButton color="#3786C9" size="medium">Join Us</GlowButton>
                        <GlowButton color="#8E35B9" size="large">Features</GlowButton>
                    </div>
                </div>
            </BackgroundSection>


            <div className={styles.quoteBlock}>
                <div className={styles.quoteWrapper}>
                    <img className={styles.logo} src="alien_logo.png" alt="Logo" />
                    <h2 className={styles.quote}>
                        Space themed ranks from<br />
                        Meteor -&gt; Nebula -&gt; Multiverse
                    </h2>
                </div>
            </div>

            <BackgroundSection backgroundImage={"/landing_background_2.svg"}>
            </BackgroundSection>

            {/* Your other components and content go here */}
        </div>
    )
}

const GlowButton = ({ color, children }) => {
    return (
        <button
            style={{ backgroundColor: color, boxShadow: `0 0 6px ${color}` }}
            className={`${glowButtonStyles.glowButton} ${glowButtonStyles.button}}`}>
            {children}
        </button>
    );
};

const BackgroundSection = ({ children, backgroundImage }) => {
    return (
        <div
            style={{ backgroundImage: `url(${backgroundImage})` }}
            className={styles.backgroundSection}>
            {children}
        </div>
    );
}


