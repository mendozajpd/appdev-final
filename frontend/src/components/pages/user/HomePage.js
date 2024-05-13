import React, { useState, useMemo, useRef } from 'react'
import TinderCard from 'react-tinder-card'
import { Image, Card, Row, Button, Col } from "react-bootstrap";

// Prime React
import { Dialog } from 'primereact/dialog';

function HomePage() {

    const profiles = [
        {
            id: 1,
            name: 'Mark',
            image: 'https://via.placeholder.com/150',
            image2: 'https://via.placeholder.com/300',
        },
        {
            id: 2,
            name: 'Bob',
            image: 'https://via.placeholder.com/150',
            image2: 'https://via.placeholder.com/300',
        },
        {
            id: 3,
            name: 'Wade',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 4,
            name: 'Ruby',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 5,
            name: 'Aizell',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 6,
            name: 'Sean',
            image: 'https://via.placeholder.com/150',
        },
    ]

    const [visible, setVisible] = useState(false);

    const [currentIndex, setCurrentIndex] = useState(profiles.length - 1)
    const [lastDirection, setLastDirection] = useState()
    const currentIndexRef = useRef(currentIndex)



    const childRefs = useMemo(
        () =>
            Array(profiles.length)
                .fill(0)
                .map((i) => React.createRef()),
        []
    )

    const updateCurrentIndex = (val) => {
        setCurrentIndex(val)
        currentIndexRef.current = val
    }

    const canGoBack = currentIndex < profiles.length - 1

    const canSwipe = currentIndex >= 0

    const swiped = (direction, nameToDelete, index) => {
        setLastDirection(direction)
        updateCurrentIndex(index - 1)
    }

    const outOfFrame = (name, idx) => {
        console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
        currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    }

    const swipe = async (dir) => {
        if (canSwipe && currentIndex < profiles.length) {
            await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
        }
    }

    const goBack = async () => {
        if (!canGoBack) return
        const newIndex = currentIndex + 1
        updateCurrentIndex(newIndex)
        await childRefs[newIndex].current.restoreCard()
    }

    const openProfileDetails = () => {
        console.log('open profile details')
        setVisible(true)
    }

    // const onSwipe = (direction) => {
    //     console.log('You swiped: ' + direction)
    // }

    // const onCardLeftScreen = (myIdentifier) => {
    //     console.log(myIdentifier + ' left the screen')
    // }

    const cardHeight = '70vh';
    const cardWidth = '50vh';


    return (
        <div className=" h-100 d-flex justify-content-center py-5" style={{ minWidth: '50rem' }}>
            <Dialog header="Header" visible={visible} style={{ width: '35vw' }} onHide={() => setVisible(false)}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Dialog>
            <div className="mx-5 d-flex justify-content-center p-5" style={{ width: '20rem' }}>
                {profiles.map((profile, index) => (
                    <TinderCard
                        ref={childRefs[index]}
                        className="position-absolute"
                        onSwipe={(dir) => swiped(dir, profile.name, index)}
                        onCardLeftScreen={() => outOfFrame(profile.name, index)}
                        preventSwipe={['up', 'down']}
                    >
                        <Card className="no-select" style={{ width: cardWidth, height: cardHeight }}>
                            <div style={{ position: 'absolute', textAlign: 'center', width: cardWidth, height: cardHeight }}>
                                <Image src={profile.image} style={{ objectFit: 'cover', width: cardWidth, height: cardHeight }} />
                            </div>
                            <Card.Body className='z-index-5 d-flex align-items-center justify-content-between'>
                                {/* <i onClick={() => console.log('left')} className='fa fa-arrow-left display-7 clickable text-white' />
                                <i onClick={() => console.log('right')} className='fa fa-arrow-right display-7 clickable text-white' /> */}
                            </Card.Body>
                            <Card.Footer className='z-index-5 card-footer d-flex justify-content-between'>
                                <div>
                                    <div className='display-7 text-bold text-white'>
                                        {profile.name}, AGE
                                    </div>
                                    <div className='display-8 text-white'>
                                        Location
                                    </div>
                                </div>
                                <div>
                                    <i onClick={() => openProfileDetails()} className='clickable fa fa-info-circle text-white display-7' />
                                </div>
                            </Card.Footer>
                        </Card>
                    </TinderCard>
                ))}
            </div>
            <div className='align-items-end d-flex z-index-10 match-options' style={{ width: '25rem' }}>
                <Row style={{ width: '50rem' }}>
                    <Col className='justify-content-center d-flex'>
                        <Button onClick={() => goBack()} variant='light' style={{ width: '5rem', height: '3rem', border: '1px solid #a7a7a7' }}>
                            <i className='fa fa-undo display-7 text-yellow' />
                        </Button>
                    </Col>
                    <Col className='justify-content-center d-flex'>
                        <Button onClick={() => swipe('left')} variant='light' style={{ width: '5rem', height: '3rem', border: '1px solid #a7a7a7' }}>
                            <i className='fa fa-times display-7 text-red' />
                        </Button>
                    </Col>
                    <Col className='justify-content-center d-flex'>
                        <Button onClick={() => swipe('right')} variant='light' style={{ width: '5rem', height: '3rem', border: '1px solid #a7a7a7' }}>
                            <i className='fa fa-heart display-7 text-softgreen' />
                        </Button>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default HomePage;

