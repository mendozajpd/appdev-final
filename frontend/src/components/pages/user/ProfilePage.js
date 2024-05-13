import React, { useState, useMemo, useRef } from 'react'
import { Image, Card, Row, Button, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'

// Prime React
import { Dialog } from 'primereact/dialog';

function ProfilePage() {

    const navigate = useNavigate();

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
    const [undoAvailable, setUndoAvailable] = useState(false);



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
        setUndoAvailable(true);
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
        if (!canGoBack || !undoAvailable) return
        const newIndex = currentIndex + 1
        updateCurrentIndex(newIndex)
        setUndoAvailable(false);
        await childRefs[newIndex].current.restoreCard()
    }

    const openProfileDetails = () => {
        console.log('open profile details')
        setVisible(true)
    }

    const cardHeight = '70vh';
    const cardWidth = '50vh';

    const redirectToPets = () => {
        navigate('/pets')
    }

    const redirectToEditProfile = () => {
        navigate('edit')
    }

    return (
        <>
            <div className=" h-100 d-flex justify-content-center py-5 profile-content" style={{ minWidth: '50rem' }}>
                <div className="mx-5 d-flex justify-content-center px-5 profile-card" style={{ width: '30rem' }}>
                    <div className='d-flex flex-column'>
                        <div>
                            <Image src="https://via.placeholder.com/150" style={{ objectFit: 'cover', width: '30rem', height: '30rem' }} />
                        </div>
                        <div className='d-flex p-2 display-7 justify-content-between'>
                            <div className='d-flex'>
                                <div className='text-bold'>
                                    NAME
                                </div>
                                <div className='px-3 display-8 d-flex align-items-end'>
                                    AGE
                                </div>
                            </div>
                            <div>
                                <Button onClick={() => redirectToPets()} variant='light' className='mx-1 text-bold' style={{ border: '1px solid #a7a7a7', borderRadius: '1rem', width: '10rem' }}>
                                    Pets
                                </Button>
                                <Button onClick={() => redirectToEditProfile()} variant='light' className='text-bold' style={{ border: '1px solid #a7a7a7', borderRadius: '1rem', width: '10rem' }}>
                                    Edit
                                </Button>
                            </div>
                        </div>
                        <div className='my-2'>
                            <p className='m-3 text-justify'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfilePage;

