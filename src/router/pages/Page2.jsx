import { useParams } from 'react-router-dom';

const Page2 = () => {
    const { id } = useParams();
    return (
        <div>
            pagev2{id}
        </div>
    )
}

export default Page2;