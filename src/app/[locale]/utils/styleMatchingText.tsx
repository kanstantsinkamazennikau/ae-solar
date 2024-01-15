export const styleMatchingText = (
  text: string,
  textToMatch: string[],
  nonMatchedStyle: string,
  matchedStyle: string
) => {
  const matchRegex = RegExp(textToMatch.join("|"), "ig");
  const matches = [...text.matchAll(matchRegex)];

  return text.split(matchRegex).map((nonBoldText, index) => (
    <span key={nonBoldText} className={nonMatchedStyle}>
      {nonBoldText}
      {<span className={matchedStyle}>{matches[index]}</span>}
    </span>
  ));
};
