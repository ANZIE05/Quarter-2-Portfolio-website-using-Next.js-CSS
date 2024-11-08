import Image from "next/image";
import pp from "/public/pp.jpg";


export default function Home() {
  return (
    <div>
      
    
       <div className="home">
        <div className="home-image">
          <Image src={pp} alt="profile picture" width={360} height= {350}/> </div>

        <div className="home-content">
          <h1>Hi, I am Qurat Ul Ain Ismail</h1>
          <h3>Frontend Developer</h3>
          <h3>Graphic Designer</h3>
          <h3>Digital Marketer</h3>
          <h3>MS Office</h3>
          <p>Certified Graphic Designer and Digital Marketer with expertise in MS Office, I bring a creative edge to every project. Currently enhancing my front-end development skills, I am passionate about crafting visually compelling and user-friendly designs. Click &quot;Read More&quot; to learn about my journey, skills, and commitment to impactful work.</p>

          <div className="home-sci">
            
            <a href="https://www.linkedin.com/in/qurat-ul-ain1005" target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin-square'></i></a>
            
            <a href="https://github.com/ANZIE05" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
          </div>

          <a href="/about" className="btn">Read More</a>
        </div>
        </div>
             
    </div>

  );
}
