import BioCard from './BioCard';
import './About.css';

const inlineStyle = `style="color: #dfa440;" onmouseover='this.style.color="#e97a29"' onmouseout='this.style.color="#dfa440"'`;
const contributors = [
    // {
    //     name: 'Lonnie Lowery',
    //     bio: `Dr. Lowery is an Exercise Physiologist (Ph.D.) and Nutrition professor of eight years. He's also a former competitive bodybuilder (light-heavyweight), been a freelance writer for most top bodybuilding/fitness mags, and is a (real) researcher and lecturer. In bodybuilding, he has snagged a runner-up placing at the Mountaineer Cup (a Midwest event) and was a 2x finalist in the NPC Mr. Midwest USA, plus the NPC Upper Midwest. Dr. L is sort of an "anti-guru" and consumer advocate and has written much for <a ${inlineStyle} href="https://www.t-nation.com/" target="_blank">t-nation.com</a>. That's him on the left in "warrior nerd" mode with long time friend, Fortress, competing in 2003, and lecturing at a hospital in 2009.`,
    //     photos: [
    //         { src: 'Lon_Fortress_NY.jpg', alt: 'lonnie-1' },
    //         { src: 'Lonnie_Lowery_comp-x2.jpg', alt: 'lonnie-2' },
    //         { src: 'Lonnie_Lowery_hosp_lecture2009.jpg', alt: 'lonnie-3' }
    //     ]
    // },
    {
        name: 'Phil Stevens',
        bio: `Phil Stevens is a successful competitive powerlifter and strongman and holder of multiple national powerlifting titles. Phil can bounce back from injuries with healing powers like the comic book hero Wolverine and has an iron will befitting a war-scarred veteran of the strength game. Check out his Topeka, Kansas gym at <a ${inlineStyle} href="https://strengthguild.com/" target="_blank">strengthguild.com</a>.`,
        photos: [
            { src: 'Phil_squat.jpg', alt: 'phil-1' },
            { src: 'phil-stevens.jpg', alt: 'phil-2' },
            { src: 'philpose3.jpg', alt: 'phil-3' }
        ]
    },
    // {
    //     name: 'Rob "Fortress" Fortney',
    //     bio: `Fortress is a former competitive bodybuilder AND powerlifter (still competing), as well as a journalist and former editor at some of the most influential publications in the business. His credits include editorial roles at mags like Muscle Mag International, Peak Training Journal, and others, as well as editorial or writer roles a number of internet publications from Virtual Muscle to <a ${inlineStyle} href="https://www.t-nation.com/" target="_blank">t-nation.com</a>. You've probably read his stuff, whether he was a credited author or ghost writer. Rob has been co-hosting Experiments vs. Experience, underwritten by various web sites, with Lonnie, since pre-podcasting days. Rob is dangerously close to a 700-lb natural squat (success at 665 in second photo below).`,
    //     photos: [
    //         { src: 'rob_bench405.gif', alt: 'rob-1' },
    //         { src: 'rob gets 665.gif', alt: 'rob-2' },
    //         { src: 'rob chmpns day_300dpi.jpg', alt: 'rob-3' }
    //     ]
    // },
    {
        name: 'Mike T. Nelson',
        bio: `Dr. Mike T. Nelson has an impressive background in both engineering and exercise physiology. His research background, multiple certifications, broad professional network, and wide-reaching business efforts help educate the strength training public. Mike also competes in a variety of strength competitions including grip contests.`,
        photos: [
            { src: 'Mike_T_Nelson.jpg', alt: 'mike-1' }
        ]
    }
];

const About = () => {
    return (
        <div className="About">
            <h1 className="About-title">Meet the Contributors</h1>
            <div className="About-container">
                {contributors.map(contributor => <BioCard key={contributor.name} contributor={contributor} />)}
            </div>
            <div className="About-info">
                <h4 className="About-subtitle">Hey!</h4>
                <p>The guys at IronRadio.org have been all over the mags!&nbsp;
                    <a className="About-link" href="https://www.muscleandfitness.com/" target="_blank" rel="noreferrer">Muscle & Fitness</a>,&nbsp;
                    <a className="About-link" href="https://experiencelife.lifetime.life/" target="_blank" rel="noreferrer">Experience Life</a>,&nbsp;
                    <a className="About-link" href="https://mensfitness.co.uk/" target="_blank" rel="noreferrer">Men's Fitness UK</a>,
                    and <a className="About-link" href="https://www.menshealth.com/" target="_blank" rel="noreferrer">Men's Health</a> too!
                </p>
                <img className="About-img" src="img/2010_mags.jpg" alt="mags" />
            </div>
        </div>
    )
}

export default About;