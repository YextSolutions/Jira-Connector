
export function extractEmail (code:string) {
  const searcher = `"comments":`
  const indexOf = code.indexOf(searcher)
  const commentCleaned = code.slice(indexOf + searcher.length)
  const endSearcher = `maxResults`
  const indexOfEnd = commentCleaned.indexOf(endSearcher)
  const commentsFormattedFinal = commentCleaned.slice(0, ((indexOfEnd - 74) - commentCleaned.length));
  const data = JSON.parse(commentsFormattedFinal);
  var returnEmail = data.map((object) => (object.author.emailAddress));
  return returnEmail.toString()
}

export function extractCommentor (code:string) {
  const searcher = `"comments":`
  const indexOf = code.indexOf(searcher)
  const commentCleaned = code.slice(indexOf + searcher.length)
  const endSearcher = `maxResults`
  const indexOfEnd = commentCleaned.indexOf(endSearcher)
  const commentsFormattedFinal = commentCleaned.slice(0, ((indexOfEnd - 74) - commentCleaned.length));
  const data = JSON.parse(commentsFormattedFinal);
  var returnName = data.map((object) => (object.author.displayName));
  return returnName.toString()
}

export function extractComment (code:string) {
    const searcher = `"comments":`
    const indexOf = code.indexOf(searcher)
    const commentCleaned = code.slice(indexOf + searcher.length)
    const endSearcher = `maxResults`
    const indexOfEnd = commentCleaned.indexOf(endSearcher)
    const commentsFormattedFinal = commentCleaned.slice(0, ((indexOfEnd - 74) - commentCleaned.length));
    const data = JSON.parse(commentsFormattedFinal);
    var commentsString = "";
    var firstLevel = data.map((object) => (object.body.content));
  
    const flatten = (arr) => {
      const result = [];
      arr.forEach((item) => {
        if (Array.isArray(item)) {
          result.push(...flatten(item));
        } else {
          result.push(item);
        }
      });
      return result;
    };
  
    for (let i in firstLevel) {
      if(firstLevel[i] != null) {
          var individualArray = firstLevel[i].map((object) => (object.content));
          var individualArrayFlat = flatten(individualArray);
          individualArrayFlat = individualArrayFlat.filter(element => {
            return element !== undefined;
          })
          var individualArrayText = individualArrayFlat.map((object) => (object.text));
          var individualArrayFinal = individualArrayText.join(` `);
          individualArrayFinal = `"`+ individualArrayFinal + `",`
          commentsString = commentsString + individualArrayFinal;
      }
    }
  
    commentsString = commentsString;
  
    return commentsString = commentsString.slice(0,commentsString.length-1);
  }
