import styles from "./CustomButton.module.css"

interface CustomButton {
    customButtonName: string,
}

export function CustomButton(props: CustomButton) {
    return (
        <div>
        <button className={styles.btn}>{props.customButtonName}</button>
        </div>
    )
}