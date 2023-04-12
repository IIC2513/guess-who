import Card from './Card'
import './Board.css'

export default function Board() {
  const cards =[
    { id: 1, imgSrc: "https://th.bing.com/th/id/OIP.yUtv47nJhpmN4HSj7DchrwHaHa?pid=ImgDet&rs=1"},
    { id: 2, imgSrc: "https://th.bing.com/th/id/OIP.Y3kTs0IAYGmehcCpCKN34AHaHa?pid=ImgDet&rs=1"},
    { id: 3, imgSrc: "https://th.bing.com/th/id/R.4e359380b795e668efa745c0e318b4eb?rik=Mjc1i6rijSYjRg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-Bt9M4q704r8%2fUFJQCSKV_BI%2fAAAAAAAABYA%2fZauEWfh9TRE%2fs1600%2fbob-esponja.jpg&ehk=PK2frbHJpEIQRdYZLDe0lcM4iXnnD3GhAhQmNpgPZns%3d&risl=&pid=ImgRaw&r=0"}
  ];

  return (
    <div className="board">
      <div className="board-row">
        {cards.slice(0, 2).map(card=> (
          <Card key={card.id} imgSrc={card.imgSrc}/>
        ))}
      </div>
      <div className="board-row">
        <Card key={cards[2].id} imgSrc={cards[2].imgSrc}/>
        <Card key={cards[2].id} imgSrc={cards[2].imgSrc}/>
      </div>
    </div>
  )
}
