import Image from "next/image";
import { Form } from "./Form";
import styles from "./page.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			<Form />
		</main>
	);
}
