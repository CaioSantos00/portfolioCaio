export default function boxInfos({ svg, textInfo }) {
    return (
        <>
            <div className='boxContacts'>
                <div className='svgsContacts'>{svg}</div>
            <div className='textInfo'>{textInfo}</div>
            </div>
        </>
    )
}