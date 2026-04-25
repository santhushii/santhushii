import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000,
  className = ''
}) => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [delta, setDelta] = useState(typingSpeed);

  useEffect(() => {
    const tick = () => {
      let i = loopIndex % texts.length;
      let fullText = texts[i];
      let updatedText = isDeleting
        ? fullText.substring(0, currentText.length - 1)
        : fullText.substring(0, currentText.length + 1);

      setCurrentText(updatedText);

      if (isDeleting) {
        setDelta(deletingSpeed);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(pauseTime);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopIndex(loopIndex + 1);
        setDelta(typingSpeed);
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [currentText, delta, isDeleting, loopIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse ml-1 border-r-2 border-purple-500">&nbsp;</span>
    </span>
  );
};

export default TypingEffect;
