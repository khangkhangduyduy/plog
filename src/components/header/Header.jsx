import "./header.css"

export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className="headerTitleSm">Thỏ 7 Màu</span>
        <span className="headerTitLg">Blog</span>
      </div>
      <img className="headerImg" 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtOj8MWIYXNKFXG1UrOn34nhGgX_cor-ZFHw&usqp=CAU"
      alt="" />
    </div>
  )
}
