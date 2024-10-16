import './DividerWithText.css';

const DividerWithText = ({ text }) => {
    return (
        <div className="text-center">
            <hr className="hr-text" data-content={text} />
        </div>
    )
}

export default DividerWithText;