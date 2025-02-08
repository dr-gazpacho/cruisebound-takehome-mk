import { Card } from "./Card"
import { multipleCruises } from "./mock-data"

export const CardContainer: React.FC = () => {


    return (
        <main>
            {multipleCruises.map((cruise, index) => {
                return (
                    <Card key={index} cruise={cruise}/>
                )
            })}
        </main>
    )
}