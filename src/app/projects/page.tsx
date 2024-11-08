import Image from "next/image";

export default function ProjectPage (){
    return (
    <div>
        <div className="portfolio" id="portfolio">
            <h2 className="heading"> My TypeScript Node Projects</h2><br/><br/><br/><br/><br/>
        </div>

        <div className="portfolio-container">

            <div className="portfolio-box">
                <Image src="/sc.jpg" alt="simple calculator" width={600} height={450}/>
                <div className="portfolio-layer">
                    <h4>Simple Calculator</h4>
                    <p>Built a simple calculator using TypeScript for basic arithmetic operations.</p>
                    <a href="https://github.com/ANZIE05/Simple-Calculator-Assignment-"  target="_blank" rel="noopener noreferrer"><i className='bx bx-link-external'></i></a>
                </div>
            </div>

            <div className="portfolio-box">
                <Image src="/atm.jpg" alt="ATM" width={600} height={450}/>
                <div className="portfolio-layer">
                    <h4>ATM</h4>
                    <p>ATM simulation built with TypeScript, enabling secure transactions and operations.</p>
                    <a href="https://github.com/ANZIE05/ATM-Machine-"  target="_blank" rel="noopener noreferrer"><i className='bx bx-link-external'></i></a>
                </div>
            </div>

            <div className="portfolio-box">
                <Image src="/ct.jpeg" alt="countdown timer" width={600} height={450}/>
                <div className="portfolio-layer">
                    <h4>Countdown Timer</h4>
                    <p>Interactive countdown timer built with TypeScript, featuring precise time tracking.</p>
                    <a href="https://github.com/ANZIE05/Countdown-Timer"  target="_blank" rel="noopener noreferrer"><i className='bx bx-link-external'></i></a>
                </div>
            </div>

            <div className="portfolio-box">
                <Image src="/cc.png" alt="currency converter" width={600} height={450}/>
                <div className="portfolio-layer">
                    <h4>Currency Converter</h4>
                    <p>Currency Converter built with TypeScript for quick, accurate rate conversions.</p>
                    <a href="https://github.com/ANZIE05/Currency-Converter"  target="_blank" rel="noopener noreferrer"><i className='bx bx-link-external'></i></a>
                </div>
            </div>

            <div className="portfolio-box">
                <Image src="/qg.jpeg" alt="quiz system" width={600} height={450}/>
                <div className="portfolio-layer">
                    <h4>Quiz System</h4>
                    <p>Interactive quiz system built with TypeScript for seamless learning experiences.</p>
                    <a href="https://github.com/ANZIE05/Quiz-System"  target="_blank" rel="noopener noreferrer"><i className='bx bx-link-external'></i></a>
                </div>
            </div>

            <div className="portfolio-box">
                <Image src="/gng.jpg" alt="guessing number game" width={600} height={450}/>
                <div className="portfolio-layer">
                    <h4>Guessing Number Game</h4>
                    <p>Interactive Guessing Number Game: Built with TypeScript for fun learning!</p>
                    <a href="https://github.com/ANZIE05/Number-Guessing-Game"  target="_blank" rel="noopener noreferrer"><i className='bx bx-link-external'></i></a>
                </div>
            </div>

            <div className="portfolio-box">
                <Image src="/sms.png" alt="student management system" width={600} height={450}/>
                <div className="portfolio-layer">
                    <h4>Student Management System</h4>
                    <p>Student Management System built with TypeScript for efficient data handling.</p>
                    <a href="https://github.com/ANZIE05/Student-Management-System"  target="_blank" rel="noopener noreferrer"><i className='bx bx-link-external'></i></a>
                </div>
            </div>

            <div className="portfolio-box">
                <Image src="/ag.jpeg" alt="adventure game" width={600} height={450}/>
                <div className="portfolio-layer">
                    <h4>Adventure Game</h4>
                    <p>Adventure game built with TypeScript, offering interactive, immersive gameplay experience.</p>
                    <a href="https://github.com/ANZIE05/Adventure-Game"  target="_blank" rel="noopener noreferrer"><i className='bx bx-link-external'></i></a>
                </div>
            </div>

            <div className="portfolio-box">
                <Image src="/tdl.jpeg" alt="to-do list" width={600} height={450}/>
                <div className="portfolio-layer">
                    <h4>To-do List</h4>
                    <p>Interactive To-Do List built with TypeScript for efficient task management.</p>
                    <a href="https://github.com/ANZIE05/To_do-list"  target="_blank" rel="noopener noreferrer"><i className='bx bx-link-external'></i></a>
                </div>
            </div>

            <div className="portfolio-box">
                <Image src="/wc.jpg" alt="word counter" width={600} height={450}/>
                <div className="portfolio-layer">
                    <h4>Word Counter</h4>
                    <p>Word counter tool built with TypeScript for efficient text analysis.</p>
                    <a href="https://github.com/ANZIE05/Word-Counter"  target="_blank" rel="noopener noreferrer"><i className='bx bx-link-external'></i></a>
                </div>
            </div>

            <div className="portfolio-box">
                <Image src="/oop.jpeg" alt="oop" width={600} height={450}/>
                <div className="portfolio-layer">
                    <h4>OOP</h4>
                    <p>Object-Oriented Programming in TypeScript: Structured, reusable code with classes.</p>
                    <a href="https://github.com/ANZIE05/OOP"  target="_blank" rel="noopener noreferrer"><i className='bx bx-link-external'></i></a>
                </div>
            </div>

            <div className="portfolio-box">
                <Image src="/bank1.jpeg" alt="oop my bank" width={600} height={450}/>
                <div className="portfolio-layer">
                    <h4>OOP My Bank</h4>
                    <p>OOP-based banking system in TypeScript for secure, efficient transactions.</p>
                    <a href="https://github.com/ANZIE05/OOP-My-Bank"  target="_blank" rel="noopener noreferrer"><i className='bx bx-link-external'></i></a>
                </div>
            </div>

        </div>

    </div>
    );
}
