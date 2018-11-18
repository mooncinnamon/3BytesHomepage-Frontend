import React from 'react';
import Banner from 'Banner';
import Footer from 'Footer';

const Home = () => {
    return(
        <div>
            <Banner/>
            <section id="three" className="wrapper align-center">
                <div className="inner">
                    <div className="flex flex-2">
                        <article>
                            Communicate and Activate in Diversity

                            Communicate with people which have same interested field with you. Study about the field with same interested group. Progress project with yourself or with making groups. Participate Community’s own Hackerton, CTF or external contest exhibits with diverse peoples.


                        </article>
                        <article>
                            Make research with Open Labs
                            Suggest your own topics  that you want to study with peoples. Like Algorithms, Codes, languages, or techniques that you imagine or plan with. Don’t make your idea only stay in ‘idea’. Now make you idea come real in world with open labs! Research your idea with lots of people’s opinions and knowledges!
                        </article>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
};

export default Home;