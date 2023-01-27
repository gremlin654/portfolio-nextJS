import MainTitle from '../MainTitle/MainTitle';
import styles from './Skills.module.scss';
import SkillsItem from './SkillsItem/SkillsItem';

const Skills = () => {
  return (
    <section className={styles.skills} id="skills">
      <div className="container">
        <MainTitle text="навыки" />
      </div>
      <div className="sub-container">
        <ul className={styles.skills__list}>
          <SkillsItem
            title="Языки програмирования"
            text="Javascript / TypeScript"
            iconClass={styles.skills__web}
          />
          <SkillsItem
            title="Навыки Front-end"
            text="React, Redux toolkit, Next.js, HTML, CSS, SASS, Webpack, Gulp, Figma, GIT"
            iconClass={styles.skills__front}
          />
          <SkillsItem
            title="UI библиотеки"
            text="Material UI, React Bootstrap "
            iconClass={styles.skills__ux}
          />
          <SkillsItem
            title="Навыки Back-end"
            text="Node.js(Basic), Postman"
            iconClass={styles.skills__back}
          />
        </ul>
      </div>
    </section>
  );
};

export default Skills;
