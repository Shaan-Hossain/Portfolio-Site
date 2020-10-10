import Card from '../components/Card';
import React from 'react'; 
import sortVisualizer from "../assets/images/Sorting-Visualizer.jpg";
import { Container,Row } from 'react-bootstrap';
 
class Carousel extends React.Component{

    constructor(props)
    {
        super(props); 
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Sorting Algorithm Visualizer',
                    subTitle: 'An application made with React that displays data sets being sorted by different algorithms',
                    imgSrc: sortVisualizer,
                    link: 'https://devgrub.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Garrett Love',
                    subTitle: 'YouTube channel',
                    imgSrc: sortVisualizer, 
                    link: 'https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Evverest',
                    subTitle: 'A social network for developers',
                    imgSrc: sortVisualizer,
                    link: 'https://github.com/garrettlove8/evverest',
                    selected: false
                },
            ]
        }
    }
    handleCardClick =(id, card) => {
           
        let items = [...this.state.items]; 
       items[id].selected = items[id].selected ? false: true; 

       items.forEach(item => {
           if (item.id !== id)
           {    console.log(id);    
               item.selected = false; 
           }
       }); 
       this.setState({
           items 
       });
    }

    makeItems = (items) => {
    return items.map (item => {
        return <Card item = {item} click={(e => this.handleCardClick(item.id,e))} key ={item.id}/> 
    } )
} 
    render()
{ 
    return (
    <Container fluid = {true}>
   <Row className="justify-content-around">
                    {this.makeItems(this.state.items.slice(0, 2))}
                </Row>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items.slice(6, 8))}
                </Row>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items.slice(2, 4))}
                </Row>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items.slice(4, 6))}
                </Row>
    </Container>
    ); 
 
} 
}

export default Carousel; 