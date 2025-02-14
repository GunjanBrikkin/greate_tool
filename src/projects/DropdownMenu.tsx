import { useState } from "react";

const DropDown = () => {
  const [value, setValue] = useState(false);

  const checkTheValue = () => {
    setValue((fetchTheValue) => !fetchTheValue);
  };

  return (
    <>
      <button onClick={checkTheValue}>Drop Down</button>
      {value && (
        <ul>
          <li>😁 this</li>
          <li>😜 is</li>
          <li>😎 valentaine day </li>
        </ul>
      )}
      <br />
    </>
  );
};

export default DropDown;
// following is an optional way to do it above things

// function DropdownMenu() {
//     const [isOpen, setIsOpen] = React.useState(false);
//     const handleClick = () => {
//       setIsOpen((currentIsOpen) => !currentIsOpen);
//     };

//     return (
//       <div>
//         <button onClick={handleClick}>Actions</button>
//         {isOpen ? (
//           <ul>
//             <li>Edit</li>
//             <li>Remove</li>
//             <li>Archive</li>
//           </ul>
//         ) : null}
//       </div>
//     );
//   }

//   ReactDOM.createRoot(document.getElementById('root')).render(<DropdownMenu />);
