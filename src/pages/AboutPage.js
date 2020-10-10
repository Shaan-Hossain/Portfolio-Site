import React from 'react'; 
import Hero from "../components/Hero";
import Content from "../components/Content";
function AboutPage(props)
{
    return (
        <div>
         <Hero title ={props.title}> </Hero>

         <Content> 
         <h3 className=" ">I love to Learn</h3>
            <p className="my-4 font-weight-normal lead"> I am currently a Computer Engineering (B.Eng) student specializing in Software at Ryerson University. I have a passion to learn new things, especially in both front end and backend development
            from web app development to designing complex systems and databases. I strive to challenge myself by creating personal goals and projects to facilitate my learning and improve myself.
               </p> 

               <h3 className=" ">What I do in my free time</h3>
        </Content>
        </div>
        
    ); 
 
    
} 
export default AboutPage; 