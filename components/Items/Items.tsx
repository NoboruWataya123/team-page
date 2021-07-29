import { ItemsProps } from "./Items.props";
import styles from './Items.module.css'

export default function Items({children}: ItemsProps): JSX.Element {
    return (
        <div className={styles.item}>
            {children}
        </div>
    )
}