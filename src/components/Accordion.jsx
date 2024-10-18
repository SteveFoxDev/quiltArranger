import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

const Accordion = ({ text, content }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleClick = () => {
    setIsExpanded((isExpanded) => !isExpanded);
  };

  const renderedIcon = (
    <span className='fs-2'>
      {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
    </span>
  );

  return (
    <div>
      <div
        className='container border border-secondary text-white rounded-top bg-dark d-flex justify-content-between cursor-pointer align-items-center'
        onClick={handleClick}
      >
        <p className='mb-0'>{text}</p>
        {renderedIcon}
      </div>
      {isExpanded && content}
    </div>
  );
};

export default Accordion;
