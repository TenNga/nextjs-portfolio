import Card from "@/components/Card.tsx";
import CoffeeIcon from "../../public/images/coffee.png"
import MusicIcon from "../../public/images/headphone.png"
import DuckIcon from "../../public/images/duck.png"
import Image from 'next/image'

function MainHobby(){
    const hobbies = [
        {
            title: 'Coffee',
            body: 'Keeps Me Awake',
            icon: CoffeeIcon
        },
        {
            title: 'Music',
            body: 'Stimulate Creativity',
            icon: MusicIcon
        },
        {
            title: 'Debugger',
            body: 'Identify Problems',
            icon: DuckIcon
        }
    ];
    const renderCards = hobbies.map(hobby => {
        return <Card> 
                <Image src={hobby.icon} alt={hobby.title} />
                <h1>{hobby.title}</h1>
                <p>{hobby.body}</p>
            </Card>
    })
    return(
        <div className="flex justify-between">
            {renderCards}
        </div>
    )
};

export default MainHobby;