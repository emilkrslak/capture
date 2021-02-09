import home1 from '../img/home1.png';

//Framer
import {motion} from 'framer-motion';

//Design
import {About, Description, Image, Hide} from '../styles.js';

//Animation
import {titleAnim, fade, photoAnimation} from '../animation';

const AboutSection = () => {
    return(
        <About>
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2 variants={titleAnim}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Contact us for any photography or videography ideas that you have. We have professionals with amazing skils.</motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnimation} src={home1} alt="guy with a camera"></motion.img>
            </Image>
        </About>
    )
}

export default AboutSection;