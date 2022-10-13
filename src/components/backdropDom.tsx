import ReactDOM from 'react-dom/client'
const backdropDOM = document.getElementById('backdrop-root')

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div
      style={{
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: 'rgba(0,0,0,.5)'
      }}
    >
      {props.children}
    </div>,
    backdropDOM
  )
}
export default Backdrop
