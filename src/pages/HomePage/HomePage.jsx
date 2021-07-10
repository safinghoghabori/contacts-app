import {Link} from 'react-router-dom';

const HomePage = () => {
    return (
        <div className='container'>
            <div className='heading'>
                <h1>Contacts App</h1>
                <p>#DPSCHALLANGE</p>
            </div>
            <div className="link__buttons">
                <Link to='/add-contact'>Add Contact</Link>
            </div>
            <div className="link__buttons">
                <Link to='/view-contacts'>View Contacts</Link>
            </div>
        </div>
    )
}

export default HomePage