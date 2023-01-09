import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

const Home = () => {
    
    const navigate = useNavigate();

    function goBack() {
        navigate('/');
    }
    
    return (
        <div>
            <BiArrowBack onClick={goBack} />
        </div>
    )
};

export default Home;