function Card({classStyle, content}) {
  return (
    <div className={`p-2 rounded-xl ${classStyle}`} >
      <h1 className="text-2xl text-center mb-5">{content.title}</h1>

      <p>
      {content.content}
      </p>
    </div>
  )
}

export default Card
