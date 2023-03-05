import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons'
import React, { useRef, useState } from 'react'
import ListItem from '../listItem/ListItem'
import './list.scss'

const List = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [distance, setDistance] = useState(0);

    const listRef = useRef();

    const slide = (direction) => {
        setDistance(listRef.current.getBoundingClientRect().x - 60);
        if (direction === "left" && distance < 0) {
            setSlideNumber(slideNumber - 1)
            if (distance <= -330) listRef.current.style.transform = `translateX(${distance + 330}px)`;
            else listRef.current.style.transform = `translateX(0px)`;
        } else if (direction === "right" && distance > -2970) {
            if (distance >= -2740) listRef.current.style.transform = `translateX(${distance - 330}px)`;
            else listRef.current.style.transform = `translateX(-3300px)`;
        }
        setTimeout(() => {
            setDistance(listRef.current.getBoundingClientRect().x - 60);
        }, 1000)

    }

    return (
        <div className='list'>
            <span className="listTitle">
                Continue to Watch
            </span>
            <div className="wrapper">
                <ArrowBackIos className='sliderArrow left' onClick={() => slide("left")} style={{ display: distance >= -1 && "none" }}></ArrowBackIos>
                <div className="container" ref={listRef}>
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </div>
                <ArrowForwardIos className='sliderArrow right' onClick={() => slide("right")} style={{ display: distance <= -2969 && "none" }}></ArrowForwardIos>
            </div>
        </div >
    )
}

export default List