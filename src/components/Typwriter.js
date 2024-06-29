// import React, { useState, useEffect } from 'react';
// import { Typography } from '@material-ui/core';

// const Typewriter = ({ texts, typingSpeed = 100, delay = 4000 }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [displayText, setDisplayText] = useState('');
//   const [isTyping, setIsTyping] = useState(true);

//   useEffect(() => {
//     let intervalId;
//     let charIndex = 0;

//     const typeText = () => {
//       const currentText = texts[currentIndex];

//       if (isTyping && charIndex <= currentText.length) {
//         setDisplayText(currentText.substring(0, charIndex));
//         charIndex++;
//       } else if (isTyping && charIndex > currentText.length) {
//         setIsTyping(false);
//         setTimeout(() => {
//           setIsTyping(false);
//           charIndex = currentText.length;
//         }, delay);
//       } else if (!isTyping && charIndex >= 0) {
//         setDisplayText(currentText.substring(0, charIndex));
//         charIndex--;
//       } else {
//         setIsTyping(true);
//         charIndex = 0;
//         setCurrentIndex((currentIndex + 1) % texts.length);
//         setTimeout(() => {
//           setDisplayText('');
//         }, delay);
//       }
//     };

//     intervalId = setInterval(typeText, typingSpeed);

//     return () => clearInterval(intervalId);
//   }, [currentIndex, texts, typingSpeed, delay, isTyping]);

//   return (
//     <Typography variant="inherit" component="span">
//       {displayText}
//     </Typography>
//   );
// };

// export default Typewriter;






















import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';

const Typewriter = ({ texts, typingSpeed = 500, delay = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let intervalId;
    let charIndex = 0;

    const typeText = () => {
      const currentText = texts[currentIndex];

      if (isTyping && charIndex <= currentText.length) {
        setDisplayText(currentText.substring(0, charIndex));
        charIndex++;
      } else if (isTyping && charIndex > currentText.length) {
        setIsTyping(false);
        setTimeout(() => {
          setIsTyping(false);
          charIndex = currentText.length;
        }, delay);
      } else if (!isTyping && charIndex >= 0) {
        setDisplayText(currentText.substring(0, charIndex));
        charIndex--;
      } else {
        setIsTyping(true);
        charIndex = 0;
        setCurrentIndex((currentIndex + 1) % texts.length);
        setTimeout(() => {
          setDisplayText('');
        }, delay);
      }
    };

    intervalId = setInterval(typeText, typingSpeed);

    return () => clearInterval(intervalId);
  }, [currentIndex, texts, typingSpeed, delay, isTyping]);

  return (
    <Typography variant="inherit" component="span" style={{ color :'#385af3'}}>
      {displayText}
    </Typography>
  );
};

export default Typewriter;
