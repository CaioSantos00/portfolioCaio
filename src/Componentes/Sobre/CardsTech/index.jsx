export default function CardsTech({svgTech, nameTech}) {
    return (
        <>
        <div className="cardsTech">
          <div className="nameTech">{nameTech}</div>
          <div className='svgTech'>{svgTech}</div>
        </div>
        </>
    );
}
