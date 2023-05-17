import "./write.css"

export default function Write() {
  return (
    <div className="write">
      <img 
      className="writeImg"
      src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
      alt=""
      />
      <from className="writeFrom">
        <div className="writeFromGroup">
          <label htmlFor="fileInput">
          <i class="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{display:"none"}}/>
          <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
        </div>
        <div className="writeFromGroup">
          <textarea 
          placeholder="Tell your story... " 
          type="text" 
          className="writeInput writeText">
          </textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </from>
    </div>
  )
}
