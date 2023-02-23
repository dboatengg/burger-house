import heroImage from "../assets/hero__img.webp";

const Hero = () => {
  const style = {
    wrapper: `h-[calc(100%_-_10rem)] flex items-center justify-center relative z-[3] px-0 py-28`,
    content: `grid grid-cols-[repeat(2,1fr)] justify-between items-center h-full widescreen:grid-cols-[1fr] widescreen:grid-rows-[1fr_1fr]`,
    left: `flex flex-col items-start gap-8   widescreen:items-center widescreen:text-center widescreen:order-2`,
    right: `flex justify-end   widescreen:flex widescreen:justify-center widescreen:order-1`,
    title: `text-[10rem] tracking-[0.5rem] font-alfa `,
    subtitle: `font-alfa tracking-[0.5rem]`,
    img: `w-[90%] widescreen:w-4/5`,
    text: `p-4 border-2 border-dashed border-[color:var(--brown)] font-bebas`,
  };

  return (
    <div className={style.wrapper} id="hero">
      <div className={`${style.content} container`}>
        <div className={`${style.left} hero__left`}>
          <p className={style.text}>
            It is a good time for the great taste of burgers
          </p>
          <h1 className={style.title}>BURGER</h1>
          <h2 className={style.subtitle}>WEEK</h2>
        </div>
        <div className={`${style.right} hero__right`}>
          <img className={style.img} src={heroImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
