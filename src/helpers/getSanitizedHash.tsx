const getSanitizedHash = (title: string) => {
    return title
      ? title
          .toLowerCase()
          .replace(/[^\w\s\-\u00E4\u00F6\u00FC\u00C4\u00D6\u00DC\u00df]/g, '')
          .replace(/ /g, '-')
      : '';
  };
  
  export default getSanitizedHash;