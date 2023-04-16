import './index.css';

const CustomButton = ({ children, ...res }) => {
  return (
    <button type="button" {...res}>
      {children}
    </button>
  )
}

export default CustomButton
