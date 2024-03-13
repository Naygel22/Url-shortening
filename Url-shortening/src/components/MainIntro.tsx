import style from "./MainIntro.module.css"

export function MainIntro() {
  return (
    <div className={style.mainIntroContainer}>
      <div className="textSection">
        <div className="heading">More than just shorter links</div>
        <div className="introDescription">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </div>
        <button className="getStartedButton">Get Started</button>
      </div>
      <div>
        <img
          src="public/images/illustration-working.svg"
          alt=""
          className="illustrationImg"
        />
      </div>
    </div>
  );
}
