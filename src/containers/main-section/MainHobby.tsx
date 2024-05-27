import Card from "@/components/Card.tsx";

function MainHobby(){
    const valueArr = [1,2,3];
    const renderCards = valueArr.map(hobby => {
        return <Card> 
                <h1>hobby</h1>
                <p>Sub heading</p>
            </Card>
    })
    return(
        <div className="flex justify-between">
            {renderCards}
        </div>
    )
};

export default MainHobby;