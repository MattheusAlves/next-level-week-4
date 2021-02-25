import { ChallengesContext } from "@/contexts/ChallengesContext";
import styles from "@/styles/components/Profile.module.css";
import { useContext } from "react";

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/MattheusAlves.png" alt="Matheus Alves" />
      <div>
        <strong>Matheus Alves</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
