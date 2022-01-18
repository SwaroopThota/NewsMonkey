import React from 'react'

function LoadingSpinner(props) {
    return (
        <div className='text-center my-3'>
            <div className={`spinner-border text-${props.mode==='light'?'dark':'light'}`} role="status"></div>
        </div>
    )
}

export default LoadingSpinner
