import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img 
        className="singlePostImg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE3RDP-GU3dAeTds4lH-5YPvC9POqzAhf7GA&usqp=CAU" 
        alt="" 
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i class="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i class="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Safak</b> 
            </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid assumenda quibusdam corrupti aspernatur nisi, voluptate sequi impedit incidunt cupiditate similique eos accusantium reprehenderit quasi quaerat eius consequuntur fugit, est rerum.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid assumenda quibusdam corrupti aspernatur nisi, voluptate sequi impedit incidunt cupiditate similique eos accusantium reprehenderit quasi quaerat eius consequuntur fugit, est rerum.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid assumenda quibusdam corrupti aspernatur nisi, voluptate sequi impedit incidunt cupiditate similique eos accusantium reprehenderit quasi quaerat eius consequuntur fugit, est rerum.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid assumenda quibusdam corrupti aspernatur nisi, voluptate sequi impedit incidunt cupiditate similique eos accusantium reprehenderit quasi quaerat eius consequuntur fugit, est rerum.
           
        </p>
      </div>
    </div>
  )
}
