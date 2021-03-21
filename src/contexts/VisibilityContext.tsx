import React, { createContext, useState } from 'react';

export type TVisibleItem =
  | 'cookieNotice'
  | 'contactModal'
  | 'cookieLayer'
  | 'maxnetLogin';

const initialValues = {
  visibleItems: [],
  showItem: null,
  hideItem: null,
  redirectLink: null,
  setRedirectLink: null,
};

const VisibilityContext = createContext(initialValues);

export const VisibilityContextProvider = ({ children }) => {
  const [visibleItems, setVisibleItems] = useState<string[]>([]);
  const [redirectLink, setRedirectLink] = useState<string>(null);
  const showItem = (item: TVisibleItem) => {
    if (visibleItems.includes(item)) {
      return;
    } else {
      setVisibleItems([...visibleItems, item]);
    }
  };

  const hideItem = (item: TVisibleItem) => {
    if (!visibleItems.includes(item)) {
      return;
    } else {
      setVisibleItems([...visibleItems.filter(i => i !== item)]);
    }
  };

  return (
    <VisibilityContext.Provider
      value={{
        visibleItems,
        showItem,
        hideItem,
        redirectLink,
        setRedirectLink,
      }}
    >
      {children}
    </VisibilityContext.Provider>
  );
};

export default VisibilityContext;
