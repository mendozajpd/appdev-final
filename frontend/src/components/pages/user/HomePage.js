
import TinderCard from 'react-tinder-card'

function HomePage() {
    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }


    return (
        <div className=" h-100 d-flex justify-content-center align-items-center" style={{ minWidth: '30rem' }}>
            <div className="mx-5 d-flex justify-content-center" style={{ width: '20rem' }}>
                <TinderCard onSwipe={onSwipe} flickOnSwipe onCardLeftScreen={() => onCardLeftScreen('Profile')} preventSwipe={['up', 'down']}>
                    <div className='text-white bg-success no-select'>
                        Hello, World!
                    </div>
                </TinderCard>
            </div>
        </div>
    )
}

export default HomePage;

