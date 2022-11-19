export const startCaseWords = (words: string) => {
  if (words)
    return words
      .split(' ')
      .map((word: string) => `${word[0]?.toUpperCase()}${word.substring(1)}`)
      .join(' ')
}
