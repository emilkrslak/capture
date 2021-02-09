import home1 from '../img/home1.png';

//Framer
import {motion} from 'framer-motion';

//Design
import {About, Description, Image, Hide} from '../styles.js';

const AboutSection = () => {
    return(
        <About>
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>true.</motion.h2>
                    </Hide>
                </motion.div>
                <p>Contact us for any photography or videography ideas that you have. We have professionals with amazing skils.</p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt="guy with a camera"></img>
            </Image>
        </About>
    )
}

export default AboutSection;