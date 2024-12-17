import EnterUser from "@/components/enterUser/EnterUser.";
import Welcome from "@/components/welcome/welcome";
import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={styles.flexContainer}>
      <EnterUser />
      <Welcome />
    </div>
  );
}
