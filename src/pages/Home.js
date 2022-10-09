import mypic from "../images/mypic.jpeg";

const Home = () => {
  return (
    <section id="main-home" className="main">

      <h1> Moussa </h1>
      <h2> Full Stack <br/>
        Web Developer</h2>
      <p> Welcome to my page!<br/>
      <br/> Please don't hesitate to get in touch with me
      <br/> for web development job opportunities or
        potential collaborations.
      </p>
      <br/>
      <a href="https://drive.google.com/file/d/1c4-coe2J26VIoypSnF56vvZ9tOanyPjg/view?usp=sharing" target="_blank" noreferrer="true"> DOWNLOAD CV </a>
      
      <section>
        <div className="container">
          <div className="mypic">
            <img src={mypic} className="roundpic" alt=""/>
          </div>
        </div>
      </section>
    </section>
  )
};

export default Home