import React from 'react';
import Banner from './Banner';
import Footer from './Footer';

const Home = () => {
    return(
        <div>
            <Banner/>
            <section id="three" className="wrapper align-center">
                <div className="inner">
                    <div className="flex flex-2">
                        <article>
                            <p><h4>더 많은 소통 : 아는 것을 알려주세요</h4></p>
                            <p><h4>더 많은 공유 : 가진 것을 나눠주세요</h4></p>
                            <p><h4>더 많은 교류 : 다양한 사람과 대화하세요</h4></p>
                            <p><h4>더 많은 정보 : 새로운 기술을 받아드리세요</h4></p>
                        </article>
                        <article>
                            <p><h4>OpenSource를 준수합니다</h4></p>
                            <p><h4>다양한 언어, 기술로 우리의 주제를 표현합니다</h4></p>
                            <p><h4>아이디어란 생각을 프로젝트라는 결과로 구현합니다</h4></p>
                            <p><h4>다양한 사람들과 교류해 자신의 지식을 키우세요</h4></p>
                        </article>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
};

export default Home;