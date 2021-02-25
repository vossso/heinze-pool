const useWindowLocation = () => {
  const windowLocation =
    typeof window !== `undefined` && window.location && window.location;

  return windowLocation;
};

export default useWindowLocation;
