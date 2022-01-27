import {createContext, useState, useEffect} from 'react';

const CommentContext = createContext(null);

type totalComment = {
  name: string;
  question: string;
  category: string;
}[];


function CommentProvider({children}: any) {
  const [comment, setComment] = useState<totalComment>([]);
  const [category, setCategory] = useState<string>('');
  const [totalCmt, setTotalCmt] = useState<totalComment>([]);

  useEffect(() => {
    let temp = [...totalCmt];
    const final = temp.filter((cmt) => cmt.category === category)
    setComment(final)
  },[category])

  return (
    <CommentContext.Provider value={{comment, setComment, totalCmt, setTotalCmt, category, setCategory}}>
      {children}
    </CommentContext.Provider>
  );
}

export {CommentContext, CommentProvider};
