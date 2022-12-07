import './style/main_page.css'

const main_page = () => {
    return(
        <div className='main'>
            <div className='form'>
            <input className='userInput' placeholder='Username...' onChange={(event) => {
                setUsername(event.target.value);
            }} />
            <button> Enter Chat</button>
            </div>
        </div>
    )
}

export default main_page;