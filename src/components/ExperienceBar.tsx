import { ChallengesContext } from "@/contexts/ChallengesContext";
import styles from "@/styles/components/ExperienceBar.module.css";
import { useContext } from "react";

export function ExperienceBar() {
  const { currentExperience, experienceToNextlevel } = useContext(
    ChallengesContext
  );
  const percentToNextlevel = Math.round(
    (currentExperience * 100) / experienceToNextlevel
  );
  return (
    <header className={styles["experience-bar"]}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextlevel}%` }} />
        <span
          className={styles["current-experience"]}
          style={{ left: `${percentToNextlevel}%` }}
        >
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextlevel} xp</span>
    </header>
  );
}
