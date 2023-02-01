export function extractEmail (code:string) {

  const searcher = `"comments":`
  const indexOf = code.indexOf(searcher)
  const commentCleaned = code.slice(indexOf + searcher.length)
  const endSearcher = `maxResults`
  const indexOfEnd = commentCleaned.indexOf(endSearcher)
  const commentsFormattedFinal = commentCleaned.slice(0, ((indexOfEnd - 74) - commentCleaned.length));
  const data = JSON.parse(commentsFormattedFinal);
  var returnEmail = data.map((object) => (object.author.emailAddress));

  returnEmail = returnEmail.filter(element => {
    return element !== undefined;
  });

  return returnEmail.toString(); }


export function extractCommentor (code:string) {
    var commentorString = []
    const searcher = `"comments":`
    const indexOf = code.indexOf(searcher)
    const commentCleaned = code.slice(indexOf + searcher.length)
    const endSearcher = `maxResults`
    const indexOfEnd = commentCleaned.indexOf(endSearcher)
    const commentsFormattedFinal = commentCleaned.slice(0, ((indexOfEnd - 74) - commentCleaned.length));
    const data = JSON.parse(commentsFormattedFinal);
    var returnName = data.map((object) => (object.author.displayName));
      for (let i in returnName) {
          if(returnName[i] != `Automation for Jira`) {
              var commentorName = returnName[i]
          }
          commentorString.push(commentorName)
      }
      
      commentorString = commentorString.filter(element => {
          return element !== undefined;
        })
        
      return commentorString.toString()
  }

export function extractComment (code:string) {

    var commentsString = "";
    var firstLevelString = "";
    const searcher = `"comments":`
    const indexOf = code.indexOf(searcher)
    const commentCleaned = code.slice(indexOf + searcher.length)
    const endSearcher = `maxResults`
    const indexOfEnd = commentCleaned.indexOf(endSearcher)
    const commentsFormattedFinal = commentCleaned.slice(0, ((indexOfEnd - 74) - commentCleaned.length));
    const commentsFormattedFinalClean = commentsFormattedFinal.replace(/\s\s+/g, " ");
    const commentsFormattedFinalCleanAgain = commentsFormattedFinalClean.replace(/\\!+/g, " ");
    const commentsFormattedFinalCleanAgain2 = commentsFormattedFinalClean.replace(/\\@+/g, " ");
    const data = JSON.parse(commentsFormattedFinalCleanAgain2)
      
    if(data.map((object) => (object.body.content))[0] != null){
        var firstLevel = data.map((object) => (object.body.content))

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

            if (!individualArrayText.toString().includes(`has been assigned to this ticket.`)) {
              individualArrayText = individualArrayText
              var individualArrayFinal = individualArrayText.join(` `);
              individualArrayFinal = `"`+ individualArrayFinal + `",`
              commentsString = commentsString + individualArrayFinal;
              }
        }
      }
    
      commentsString = commentsString;
    
      return commentsString = commentsString.slice(0,commentsString.length-1);

      }
      
      else var firstLevel = data.map((object) => (object.body))

      firstLevelString = firstLevel.toString()
      
      return firstLevelString;
    }
