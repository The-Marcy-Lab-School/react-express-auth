export default function Modal({ children, show, toggleShow }) {
  return (
    <div onClick={toggleShow} id="follows-modal" className='modal flex-container column centered' style={{ display: show ? 'flex' : 'none' }}>
      <div className="modal-content ">
        {children}
      </div>
    </div>
  )
}