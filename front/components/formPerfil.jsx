
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
const formPerfil = () => (
    <div className= "ProfileComplete">
            <div className= "PicAndText">
                    <div className="PicAndTitle">
                        <p>
                                <strong className='mesCalendar'>Titulo foto</strong>
                        </p> 
                            
                        <div className="pic">
                            <Image src='https://proyectos.chicasentecnologia.org/mujeresensteam/assets/images/virginia-albarracin.jpg' className = 'image' roundedCircle />
                        </div>

                    </div>
                    <div className="Description">
                        <div className="Carrera">
                            <p>
                                Carrera: Ingeniería química
                            </p>
                        </div>
                    </div>
            </div>


            <div className="videoWrapper">
                <iframe width="860" height="640" src="http://www.youtube.com/embed/n_dZNLr2cME?rel=0&hd=1" frameborder="0" allowfullscreen></iframe>
            </div>
            <div className= "info">
                Albert Einstein (/ˈaɪnstaɪn/ EYEN-styne;[4] German: [ˈalbɛɐ̯t ˈʔaɪnʃtaɪn] (About this soundlisten); 14 March 1879 – 18 April 1955) was a German-born theoretical physicist[5] who developed the theory of relativity, one of the two pillars of modern physics (alongside quantum mechanics).[3][6]:274 His work is also known for its influence on the philosophy of science.[7][8] He is best known to the general public for his mass–energy equivalence formula E = mc2, which has been dubbed "the world's most famous equation".[9] He received the 1921 Nobel Prize in Physics "for his services to theoretical physics, and especially for his discovery of the law of the photoelectric effect",[10] a pivotal step in the development of quantum theory.

Near the beginning of his career, Einstein thought that Newtonian mechanics was no longer enough to reconcile the laws of classical mechanics with the laws of the electromagnetic field. This led him to develop his special theory of relativity during his time at the Swiss Patent Office in Bern (1902–1909). However, he realized that the principle of relativity could also be extended to gravitational fields, and he published a paper on general relativity in 1916 with his theory of gravitation. He continued to deal with problems of statistical mechanics and quantum theory, which led to his explanations of particle theory and the motion of molecules. He also investigated the thermal properties of light which laid the foundation of the photon theory of light. In 1917, he applied the general theory of relativity to model the structure of the universe.[11][12]

Except for one year in Prague, Einstein lived in Switzerland between 1895 and 1914, during which time he renounced his German citizenship in 1896, then received his academic diploma from the Swiss federal polytechnic school (later the Eidgenössische Technische Hochschule, ETH) in Zürich in 1900. After being stateless for more than five years, he acquired Swiss citizenship in 1901, which he kept for the rest of his life. In 1905, he was awarded a PhD by the University of Zurich. The same year, he published four groundbreaking papers during his renowned annus mirabilis (miracle year) which brought him to the notice of the academic world at the age of 26. Einstein taught theoretical physics at Zurich between 1912 and 1914 before he left for Berlin, where he was elected to the Prussian Academy of Sciences. 
            </div>


    </div>
);

export default formPerfil;