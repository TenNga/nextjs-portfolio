import Card from "@/components/Card";
import CoffeeIcon from "../../../public/images/coffee.png"
import MusicIcon from "../../../public/images/headphone.png"
import DuckIcon from "../../../public/images/duck.png"
import Image from 'next/image'

function MainHobby({className}:{className?:string}){
    const hobbies = [
        {
            title: 'Experience',
            body: 'More than 3+ years',
            icon: CoffeeIcon
        },
        {
            title: 'Education',
            body: 'Computer Science',
            icon: MusicIcon
        },
        {
            title: 'Domain',
            body: 'E-commerce site',
            icon: DuckIcon
        }
    ];
    const renderCards = hobbies.map(hobby => {
        return (
            <Card key={hobby.title} className="w-full py-8 flex flex-col items-center hover:scale-105"> 
                <header>
                    <Image src={hobby.icon} alt={hobby.title} className="min-w-[40px] min-h-[48px] mb-[16px]" />
                </header>
                <section className="text-center">
                    <h1 className="text-[color:var(--true-white)] mb-[8px] text-base font-bold">{hobby.title}</h1>
                    <p className="text-sm">{hobby.body}</p>
                </section>
            </Card>
        )
    })
    return(
        <div className={`flex justify-between gap-x-5 ${className}`}>
            {renderCards}
        </div>
    )
};

export default MainHobby;