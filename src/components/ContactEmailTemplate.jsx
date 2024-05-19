export default function ContactEmailTemplate({ message }) {
    const year = new Date().getFullYear();
    const styles = {
        contentContainer: {
            fontFamily: "'Geist', sans-serif",
            display: "block",
            width: "fit-content",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
            textDecoration: "none",
        },
        infoContainer: {
            fontFamily: "'Geist', sans-serif",
            fontSize: "16px",
            fontWeight: "400",
            textDecoration: "none",
            h3: {
                fontWeight: "600",
                fontSize: "18px",
                color: "#333333",
                textDecoration: "none",
            },
            p: {
                fontSize: "16px",
                display: "block",
                color: "#333333",
                marginBlockStart: "1em",
                marginBlockEnd: "1em",
                marginInlineStart: "0px",
                marginInlineEnd: "0px",
                textDecoration: "none",
            },
            ul: {
                display: "block",
                listStyleType: "disc",
                marginBlockStart: "1em",
                marginBlockEnd: "1em",
                marginInlineStart: "0px",
                marginInlineEnd: "0px",
                paddingInlineStart: "40px",
                textDecoration: "none",
            },
            li: {
                fontSize: "16px",
                marginBottom: "10px",
                color: "#333333",
                textDecoration: "none",
            },
            a: {
                fontWeight: "bold",
                color: "#0070f3",
                textDecoration: "none",
            },
            quotation: {
                fontSize: "14px",
                fontStyle: "italic",
                textAlign: "center",
                marginTop: "20px",
                marginBottom: "20px",
                color: "#555555",
                textDecoration: "none",
            },
        },

        footer: {
            fontFamily: "'Geist', sans-serif",
            display: "block",
            width: "100%",
            paddingTop: "30px",
            header: {
                width: "fit-content",
                marginLeft: "auto",
                marginRight: "auto",
            },
            p: {
                color: "#8c8c8c",
                fontSize: "14px",
                lineHeight: "24px",
                textAlign: "center",
            },
            a: {
                color: "#454545",
                fontWeight: "bold",
                textDecoration: "none",
            },
            img: {
                width: "60px",
                borderTopWidth: "0px",
                borderBottomWidth: "0px",
                borderLeftWidth: "0px",
                borderRightWidth: "0px",
                borderTopStyle: "solid",
                borderBottomStyle: "solid",
                borderLeftStyle: "solid",
                borderRightStyle: "solid",
            },
        },
    };

    return (
        <>
            <div style={styles.contentContainer}>
                <div style={styles.infoContainer}>
                    <h3 style={styles.infoContainer.h3}>It's a pleasure to meet you!</h3>
                    <p style={styles.infoContainer.p}>
                        I've successfully received your email and I'll be working on getting back to you as soon as
                        possible. Don't hesitate to reach me out again if you feel that I can help you with anything
                        else. In the meantime, here's some information you might find useful:
                    </p>
                    <ul style={styles.infoContainer.ul}>
                        <li style={styles.infoContainer.li}>
                            <strong>You'll receive an answer from me within the next 24 hours. </strong> Otherwise,
                            please check your spam folder or contact me again. There's also a chance that you've contact
                            me in a non-working hour or day, so please be patient.
                        </li>
                        <li style={styles.infoContainer.li}>
                            I'm sure you are curious about what can I offer and how can I help you. I invite you to
                            check out my social media profiles and my website to learn more about me. Here you have my{" "}
                            <a style={styles.infoContainer.a} href="https://linkedin.com/in/xlgabriel/" target="_blank">
                                LinkedIn
                            </a>{" "}
                            and my{" "}
                            <a style={styles.infoContainer.a} href="https://github.com/xlgabriel/" target="_blank">
                                GitHub
                            </a>{" "}
                            links. Now, take a look at the message I got from you:
                        </li>
                        <p style={styles.infoContainer.quotation}>"{message}"</p>
                    </ul>
                    <p style={styles.infoContainer.p}>
                        I'm glad you're interested to get to know me better. I'm looking forward to our conversation!
                        Remember, I'm here to help you with anything you need.
                    </p>
                    <p style={styles.infoContainer.p}>Best regards,</p>
                </div>
                <footer style={styles.footer}>
                    <div style={styles.footer.header}>
                        <a
                            style={styles.footer.a}
                            href="https://xlgabriel.github.io/portfolio/"
                            target="_blank"
                            data-saferedirecturl="https://xlgabriel.github.io/portfolio/"
                            rel="noreferrer nowrapper"
                        >
                            <img
                                style={styles.footer.img}
                                src="https://i.imgur.com/5yKGKVx.gif"
                                alt="Pepeprogramming"
                            />
                        </a>
                    </div>
                    <p style={styles.footer.p}>
                        <a style={styles.footer.a} href="">
                            Gabriel Jeannot
                        </a>{" "}
                        <br />
                        Feel free to reply to this email if you have any questions or concerns.
                    </p>
                </footer>
            </div>
        </>
    );
}
