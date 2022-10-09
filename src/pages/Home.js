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
      <a href="#"> DOWNLOAD CV </a>

      {/* Add google drive link and make it public */}

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